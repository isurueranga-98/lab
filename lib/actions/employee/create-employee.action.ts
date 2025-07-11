"use server";
import {
  EmployeeSchema,
  type EmployeeSchemaType,
  type Employee,
} from "@/lib/schema/employee.schema";
import { revalidatePath } from "next/cache";
import { ActionResponse } from "@/lib/utils/types";
import { actionErrorHandler } from "@/lib/utils/action-error-handler";
import prismaClient from "@/lib/utils/prismaClient.util";

export const createEmployee = async (
  employee: EmployeeSchemaType,
): Promise<ActionResponse<Employee>> => {
  try {
    // validate the employee payload
    const validatedEmployee = EmployeeSchema.parse(employee);

    // if employee validation success, create the employee in the database
    const newEmployee = await prismaClient.employee.create({
      data: validatedEmployee,
    });

    // if user creation success,

    // revalidate the cache
    revalidatePath("/employees");

    //return the employee
    return { success: true, data: newEmployee };
  } catch (error) {
    return actionErrorHandler<Employee>(error);
  }
};
