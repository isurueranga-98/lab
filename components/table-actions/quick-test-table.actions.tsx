"use client";
import { Row } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useDialogState } from "@/store";
import { QuickTest } from "@/lib/utils/types";
import Link from "next/link";
import qs from "qs";
import { Receipt } from "@/components/receipt";
// import { deleteQuickTest } from "@/lib/actions/quick-test/delete-quick-test.action";

type QuickTestActionsDropdownProps = {
  row: Row<QuickTest>;
};

export const QuickTestTableActions = ({
  row,
}: QuickTestActionsDropdownProps): JSX.Element => {
  const { setOpen: setDialogOpen, setDialog } = useDialogState(
    (state) => state,
  );

  // define view action
  const handleView = () => {
    setDialog({
      title: "",
      description: "",
      content: <Receipt {...row.original} />,
    });
    setDialogOpen(true);
  };

  // define delete action
  // const handleDelete = async () => {
  //   await deleteQuickTest(row.original.id);
  // };

  const rowQuery = qs.stringify(row.original);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleView}>
          <Button variant="ghost">View Receipt</Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/enter-results?${rowQuery}`}>
            <Button variant="ghost">Enter Results</Button>
          </Link>
        </DropdownMenuItem>
        {/* <DropdownMenuItem onClick={handleDelete}>
          <Button variant="ghost">Delete Receipt</Button>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
