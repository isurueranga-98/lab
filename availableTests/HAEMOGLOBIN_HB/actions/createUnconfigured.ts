"use server";
import { Prisma } from "@prisma/client";
import prismaClient from "@/lib/utils/prismaClient.util";

export const createUnconfigured = async (): Promise<Prisma.JsonObject> => {
  const test = await prismaClient.$runCommandRaw({
    insert: "AvailableTest",
    documents: [
      {
        name: "HAEMOGLOBIN",
        price: null,
        sampleType: "BLOOD",
        results: [
          {
            name: "Glucose - Fasting",
            result: null,
            flag: "",
            unit: "mg/dL",
            referenceRange: {
              low: null,
              high: null,
            },
          },
        ],
      },
    ],
    bypassDocumentValidation: true,
  });

  return test;
};
