import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/mongodb';
import Admin from '@/lib/models/Admin';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const email = credentials.email.trim().toLowerCase().slice(0, 254);
        const password = credentials.password.trim().slice(0, 128);

        // Fallback default admin credentials check
        const defaultEmail = (process.env.ADMIN_EMAIL || 'admin@inzovate.com').toLowerCase();
        const defaultPassword = process.env.ADMIN_PASSWORD || 'Admin@123';

        if (
          (email === defaultEmail || email === 'admin@inzovate-technologies.com') &&
          password === defaultPassword
        ) {
          return {
            id: 'admin-1',
            email: email,
            name: 'Inzovate Admin',
            role: 'admin',
          };
        }

        try {
          await connectDB();
          const admin = await Admin.findOne({ email }).select('+password');
          if (admin) {
            const isValid = await bcrypt.compare(password, admin.password);
            if (isValid) {
              return {
                id: admin._id.toString(),
                email: admin.email,
                name: admin.name,
                role: admin.role,
              };
            }
          }
        } catch (err) {
          console.error('Auth MongoDB query error:', err);
        }

        return null;
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as { role?: string }).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { id?: string; role?: string }).id = token.id as string;
        (session.user as { id?: string; role?: string }).role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
