import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import MediaAsset from '@/lib/models/MediaAsset';
import { unlink } from 'fs/promises';
import path from 'path';

interface RouteParams {
  params: { id: string };
}

export async function DELETE(_req: NextRequest, { params }: RouteParams) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const asset = await MediaAsset.findByIdAndDelete(params.id);
  if (!asset) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  // Delete file from disk
  try {
    const filePath = path.join(process.cwd(), 'public', asset.url);
    await unlink(filePath);
  } catch {
    // File may already be deleted, continue
  }

  return NextResponse.json({ ok: true });
}
