"use server";
import prismaClient from "@/lib/utils/prismaClient.util";
import { ActionResponse, MongoDBInsertResult } from "@/lib/utils/types";

export const createUnconfigured = async (): Promise<
  ActionResponse<MongoDBInsertResult>
> => {
  try {
    const testName = "ELECTROLYTES - SERUM";

    // **Step 1: Check if a test with the same name exists**
    const existingTest = await prismaClient.$runCommandRaw({
      find: "AvailableTest",
      filter: { name: testName },
      limit: 1,
    });

    // **Parse the result to check if any documents were found**
    const existingTestCursor = existingTest as unknown as {
      cursor: {
        firstBatch: any[];
      };
      ok: number;
    };

    if (existingTestCursor.cursor.firstBatch.length > 0) {
      // A test with the same name exists
      return {
        success: false,
        error: `A test with the name "${testName}" already exists.`,
      };
    }

    // **Step 2: Insert the new test**
    const testDocument = {
      name: testName,
      price: null,
      sampleType: "BLOOD",
      results: [
        {
          name: "SERUM SODIUM",
          result: null,
          flag: "",
          unit: "mmol/L",
          referenceRange: {
            low: null,
            high: null,
          },
        },
        {
          name: "SERUM POTASSIUM",
          result: null,
          flag: "",
          unit: "mmol/L",
          referenceRange: {
            low: null,
            high: null,
          },
        },
        {
          name: "SERUM CHLORIDE",
          result: null,
          flag: "",
          unit: "mmol/L",
          referenceRange: {
            low: null,
            high: null,
          },
        },
      ],
    };

    // **Insert the document**
    const test = await prismaClient.$runCommandRaw({
      insert: "AvailableTest",
      documents: [testDocument],
      // Remove bypassDocumentValidation unless necessary
    });

    const result = test as unknown as MongoDBInsertResult;

    // **Step 3: Check if the insert was successful**
    if (result.ok === 1 && !result.writeErrors && !result.writeConcernError) {
      // Success
      return {
        success: true,
        data: result,
      };
    } else {
      // Handle writeErrors or writeConcernError
      let errorMessage = "Insert failed.";
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
    // **Handle unexpected errors**
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
};
