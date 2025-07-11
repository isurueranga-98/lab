import { SGPT_ALT_TYPE } from "@availableTests/SGPT_ALT/type";

type SGPT_ALT_EXAMPLES = {
  configured: SGPT_ALT_TYPE;
  notConfigured: SGPT_ALT_TYPE;
};

export const EXAMPLES: SGPT_ALT_EXAMPLES = {
  configured: {
    name: "SGPT (ALT)",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "SGPT (ALT)",
        result: null,
        flag: "",
        unit: "U/L",
        referenceRange: {
          low: 2,
          hight: 6,
        },
      },
    ],
  },
  notConfigured: {
    name: "SGPT (ALT)",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "SGPT (ALT)",
        result: null,
        flag: "",
        unit: "U/L",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
    ],
  },
}