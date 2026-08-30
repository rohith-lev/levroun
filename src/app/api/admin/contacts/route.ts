import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';

// Rate limit map for contact submissions
const submitRateMap = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = submitRateMap.get(ip);
  if (!entry || now > entry.reset) {
    submitRateMap.set(ip, { count: 1, reset: now + 60000 });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

// GET - list contacts (admin only)
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search') ?? '';
    const status = searchParams.get('status') ?? '';
    const page = parseInt(searchParams.get('page') ?? '1');
    const limit = parseInt(searchParams.get('limit') ?? '20');

    const query: Record<string, unknown> = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } },
      ];
    }
    if (status === 'read' || status === 'unread') query.status = status;

    const [contacts, total] = await Promise.all([
      Contact.find(query)
        .sort({ submittedAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      Contact.countDocuments(query),
    ]);

    return NextResponse.json({ contacts, total, page, limit });
  } catch (err) {
    console.error('[Contact GET]', err);
    return NextResponse.json({ contacts: [], total: 0, page: 1, limit: 20 });
  }
}

// POST - public submit contact form
export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? '127.0.0.1';

  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    await connectDB();
    const contact = await Contact.create({ name, email, phone, message });

    return NextResponse.json({ ok: true, id: contact._id }, { status: 201 });
  } catch (err) {
    console.error('[Contact POST]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
