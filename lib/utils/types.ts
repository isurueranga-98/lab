import { ELECTROLYTES_SERUM_TYPE } from "@/availableTests/ELECTROLYTES_SERUM";
import { FASTING_PLASMA_GLUCOSE_TYPE } from "@/availableTests/FASTING_PLASMA_GLUCOSE";
import { TROPONIN_I_QUALITATIVE_TYPE } from "@/availableTests/TROPONIN_I_QUALITATIVE";
import { z } from "zod";
import { PatientInformationSchema } from "@/lib/schema/patient-information.schema";
import { FILARIA_ANTIBODY_TEST_FAT_TYPE } from "@/availableTests/FILARIA_ANTIBODY_TEST_FAT/type";
import { ALBUMIN_SERUM_TYPE } from "@/availableTests/ALBUMIN_SERUM/type";
import { AMYLASE_TYPE } from "@/availableTests/AMYLASE/type";
import { BILIRUBIN_TOTAL_AND_DIRECT_TYPE } from "@/availableTests/BILIRUBIN_TOTAL_AND_DIRECT/type";
import { BlOOD_UREA_TYPE } from "@/availableTests/BlOOD_UREA/type";
import { C_REACTIVE_PROTEIN_CRP_TYPE } from "@/availableTests/C_REACTIVE_PROTEIN_CRP/type";
import { DENGUE_VIRUS_ANTIBODY_TEST_TYPE } from "@/availableTests/DENGUE_VIRUS_ANTIBODY_TEST/type";
import { FREE_THYROXINE_F_T4_TYPE } from "@/availableTests/FREE_THYROXINE_F_T4/type";
import { FULL_BLOOD_COUNT_TYPE } from "@/availableTests/FULL_BLOOD_COUNT/type";
import { GAMMA_GLUTAMYL_TRANSFERASE_GGT_TYPE } from "@/availableTests/GAMMA_GLUTAMYL_TRANSFERASE_GGT/type";
import { GLUCOSE_LEVEL_1HR_AFTER_50G_OF_GLUCOSE_GLUCOSE_CHALANGE_TEST_TYPE } from "@/availableTests/GLUCOSE_LEVEL_1HR_AFTER_50G_OF_GLUCOSE_GLUCOSE_CHALANGE_TEST/type";
import { HAEMOGLOBIN_HB_TYPE } from "@/availableTests/HAEMOGLOBIN_HB/type";
import { HBA1C_GLYCOSYLATED_HAEMOGLOBIN_TYPE } from "@/availableTests/HBA1C_GLYCOSYLATED_HAEMOGLOBIN/type";
import { HEPATITIS_B_SURFACE_ANTIGEN_TYPE } from "@/availableTests/HEPATITIS_B_SURFACE_ANTIGEN/type";
import { HEPATITIS_C_ANTIBODY_TYPE } from "@/availableTests/HEPATITIS_C_ANTIBODY/type";
import { HIV_1_AND_2_ANTIBODY_TYPE } from "@/availableTests/HIV_1_AND_2_ANTIBODY/type";
import { LIPID_PROFILE_TYPE } from "@/availableTests/LIPID_PROFILE/type";
import { LIPID_PROFILE_RANDOM_TYPE } from "@/availableTests/LIPID_PROFILE_RANDOM/type";
import { ORAL_GLUCOSE_TOLERANCE_TEST_3_SAMPLE_TYPE } from "@/availableTests/ORAL_GLUCOSE_TOLERANCE_TEST_3_SAMPLE/type";
import { POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_3_SAMPLES_TYPE } from "@/availableTests/POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_3_SAMPLES/type";
import { POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST_TYPE } from "@/availableTests/POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST/type";
import { POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_DINNER_TYPE } from "@/availableTests/POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_DINNER/type";
import { POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_LUNCH_TYPE } from "@/availableTests/POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_LUNCH/type";
import { PROFILE_LIVER_TYPE } from "@/availableTests/PROFILE_LIVER/type";
import { RENAL_PROFILE_TYPE } from "@/availableTests/RENAL_PROFILE/type";
import { RHEUMATOID_FACTOR_TYPE } from "@/availableTests/RHEUMATOID_FACTOR/type";
import { SERUM_CHOLESTEROL_TYPE } from "@/availableTests/SERUM_CHOLESTEROL/type";
import { SERUM_CREATININE_TYPE } from "@/availableTests/SERUM_CREATININE/type";
import { SGOT_AND_SGPT_TYPE } from "@/availableTests/SGOT_AND_SGPT/type";
import { SGOT_AST_TYPE } from "@/availableTests/SGOT_AST/type";
import { SGPT_ALT_TYPE } from "@/availableTests/SGPT_ALT/type";
import { STOOL_OCCULT_BLOOD_TYPE } from "@/availableTests/STOOL_OCCULT_BLOOD/type";
import { THYROID_PROFILE_TYPE } from "@/availableTests/THYROID_PROFILE/type";
import { TOTAL_PROTEIN_SERUM_TYPE } from "@/availableTests/TOTAL_PROTEIN_SERUM/type";
import { TSH_3RD_GENERATION_TYPE } from "@/availableTests/TSH_3RD_GENERATION/type";
import { URIC_ACID_TYPE } from "@/availableTests/URIC_ACID/type";
import { URINE_FULL_REPORT_TYPE } from "@/availableTests/URINE_FULL_REPORT/type";
import { URINE_PREGNANCY_TEST_TYPE } from "@/availableTests/URINE_PREGNANCY_TEST/type";
import { VDRL_TYPE } from "@/availableTests/VDRL/type";

