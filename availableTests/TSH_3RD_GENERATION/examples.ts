import { TSH_3RD_GENERATION_TYPE } from "@availableTests/TSH_3RD_GENERATION/type";

type TSH_3RD_GENERATION_EXAMPLES = {
  configured: TSH_3RD_GENERATION_TYPE;
  notConfigured: TSH_3RD_GENERATION_TYPE;
};

export const EXAMPLES: TSH_3RD_GENERATION_EXAMPLES = {
  configured: {
    name: "TSH (3rd Generation)",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "TSH - 3rd Generation",
        result: null,
        flag: "" ,
        unit: "μIU/ml",
        referenceRange: {
          low: 5,
          high: 9,
        },
      },
    ],
  },
  notConfigured: {
    name: "TSH (3rd Generation)",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "TSH - 3rd Generation",
        result: null,
        flag: "" ,
        unit: "μIU/ml",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ],
  },
}