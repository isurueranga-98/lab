"use server";
import { ActionResponse, MongoDBUpdateResult, Test } from "@/lib/utils/types";
import { RENAL_PROFILE_TYPE } from "@/availableTests/RENAL_PROFILE";
import prismaClient from "@/lib/utils/prismaClient.util";
import { actionErrorHandler } from "@/lib/utils/action-error-handler";

export const updateResults = async (
  quickTestId: string,
  test: Test,
  results: RENAL_PROFILE_TYPE["results"],
): Promise<ActionResponse<null>> => {
  try {
    console.log("UpdateResults called with:", { quickTestId, testName: test.name, resultsCount: results.length });

    // **Input Validation**
    if (!quickTestId || typeof quickTestId !== "string") {
      console.error("Invalid quickTestId:", quickTestId);
      return {
        success: false,
        error: "Invalid quickTestId provided.",
      };
    }

    if (!test || !test.name) {
      console.error("Invalid test:", test);
      return {
        success: false,
        error: "Invalid test information provided.",
      };
    }

    if (!results || !Array.isArray(results)) {
      console.error("Invalid results:", results);
      return {
        success: false,
        error: "Invalid results provided.",
      };
    }

    console.log("Database URL available:", !!process.env.DATABASE_URL);
    console.log("Environment:", process.env.NODE_ENV);

    // Validate ObjectId format
    if (!/^[0-9a-fA-F]{24}$/.test(quickTestId)) {
      console.error("Invalid ObjectId format:", quickTestId);
      return {
        success: false,
        error: "Invalid ID format provided.",
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

    console.log("Database update result:", updateResult);

    const result = updateResult as unknown as MongoDBUpdateResult;

    // **Validate the Update Result**
    if (result.ok === 1 && result.nModified > 0) {
      // **Success**
      console.log("Update successful:", result);
      return { success: true, data: null };
    } else if (result.ok === 1 && result.nModified === 0) {
      // **No Documents Updated**
      console.warn("No documents updated:", result);
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
      console.error("Update failed with errors:", result);
      return {
        success: false,
        error: errorMessage,
      };
    }
  } catch (error) {
    console.error("Server action error:", error);
    return actionErrorHandler(error);
  }
};
