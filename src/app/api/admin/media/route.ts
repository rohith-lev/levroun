import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import MediaAsset from '@/lib/models/MediaAsset';

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'video/mp4'];
const MAX_SIZE = 50 * 1024 * 1024; // 50MB

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const assets = await MediaAsset.find().sort({ uploadedAt: -1 }).lean();
  return NextResponse.json({ assets });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    if (!ALLOWED_TYPES.includes(file.type))
      return NextResponse.json({ error: 'File type not allowed' }, { status: 400 });
    if (file.size > MAX_SIZE)
      return NextResponse.json({ error: 'File too large (max 50MB)' }, { status: 400 });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const ext = file.name.split('.').pop()?.toLowerCase() ?? 'bin';
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    await connectDB();
    
    // Create first to get the _id, then set the url
    const asset = new MediaAsset({
      filename,
      originalName: file.name,
      mimeType: file.type,
      size: file.size,
      data: buffer,
    });
    asset.url = `/api/media/${asset._id}`;
    await asset.save();

    return NextResponse.json({ asset }, { status: 201 });
  } catch (err) {
    console.error('[Media Upload]', err);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
