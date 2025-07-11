import { PatientInformation } from "@/lib/utils/types";
import { create } from "zustand";
import { Test } from "@/lib/utils/types";

type QuickTestState = {
  patientInformation: PatientInformation | undefined;
  selectedTests: Test[];
  paymentInformation:
    | {
        total: number;
        discount: number;
        totalPayble: number;
        initialPayment: number;
        balance: number;
        paymentMethod: "CASH" | "CARD" | "CHEQUE" | "ONLINE";
      }
    | undefined;
};

type QuickTestActions = {
  // patient-details actions
  setPatientInformation: (patientDetails: PatientInformation) => void;
  clearPatientInformation: () => void;

  // selected-tests actions
  selectTest: (test: Test) => void;
  clearTest: (test: Test) => void;
  clearAllTest: () => void;

  // payment-details actions
  setPaymentInformation: (
    paymentDetails: QuickTestState["paymentInformation"],
  ) => void;
  clearPaymentInformation: () => void;
};

const initialState: QuickTestState = {
  patientInformation: undefined,
  selectedTests: [],
  paymentInformation: undefined,
};

const useQuickTestState = create<QuickTestState & QuickTestActions>()(
  (set) => ({
    // set initial state
    ...initialState,

    // patient-details actions
    setPatientInformation: (patientInformation) =>
      set((state) => ({ ...state, patientInformation })),
    clearPatientInformation: () =>
      set((state) => ({ ...state, patientInformation: undefined })),

    // selected a specific test
    selectTest: (test) =>
      set((state) => {
        // check if test aleady includes in selectedTests
        const includes = state.selectedTests.find(
          (selectedTest) => selectedTest.name === test.name,
        );

        // if test already exists in the selectedTests return the unmodified state
        if (includes) return { ...state };

        return {
          ...state,
          selectedTests: [...state.selectedTests, test],
        };
      }),

    // clear a specific test from selectedTests
    clearTest: (test) =>
      set((state) => {
        const newSelectedTests = state.selectedTests.filter(
          (selectedTest) => selectedTest.name !== test.name,
        );

        return {
          ...state,
          selectedTests: newSelectedTests,
        };
      }),

    clearAllTest: () => set((state) => ({ ...state, selectedTests: [] })),

    // payment-details actions
    setPaymentInformation: (paymentInformation) =>
      set((state) => ({ ...state, paymentInformation })),

    clearPaymentInformation: () =>
      set((state) => ({ ...state, paymentInformation: undefined })),
  }),
);

export default useQuickTestState;
