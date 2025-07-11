"use client";
import { useSearchParams } from "next/navigation";
import qs from "qs";
import { PageContainer } from "@/components/layout/page-container.layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QuickTest, Test } from "@/lib/utils/types";
import { renderResultForm } from "@/lib/utils/renderResultForm";
import { useAuthContext } from "@/contexts/auth-context";

const EnterResultsPage = (): React.JSX.Element => {
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  const quickTest = qs.parse(query) as unknown as QuickTest;

  console.log(quickTest);

  return (
    <PageContainer>
      <div></div>
      <div>
        {quickTest.selectedTests.map((test: Test) => (
          <Accordion type="single" collapsible key={test.id}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{test.name}</AccordionTrigger>
              <AccordionContent>
                {renderResultForm(test, quickTest)}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </PageContainer>
  );
};

export default EnterResultsPage;
