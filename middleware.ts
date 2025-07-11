import { NextRequest, NextResponse } from "next/server";
import { verifyTokenEdge } from "@/lib/auth-middleware";

// Define protected routes and their required roles
const protectedRoutes = {
  "/quick-test": ["EMPLOYEE", "ADMIN"],
  "/tests": ["TESTER", "ADMIN", "EMPLOYEE"],
  "/employees": ["ADMIN"],
  "/enter-results": ["TESTER", "ADMIN", "EMPLOYEE"],
  "/test-form": ["ADMIN"],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow public routes (home, auth pages, etc.)
  const publicRoutes = ["/", "/auth/login", "/auth/register"];
  if (publicRoutes.includes(pathname) || pathname.startsWith("/auth/")) {
    return NextResponse.next();
  }
  
  // Check if the current path is a protected route
  const matchedRoute = Object.keys(protectedRoutes).find(route => 
    pathname.startsWith(route)
  );
  
  if (matchedRoute) {
    const requiredRoles = protectedRoutes[matchedRoute as keyof typeof protectedRoutes];
    const token = request.cookies.get("auth-token")?.value;
    
    console.log("Middleware - Path:", pathname);
    console.log("Middleware - Token exists:", !!token);
    
    if (!token) {
      console.log("Middleware - No token, redirecting to home");
      return NextResponse.redirect(new URL("/", request.url));
    }
    
    const user = await verifyTokenEdge(token);
    console.log("Middleware - User:", user);
    
    if (!user) {
      console.log("Middleware - Invalid token, redirecting to home");
      return NextResponse.redirect(new URL("/", request.url));
    }
    
    console.log("Middleware - User role:", user.role);
    console.log("Middleware - Required roles:", requiredRoles);
    
    if (!requiredRoles.includes(user.role)) {
      console.log("Middleware - Insufficient permissions, redirecting to home");
      return NextResponse.redirect(new URL("/", request.url));
    }
    
    console.log("Middleware - Access granted");
  }
  
  // Allow access to other routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
