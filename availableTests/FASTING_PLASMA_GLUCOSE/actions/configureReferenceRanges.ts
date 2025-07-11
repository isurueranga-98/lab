"use server";
import prismaClient from "@/lib/utils/prismaClient.util";

export const configureReferenceRanges = async (params: {
  field: "Glucose - Fasting";
  point: "low" | "high";
  value: number | null;
}) => {
  const test = await prismaClient.$runCommandRaw({
    update: "AvailableTest",
    updates: [
      {
        q: {
          name: "FASTING PLASMA GLUCOSE",
        },
        u: {
          $set: {
            ["results.$[elem].referenceRange." + params.point]: params.value,
          },
        },
        arrayFilters: [
          {
            "elem.name": params.field,
          },
        ],
      },
    ],
  });

  return test;
};
