"use server";
import { actionErrorHandler } from "@/lib/utils/action-error-handler";
import prismaClient from "@/lib/utils/prismaClient.util";
import { ActionResponse, QuickTest } from "@/lib/utils/types";

export const readQuickTests = async (): Promise<
  ActionResponse<QuickTest[]>
> => {
  try {
    const quickTests = await prismaClient.$runCommandRaw({
      find: "QuickTest",
    });

    //@ts-ignore
    const transformed = quickTests.cursor.firstBatch.map((quickTest) => {
      const id = quickTest._id.$oid.toString();

      delete quickTest._id;

      return {
        ...quickTest,
        id,
      };
    });

    //return the quickTests
    return { success: true, data: transformed };
  } catch (error) {
    return actionErrorHandler<QuickTest[]>(error);
  }
};
