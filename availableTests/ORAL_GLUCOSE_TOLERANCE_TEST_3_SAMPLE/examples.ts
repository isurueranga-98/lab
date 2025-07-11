import { ORAL_GLUCOSE_TOLERANCE_TEST_3_SAMPLE_TYPE } from "@availableTests/ORAL_GLUCOSE_TOLERANCE_TEST_3_SAMPLE/type";

type ORAL_GLUCOSE_TOLERANCE_TEST_3_SAMPLE_EXAMPLES = {
  configured: ORAL_GLUCOSE_TOLERANCE_TEST_3_SAMPLE_TYPE;
  notConfigured: ORAL_GLUCOSE_TOLERANCE_TEST_3_SAMPLE_TYPE;
};

export const EXAMPLES: ORAL_GLUCOSE_TOLERANCE_TEST_3_SAMPLE_EXAMPLES = {
  configured: {
    name: "ORAL GLUCOSE TOLERANCE TEST - 3 SAMPLE",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "Fasting",
        result: null,
        flag: "",
        unit: "mg/dl",
        referenceRange: {
          low: 5,
          high: 7,
        },
      },
      {
        name: "1 hour",
        result: null,
        flag: "",
        unit: "mg/dl",
        referenceRange: {
          low: 8,
          high: 9,
        },
      },
      {
        name: "2 hour",
        result: null,
        flag: "",
        unit: "mg/dl",
        referenceRange: {
          low: 1,
          high: 8,
        },
      },
    ],
  },
  notConfigured: {
    name: "ORAL GLUCOSE TOLERANCE TEST - 3 SAMPLE",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "Fasting",
        result: null,
        flag: "",
        unit: "mg/dl",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "1 hour",
        result: null,
        flag: "",
        unit: "mg/dl",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "2 hour",
        result: null,
        flag: "",
        unit: "mg/dl",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ],
  },
}