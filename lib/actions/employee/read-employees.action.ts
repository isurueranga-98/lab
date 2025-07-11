"use server";
import { type Employee } from "@/lib/schema/employee.schema";
import { actionErrorHandler } from "@/lib/utils/action-error-handler";
import prismaClient from "@/lib/utils/prismaClient.util";
import { ActionResponse } from "@/lib/utils/types";

export const readEmployees = async (): Promise<ActionResponse<Employee[]>> => {
  try {
    const employees = await prismaClient.employee.findMany();

    //return the employees
    return { success: true, data: employees };
  } catch (error) {
    return actionErrorHandler<Employee[]>(error);
  }
};
