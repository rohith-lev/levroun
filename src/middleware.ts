import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    // Redirect /admin to /admin/dashboard
    if (pathname === '/admin') {
      return NextResponse.redirect(new URL('/admin/dashboard', req.url));
    }

    // If authenticated user hits /admin/login, redirect to dashboard
    if (pathname === '/admin/login' && token) {
      return NextResponse.redirect(new URL('/admin/dashboard', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized({ token, req }) {
        const { pathname } = req.nextUrl;
        // Allow login page without auth
        if (pathname === '/admin/login') return true;
        // All other /admin routes require auth
        if (pathname.startsWith('/admin')) return !!token;
        // All /api/admin routes require auth
        if (pathname.startsWith('/api/admin')) return !!token;
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    '/admin',
    '/admin/dashboard/:path*',
    '/admin/contacts/:path*',
    '/admin/analytics/:path*',
    '/admin/popups/:path*',
    '/admin/infrastructure/:path*',
    '/admin/media/:path*',
    '/api/admin/:path*',
  ],
};
