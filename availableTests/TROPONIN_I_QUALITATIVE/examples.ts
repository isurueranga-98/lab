import { TROPONIN_I_QUALITATIVE_TYPE } from "@/availableTests/TROPONIN_I_QUALITATIVE/type";

type TRAPONIN_I_QUALITATIVE_EXAMPLES = {
  configured: TROPONIN_I_QUALITATIVE_TYPE;
  notConfigured: TROPONIN_I_QUALITATIVE_TYPE;
};

export const EXAMPLES: TRAPONIN_I_QUALITATIVE_EXAMPLES = {
  configured: {
    name: "TROPONIN I (QUALITATIVE)",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "Troponin I",
        result: null,
      },
    ],
  },
  notConfigured: {
    name: "TROPONIN I (QUALITATIVE)",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "Troponin I",
        result: "negative",
      },
    ],
  },
};
