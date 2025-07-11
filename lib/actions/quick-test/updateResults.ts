"use server";
import { ELECTROLYTES_SERUM_TYPE } from "@/availableTests/ELECTROLYTES_SERUM";
import { FASTING_PLASMA_GLUCOSE_TYPE } from "@/availableTests/FASTING_PLASMA_GLUCOSE";
import { actionErrorHandler } from "@/lib/utils/action-error-handler";
import prismaClient from "@/lib/utils/prismaClient.util";
import { ActionResponse, QuickTest, Test } from "@/lib/utils/types";

export const updateResults = async (
  quickTestId: string,
  test: Test,
  results:
    | ELECTROLYTES_SERUM_TYPE["results"]
    | FASTING_PLASMA_GLUCOSE_TYPE["results"],
): Promise<ActionResponse<QuickTest>> => {
  try {
    const updatedQuickTest = (await prismaClient.$runCommandRaw({
      update: "QuickTest",
      updates: [
        {
          q: { _id: { $oid: quickTestId } },
          u: {
            $set: {
              "selectedTests.$[elem].results": results,
            },
          },
          arrayFilters: [{ "elem.name": test.name }],
        },
      ],
    })) as QuickTest;

    console.log(updatedQuickTest);

    //@ts-ignore
    if (updatedQuickTest.nModified === 0) {
      return {
        success: false,
        error: "No matching test found or no changes made",
      };
    }

    return { success: true, data: updatedQuickTest };
  } catch (error) {
    return actionErrorHandler<QuickTest>(error);
  }
};
