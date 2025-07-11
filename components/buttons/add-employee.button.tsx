"use client";
import { Button } from "@/components/ui/button";
import { useSheetState } from "@/store";
import { EmployeeForm } from "@/components/forms/employee.form";

export const AddEmployeeButton = (): JSX.Element => {
  const { setOpen, setSheet } = useSheetState((state) => state);

  const handleSheet = () => {
    setSheet({
      title: "Add Employee",
      description: "Add a new employee to the system.",
      content: <EmployeeForm />,
    });
    setOpen(true);
  };

  return <Button onClick={handleSheet}>Add Employee</Button>;
};
