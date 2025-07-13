import { ActionResponse } from "@/lib/utils/types";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import { ZodError } from "zod";

export const actionErrorHandler = <T>(error: unknown): ActionResponse<T> => {
  console.error("Action error handler called with:", error);
  
  // handle data validation error
  if (error instanceof ZodError) {
    console.error("Zod validation error:", error.issues);
    return { success: false, error: error.issues[0].message };
  }

  // handle Prisma client known request errors
  if (error instanceof PrismaClientKnownRequestError) {
    console.error("Prisma known request error:", error.code, error.message);
    // handle unique constraint errors
    if (error.code === "P2002") {
      return {
        success: false,
        error: `${
          (error.meta?.target as string).split("_")[1] as string
        } already exists`,
      };
    }

    // handle other Prisma client known request errors
    return { success: false, error: `Database error: ${error.message}` };
  }

  // handle Prisma client validation errors
  if (error instanceof PrismaClientValidationError) {
    console.error("Prisma validation error:", error);
    return { success: false, error: "Database validation error" };
  }

  // handle general Error objects
  if (error instanceof Error) {
    console.error("General error:", error.name, error.message, error.stack);
    return { success: false, error: `Error: ${error.message}` };
  }

  // handle unknown errors
  console.error("Unknown error type:", typeof error, error);
  return { success: false, error: "An unexpected error occurred" };
};
