import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Testimonial from '@/lib/models/Testimonial';

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) return new NextResponse('Unauthorized', { status: 401 });

    await connectDB();
    const body = await req.json();
    const testimonial = await Testimonial.findByIdAndUpdate(params.id, body, { new: true });
    
    if (!testimonial) return new NextResponse('Not Found', { status: 404 });
    return NextResponse.json(testimonial);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) return new NextResponse('Unauthorized', { status: 401 });

    await connectDB();
    const testimonial = await Testimonial.findByIdAndDelete(params.id);
    
    if (!testimonial) return new NextResponse('Not Found', { status: 404 });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
