import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username must be less than 50 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  userID: z
    .string()
    .min(3, "User ID must be at least 3 characters")
    .max(20, "User ID must be less than 20 characters")
    .regex(/^[a-zA-Z0-9]+$/, "User ID can only contain letters and numbers"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must be less than 100 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one lowercase letter, one uppercase letter, and one number"),
  role: z.enum(["ADMIN", "EMPLOYEE", "TESTER"], {
    required_error: "Please select a role",
  }),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
