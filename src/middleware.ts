import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';



// Validate redirect target is within our own domain only
function safeRedirect(path: string, baseUrl: string): URL {
  const url = new URL(path, baseUrl);
  // SSRF/XSS fix: only allow same-host redirects
  const base = new URL(baseUrl);
  if (url.hostname !== base.hostname && url.hostname !== 'localhost') {
    return new URL('/admin/dashboard', baseUrl);
  }
  return url;
}

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth.token;

    // Redirect /admin to /admin/dashboard
    if (pathname === '/admin') {
      return NextResponse.redirect(safeRedirect('/admin/dashboard', req.url));
    }

    // If authenticated user hits /admin/login, redirect to dashboard
    if (pathname === '/admin/login' && token) {
      return NextResponse.redirect(safeRedirect('/admin/dashboard', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized({ token, req }) {
        const { pathname } = req.nextUrl;
        if (pathname === '/admin/login') return true;
        if (pathname.startsWith('/admin')) return !!token;
        if (pathname.startsWith('/api/admin')) return !!token;
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    '/admin',
    '/admin/:path*',
    '/api/admin/:path*',
  ],
};
