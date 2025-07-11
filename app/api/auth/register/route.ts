import { NextRequest, NextResponse } from "next/server";
import { registerSchema } from "@/lib/schema/register.schema";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validationResult = registerSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: "Validation failed", 
          details: validationResult.error.errors 
        },
        { status: 400 }
      );
    }

    const { username, userID, password } = validationResult.data;

    // Check if user already exists (you would need to implement database checks)
    // For now, we'll just simulate the registration process
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // Here you would save the user to your database
    // Example with Prisma:
    // const user = await prisma.user.create({
    //   data: {
    //     username,
    //     userID,
    //     password: hashedPassword,
    //   },
    // });

    console.log("New user registration:", {
      username,
      userID,
      password: "[REDACTED]",
      hashedPassword: hashedPassword.substring(0, 20) + "..."
    });

    // Return success response (without the password)
    return NextResponse.json(
      {
        message: "User registered successfully",
        user: {
          username,
          userID,
        },
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
