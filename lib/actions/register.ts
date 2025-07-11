"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { registerSchema, type RegisterFormData } from "@/lib/schema/register.schema";
import { prisma } from "@/lib/prisma";

export type RegisterResult = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function registerUser(formData: FormData): Promise<RegisterResult> {
  try {
    // Extract data from FormData
    const rawData = {
      username: formData.get("username") as string,
      userID: formData.get("userID") as string,
      password: formData.get("password") as string,
      role: formData.get("role") as string,
    };

    // Validate the data
    const validationResult = registerSchema.safeParse(rawData);

    if (!validationResult.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validationResult.error.flatten().fieldErrors,
      };
    }

    const { username, userID, password, role } = validationResult.data;

    // Check if username already exists
    const existingUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUsername) {
      return {
        success: false,
        message: "Username already exists",
        errors: { username: ["This username is already taken"] },
      };
    }

    // Check if userID already exists
    const existingUserID = await prisma.user.findUnique({
      where: { userID },
    });

    if (existingUserID) {
      return {
        success: false,
        message: "User ID already exists",
        errors: { userID: ["This user ID is already taken"] },
      };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create the user
    const user = await prisma.user.create({
      data: {
        username,
        userID,
        password: hashedPassword,
        role,
      },
      select: {
        id: true,
        username: true,
        userID: true,
        role: true,
        createdAt: true,
      },
    });

    console.log("User created successfully:", user);

    // Revalidate and redirect
    revalidatePath("/auth/login");
    
    return {
      success: true,
      message: "User registered successfully",
    };

  } catch (error) {
    console.error("Registration error:", error);
    
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}

// Alternative server action that accepts parsed data directly
export async function registerUserWithData(data: RegisterFormData): Promise<RegisterResult> {
  try {
    // Validate the data
    const validationResult = registerSchema.safeParse(data);

    if (!validationResult.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validationResult.error.flatten().fieldErrors,
      };
    }

    const { username, userID, password, role } = validationResult.data;

    // Check if username already exists
    const existingUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUsername) {
      return {
        success: false,
        message: "Username already exists",
        errors: { username: ["This username is already taken"] },
      };
    }

    // Check if userID already exists
    const existingUserID = await prisma.user.findUnique({
      where: { userID },
    });

    if (existingUserID) {
      return {
        success: false,
        message: "User ID already exists",
        errors: { userID: ["This user ID is already taken"] },
      };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create the user
    const user = await prisma.user.create({
      data: {
        username,
        userID,
        password: hashedPassword,
        role,
      },
      select: {
        id: true,
        username: true,
        userID: true,
        role: true,
        createdAt: true,
      },
    });

    console.log("User created successfully:", user);

    return {
      success: true,
      message: "User registered successfully",
    };

  } catch (error) {
    console.error("Registration error:", error);
    
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    };
  }
}
