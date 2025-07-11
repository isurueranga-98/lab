"use server";
import { revalidatePath } from "next/cache";
import { ActionResponse } from "@/lib/utils/types";
import { actionErrorHandler } from "@/lib/utils/action-error-handler";
import prismaClient from "@/lib/utils/prismaClient.util";

export const createQuickTest = async (params: any) => {
  try {
    // validate the quick-test payload
    // const validatedQuickTest = EmployeeSchema.safeParse(quickTest);

    // if quick-test validation failed, return an error
    // if (!validatedQuickTest.success) {
    //   return { success: false, error: "schema validation failed" };
    // }

    // if quick-test validation success, create the user in the database
    // const newQuickTest = await createQuickTest(quickTest);

    // if quick-test creation failed, return an error
    // if (!newQuickTest) {
    //   return { success: false, error: "unexpected error" };
    // }

    const quickTest = await prismaClient.$runCommandRaw({
      insert: "QuickTest",
      documents: [params],
      bypassDocumentValidation: true,
    });

    // if quick-test creation success,

    // revalidate the cache
    revalidatePath("/tests");

    //return the quick-test
    //@ts-ignore
    return { success: true, data: quickTest.cursor?.firstBatch[0] };
  } catch (error) {
    return actionErrorHandler<[]>(error);
  }
};
