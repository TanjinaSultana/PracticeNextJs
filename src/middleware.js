import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Example: get token from cookies (assuming you store auth token in cookies)
  const token = request.cookies.get('token')?.value;

  // Define protected routes
  const protectedRoutes = ['/dashboard', '/profile', '/settings'];

  // If user tries to access a protected route without a token
  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
    // Redirect to login page
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Allow the request to continue
  return NextResponse.next();
}

// Optional: Run middleware only on specific routes
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/settings/:path*'],
};
