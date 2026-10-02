import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const protectedPaths = ["/discover", "/matches", "/messages", "/recovery", "/profile", "/safety", "/admin"];
  const isProtected = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path));

  if (!isProtected) return NextResponse.next();

  // Supabase session enforcement will be enabled after server-side auth cookies
  // are wired. For now, protected routes remain accessible in demo mode.
  return NextResponse.next();
}

export const config = {
  matcher: ["/discover/:path*", "/matches/:path*", "/messages/:path*", "/recovery/:path*", "/profile/:path*", "/safety/:path*", "/admin/:path*"],
};
