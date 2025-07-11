import { SignJWT, jwtVerify } from "jose";

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

// Convert secret to Uint8Array for jose
const secret = new TextEncoder().encode(JWT_SECRET);

// Generate JWT token using jose (Edge Runtime compatible)
export async function generateTokenEdge(payload: Omit<JWTPayload, "iat" | "exp">): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(JWT_EXPIRES_IN)
    .sign(secret);
}

// Verify JWT token using jose (Edge Runtime compatible)
export async function verifyTokenEdge(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    
    // Extract our custom claims from the JWT payload
    const { userId, username, userID, role, iat, exp } = payload;
    
    if (typeof userId !== 'string' || typeof username !== 'string' || 
        typeof userID !== 'string' || typeof role !== 'string') {
      console.error("Invalid JWT payload structure");
      return null;
    }
    
    return {
      userId,
      username,
      userID,
      role,
      iat: typeof iat === 'number' ? iat : undefined,
      exp: typeof exp === 'number' ? exp : undefined,
    };
  } catch (error) {
    console.error("JWT verification failed:", error);
    return null;
  }
}
