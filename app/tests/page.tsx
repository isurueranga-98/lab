import { PageContainer } from "@/components/layout/page-container.layout";
import { QuickTestTable } from "@/components/tables/quick-test.table";
import React from "react";

const TestsPage = (): React.JSX.Element => {
  return (
    <PageContainer title="Quick Tests">
      <div>
        <QuickTestTable />
      </div>
    </PageContainer>
  );
};

export default TestsPage;
