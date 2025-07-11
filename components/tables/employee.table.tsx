import { EmployeeColumns } from "@/components/columns/employee.columns";
import DataTable from "@/components/ui/data-table";
import { AddEmployeeButton } from "@/components/buttons/add-employee.button";
import { readEmployees } from "@/lib/actions/employee/read-employees.action";

export const EmployeeTable = async (): Promise<JSX.Element> => {
  const employees = await readEmployees();

  return (
    <DataTable
      columns={EmployeeColumns}
      data={employees.success ? employees.data : []}
      addNewItemButton={<AddEmployeeButton />}
      filterByValues={[
        { columnId: "email", columnName: "Email" },
        { columnId: "firstName", columnName: "First Name" },
        { columnId: "lastName", columnName: "Last Name" },
      ]}
    />
  );
};
