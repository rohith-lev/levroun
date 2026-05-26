import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
    });

    return NextResponse.json({ success: true, data: contact }, { status: 201 });
  } catch (error: unknown) {
    console.error('Error creating contact:', error);
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
