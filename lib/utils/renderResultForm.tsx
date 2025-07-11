import React from "react";
import { QuickTest, Test } from "@/lib/utils/types";
import { ELECTROLYTES_SERUM_FORM } from "@availableTests/ELECTROLYTES_SERUM";
import { FASTING_PLASMA_GLUCOSE_FORM } from "@availableTests/FASTING_PLASMA_GLUCOSE";
import { TROPNIN_I_QUALITATIVE_FORM } from "@/availableTests/TROPONIN_I_QUALITATIVE";
import { STOOL_OCCULT_BLOOD_FORM } from "@/availableTests/STOOL_OCCULT_BLOOD";
import { FILARIA_ANTIBODY_TEST_FAT_FORM } from "@/availableTests/FILARIA_ANTIBODY_TEST_FAT";
import { DENGUE_VIRUS_ANTIBODY_TEST_FORM } from "@/availableTests/DENGUE_VIRUS_ANTIBODY_TEST";
import { HEPATITIS_B_SURFACE_ANTIGEN_FORM } from "@/availableTests/HEPATITIS_B_SURFACE_ANTIGEN";
import { HEPATITIS_C_ANTIBODY_FORM } from "@/availableTests/HEPATITIS_C_ANTIBODY";
import { HIV_1_AND_2_ANTIBODY_FORM } from "@/availableTests/HIV_1_AND_2_ANTIBODY";
import { URINE_PREGNANCY_TEST_FORM } from "@/availableTests/URINE_PREGNANCY_TEST";
import { URIC_ACID_FORM } from "@/availableTests/URIC_ACID";
import { ALBUMIN_SERUM_FORM } from "@/availableTests/ALBUMIN_SERUM";
import { TOTAL_PROTEIN_SERUM_FORM } from "@/availableTests/TOTAL_PROTEIN_SERUM";
import { BILIRUBIN_TOTAL_AND_DIRECT_FORM } from "@/availableTests/BILIRUBIN_TOTAL_AND_DIRECT";
import { BlOOD_UREA_FORM } from "@/availableTests/BlOOD_UREA";
import { C_REACTIVE_PROTEIN_CRP_FORM } from "@/availableTests/C_REACTIVE_PROTEIN_CRP";
import { HBA1C_GLYCOSYLATED_HAEMOGLOBIN_FORM } from "@/availableTests/HBA1C_GLYCOSYLATED_HAEMOGLOBIN";
import { AMYLASE_FORM } from "@/availableTests/AMYLASE";
import { RHEUMATOID_FACTOR_FORM } from "@/availableTests/RHEUMATOID_FACTOR";
import { SGOT_AND_SGPT_FORM } from "@/availableTests/SGOT_AND_SGPT";
import { SERUM_CHOLESTEROL_FORM } from "@/availableTests/SERUM_CHOLESTEROL";
import { SERUM_CREATININE_FORM } from "@/availableTests/SERUM_CREATININE";
import { ORAL_GLUCOSE_TOLERANCE_TEST_3_SAMPLE_FORM } from "@/availableTests/ORAL_GLUCOSE_TOLERANCE_TEST_3_SAMPLE";
import { GLUCOSE_LEVEL_1HR_AFTER_50G_OF_GLUCOSE_GLUCOSE_CHALANGE_TEST_FORM } from "@/availableTests/GLUCOSE_LEVEL_1HR_AFTER_50G_OF_GLUCOSE_GLUCOSE_CHALANGE_TEST";
import { POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_3_SAMPLES_FORM } from "@/availableTests/POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_3_SAMPLES";
import { POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST_FORM } from "@/availableTests/POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST";
import { POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_DINNER_FORM } from "@/availableTests/POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_DINNER";
import { POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_LUNCH_FORM } from "@/availableTests/POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_LUNCH";
import { TSH_3RD_GENERATION_FORM } from "@/availableTests/TSH_3RD_GENERATION";
import { THYROID_PROFILE_FORM } from "@/availableTests/THYROID_PROFILE";
import { FREE_THYROXINE_F_T4_FORM } from "@/availableTests/FREE_THYROXINE_F_T4";
import { GAMMA_GLUTAMYL_TRANSFERASE_GGT_FORM } from "@/availableTests/GAMMA_GLUTAMYL_TRANSFERASE_GGT";
import { RENAL_PROFILE_FORM } from "@/availableTests/RENAL_PROFILE";

