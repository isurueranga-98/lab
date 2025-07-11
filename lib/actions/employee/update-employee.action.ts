"use server";
import {
  EmployeeSchema,
  type Employee,
  type EmployeeSchemaType,
} from "@/lib/schema/employee.schema";
import { ActionResponse } from "@/lib/utils/types";
import { revalidatePath } from "next/cache";
import { actionErrorHandler } from "@/lib/utils/action-error-handler";
import prismaClient from "@/lib/utils/prismaClient.util";

export const updateEmployee = async (
  id: string,
  data: EmployeeSchemaType,
): Promise<ActionResponse<Employee>> => {
  try {
    // validate the employee payload
    const validatedEmployee = EmployeeSchema.parse(data);

    // update the employee in the database
    const updatedEmployee = await prismaClient.employee.update({
      where: { id },
      data: data,
    });

    // if employee update success,

    // revaidate the cache
    revalidatePath("/employees");

    // return the employee
    return { success: true, data: updatedEmployee };
  } catch (error) {
    return actionErrorHandler<Employee>(error);
  }
};
