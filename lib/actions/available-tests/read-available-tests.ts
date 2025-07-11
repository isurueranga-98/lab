"use server";
import { actionErrorHandler } from "@/lib/utils/action-error-handler";
import prismaClient from "@/lib/utils/prismaClient.util";

export const readAvailableTests = async () => {
  try {
    const availableTests = await prismaClient.$runCommandRaw({
      find: "AvailableTest",
    });

    // @ts-ignore
    return { success: true, data: availableTests.cursor?.firstBatch };
  } catch (error) {
    return actionErrorHandler(error);
  }
};
