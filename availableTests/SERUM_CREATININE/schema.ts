import { z } from "zod";

export const Schema = z.tuple([
  z
    .object({
      name: z.literal("SERUM SODIUM"),
      result: z.number().nullable(),
      flag: z.enum(["", "L", "H"]),
      unit: z.literal("mmol/L"),
      referenceRange: z.object({
        low: z.number().nullable(),
        hight: z.number().nullable(),
      }),
    })
    .superRefine(() => ({})),
  z.object({
    name: z.literal("SERUM POTASSIUM"),
    result: z.number().nullable(),
    flag: z.enum(["", "L", "H"]),
    unit: z.literal("mmol/L"),
    referenceRange: z.object({
      low: z.number().nullable(),
      hight: z.number().nullable(),
    }),
  }),
  z.object({
    name: z.literal("SERUM CHLORID"),
    result: z.number().nullable(),
    flag: z.enum(["", "L", "H"]),
    unit: z.literal("mmol/L"),
    referenceRange: z.object({
      low: z.number().nullable(),
      hight: z.number().nullable(),
    }),
  }),
]);
