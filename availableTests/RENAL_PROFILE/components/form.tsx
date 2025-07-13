
"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { RENAL_PROFILE_TYPE, actions } from "@availableTests/RENAL_PROFILE";
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
  test: RENAL_PROFILE_TYPE;
  quickTest: QuickTest;
};

// BLOOD_UREA
// SERUM_CREATININE
// SERUM_SODIUM
// SERUM_POTASSIUM
// SERUM_CHLORIDE
// SERUM_CHLORIDE
// TOTAL_CALCIUM
// INORGANIC_PHOSPHORUS
// URIC_ACID

export const RENAL_PROFILE_FORM = ({ quickTest, test }: props) => {
  const { user } = useAuthContext();
  // define results schema
  const resultsSchema = z.object({
    BLOOD_UREA: z.coerce.number(),
    SERUM_CREATININE: z.coerce.number(),
    SERUM_SODIUM: z.coerce.number(),
    SERUM_POTASSIUM: z.coerce.number(),
    SERUM_CHLORIDE: z.coerce.number(),
    TOTAL_CALCIUM: z.coerce.number(),
    INORGANIC_PHOSPHORUS: z.coerce.number(),
    URIC_ACID: z.coerce.number(),
  });

  // define results form
  const form = useForm<z.infer<typeof resultsSchema>>({
    resolver: zodResolver(resultsSchema),
    defaultValues: {
      BLOOD_UREA: test.results[0].result ? test.results[0].result : 0,
      SERUM_CREATININE: test.results[1].result ? test.results[1].result : 0,
      SERUM_SODIUM: test.results[2].result ? test.results[2].result : 0,
      SERUM_POTASSIUM: test.results[3].result ? test.results[3].result : 0,
      SERUM_CHLORIDE: test.results[4].result ? test.results[4].result : 0,
      TOTAL_CALCIUM: test.results[5].result ? test.results[5].result : 0,
      INORGANIC_PHOSPHORUS: test.results[6].result ? test.results[6].result : 0,
      URIC_ACID: test.results[7].result ? test.results[7].result : 0,
    },
  });

  // check configured status
  const configured =
    !!test.results[0].referenceRange.high &&
    !!test.results[0].referenceRange.low &&
    !!test.results[1].referenceRange.high &&
    !!test.results[1].referenceRange.low &&
    !!test.results[2].referenceRange.high &&
    !!test.results[2].referenceRange.low &&
    !!test.results[3].referenceRange.high &&
    !!test.results[3].referenceRange.low &&
    !!test.results[4].referenceRange.high &&
    !!test.results[4].referenceRange.low &&
    !!test.results[5].referenceRange.high &&
    !!test.results[5].referenceRange.low &&
    !!test.results[6].referenceRange.high &&
    !!test.results[6].referenceRange.low &&
    !!test.results[7].referenceRange.high &&
    !!test.results[7].referenceRange.low;

  const [completed, setCompleted] = useState(
    !!test.results[0].result &&
      !!test.results[1].result &&
      !!test.results[2].result &&
      !!test.results[3].result &&
      !!test.results[4].result &&
      !!test.results[5].result &&
      !!test.results[6].result &&
      !!test.results[7].result,
  );

  const handleSubmit = async (formData: FormData) => {
    const isValid = await form.trigger();

    if (!isValid) return;

    const formResult = form.getValues();

    // rebuild results object in quick test
    const quickTestResults: RENAL_PROFILE_TYPE["results"] = [
      {
        ...test.results[0],
        result: formResult.BLOOD_UREA,
        flag:
          formResult.BLOOD_UREA < test.results[0].referenceRange.low!
            ? "L"
            : formResult.BLOOD_UREA > test.results[0].referenceRange.high!
              ? "H"
              : "",
      },
      {
        ...test.results[1],
        result: formResult.SERUM_CREATININE,
        flag:
          formResult.SERUM_CREATININE < test.results[1].referenceRange.low!
            ? "L"
            : formResult.SERUM_CREATININE > test.results[1].referenceRange.high!
              ? "H"
              : "",
      },
      {
        ...test.results[2],
        result: formResult.SERUM_SODIUM,
        flag:
          formResult.SERUM_SODIUM < test.results[0].referenceRange.low!
            ? "L"
            : formResult.SERUM_SODIUM > test.results[0].referenceRange.high!
              ? "H"
              : "",
      },
      {
        ...test.results[3],
        result: formResult.SERUM_POTASSIUM,
        flag:
          formResult.SERUM_POTASSIUM < test.results[1].referenceRange.low!
            ? "L"
            : formResult.SERUM_POTASSIUM > test.results[1].referenceRange.high!
              ? "H"
              : "",
      },
      {
        ...test.results[4],
        result: formResult.SERUM_CHLORIDE,
        flag:
          formResult.SERUM_CHLORIDE < test.results[2].referenceRange.low!
            ? "L"
            : formResult.SERUM_CHLORIDE > test.results[2].referenceRange.high!
              ? "H"
              : "",
      },
      {
        ...test.results[5],
        result: formResult.TOTAL_CALCIUM,
        flag:
          formResult.TOTAL_CALCIUM < test.results[3].referenceRange.low!
            ? "L"
            : formResult.TOTAL_CALCIUM > test.results[3].referenceRange.high!
              ? "H"
              : "",
      },
      {
        ...test.results[6],
        result: formResult.INORGANIC_PHOSPHORUS,
        flag:
          formResult.INORGANIC_PHOSPHORUS < test.results[4].referenceRange.low!
            ? "L"
            : formResult.INORGANIC_PHOSPHORUS >
                test.results[4].referenceRange.high!
              ? "H"
              : "",
      },
      {
        ...test.results[7],
        result: formResult.URIC_ACID,
        flag:
          formResult.URIC_ACID < test.results[5].referenceRange.low!
            ? "L"
            : formResult.URIC_ACID > test.results[5].referenceRange.high!
              ? "H"
              : "",
      },
    ];

    try {
      const response = await actions.updateResults(
        quickTest.id!,
        test,
        quickTestResults,
      );

      console.log("Update response:", response);
      
      if (response.success) {
        setCompleted(true);
        showToast.success("Test Results Saved!", "Test results have been saved successfully.");
      } else {
        console.error("Update failed:", response.error);
        showToast.error("Save Failed", response.error || "Failed to save test results. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      showToast.error("Save Failed", "An unexpected error occurred. Please try again.");
    }
  };

  // print form
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
                        name="BLOOD_UREA"
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
                        {form.watch("SERUM_SODIUM") <
                        test.results[0].referenceRange.low!
                          ? "L"
                          : form.watch("SERUM_SODIUM") >
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
                        name="SERUM_CREATININE"
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
                        {form.watch("SERUM_CREATININE") <
                        test.results[1].referenceRange.low!
                          ? "L"
                          : form.watch("SERUM_CREATININE") >
                              test.results[1].referenceRange.high!
                            ? "H"
                            : ""}
                      </span>
                    )}
                  </td>
                  <td className="px-4">
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
                {/* ----------------------------------------------------------------------------------------------- */}
                <tr>
                  <td className="px-4">{test.results[2].name}</td>
                  <td className="px-4">
                    <div>
                      <FormField
                        control={form.control}
                        name="SERUM_SODIUM"
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
                        {form.watch("SERUM_SODIUM") <
                        test.results[2].referenceRange.low!
                          ? "L"
                          : form.watch("SERUM_SODIUM") >
                              test.results[2].referenceRange.high!
                            ? "H"
                            : ""}
                      </span>
                    )}
                  </td>
                  <td className="px-4">
                    {/* render reference range */}(
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
                    ){/* ------------------------- */}
                  </td>
                </tr>
                {/* ------------------------------------------------------------------------------------------------- */}
                <tr>
                  <td className="px-4">{test.results[3].name}</td>
                  <td className="px-4">
                    <div>
                      <FormField
                        control={form.control}
                        name="SERUM_POTASSIUM"
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
                        {form.watch("SERUM_POTASSIUM") <
                        test.results[3].referenceRange.low!
                          ? "L"
                          : form.watch("SERUM_POTASSIUM") >
                              test.results[3].referenceRange.high!
                            ? "H"
                            : ""}
                      </span>
                    )}
                  </td>
                  <td className="px-4">
                    {" "}
                    {/* render reference range */}(
                    {!test.results[3].referenceRange.low ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[3].referenceRange.low
                    )}{" "}
                    -{" "}
                    {!test.results[3].referenceRange.high ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[3].referenceRange.high
                    )}
                    ){/* ------------------------- */}
                  </td>
                </tr>
                {/* ------------------------------------------------------------------------------------------------- */}
                <tr>
                  <td className="px-4">{test.results[4].name}</td>
                  <td className="px-4">
                    <div>
                      <FormField
                        control={form.control}
                        name="SERUM_CHLORIDE"
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
                        {form.watch("SERUM_CHLORIDE") <
                        test.results[4].referenceRange.low!
                          ? "L"
                          : form.watch("SERUM_CHLORIDE") >
                              test.results[4].referenceRange.high!
                            ? "H"
                            : ""}
                      </span>
                    )}
                  </td>
                  <td className="px-4">
                    ({/* render reference range */}
                    {!test.results[4].referenceRange.low ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[4].referenceRange.low
                    )}{" "}
                    -{" "}
                    {!test.results[4].referenceRange.high ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[4].referenceRange.high
                    )}
                    {/* ------------------------- */})
                  </td>
                </tr>
                {/* ---------------------------------------------------------------------------------------------- */}
                <tr>
                  <td className="px-4">{test.results[5].name}</td>
                  <td className="px-4">
                    <div>
                      <FormField
                        control={form.control}
                        name="TOTAL_CALCIUM"
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
                        {form.watch("TOTAL_CALCIUM") <
                        test.results[5].referenceRange.low!
                          ? "L"
                          : form.watch("TOTAL_CALCIUM") >
                              test.results[5].referenceRange.high!
                            ? "H"
                            : ""}
                      </span>
                    )}
                  </td>
                  <td className="px-4">
                    {/* render reference range */}(
                    {!test.results[5].referenceRange.low ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[5].referenceRange.low
                    )}{" "}
                    -{" "}
                    {!test.results[5].referenceRange.high ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[5].referenceRange.high
                    )}
                    ){/* ------------------------- */}
                  </td>
                </tr>
                {/* ------------------------------------------------------------------------------------------------- */}
                <tr>
                  <td className="px-4">{test.results[6].name}</td>
                  <td className="px-4">
                    <div>
                      <FormField
                        control={form.control}
                        name="INORGANIC_PHOSPHORUS"
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
                        {form.watch("INORGANIC_PHOSPHORUS") <
                        test.results[6].referenceRange.low!
                          ? "L"
                          : form.watch("INORGANIC_PHOSPHORUS") >
                              test.results[6].referenceRange.high!
                            ? "H"
                            : ""}
                      </span>
                    )}
                  </td>
                  <td className="px-4">
                    {/* render reference range */}(
                    {!test.results[6].referenceRange.low ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[6].referenceRange.low
                    )}{" "}
                    -{" "}
                    {!test.results[6].referenceRange.high ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[6].referenceRange.high
                    )}
                    ){/* ------------------------- */}
                  </td>
                </tr>
                {/* ------------------------------------------------------------------------------------------------- */}
                <tr>
                  <td className="px-4">{test.results[7].name}</td>
                  <td className="px-4">
                    <div>
                      <FormField
                        control={form.control}
                        name="URIC_ACID"
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
                        {form.watch("URIC_ACID") <
                        test.results[7].referenceRange.low!
                          ? "L"
                          : form.watch("URIC_ACID") >
                              test.results[7].referenceRange.high!
                            ? "H"
                            : ""}
                      </span>
                    )}
                  </td>
                  <td className="px-4">
                    {/* render reference range */}(
                    {!test.results[7].referenceRange.low ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[7].referenceRange.low
                    )}{" "}
                    -{" "}
                    {!test.results[7].referenceRange.high ? (
                      <span className="text-sm text-destructive">
                        NOT_CONFIGURED
                      </span>
                    ) : (
                      test.results[7].referenceRange.high
                    )}
                    ){/* ------------------------- */}
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
    </>
  );
};
