import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import InfrastructureContent from '@/lib/models/InfrastructureContent';

export const dynamic = 'force-dynamic';

export async function GET() {
  await connectDB();
  const sections = await InfrastructureContent.find().sort({ order: 1 }).lean();
  return NextResponse.json({ sections });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const body = await req.json();

  // Handle bulk reorder
  if (Array.isArray(body.reorder)) {
    await Promise.all(
      body.reorder.map(({ id, order }: { id: string; order: number }) =>
        InfrastructureContent.findByIdAndUpdate(id, { order })
      )
    );
    return NextResponse.json({ ok: true });
  }

  // Handle upsert by section key
  const section = await InfrastructureContent.findOneAndUpdate(
    { section: body.section },
    body,
    { upsert: true, new: true }
  );
  return NextResponse.json({ section }, { status: 201 });
}