export const renderResultForm = (
  test: Test,
  quickTest: QuickTest,
): React.JSX.Element => {
  switch (test.name) {
    case "ELECTROLYTES - SERUM":
      return <ELECTROLYTES_SERUM_FORM test={test} quickTest={quickTest} />;
    case "FASTING PLASMA GLUCOSE":
      return <FASTING_PLASMA_GLUCOSE_FORM test={test} quickTest={quickTest} />;
    case "TROPONIN I (QUALITATIVE)":
      return <TROPNIN_I_QUALITATIVE_FORM test={test} quickTest={quickTest} />;
    case "STOOL OCCULT BLOOD":
      return <STOOL_OCCULT_BLOOD_FORM test={test} quickTest={quickTest} />;
    case "FILARIA ANTIBODY TEST(FAT)":
      return (
        <FILARIA_ANTIBODY_TEST_FAT_FORM test={test} quickTest={quickTest} />
      );
    case "DENGUE VIRUS ANTIBODY TEST":
      return (
        <DENGUE_VIRUS_ANTIBODY_TEST_FORM test={test} quickTest={quickTest} />
      );
    case "HEPATITIS B SURFACE ANTIGEN":
      return (
        <HEPATITIS_B_SURFACE_ANTIGEN_FORM test={test} quickTest={quickTest} />
      );
    case "HEPATITIS C ANTIBODY":
      return <HEPATITIS_C_ANTIBODY_FORM test={test} quickTest={quickTest} />;
    case "HIV (1 & 2) ANTIBODY":
      return <HIV_1_AND_2_ANTIBODY_FORM test={test} quickTest={quickTest} />;
    case "URINE PREGNANCY TEST":
      return <URINE_PREGNANCY_TEST_FORM test={test} quickTest={quickTest} />;
    case "URIC - ACID":
      return <URIC_ACID_FORM test={test} quickTest={quickTest} />;
    case "AlBUMIN - SERUM":
      return <ALBUMIN_SERUM_FORM test={test} quickTest={quickTest} />;
    case "TOTAL PROTEIN - SERUM":
      return <TOTAL_PROTEIN_SERUM_FORM test={test} quickTest={quickTest} />;
    case "BILIRUBIN TOTAL & DIRECT":
      return (
        <BILIRUBIN_TOTAL_AND_DIRECT_FORM test={test} quickTest={quickTest} />
      );
    case "BlOOD UREA":
      return <BlOOD_UREA_FORM test={test} quickTest={quickTest} />;
    case "C REACTIVE PROTEIN (CRP)":
      return <C_REACTIVE_PROTEIN_CRP_FORM test={test} quickTest={quickTest} />;
    case "HBA1C (GLYCOSYLATED HAEMOGLOBIN)":
      return (
        <HBA1C_GLYCOSYLATED_HAEMOGLOBIN_FORM
          test={test}
          quickTest={quickTest}
        />
      );
    case "AMYLASE":
      return <AMYLASE_FORM test={test} quickTest={quickTest} />;
    case "RHEUMATOID FACTOR":
      return <RHEUMATOID_FACTOR_FORM test={test} quickTest={quickTest} />;
    case "SGOT & SGPT (AST & ALT)":
      return <SGOT_AND_SGPT_FORM test={test} quickTest={quickTest} />;
    case "SERUM CHOLESTEROL":
      return <SERUM_CHOLESTEROL_FORM test={test} quickTest={quickTest} />;
    case "SERUM CREATININE":
      return <SERUM_CREATININE_FORM test={test} quickTest={quickTest} />;
    case "ORAL GLUCOSE TOLERANCE TEST - 3 SAMPLE":
      return (
        <ORAL_GLUCOSE_TOLERANCE_TEST_3_SAMPLE_FORM
          test={test}
          quickTest={quickTest}
        />
      );
    case "Glucose Level - 1hr After 50 g of Glucose (Glucose Chalange Test)":
      return (
        <GLUCOSE_LEVEL_1HR_AFTER_50G_OF_GLUCOSE_GLUCOSE_CHALANGE_TEST_FORM
          test={test}
          quickTest={quickTest}
        />
      );
    case "POST PRANDIAL PLASMA GLUCOSE (2 hours) 3 SAMPLES":
      return (
        <POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_3_SAMPLES_FORM
          test={test}
          quickTest={quickTest}
        />
      );
    case "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER BREAKFAST)":
      return (
        <POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST_FORM
          test={test}
          quickTest={quickTest}
        />
      );
    case "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER DINNER)":
      return (
        <POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_DINNER_FORM
          test={test}
          quickTest={quickTest}
        />
      );
    case "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER LUNCH)":
      return (
        <POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_LUNCH_FORM
          test={test}
          quickTest={quickTest}
        />
      );
    case "TSH (3rd Generation)":
      return <TSH_3RD_GENERATION_FORM test={test} quickTest={quickTest} />;
    case "THYROID PROFILE":
      return <THYROID_PROFILE_FORM test={test} quickTest={quickTest} />;
    case "FREE THYROXINE (F T4)":
      return <FREE_THYROXINE_F_T4_FORM test={test} quickTest={quickTest} />;
    case "GAMMA GLUTAMYL TRANSFERASE(GGT)":
      return (
        <GAMMA_GLUTAMYL_TRANSFERASE_GGT_FORM
          test={test}
          quickTest={quickTest}
        />
      );
    case "RENAL PROFILE":
      return <RENAL_PROFILE_FORM test={test} quickTest={quickTest} />;
    default:
      return <></>;
      break;
  }
};
