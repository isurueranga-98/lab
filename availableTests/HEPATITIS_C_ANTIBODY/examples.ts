import { HEPATITIS_C_ANTIBODY_TYPE } from "@availableTests/HEPATITIS_C_ANTIBODY/type";

type HEPATITIS_C_ANTIBODY_EXAMPLES = {
  configured: HEPATITIS_C_ANTIBODY_TYPE;
  notConfigured: HEPATITIS_C_ANTIBODY_TYPE;
};

export const EXAMPLES: HEPATITIS_C_ANTIBODY_EXAMPLES = {
  configured: {
    name: "HEPATITIS C ANTIBODY",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "Hepatitis C Antibody",
        result: null,
        
      },
    ],
  },
  notConfigured: {
    name: "HEPATITIS C ANTIBODY",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "Hepatitis C Antibody",
        result: null,
        
      },
    ],
  },
}