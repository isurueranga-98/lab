import { URIC_ACID_TYPE } from "@availableTests/URIC_ACID/type";

type URIC_ACID_EXAMPLES = {
  configured: URIC_ACID_TYPE;
  notConfigured: URIC_ACID_TYPE;
}

export const EXAMPLES: URIC_ACID_EXAMPLES = {
  configured: {
    name: "URIC - ACID",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "URIC ACID",
        result: null,
        flag: "",
        unit: "mg/dL",
        referenceRange: {
          low: 5,
          high: 9,
        },
      },
    ],
  },
  notConfigured: {
    name: "URIC - ACID",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "URIC ACID",
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
}