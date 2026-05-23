import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import MediaAsset from '@/lib/models/MediaAsset';
import mongoose from 'mongoose';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    // Check if valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return new NextResponse('Invalid ID', { status: 400 });
    }

    await connectDB();
    const asset = await MediaAsset.findById(id).lean();

    if (!asset || !asset.data) {
      return new NextResponse('Not found', { status: 404 });
    }

    // Return the binary data with the correct content type
    return new NextResponse(asset.data as unknown as BodyInit, {
      status: 200,
      headers: {
        'Content-Type': asset.mimeType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('[Media GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
