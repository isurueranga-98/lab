import { PageContainer } from "@/components/layout/page-container.layout";
import { EmployeeTable } from "@/components/tables/employee.table";

const EmployeesPage = (): JSX.Element => {
  return (
    <PageContainer title="Employees">
      <div>
        <EmployeeTable />
      </div>
    </PageContainer>
  );
};

export default EmployeesPage;
