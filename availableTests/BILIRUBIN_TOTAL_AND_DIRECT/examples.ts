import { BILIRUBIN_TOTAL_AND_DIRECT_TYPE } from "@availableTests/BILIRUBIN_TOTAL_AND_DIRECT/type";

type BILIRUBIN_TOTAL_AND_DIRECT_EXAMPLES = {
  configured: BILIRUBIN_TOTAL_AND_DIRECT_TYPE;
  notConfigured: BILIRUBIN_TOTAL_AND_DIRECT_TYPE;
};

export const EXAMPLES: BILIRUBIN_TOTAL_AND_DIRECT_EXAMPLES = {
  configured: {
    name: "BILIRUBIN TOTAL & DIRECT",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "BILIRUBIN - TOTAL",
        result: null,
        unit: "mg/dl",
        flag: "",
        referenceRange: {
          low: 0.3,
          high: 1.0,
        },
      },
      {
        name: "BILIRUBIN - DIRECT",
        result: null,
        unit: "mg/dl",
        flag: "",
        referenceRange: {
          low: 0.1,
          high: 0.3,
        },
      },
      {
        name: "BILIRUBIN - INDIRECT",
        result: null,
        unit: "mg/dl",
        flag: "",
        referenceRange: {
          low: 0.2,
          high: 0.7,
        },
      },
    ],
  },
  notConfigured: {
    name: "BILIRUBIN TOTAL & DIRECT",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "BILIRUBIN - TOTAL",
        result: null,
        unit: "mg/dl",
        flag: "",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "BILIRUBIN - DIRECT",
        result: null,
        unit: "mg/dl",
        flag: "",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "BILIRUBIN - INDIRECT",
        result: null,
        unit: "mg/dl",
        flag: "",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ],
  },
};
