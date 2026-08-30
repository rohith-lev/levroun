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

  try {
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
      dailyVisitors,
      topPages,
      deviceStats,
    ] = await Promise.all([
      Visitor.countDocuments().catch(() => 0),
      Visitor.countDocuments({ visitedAt: { $gte: todayStart } }).catch(() => 0),
      Visitor.distinct('sessionId').then((ids) => ids.length).catch(() => 0),
      Contact.countDocuments().catch(() => 0),
      Contact.countDocuments({ status: 'unread' }).catch(() => 0),
      PopupCampaign.countDocuments({ isActive: true }).catch(() => 0),
      InfrastructureContent.countDocuments({ isVisible: true }).catch(() => 0),
      Contact.find().sort({ submittedAt: -1 }).limit(5).lean().catch(() => []),
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
      ]).catch(() => []),
      Visitor.aggregate([
        { $group: { _id: '$page', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 5 },
      ]).catch(() => []),
      Visitor.aggregate([
        { $group: { _id: '$deviceType', count: { $sum: 1 } } },
      ]).catch(() => []),
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
  } catch (err) {
    console.error('Error fetching admin dashboard stats:', err);
    return NextResponse.json({
      stats: {
        totalVisitors: 0,
        todayVisitors: 0,
        uniqueVisitors: 0,
        totalContacts: 0,
        unreadContacts: 0,
        activePopups: 0,
        infraSections: 0,
      },
      charts: {
        dailyVisitors: [],
        topPages: [],
        deviceStats: [],
      },
      recentContacts: [],
    });
  }
}
