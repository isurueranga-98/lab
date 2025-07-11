import { GAMMA_GLUTAMYL_TRANSFERASE_GGT_TYPE } from "@availableTests/GAMMA_GLUTAMYL_TRANSFERASE_GGT/type";

type GAMMA_GLUTAMYL_TRANSFERASE_GGT_EXAMPLES = {
  configured: GAMMA_GLUTAMYL_TRANSFERASE_GGT_TYPE;
  notConfigured: GAMMA_GLUTAMYL_TRANSFERASE_GGT_TYPE;
};

export const EXAMPLES: GAMMA_GLUTAMYL_TRANSFERASE_GGT_EXAMPLES = {
  configured: {
    name: "GAMMA GLUTAMYL TRANSFERASE(GGT)",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "GAMMA - GT",
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
    name: "GAMMA GLUTAMYL TRANSFERASE(GGT)",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "GAMMA - GT",
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
}