import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import PopupCampaign from '@/lib/models/PopupCampaign';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const popups = await PopupCampaign.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json({ popups });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const body = await req.json();

  const popup = await PopupCampaign.create(body);
  return NextResponse.json({ popup }, { status: 201 });
}
