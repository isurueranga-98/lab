import { z } from "zod";

export const PatientInformationSchema = z.object({
  title: z.enum(["MR", "MS", "MRS", "MISS"]),
  firstName: z.string().min(1, { message: "First name is required" }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: "Last name is required" }),
  age: z.object({
    years: z.string()
      .min(1, { message: "Age in years is required" })
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "Please enter a valid age in years"
      }),
    months: z.string().optional(),
    days: z.string().optional(),
  }),
  gender: z.enum(["MALE", "FEMALE", "OTHER"], {
    message: "Gender is required",
  }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  email: z.string().optional(),
  address: z.object({
    street: z.string().min(1, { message: "Street address is required" }),
    city: z.string().min(1, { message: "City is required" }),
    zip: z.string().optional(),
  }),
  referredBy: z.string().min(1, { message: "Referred by is required" }),
});
