"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { THYROID_PROFILE_TYPE, actions } from "@availableTests/THYROID_PROFILE";
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
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
import { QuickTest } from "@/lib/utils/types";
import { useAuthContext } from "@/contexts/auth-context";
import { showToast } from "@/lib/utils/toast";

type props = {
  test: THYROID_PROFILE_TYPE;
  quickTest: QuickTest;
};

export const THYROID_PROFILE_FORM = ({ quickTest, test }: props) => {
  const { user } = useAuthContext();
  // define results schema
  const resultsSchema = z.object({
    TSH_3RD_GENERATION: z.coerce.number(),
    FREE_THYROXINE: z.coerce.number(),
    FREE_TRIIODOTHYRONINE: z.coerce.number(),
  });

  // define results form
  const form = useForm<z.infer<typeof resultsSchema>>({
    resolver: zodResolver(resultsSchema),
    defaultValues: {
      FREE_TRIIODOTHYRONINE: test.results[0].result
        ? test.results[0].result
        : 0,
      FREE_THYROXINE: test.results[1].result ? test.results[1].result : 0,
      TSH_3RD_GENERATION: test.results[2].result ? test.results[2].result : 0,
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
    const quickTestResults: THYROID_PROFILE_TYPE["results"] = [
      {
        ...test.results[0],
        result: formResult.FREE_TRIIODOTHYRONINE,
        flag:
          formResult.FREE_TRIIODOTHYRONINE < test.results[0].referenceRange.low!
            ? "L"
            : formResult.FREE_TRIIODOTHYRONINE >
                test.results[0].referenceRange.high!
              ? "H"
              : "",
      },
      {
        ...test.results[1],
        result: formResult.FREE_THYROXINE,
        flag:
          formResult.FREE_THYROXINE < test.results[1].referenceRange.low!
            ? "L"
            : formResult.FREE_THYROXINE > test.results[1].referenceRange.high!
              ? "H"
              : "",
      },
      {
        ...test.results[2],
        result: formResult.TSH_3RD_GENERATION,
        flag:
          formResult.TSH_3RD_GENERATION < test.results[2].referenceRange.low!
            ? "L"
            : formResult.TSH_3RD_GENERATION >
                test.results[2].referenceRange.high!
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
                        name="FREE_TRIIODOTHYRONINE"
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
                        {form.watch("FREE_TRIIODOTHYRONINE") <
                        test.results[0].referenceRange.low!
                          ? "L"
                          : form.watch("FREE_TRIIODOTHYRONINE") >
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
                        name="FREE_THYROXINE"
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
                        {form.watch("FREE_THYROXINE") <
                        test.results[1].referenceRange.low!
                          ? "L"
                          : form.watch("FREE_THYROXINE") >
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
                        name="TSH_3RD_GENERATION"
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
                        {form.watch("TSH_3RD_GENERATION") <
                        test.results[2].referenceRange.low!
                          ? "L"
                          : form.watch("TSH_3RD_GENERATION") >
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
