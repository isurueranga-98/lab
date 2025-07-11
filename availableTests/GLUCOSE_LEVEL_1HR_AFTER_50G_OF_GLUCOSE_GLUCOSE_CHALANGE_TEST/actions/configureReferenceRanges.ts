"use server";
import prismaClient from "@/lib/utils/prismaClient.util";
import { ActionResponse, MongoDBUpdateResult } from "@/lib/utils/types";

export const configureReferenceRanges = async (params: {
  field: "SERUM SODIUM" | "SERUM POTASSIUM" | "SERUM CHLORIDE";
  point: "low" | "high";
  value: number | null;
}): Promise<ActionResponse<MongoDBUpdateResult>> => {
  try {
    // **Input Validation**
    if (params.value !== null && typeof params.value !== "number") {
      return {
        success: false,
        error: "Value must be a number or null.",
      };
    }

    // **Perform the Update Operation**
    const updateResult = await prismaClient.$runCommandRaw({
      update: "AvailableTest",
      updates: [
        {
          q: {
            name: "ELECTROLYTES - SERUM",
          },
          u: {
            $set: {
              [`results.$[elem].referenceRange.${params.point}`]: params.value,
            },
          },
          arrayFilters: [
            {
              "elem.name": params.field,
            },
          ],
        },
      ],
    });

    const result = updateResult as unknown as MongoDBUpdateResult;

    // **Validate the Update Result**
    if (result.ok === 1 && result.nModified > 0) {
      // **Success**
      return {
        success: true,
        data: result,
      };
    } else if (result.ok === 1 && result.nModified === 0) {
      // **No Documents Updated**
      return {
        success: false,
        error: "No matching document found or value is the same as existing.",
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
    // **Handle Unexpected Errors**
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred.",
    };
  }
};
