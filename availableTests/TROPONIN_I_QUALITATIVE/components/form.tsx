"use client";
import { useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TROPONIN_I_QUALITATIVE_TYPE,
  actions,
} from "@/availableTests/TROPONIN_I_QUALITATIVE";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useReactToPrint } from "react-to-print";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import FormSubmit from "@/components/ui/form-submit";
import { Button } from "@/components/ui/button";
import { QuickTest } from "@/lib/utils/types";
import { useAuthContext } from "@/contexts/auth-context";
import { showToast } from "@/lib/utils/toast";

type props = {
  test: TROPONIN_I_QUALITATIVE_TYPE;
  quickTest: QuickTest;
};

export const TROPNIN_I_QUALITATIVE_FORM = ({ quickTest, test }: props) => {
  const { user } = useAuthContext();
  // define results schema
  const resultsSchema = z.object({
    TROPONIN_I_QUALITATIVE: z.enum(["positive", "negative"]),
  });

  // define results form
  const form = useForm<z.infer<typeof resultsSchema>>({
    resolver: zodResolver(resultsSchema),
    defaultValues: {
      TROPONIN_I_QUALITATIVE: test.results[0].result
        ? test.results[0].result
        : "positive",
    },
  });

  const [completed, setCompleted] = useState(
    //@ts-ignore
    test.results[0].result?.length > 0,
  );

  const handleSubmit = async () => {
    const isValid = await form.trigger();

    if (!isValid) return;

    const formResult = form.getValues();

    // rebuild results object in quick test
    const quickTestResults: TROPONIN_I_QUALITATIVE_TYPE["results"] = [
      {
        ...test.results[0],
        result: formResult.TROPONIN_I_QUALITATIVE,
      },
    ];

    const response = await actions.updateResults(
      quickTest.id!,
      test,
      quickTestResults,
    );

    console.log(response);
    if (response.success) {
      setCompleted(true);
      showToast.success("Test Results Saved!", "Test results have been saved successfully.");
    } else {
      showToast.error("Save Failed", "Failed to save test results. Please try again.");
    }
  };

  const formRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => formRef.current!,
  });

  return (
    <Form {...form}>
      <form action={handleSubmit}>
        <div className="flex justify-center" ref={formRef}>
          <table>
            <thead>
              <tr className="text-lg font-bold">
                <td className="px-4 py-2">Test</td>
                <td className="px-4 py-2">Result</td>
              </tr>
            </thead>
            <tbody>
              {/* ------------------------- */}
              <tr>
                <td className="px-4">Troponin I</td>
                <td className="px-4">
                  <div>
                    <FormField
                      control={form.control}
                      name="TROPONIN_I_QUALITATIVE"
                      render={({ field }) => (
                        <FormItem>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            disabled={completed}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="positive">Positive</SelectItem>
                              <SelectItem value="negative">Negative</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex w-full justify-end space-x-4">
          {completed ? (
            <Button type="button" onClick={handlePrint}>
              Print
            </Button>
          ) : (
            <FormSubmit disabled={user?.role === "EMPLOYEE"}>
              {user?.role === "EMPLOYEE" ? "Save (Disabled for Employee)" : "Save"}
            </FormSubmit>
          )}
        </div>
      </form>
    </Form>
  );
};
