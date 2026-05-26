import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Testimonial from '@/lib/models/Testimonial';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) return new NextResponse('Unauthorized', { status: 401 });

    await connectDB();
    const testimonials = await Testimonial.find().sort({ order: 1 });
    return NextResponse.json(testimonials);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) return new NextResponse('Unauthorized', { status: 401 });

    await connectDB();
    const body = await req.json();
    
    // Auto-calculate order if not provided
    if (typeof body.order !== 'number') {
      const lastTestimonial = await Testimonial.findOne().sort({ order: -1 });
      body.order = lastTestimonial ? lastTestimonial.order + 1 : 0;
    }

    const testimonial = await Testimonial.create(body);
    return NextResponse.json(testimonial);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
