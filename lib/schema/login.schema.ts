import { z } from "zod";

export const loginSchema = z.object({
  userID: z
    .string()
    .min(1, "User ID is required")
    .max(20, "User ID must be less than 20 characters"),
  password: z
    .string()
    .min(1, "Password is required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;