/**
 * This is return type for server actions
 */
export type ActionResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };

export type FilterByValue = {
  columnId: string;
  columnName: string;
};

/**
 * Patient type
 */
export type Patient = {
  id: string;
  NIC: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dob: Date;
  gender: "MALE" | "FEMALE" | "OTHER";
  address: {
    street: string;
    city: string;
    state?: string;
    zip?: string;
  };
  phone: string;
  email?: string;
} & (
  | {
      type: "ADULT";
    }
  | {
      type: "CHILD" | "SENIOR";
      guardian: {
        type: "MOTHER" | "FATHER" | "LEGAL_GUARDIAN";
        name: {
          firstName: string;
          middleName?: string;
          lastName: string;
        };
      };
    }
);

/**
 * Props type for forms in the app
 */
export type FormProps<T> = {
  onSubmit: (formObject: Omit<T, "id">) => Promise<void>;
} & (
  | {
      type: "create";
    }
  | {
      type: "read" | "update" | "delete";
      formObject: T;
    }
);

export type QuickTestStep =
  | "PATIENT_DETAILS"
  | "SELECT_TESTS"
  | "PAYMENT"
  | "RECEIPT";

/**
 * Quick test type
 **/

export type PatientInformation = z.infer<typeof PatientInformationSchema>;

export type Test =
  | ELECTROLYTES_SERUM_TYPE
  | FASTING_PLASMA_GLUCOSE_TYPE
  | TROPONIN_I_QUALITATIVE_TYPE
  | FILARIA_ANTIBODY_TEST_FAT_TYPE
  | ALBUMIN_SERUM_TYPE
  | AMYLASE_TYPE
  | BILIRUBIN_TOTAL_AND_DIRECT_TYPE
  | BlOOD_UREA_TYPE
  | C_REACTIVE_PROTEIN_CRP_TYPE
  | DENGUE_VIRUS_ANTIBODY_TEST_TYPE
  | FREE_THYROXINE_F_T4_TYPE
  | FULL_BLOOD_COUNT_TYPE
  | GAMMA_GLUTAMYL_TRANSFERASE_GGT_TYPE
  | GLUCOSE_LEVEL_1HR_AFTER_50G_OF_GLUCOSE_GLUCOSE_CHALANGE_TEST_TYPE
  | HAEMOGLOBIN_HB_TYPE
  | HBA1C_GLYCOSYLATED_HAEMOGLOBIN_TYPE
  | HEPATITIS_B_SURFACE_ANTIGEN_TYPE
  | HEPATITIS_C_ANTIBODY_TYPE
  | HIV_1_AND_2_ANTIBODY_TYPE
  | LIPID_PROFILE_TYPE
  | LIPID_PROFILE_RANDOM_TYPE
  | ORAL_GLUCOSE_TOLERANCE_TEST_3_SAMPLE_TYPE
  | POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_3_SAMPLES_TYPE
  | POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST_TYPE
  | POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_DINNER_TYPE
  | POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_LUNCH_TYPE
  | PROFILE_LIVER_TYPE
  | RENAL_PROFILE_TYPE
  | RHEUMATOID_FACTOR_TYPE
  | SERUM_CHOLESTEROL_TYPE
  | SERUM_CREATININE_TYPE
  | SGOT_AND_SGPT_TYPE
  | SGOT_AST_TYPE
  | SGPT_ALT_TYPE
  | STOOL_OCCULT_BLOOD_TYPE
  | THYROID_PROFILE_TYPE
  | TOTAL_PROTEIN_SERUM_TYPE
  | TROPONIN_I_QUALITATIVE_TYPE
  | TSH_3RD_GENERATION_TYPE
  | URIC_ACID_TYPE
  | URINE_FULL_REPORT_TYPE
  | URINE_PREGNANCY_TEST_TYPE
  | VDRL_TYPE;

type ExtractName<T> = T extends { name: infer N } ? N : never;

export type TestNames = ExtractName<Test>;

export type SelectedTests = Test[];

export type PaymentInformation = {
  total: number;
  discount: number;
  totalPayble: number;
  initialPayment: number;
  balance: number;
  paymentMethod: "CASH" | "CARD" | "CHEQUE";
};

export type QuickTest = {
  id?: string;
  patientInformation: PatientInformation;
  selectedTests: SelectedTests;
  paymentInformation: PaymentInformation;
};

export interface MongoDBInsertResult {
  ok: number;
  n: number;
  writeErrors?: Array<{
    index: number;
    code: number;
    errmsg: string;
    errInfo?: any;
  }>;
  writeConcernError?: {
    code: number;
    errmsg: string;
    errInfo?: any;
  };
}

export interface MongoDBUpdateResult {
  ok: number;
  nModified: number;
  n: number;
  writeErrors?: Array<{
    index: number;
    code: number;
    errmsg: string;
  }>;
  writeConcernError?: {
    code: number;
    errmsg: string;
  };
}
