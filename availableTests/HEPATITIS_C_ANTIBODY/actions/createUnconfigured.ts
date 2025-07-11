"use server";
import { Prisma } from "@prisma/client";
import prismaClient from "@/lib/utils/prismaClient.util";

export const createUnconfigured = async (): Promise<Prisma.JsonObject> => {
  const test = await prismaClient.$runCommandRaw({
    insert: "AvailableTest",
    documents: [
      {
        name: "TROPONIN I (QUALITATIVE)",
        price: null,
        sampleType: "BLOOD",
        results: [
          {
            name: "Troponin I",
            result: null,
          },
        ],
      },
    ],
    bypassDocumentValidation: true,
  });

  return test;
};
