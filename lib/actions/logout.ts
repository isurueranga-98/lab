"use server";

import { cookies } from "next/headers";

export async function logoutUser(): Promise<{ success: boolean; message: string }> {
  try {
    const cookieStore = cookies();
    
    // Remove the auth token cookie
    cookieStore.delete("auth-token");
    
    return {
      success: true,
      message: "Logged out successfully",
    };
  } catch (error) {
    console.error("Logout error:", error);
    
    return {
      success: false,
      message: "An error occurred during logout",
    };
  }
}
