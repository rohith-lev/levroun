import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';

interface RouteParams {
  params: { id: string };
}

// PATCH - update status
export async function PATCH(req: NextRequest, { params }: RouteParams) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const body = await req.json();
  const contact = await Contact.findByIdAndUpdate(params.id, body, { new: true });
  if (!contact) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json({ contact });
}

// DELETE - remove contact
export async function DELETE(_req: NextRequest, { params }: RouteParams) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const contact = await Contact.findByIdAndDelete(params.id);
  if (!contact) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  return NextResponse.json({ ok: true });
}
