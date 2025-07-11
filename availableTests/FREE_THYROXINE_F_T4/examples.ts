import { FREE_THYROXINE_F_T4_TYPE } from "@availableTests/FREE_THYROXINE_F_T4/type"

type FREE_THYROXINE_F_T4_EXAMPLES = {
  configured: FREE_THYROXINE_F_T4_TYPE;
  notConfigured: FREE_THYROXINE_F_T4_TYPE;
};

export const EXAMPLES: FREE_THYROXINE_F_T4_EXAMPLES = {
  configured: {
    name: "FREE THYROXINE (F T4)",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "Free Thyroxine (F.T4)",
        result: null,
        flag: "" ,
        unit: "ng/dl",
        referenceRange: {
          low: 1,
          high: 5,
        },
      },
    ],
  },
  notConfigured: {
    name: "FREE THYROXINE (F T4)",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "Free Thyroxine (F.T4)",
        result: null,
        flag: "" ,
        unit: "ng/dl",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ],
  },
}