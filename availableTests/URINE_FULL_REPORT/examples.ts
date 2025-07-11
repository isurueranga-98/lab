import { URINE_FULL_REPORT_TYPE } from "@availableTests/URINE_FULL_REPORT/type";

type URINE_FULL_REPORT_EXAMPLES = {
  configured: URINE_FULL_REPORT_TYPE;
  notConfigured: URINE_FULL_REPORT_TYPE;
};

export const EXAMPLES: URINE_FULL_REPORT_EXAMPLES = {
  configured: {
    name: "URINE FULL REPORT",
    price: 1200,
    sampleType: "URINE",
    results: [{
      name: "SERUM SODIUM",
      result: null,
      flag: "",
      unit: "mmol/L",
      referenceRange: {
        low: 2,
        high: 6,
      },
    },
  ],
  },
  notConfigured: {
    name: "URINE FULL REPORT",
    price: null,
    sampleType: "URINE",
    results: [{
      name: "SERUM SODIUM",
      result: null,
      flag: "",
      unit: "mmol/L",
      referenceRange: {
        low: null,
        high: null,
      },
    },
  ],
  },
}