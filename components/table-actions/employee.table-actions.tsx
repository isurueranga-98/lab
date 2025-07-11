import { type Employee } from "@/lib/schema/employee.schema";
import { Row } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useSheetState, useDialogState } from "@/store";
import { EmployeeForm } from "@/components/forms/employee.form";

type EmployeeActionsDropdownProps = {
  row: Row<Employee>;
};

export const EmployeeTableActions = ({
  row,
}: EmployeeActionsDropdownProps): JSX.Element => {
  const { setOpen: setSheetOpen, setSheet } = useSheetState((state) => state);
  const { setOpen: setDialogOpen, setDialog } = useDialogState(
    (state) => state
  );

  // define view action
  const handleView = () => {
    setSheet({
      title: "View Employee",
      description: "View the employee details.",
      content: <EmployeeForm />,
    });
    setSheetOpen(true);
  };

  // define edit action
  const handleEdit = () => {
    setSheet({
      title: "Update Employee",
      description: "Update the employee details.",
      content: <EmployeeForm />,
    });
    setSheetOpen(true);
  };

  // define delete action
  const handleDelete = () => {
    setDialog({
      title: "Delete Employee",
      description: "Are you sure you want to delete this employee?",
      content: <></>,
    });
    setDialogOpen(true);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleView}>View</DropdownMenuItem>
        <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
