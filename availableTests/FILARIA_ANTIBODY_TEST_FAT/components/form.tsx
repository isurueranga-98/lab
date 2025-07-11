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
  FILARIA_ANTIBODY_TEST_FAT_TYPE,
  actions,
} from "@/availableTests/FILARIA_ANTIBODY_TEST_FAT";
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

type props = {
  test: FILARIA_ANTIBODY_TEST_FAT_TYPE;
  quickTest: QuickTest;
};

export const FILARIA_ANTIBODY_TEST_FAT_FORM = ({ quickTest, test }: props) => {
  const { user } = useAuthContext();
  // define results schema
  const resultsSchema = z.object({
    FILARIA_IGM: z.enum(["positive", "negative"]),
    FILARIA_IGG: z.enum(["positive", "negative"]),
  });

  // define results form
  const form = useForm<z.infer<typeof resultsSchema>>({
    resolver: zodResolver(resultsSchema),
    defaultValues: {
      FILARIA_IGM: test.results[0].result ? test.results[0].result : "positive",
      FILARIA_IGG: test.results[1].result ? test.results[1].result : "positive",
    },
  });

  const [completed, setCompleted] = useState(
    //@ts-ignore
    test.results[0].result?.length > 0 && test.results[1].result?.length > 0,
  );

  const handleSubmit = async () => {
    const isValid = await form.trigger();

    if (!isValid) return;

    const formResult = form.getValues();

    // rebuild results object in quick test
    const quickTestResults: FILARIA_ANTIBODY_TEST_FAT_TYPE["results"] = [
      {
        ...test.results[0],
        result: formResult.FILARIA_IGM,
      },
      {
        ...test.results[1],
        result: formResult.FILARIA_IGG,
      },
    ];

    const response = await actions.updateResults(
      quickTest.id!,
      test,
      quickTestResults,
    );

    console.log(response);
    if (response.success) setCompleted(true);
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
                      name="FILARIA_IGM"
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
                    <FormField
                      control={form.control}
                      name="FILARIA_IGG"
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
