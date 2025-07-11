import { FASTING_PLASMA_GLUCOSE_TYPE } from "@availableTests/FASTING_PLASMA_GLUCOSE";

type FASTING_PLASMA_GLUCOSE_EXAMPLES = {
  configured: FASTING_PLASMA_GLUCOSE_TYPE;
  notConfigured: FASTING_PLASMA_GLUCOSE_TYPE;
};

export const FASTING_PLASMA_GLUCOSE_EXAMPLES: FASTING_PLASMA_GLUCOSE_EXAMPLES =
  {
    configured: {
      name: "FASTING PLASMA GLUCOSE",
      price: 1200,
      sampleType: "BLOOD",
      results: [
        {
          name: "Glucose - Fasting",
          result: null,
          flag: "",
          unit: "mg/dL",
          referenceRange: {
            low: 5,
            high: 9,
          },
        },
      ],
    },
    notConfigured: {
      name: "FASTING PLASMA GLUCOSE",
      price: null,
      sampleType: "BLOOD",
      results: [
        {
          name: "Glucose - Fasting",
          result: null,
          flag: "",
          unit: "mg/dL",
          referenceRange: {
            low: null,
            high: null,
          },
        },
      ],
    },
  };
