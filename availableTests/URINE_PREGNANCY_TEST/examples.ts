import { URINE_PREGNANCY_TEST_TYPE } from "@availableTests/URINE_PREGNANCY_TEST/type"

type URINE_PREGNANCY_TEST_EXAMPLES = {
  configured: URINE_PREGNANCY_TEST_TYPE;
  notConfigured: URINE_PREGNANCY_TEST_TYPE;
};

export const EXAMPLES: URINE_PREGNANCY_TEST_EXAMPLES = {
  configured: {
    name: "URINE PREGNANCY TEST",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "URINE FOR hCG",
        result: null,
        
      },
    ],
  },
  notConfigured: {
    name: "URINE PREGNANCY TEST",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "URINE FOR hCG",
        result: null,
        
      },
    ],
  },
}