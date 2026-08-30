import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(str: string, maxLen: number): string {
  return String(str).trim().slice(0, maxLen).replace(/<[^>]*>/g, '');
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const name    = sanitize(body.name    ?? '', 100);
    const email   = sanitize(body.email   ?? '', 254);
    const phone   = sanitize(body.phone   ?? '', 30);
    let message   = sanitize(body.message ?? '', 2000);

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    if (!message) {
      message = 'Inquiry submitted via website form.';
    }

    const contact = await Contact.create({ name, email, phone, message });

    return NextResponse.json({ success: true, data: { id: contact._id } }, { status: 201 });
  } catch (error: unknown) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
