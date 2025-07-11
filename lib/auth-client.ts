"use client";

import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

const TOKEN_NAME = "auth-token";
const LOCALSTORAGE_TOKEN_KEY = "jwt-token";

export interface ClientJWTPayload {
  userId: string;
  username: string;
  userID: string;
  role: string;
  iat?: number;
  exp?: number;
}

// Set JWT token in both cookies and localStorage (client-side)
export function setAuthToken(token: string): void {
  // Store in cookies
  Cookies.set(TOKEN_NAME, token, {
    expires: 7, // 7 days
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  
  // Store in localStorage
  if (typeof window !== "undefined") {
    localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, token);
  }
}

// Get JWT token from localStorage (client-side)
export function getAuthToken(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY) || Cookies.get(TOKEN_NAME) || null;
  }
  return Cookies.get(TOKEN_NAME) || null;
}

// Remove JWT token from both cookies and localStorage (client-side)
export function removeAuthToken(): void {
  Cookies.remove(TOKEN_NAME);
  if (typeof window !== "undefined") {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
  }
}

// Decode JWT token without verification (client-side)
export function decodeToken(token: string): ClientJWTPayload | null {
  try {
    const decoded = jwt.decode(token) as ClientJWTPayload;
    return decoded;
  } catch (error) {
    console.error("JWT decode failed:", error);
    return null;
  }
}

// Get current user from stored token (client-side)
export function getCurrentUserClient(): ClientJWTPayload | null {
  const token = getAuthToken();
  if (!token) return null;
  
  const decoded = decodeToken(token);
  if (!decoded) return null;
  
  // Check if token is expired
  if (decoded.exp && Date.now() >= decoded.exp * 1000) {
    removeAuthToken();
    return null;
  }
  
  return decoded;
}

// Check if user is authenticated (client-side)
export function isAuthenticated(): boolean {
  return getCurrentUserClient() !== null;
}

// Check if user has specific role (client-side)
export function hasRoleClient(requiredRole: string): boolean {
  const user = getCurrentUserClient();
  return user?.role === requiredRole;
}

// Check if user has any of the specified roles (client-side)
export function hasAnyRoleClient(roles: string[]): boolean {
  const user = getCurrentUserClient();
  return user ? roles.includes(user.role) : false;
}

// Sync token between localStorage and cookies
export function syncTokenStorage(): void {
  if (typeof window !== "undefined") {
    const localStorageToken = localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
    const cookieToken = Cookies.get(TOKEN_NAME);
    
    if (localStorageToken && !cookieToken) {
      // If token exists in localStorage but not in cookies, set cookie
      const decoded = decodeToken(localStorageToken);
      if (decoded && decoded.exp && Date.now() < decoded.exp * 1000) {
        Cookies.set(TOKEN_NAME, localStorageToken, {
          expires: 7,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        });
      } else {
        // Token is expired, remove it
        localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
      }
    } else if (cookieToken && !localStorageToken) {
      // If token exists in cookies but not in localStorage, set localStorage
      localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, cookieToken);
    }
  }
}
