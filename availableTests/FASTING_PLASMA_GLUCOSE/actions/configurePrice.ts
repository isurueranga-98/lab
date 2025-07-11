"use server";
import prismaClient from "@/lib/utils/prismaClient.util";

export const configurePrice = async (price: number | null) => {
  const test = await prismaClient.$runCommandRaw({
    update: "AvailableTest",
    updates: [
      {
        q: {
          name: "FASTING PLASMA GLUCOSE",
        },
        u: {
          $set: {
            price,
          },
        },
      },
    ],
  });

  return test;
};
