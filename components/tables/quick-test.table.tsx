import React from "react";
import DataTable from "@/components/ui/data-table";
import { QuickTestColumns } from "@/components/columns/quick-test.columns";
import { readQuickTests } from "@/lib/actions/quick-test/read-quick-tests.action";

export const QuickTestTable = async (): Promise<JSX.Element> => {
  const quickTests = await readQuickTests();

  console.log(
    quickTests.success && quickTests.data[0].patientInformation.firstName,
  );

  return (
    <DataTable
      columns={QuickTestColumns}
      data={quickTests.success ? quickTests.data.reverse() : []}
      addNewItemButton={<></>}
      filterByValues={[
        { columnId: "firstName", columnName: "First Name" },
        { columnId: "lastName", columnName: "Last Name" },
        { columnId: "id", columnName: "Reference No" },
        { columnId: "gender", columnName: "Gender" },
        { columnId: "phone", columnName: "Phone" },
      ]}
    />
  );
};
