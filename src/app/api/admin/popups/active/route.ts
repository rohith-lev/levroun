import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import PopupCampaign from '@/lib/models/PopupCampaign';

export const dynamic = 'force-dynamic';

// Public endpoint - no auth needed
export async function GET() {
  await connectDB();
  const now = new Date();

  const popup = await PopupCampaign.findOne({
    isActive: true,
    $or: [{ startDate: { $lte: now } }, { startDate: null }],
    $and: [
      {
        $or: [{ endDate: { $gte: now } }, { endDate: null }],
      },
    ],
  })
    .sort({ createdAt: -1 })
    .lean();

  return NextResponse.json({ popup: popup ?? null });
}
