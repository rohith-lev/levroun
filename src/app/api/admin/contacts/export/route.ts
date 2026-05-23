import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import Contact from '@/lib/models/Contact';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await connectDB();
  const contacts = await Contact.find().sort({ submittedAt: -1 }).lean();

  const csv = [
    ['Name', 'Email', 'Phone', 'Message', 'Status', 'Submitted At'].join(','),
    ...contacts.map((c) =>
      [
        `"${c.name}"`,
        `"${c.email}"`,
        `"${c.phone ?? ''}"`,
        `"${c.message.replace(/"/g, '""')}"`,
        c.status,
        new Date(c.submittedAt).toISOString(),
      ].join(',')
    ),
  ].join('\n');

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': `attachment; filename="contacts-${Date.now()}.csv"`,
    },
  });
}
