"use server";
import prismaClient from "@/lib/utils/prismaClient.util";
import { ActionResponse, MongoDBUpdateResult } from "@/lib/utils/types";

export const configurePrice = async (
  price: number | null,
): Promise<ActionResponse<MongoDBUpdateResult>> => {
  try {
    // **Input Validation**
    if (price !== null && typeof price !== "number") {
      return {
        success: false,
        error: "Price must be a number or null.",
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
              price,
            },
          },
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
        error: "No matching document found or price is the same as existing.",
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
