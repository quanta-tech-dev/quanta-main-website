import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for login page to avoid redirect loop
  if (pathname === '/dashboard/login') {
    return NextResponse.next();
  }
  
  // Check if the request is for the admin dashboard (but not login page)
  if (pathname.startsWith('/dashboard')) {
    const adminAuth = request.cookies.get('admin-auth');
    
    // If no auth cookie, redirect to login
    if (!adminAuth || adminAuth.value !== 'authenticated') {
      const loginUrl = new URL('/dashboard/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};