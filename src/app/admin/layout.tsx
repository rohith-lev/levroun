import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import AdminSessionProvider from '@/components/admin/AdminSessionProvider';
import AdminShell from '@/components/admin/AdminShell';

export const metadata: Metadata = {
  title: 'Admin CMS | Winora Tech Academy',
  description: 'Winora Admin Panel',
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <AdminSessionProvider session={session}>
      <AdminShell>{children}</AdminShell>
    </AdminSessionProvider>
  );
}
