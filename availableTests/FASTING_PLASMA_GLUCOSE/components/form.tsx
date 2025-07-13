"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  FASTING_PLASMA_GLUCOSE_TYPE,
  actions,
} from "@availableTests/FASTING_PLASMA_GLUCOSE";
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
  test: FASTING_PLASMA_GLUCOSE_TYPE;
  quickTest: QuickTest;
};

export const FASTING_PLASMA_GLUCOSE_FORM = ({ quickTest, test }: props) => {
  const { user } = useAuthContext();
  // define results schema
  const resultsSchema = z.object({
    FASTING_PLASMA_GLUCOSE: z.coerce.number(),
  });

  // define results form
  const form = useForm<z.infer<typeof resultsSchema>>({
    resolver: zodResolver(resultsSchema),
    defaultValues: {
      FASTING_PLASMA_GLUCOSE: test.results[0].result
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
    const quickTestResults: FASTING_PLASMA_GLUCOSE_TYPE["results"] = [
      {
        ...test.results[0],
        result: formResult.FASTING_PLASMA_GLUCOSE,
        flag:
          formResult.FASTING_PLASMA_GLUCOSE <
          test.results[0].referenceRange.low!
            ? "L"
            : formResult.FASTING_PLASMA_GLUCOSE >
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
    if (response.success) {
      setCompleted(true);
      showToast.success("Test Results Saved!", `${test.results[0].name} results have been saved successfully.`);
    } else {
      showToast.error("Save Failed", "Failed to save test results. Please try again.");
    }
  };

  const formRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => formRef.current!,
  });

  return (
    <div ref={formRef}>
      <div>
        <div className="flex justify-between border-b-[1px] border-black pb-2">
          <div className="w-1/2">
            <p>
              <strong>Reference Number: </strong>
              <span>{quickTest.id}</span>
            </p>
            <p>
              <strong> Patient Name: </strong>
              <span>{`${quickTest.patientInformation?.title ? quickTest.patientInformation.title : ""} ${quickTest.patientInformation?.firstName ? quickTest.patientInformation.firstName : ""} ${quickTest.patientInformation?.middleName ? quickTest.patientInformation.middleName : ""} ${
                quickTest.patientInformation?.lastName
                  ? quickTest.patientInformation.lastName
                  : ""
              }`}</span>
            </p>
            <p>
              <strong> Age: </strong>
              <span>{`${quickTest.patientInformation?.age.years ? quickTest.patientInformation.age.years : "0"} years ${quickTest.patientInformation?.age.months ? quickTest.patientInformation.age.months : "0"} months ${quickTest.patientInformation?.age.days ? quickTest.patientInformation.age.days : "0"} days`}</span>
            </p>
            <p>
              <strong>Gender: </strong>
              <span>
                {quickTest.patientInformation?.gender
                  ? quickTest.patientInformation.gender
                  : ""}
              </span>
            </p>
          </div>
          <div className="flex w-1/2 justify-center">
            <div>
              <p>
                <strong> Referred By: </strong>
                <span>
                  {quickTest.patientInformation?.referredBy
                    ? quickTest.patientInformation.referredBy
                    : ""}
                </span>
              </p>
              <p>
                <strong> Phone Number: </strong>
                <span>
                  {quickTest.patientInformation?.phone
                    ? quickTest.patientInformation.phone
                    : ""}
                </span>
              </p>
              <p>
                <strong>Email: </strong>
                <span>
                  {quickTest.patientInformation?.email
                    ? quickTest.patientInformation.email
                    : ""}
                </span>
              </p>
              <p>
                <strong> Address: </strong>
                <span>{`${quickTest.patientInformation?.address.street ? quickTest.patientInformation.address.street : ""}, ${quickTest.patientInformation?.address.city ? quickTest.patientInformation.address.city : ""}`}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Form {...form}>
        <form action={handleSubmit}>
          <div className="flex justify-center">
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
                        name="FASTING_PLASMA_GLUCOSE"
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
                        {form.watch("FASTING_PLASMA_GLUCOSE") <
                        test.results[0].referenceRange.low!
                          ? "L"
                          : form.watch("FASTING_PLASMA_GLUCOSE") >
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
    </div>
  );
};
