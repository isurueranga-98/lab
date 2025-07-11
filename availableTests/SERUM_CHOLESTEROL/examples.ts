import { SERUM_CHOLESTEROL_TYPE } from "@availableTests/SERUM_CHOLESTEROL/type";

type SERUM_CHOLESTEROLEXAMPLES = {
  configured: SERUM_CHOLESTEROL_TYPE;
  notConfigured: SERUM_CHOLESTEROL_TYPE;
};

export const EXAMPLES: SERUM_CHOLESTEROLEXAMPLES = {
  configured: {
    name: "SERUM CHOLESTEROL",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "SERUM CHOLESTEROL",
        result: null,
        flag: "",
        unit: "mg/dL",
        referenceRange: {
          low: 2,
          high: 5,
        },
      },
    ],
  },
  notConfigured: {
    name: "SERUM CHOLESTEROL",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "SERUM CHOLESTEROL",
        result: null,
        flag: "",
        unit: "mg/dL",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ],
  },
};
