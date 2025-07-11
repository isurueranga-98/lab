import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production";
const JWT_EXPIRES_IN = "7d"; // Token expires in 7 days

export interface JWTPayload {
  userId: string;
  username: string;
  userID: string;
  role: string;
  iat?: number;
  exp?: number;
}

// Generate JWT token
export function generateToken(payload: Omit<JWTPayload, "iat" | "exp">): string {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
}

// Verify JWT token
export function verifyToken(token: string): JWTPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
    return decoded;
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
}

// Get token from cookies (server-side)
export function getTokenFromCookies(): string | null {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("auth-token");
    return token?.value || null;
  } catch (error) {
    console.error("Error getting token from cookies:", error);
    return null;
  }
}

// Validate current user from token
export function getCurrentUser(): JWTPayload | null {
  const token = getTokenFromCookies();
  if (!token) return null;
  
  return verifyToken(token);
}

// Check if user has specific role
export function hasRole(requiredRole: string): boolean {
  const user = getCurrentUser();
  return user?.role === requiredRole;
}

// Check if user has any of the specified roles
export function hasAnyRole(roles: string[]): boolean {
  const user = getCurrentUser();
  return user ? roles.includes(user.role) : false;
}
