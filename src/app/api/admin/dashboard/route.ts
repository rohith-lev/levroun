import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';
import Visitor from '@/lib/models/Visitor';
import PopupCampaign from '@/lib/models/PopupCampaign';
import InfrastructureContent from '@/lib/models/InfrastructureContent';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();

  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const last7Days = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const [
    totalVisitors,
    todayVisitors,
    uniqueVisitors,
    totalContacts,
    unreadContacts,
    activePopups,
    infraSections,
    recentContacts,
    // 7-day daily breakdown
    dailyVisitors,
    topPages,
    deviceStats,
  ] = await Promise.all([
    Visitor.countDocuments(),
    Visitor.countDocuments({ visitedAt: { $gte: todayStart } }),
    Visitor.distinct('sessionId').then((ids) => ids.length),
    Contact.countDocuments(),
    Contact.countDocuments({ status: 'unread' }),
    PopupCampaign.countDocuments({ isActive: true }),
    InfrastructureContent.countDocuments({ isVisible: true }),
    Contact.find().sort({ submittedAt: -1 }).limit(5).lean(),
    Visitor.aggregate([
      { $match: { visitedAt: { $gte: last7Days } } },
      {
        $group: {
          _id: {
            $dateToString: { format: '%Y-%m-%d', date: '$visitedAt' },
          },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]),
    Visitor.aggregate([
      { $group: { _id: '$page', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 },
    ]),
    Visitor.aggregate([
      { $group: { _id: '$deviceType', count: { $sum: 1 } } },
    ]),
  ]);

  return NextResponse.json({
    stats: {
      totalVisitors,
      todayVisitors,
      uniqueVisitors,
      totalContacts,
      unreadContacts,
      activePopups,
      infraSections,
    },
    charts: {
      dailyVisitors,
      topPages,
      deviceStats,
    },
    recentContacts,
  });
}
