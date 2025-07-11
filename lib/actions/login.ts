"use server";

import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { loginSchema, type LoginFormData } from "@/lib/schema/login.schema";
import { generateToken } from "@/lib/auth-utils";
import { prisma } from "@/lib/prisma";

export type LoginResult = {
  success: boolean;
  message: string;
  user?: {
    id: string;
    username: string;
    userID: string;
    role: string;
  };
  token?: string;
  errors?: Record<string, string[]>;
};

export async function loginUser(data: LoginFormData): Promise<LoginResult> {
  try {
    // Validate the data
    const validationResult = loginSchema.safeParse(data);

    if (!validationResult.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validationResult.error.flatten().fieldErrors,
      };
    }

    const { userID, password } = validationResult.data;

    // Find user by userID
    const user = await prisma.user.findUnique({
      where: { userID },
      select: {
        id: true,
        username: true,
        userID: true,
        password: true,
        role: true,
      },
    });

    if (!user) {
      return {
        success: false,
        message: "Invalid credentials",
        errors: { userID: ["User ID not found"] },
      };
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return {
        success: false,
        message: "Invalid credentials",
        errors: { password: ["Incorrect password"] },
      };
    }

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      username: user.username,
      userID: user.userID,
      role: user.role,
    });

    // Set JWT token in cookies
    const cookieStore = cookies();
    cookieStore.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    });

    // Return success with user data and token
    return {
      success: true,
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username,
        userID: user.userID,
        role: user.role,
      },
      token,
    };

  } catch (error) {
    console.error("Login error:", error);
    
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
