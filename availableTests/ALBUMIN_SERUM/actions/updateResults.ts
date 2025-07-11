"use server";
import { ActionResponse, MongoDBUpdateResult, Test } from "@/lib/utils/types";
import { ALBUMIN_SERUM_TYPE } from "@availableTests/ALBUMIN_SERUM";
import prismaClient from "@/lib/utils/prismaClient.util";
import { actionErrorHandler } from "@/lib/utils/action-error-handler";

export const updateResults = async (
  quickTestId: string,
  test: Test,
  results: ALBUMIN_SERUM_TYPE["results"],
): Promise<ActionResponse<null>> => {
  try {
    // **Input Validation**
    if (!quickTestId || typeof quickTestId !== "string") {
      return {
        success: false,
        error: "Invalid quickTestId provided.",
      };
    }

    if (!test || !test.name) {
      return {
        success: false,
        error: "Invalid test information provided.",
      };
    }

    if (!results || !Array.isArray(results)) {
      return {
        success: false,
        error: "Invalid results provided.",
      };
    }

    // **Perform the Update Operation**
    const updateResult = await prismaClient.$runCommandRaw({
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
    });

    const result = updateResult as unknown as MongoDBUpdateResult;

    // **Validate the Update Result**
    if (result.ok === 1 && result.nModified > 0) {
      // **Success**
      return { success: true, data: null };
    } else if (result.ok === 1 && result.nModified === 0) {
      // **No Documents Updated**
      return {
        success: false,
        error: "No matching test found or no changes made.",
      };
    } else {
      // **Handle Write Errors**
      let errorMessage = "Update failed.";
      if (result.writeErrors && result.writeErrors.length > 0) {
        errorMessage = result.writeErrors.map((err) => err.errmsg).join(", ");
      } else if (result.writeConcernError) {
        errorMessage = result.writeConcernError.errmsg;
      }
      return {
        success: false,
        error: errorMessage,
      };
    }
  } catch (error) {
    return actionErrorHandler(error);
  }
};
