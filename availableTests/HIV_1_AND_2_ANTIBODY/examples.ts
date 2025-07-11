import { HIV_1_AND_2_ANTIBODY_TYPE } from "@availableTests/HIV_1_AND_2_ANTIBODY/type"

type HIV_1_AND_2_ANTIBODY_EXAMPLES = {
  configured: HIV_1_AND_2_ANTIBODY_TYPE;
  notConfigured: HIV_1_AND_2_ANTIBODY_TYPE;
};

export const EXAMPLES: HIV_1_AND_2_ANTIBODY_EXAMPLES = {
  configured: {
    name: "HIV (1 & 2) ANTIBODY",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "HIV 1 & 2 ANTIBODY",
        result: null,
        
      },
    ],
  },
  notConfigured: {
    name: "HIV (1 & 2) ANTIBODY",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "HIV 1 & 2 ANTIBODY",
        result: null,
        
      },
    ],
  },
}