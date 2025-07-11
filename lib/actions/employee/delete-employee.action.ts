"use server";
import { type Employee } from "@/lib/schema/employee.schema";
import { actionErrorHandler } from "@/lib/utils/action-error-handler";
import prismaClient from "@/lib/utils/prismaClient.util";
import { ActionResponse } from "@/lib/utils/types";
import { revalidatePath } from "next/cache";

export const deleteEmployee = async (
  id: string,
): Promise<ActionResponse<Employee>> => {
  try {
    // delete the employee from the database
    const deletedEmployee = await prismaClient.employee.delete({
      where: { id },
    });

    // if employee deletion success,

    // revalidate the cache
    revalidatePath("/employees");

    //return the employee
    return { success: true, data: deletedEmployee };
  } catch (error) {
    return actionErrorHandler<Employee>(error);
  }
};
