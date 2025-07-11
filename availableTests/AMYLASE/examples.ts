import { AMYLASE_TYPE } from "@availableTests/AMYLASE/type";

type AMYLASE_EXAMPLES = {
  configured: AMYLASE_TYPE;
  notConfigured: AMYLASE_TYPE;
};
export const EXAMPLES: AMYLASE_EXAMPLES = {
  configured: {
    name: "AMYLASE",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "SERUM AMAYLASE",
        result:null,
        flag: "",
        unit: "U/L",
        referenceRange: {
          low: 7,
          high: 4,
        },
      },
    ],
  },
  notConfigured: {
    name: "AMYLASE",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "SERUM AMAYLASE",
        result:null,
        flag: "",
        unit: "U/L",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ],
  },
}