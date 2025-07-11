"use server";
import prismaClient from "@/lib/utils/prismaClient.util";

export const readCurrentVersion = async () => {
  const test = await prismaClient.$runCommandRaw({
    find: "AvailableTest",
    filter: {
      name: "TROPONIN I (QUALITATIVE)",
    },
  });

  //@ts-ignore
  return test.cursor?.firstBatch[0];
};
