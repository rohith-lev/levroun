import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Visitor from '@/lib/models/Visitor';

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();

  const { searchParams } = new URL(req.url);
  const days = parseInt(searchParams.get('days') ?? '30');
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  const [daily, topPages, deviceStats, totalVisitors, uniqueVisitors] = await Promise.all([
    Visitor.aggregate([
      { $match: { visitedAt: { $gte: since } } },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$visitedAt' } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]),
    Visitor.aggregate([
      { $match: { visitedAt: { $gte: since } } },
      { $group: { _id: '$page', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]),
    Visitor.aggregate([
      { $match: { visitedAt: { $gte: since } } },
      { $group: { _id: '$deviceType', count: { $sum: 1 } } },
    ]),
    Visitor.countDocuments({ visitedAt: { $gte: since } }),
    Visitor.distinct('sessionId', { visitedAt: { $gte: since } }).then((ids) => ids.length),
  ]);

  return NextResponse.json({ daily, topPages, deviceStats, totalVisitors, uniqueVisitors });
}
