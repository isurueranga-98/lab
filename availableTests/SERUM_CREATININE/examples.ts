import { SERUM_CREATININE_TYPE } from "@availableTests/SERUM_CREATININE/type";

type SERUM_CREATININE_EXAMPLES = {
  configured: SERUM_CREATININE_TYPE;
  notConfigured: SERUM_CREATININE_TYPE;
};

export const EXAMPLES: SERUM_CREATININE_EXAMPLES = {
  configured: {
    name: "SERUM CREATININE",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "SERUM CREATININE",
        result: null,
        flag: "",
        unit: "mg/dL",
        referenceRange: {
          low: 1,
          high: 4,
        },
      },
      {
        name: "Estimated GFR CKD - EPI",
        result: null,
        unit: "mL/min/1.73m2",
        flag: "",
        referenceRange: {
          low: 60,
          high: 120,
        },
      },
    ],
  },
  notConfigured: {
    name: "SERUM CREATININE",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "SERUM CREATININE",
        result: null,
        flag: "",
        unit: "mg/dL",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "Estimated GFR CKD - EPI",
        result: null,
        unit: "mL/min/1.73m2",
        flag: "",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ],
  },
};
