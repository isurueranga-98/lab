import { SGOT_AND_SGPT_TYPE } from "@/availableTests/SGOT_AND_SGPT/type";

type SGOT_AND_SGPT_EXAMPLES = {
  configured: SGOT_AND_SGPT_TYPE;
  notConfigured: SGOT_AND_SGPT_TYPE;
};

export const EXAMPLES: SGOT_AND_SGPT_EXAMPLES = {
  configured: {
    name: "SGOT & SGPT (AST & ALT)",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "SGOT (AST)",
        result: null,
        flag: "",
        unit: "U/L",
        referenceRange: {
          low: 1,
          high: 5,
        },
      },
      {
        name: "SGPT (ALT)",
        result: null,
        flag: "",
        unit: "U/L",
        referenceRange: {
          low: 5,
          high: 9,
        },
      },
    ],
  },
  notConfigured: {
    name: "SGOT & SGPT (AST & ALT)",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "SGOT (AST)",
        result: null,
        flag: "",
        unit: "U/L",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "SGPT (ALT)",
        result: null,
        flag: "",
        unit: "U/L",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ],
  },
};
