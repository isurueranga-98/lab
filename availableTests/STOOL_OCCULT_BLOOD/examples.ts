import { STOOL_OCCULT_BLOOD_TYPE } from "@availableTests/STOOL_OCCULT_BLOOD/type"

type STOOL_OCCULT_BLOOD_EXAMPLES = {
  configured: STOOL_OCCULT_BLOOD_TYPE;
  notConfigured: STOOL_OCCULT_BLOOD_TYPE;
};

export const EXAMPLES: STOOL_OCCULT_BLOOD_EXAMPLES = {
  configured: {
    name: "STOOL OCCULT BLOOD",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "STOOL OCCULT BLOOD",
        result:null,
              
      },
    ],
  },
  notConfigured: {
    name: "STOOL OCCULT BLOOD",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "STOOL OCCULT BLOOD",
        result:null,
              
      },
    ],
  },
}