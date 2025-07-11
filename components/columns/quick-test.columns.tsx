"use client";
import { Button } from "@/components/ui/button";
import { type ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { QuickTestTableActions } from "@/components/table-actions/quick-test-table.actions";
import { QuickTest } from "@/lib/utils/types";

export const QuickTestColumns: ColumnDef<QuickTest>[] = [
  {
    accessorKey: "id",
    accessorFn: (row) => row.id,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        ID
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "firstName",
    accessorFn: (row) => row.patientInformation.firstName,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        First Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "lastName",
    accessorFn: (row) => row.patientInformation.lastName,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Last Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "gender",
    accessorFn: (row) => row.patientInformation.gender,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Gender
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "phone",
    accessorFn: (row) => row.patientInformation.phone,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Phone
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "test count",
    accessorFn: (row) => row.selectedTests.length,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Test count
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "progress",
    accessorFn: (row) => {
      let completedTests = 0;
      for (const test of row.selectedTests) {
        for (const result of test.results) {
          if (!result.result) {
            break;
          }
        }
        completedTests++;
      }

      return `${completedTests}/${row.selectedTests.length}`;
    },
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Progress
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "email",
    accessorFn: (row) => row.patientInformation.email,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "referredBy",
    accessorFn: (row) => row.patientInformation.referredBy,
    filterFn: (row, id, value) => value.includes(row.getValue(id)),
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Referred By
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return <QuickTestTableActions row={row} />;
    },
  },
];
