import { RHEUMATOID_FACTOR_TYPE } from "@availableTests/RHEUMATOID_FACTOR/type";

type RHEUMATOID_FACTOR_EXAMPLES = {
  configured: RHEUMATOID_FACTOR_TYPE;
  notConfigured: RHEUMATOID_FACTOR_TYPE;
};
export const EXAMPLES: RHEUMATOID_FACTOR_EXAMPLES = {
  configured: {
    name: "RHEUMATOID FACTOR",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "RHEUMATOID FACTOR",
        result: null,
        unit: "IU/ml",
        flag: "",
        referenceRange: {
          low: 0,
          high: 20,
        },
      },
    ],
  },
  notConfigured: {
    name: "RHEUMATOID FACTOR",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "RHEUMATOID FACTOR",
        result: null,
        unit: "IU/ml",
        flag: "",
        referenceRange: {
          low: 0,
          high: 20,
        },
      },
    ],
  },
};
