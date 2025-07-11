"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { BILIRUBIN_TOTAL_AND_DIRECT_TYPE } from "@availableTests/BILIRUBIN_TOTAL_AND_DIRECT";
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
import { actions } from "@availableTests/BILIRUBIN_TOTAL_AND_DIRECT";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
import { QuickTest } from "@/lib/utils/types";
import { useAuthContext } from "@/contexts/auth-context";

type props = {
  test: BILIRUBIN_TOTAL_AND_DIRECT_TYPE;
  quickTest: QuickTest;
};

//BILIRUBIN_TOTAL
//BILIRUBIN_DIRECT
//BILIRUBIN_INDIRECT

export const BILIRUBIN_TOTAL_AND_DIRECT_FORM = ({ quickTest, test }: props) => {
  const { user } = useAuthContext();
  // define results schema
  const resultsSchema = z.object({
    BILIRUBIN_TOTAL: z.coerce.number(),
    BILIRUBIN_DIRECT: z.coerce.number(),
    BILIRUBIN_INDIRECT: z.coerce.number(),
  });

  // define results form
  const form = useForm<z.infer<typeof resultsSchema>>({
    resolver: zodResolver(resultsSchema),
    defaultValues: {
      BILIRUBIN_INDIRECT: test.results[0].result ? test.results[0].result : 0,
      BILIRUBIN_DIRECT: test.results[1].result ? test.results[1].result : 0,
      BILIRUBIN_TOTAL: test.results[2].result ? test.results[2].result : 0,
    },
  });

  // check configured status
  const configured =
    !!test.results[0].referenceRange.high &&
    !!test.results[0].referenceRange.low &&
    !!test.results[1].referenceRange.high &&
    !!test.results[1].referenceRange.low &&
    !!test.results[2].referenceRange.high &&
    !!test.results[2].referenceRange.low;

  const [completed, setCompleted] = useState(
    !!test.results[0].result &&
      !!test.results[1].result &&
      !!test.results[2].result,
  );

  const handleSubmit = async () => {
    const isValid = await form.trigger();

    if (!isValid) return;

    const formResult = form.getValues();

    // rebuild results object in quick test
    const quickTestResults: BILIRUBIN_TOTAL_AND_DIRECT_TYPE["results"] = [
      {
        ...test.results[0],
        result: formResult.BILIRUBIN_INDIRECT,
        flag:
          formResult.BILIRUBIN_INDIRECT < test.results[0].referenceRange.low!
            ? "L"
            : formResult.BILIRUBIN_INDIRECT >
                test.results[0].referenceRange.high!
              ? "H"
              : "",
      },
      {
        ...test.results[1],
        result: formResult.BILIRUBIN_DIRECT,
        flag:
          formResult.BILIRUBIN_DIRECT < test.results[1].referenceRange.low!
            ? "L"
            : formResult.BILIRUBIN_DIRECT > test.results[1].referenceRange.high!
              ? "H"
              : "",
      },
      {
        ...test.results[2],
        result: formResult.BILIRUBIN_TOTAL,
        flag:
          formResult.BILIRUBIN_TOTAL < test.results[2].referenceRange.low!
            ? "L"
            : formResult.BILIRUBIN_TOTAL > test.results[2].referenceRange.high!
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
                        name="BILIRUBIN_INDIRECT"
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
                        {form.watch("BILIRUBIN_INDIRECT") <
                        test.results[0].referenceRange.low!
                          ? "L"
                          : form.watch("BILIRUBIN_INDIRECT") >
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
                {/* ------------------------------------------------------------------------------------------------- */}
                <tr>
                  <td className="px-4">{test.results[1].name}</td>
                  <td className="px-4">
                    <div>
                      <FormField
                        control={form.control}
                        name="BILIRUBIN_DIRECT"
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
                        {form.watch("BILIRUBIN_DIRECT") <
                        test.results[1].referenceRange.low!
                          ? "L"
                          : form.watch("BILIRUBIN_DIRECT") >
                              test.results[1].referenceRange.high!
                            ? "H"
                            : ""}
                      </span>
                    )}
                  </td>
                  <td className="px-4">
                    {" "}
                    {/* render reference range */}(
                    {!test.results[1].referenceRange.low ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[1].referenceRange.low
                    )}{" "}
                    -{" "}
                    {!test.results[1].referenceRange.high ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[1].referenceRange.high
                    )}
                    ){/* ------------------------- */}
                  </td>
                </tr>
                {/* ------------------------------------------------------------------------------------------------- */}
                <tr>
                  <td className="px-4">{test.results[2].name}</td>
                  <td className="px-4">
                    <div>
                      <FormField
                        control={form.control}
                        name="BILIRUBIN_TOTAL"
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
                        {form.watch("BILIRUBIN_TOTAL") <
                        test.results[2].referenceRange.low!
                          ? "L"
                          : form.watch("BILIRUBIN_TOTAL") >
                              test.results[2].referenceRange.high!
                            ? "H"
                            : ""}
                      </span>
                    )}
                  </td>
                  <td className="px-4">
                    ({/* render reference range */}
                    {!test.results[2].referenceRange.low ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[2].referenceRange.low
                    )}{" "}
                    -{" "}
                    {!test.results[2].referenceRange.high ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[2].referenceRange.high
                    )}
                    {/* ------------------------- */})
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
