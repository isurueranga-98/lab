import { z } from "zod";

export const EmployeeSchema = z.object({
  NIC: z.string({
    required_error: "NIC is required",
    invalid_type_error: "NIC must be a string",
  }),
  firstName: z
    .string({
      required_error: "First name is required",
      invalid_type_error: "First name must be a string",
    })
    .min(1, "First name is required"),
  lastName: z
    .string({
      required_error: "Last name is required",
      invalid_type_error: "Last name must be a string",
    })
    .min(1, "First name is required"),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email({
      message: "Invalid email address",
    }),
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  }),
  role: z.enum(["RECEPTIONIST", "LAB_TACHNICIAN", "MANAGER"], {
    required_error: "Role is required",
    invalid_type_error: "Role must be either USER or ADMIN",
  }),
});

export type EmployeeSchemaType = z.infer<typeof EmployeeSchema>;
export type Employee = EmployeeSchemaType & { id: string };
