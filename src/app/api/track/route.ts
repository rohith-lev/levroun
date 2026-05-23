import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Visitor from '@/lib/models/Visitor';

function getDeviceType(ua: string): 'desktop' | 'tablet' | 'mobile' | 'unknown' {
  if (!ua) return 'unknown';
  if (/tablet|ipad|playbook|silk/i.test(ua)) return 'tablet';
  if (/mobile|android|iphone|ipod|blackberry|opera mini|iemobile/i.test(ua))
    return 'mobile';
  return 'desktop';
}

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string, limit = 30, windowMs = 60000): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.reset) {
    rateLimitMap.set(ip, { count: 1, reset: now + windowMs });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? '127.0.0.1';

  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  try {
    const body = await req.json();
    const { sessionId, page } = body;

    if (!sessionId || !page) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const ua = req.headers.get('user-agent') ?? '';
    const referrer = req.headers.get('referer') ?? '';

    await connectDB();
    await Visitor.create({
      sessionId,
      page,
      deviceType: getDeviceType(ua),
      referrer,
      ip,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[Track API]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
