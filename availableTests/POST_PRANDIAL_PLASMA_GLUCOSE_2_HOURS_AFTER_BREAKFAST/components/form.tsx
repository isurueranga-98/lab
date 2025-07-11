"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST_TYPE } from "@availableTests/POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import FormSubmit from "@/components/ui/form-submit";
import { actions } from "@availableTests/POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
import { QuickTest } from "@/lib/utils/types";
import { useAuthContext } from "@/contexts/auth-context";

type props = {
  test: POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST_TYPE;
  quickTest: QuickTest;
};

//POST_PRANDIAL_PLASMA_GLUCOSE

export const POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST_FORM = ({
  quickTest,
  test,
}: props) => {
  const { user } = useAuthContext();
  // define results schema
  const resultsSchema = z.object({
    POST_PRANDIAL_PLASMA_GLUCOSE: z.coerce.number(),
  });

  // define results form
  const form = useForm<z.infer<typeof resultsSchema>>({
    resolver: zodResolver(resultsSchema),
    defaultValues: {
      POST_PRANDIAL_PLASMA_GLUCOSE: test.results[0].result
        ? test.results[0].result
        : 0,
    },
  });

  // check configured status
  const configured =
    !!test.results[0].referenceRange.high &&
    !!test.results[0].referenceRange.low;

  const [completed, setCompleted] = useState(!!test.results[0].result);

  const handleSubmit = async () => {
    const isValid = await form.trigger();

    if (!isValid) return;

    const formResult = form.getValues();

    // rebuild results object in quick test
    const quickTestResults: POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST_TYPE["results"] =
      [
        {
          ...test.results[0],
          result: formResult.POST_PRANDIAL_PLASMA_GLUCOSE,
          flag:
            formResult.POST_PRANDIAL_PLASMA_GLUCOSE <
            test.results[0].referenceRange.low!
              ? "L"
              : formResult.POST_PRANDIAL_PLASMA_GLUCOSE >
                  test.results[0].referenceRange.high!
                ? "H"
                : "",
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
    <>
      <Form {...form}>
        <form action={handleSubmit}>
          <div className="flex justify-center" ref={formRef}>
            <table>
              <thead>
                <tr className="text-lg font-bold">
                  <td className="px-4 py-2">Test</td>
                  <td className="px-4 py-2">Result</td>
                  <td className="px-4 py-2">Unit</td>
                  <td className="px-4 py-2">Flag</td>
                  <td className="px-4 py-2">Reference Range</td>
                </tr>
              </thead>
              <tbody>
                {/* ----------------------------------------------------------------------------------------------- */}
                <tr>
                  <td className="px-4">{test.results[0].name}</td>
                  <td className="px-4">
                    <div>
                      <FormField
                        control={form.control}
                        name="POST_PRANDIAL_PLASMA_GLUCOSE"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                disabled={!configured || completed}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </td>
                  <td className="px-4">mmol/L</td>
                  <td className="px-4">
                    {!configured ? (
                      <></>
                    ) : (
                      <span>
                        {form.watch("POST_PRANDIAL_PLASMA_GLUCOSE") <
                        test.results[0].referenceRange.low!
                          ? "L"
                          : form.watch("POST_PRANDIAL_PLASMA_GLUCOSE") >
                              test.results[0].referenceRange.high!
                            ? "H"
                            : ""}
                      </span>
                    )}
                  </td>
                  <td className="px-4">
                    {/* render reference range */}(
                    {!test.results[0].referenceRange.low ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[0].referenceRange.low
                    )}{" "}
                    -{" "}
                    {!test.results[0].referenceRange.high ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[0].referenceRange.high
                    )}
                    ){/* ------------------------- */}
                  </td>
                </tr>
                {/* ---------------------------------------------------------------------------------------------- */}
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
    </>
  );
};
