import { VDRL_TYPE } from "@availableTests/VDRL/type";

type VDRL_EXAMPLES = {
  configured: VDRL_TYPE;
  notConfigured: VDRL_TYPE;
};

export const EXAMPLES: VDRL_EXAMPLES = {
  configured: {
    name: "V.D.R.L",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "V.D.R.L",
        result: null,
        
      },
    ],
  },
  notConfigured: {
    name: "V.D.R.L",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "V.D.R.L",
        result: null,
        
      },
    ],
  },
}