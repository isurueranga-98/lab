"use client";
import { QuickTestForm } from "@/components/forms/quick-test.form";
import { PageContainer } from "@/components/layout/page-container.layout";
import { QuickTestPayment } from "@/components/quick-test-payment";
import { QuickTestProgressIndicator } from "@/components/quick-test-progress-indicator";
import { QuickTestReceipt } from "@/components/quick-test-receipt";
import { QuickTestSelectTests } from "@/components/quick-test-select-tests";
import { PatientInformation, QuickTestStep } from "@/lib/utils/types";
import { useState } from "react";
import { useQuickTestState } from "@/store";

const QuickTestPage = (): React.JSX.Element => {
  const {
    setPatientInformation,
    clearPatientInformation,
    clearPaymentInformation,
    clearAllTest,
    patientInformation,
    selectedTests,
    paymentInformation,
  } = useQuickTestState((state) => state);

  const [currentStep, setCurrentStep] =
    useState<QuickTestStep>("PATIENT_DETAILS");

  return (
    <PageContainer title="">
      <div className="">
        <div className="mb-4 flex justify-around px-16">
          <QuickTestProgressIndicator
            completed={!!patientInformation}
            name="Patient information"
            step="PATIENT_DETAILS"
            currentStep={currentStep}
            onClick={() => setCurrentStep("PATIENT_DETAILS")}
          />
          <QuickTestProgressIndicator
            completed={selectedTests.length > 0}
            name="Select tests"
            step="SELECT_TESTS"
            currentStep={currentStep}
            onClick={() => setCurrentStep("SELECT_TESTS")}
          />
          <QuickTestProgressIndicator
            completed={!!paymentInformation}
            name="Payment"
            step="PAYMENT"
            currentStep={currentStep}
            onClick={() => setCurrentStep("PAYMENT")}
          />
          <QuickTestProgressIndicator
            completed={false}
            name="Receipt"
            step="RECEIPT"
            currentStep={currentStep}
            onClick={() => setCurrentStep("RECEIPT")}
          />
        </div>
        <div className="rounded-xl py-8 shadow-sm shadow-foreground">
          {currentStep === "PATIENT_DETAILS" ? (
            <QuickTestForm
              type="create"
              onSubmit={async (data: PatientInformation) => {
                setPatientInformation(data);
                setCurrentStep("SELECT_TESTS");
              }}
            />
          ) : currentStep === "SELECT_TESTS" ? (
            <QuickTestSelectTests
              handleBack={() => setCurrentStep("PATIENT_DETAILS")}
              handleNext={() => setCurrentStep("PAYMENT")}
            />
          ) : currentStep === "PAYMENT" ? (
            <QuickTestPayment
              handleBack={() => setCurrentStep("SELECT_TESTS")}
              handleNext={() => setCurrentStep("RECEIPT")}
            />
          ) : currentStep === "RECEIPT" ? (
            <QuickTestReceipt
              handleBack={() => {}}
              handleNext={async () => {
                clearPatientInformation();
                clearAllTest();
                clearPaymentInformation;
                setCurrentStep("PATIENT_DETAILS");
              }}
            />
          ) : null}
        </div>
      </div>
    </PageContainer>
  );
};

export default QuickTestPage;
