import { POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_DINNER_TYPE } from "@availableTests/POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_DINNER/type";

type POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_DINNER_EXAMPLES = {
  configured: POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_DINNER_TYPE;
  notConfigured: POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_DINNER_TYPE;
};

export const EXAMPLES: POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_DINNER_EXAMPLES =
  {
    configured: {
      name: "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER DINNER)",
      price: 1200,
      sampleType: "BLOOD",
      results: [
        {
          name: "POST PRANDIAL PLASMA GLUCOSE",
          result: null,
          unit: "mg/dL",
          flag: "",
          referenceRange: {
            low: 70,
            high: 140,
          },
        },
      ],
    },
    notConfigured: {
      name: "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER DINNER)",
      price: null,
      sampleType: "BLOOD",
      results: [
        {
          name: "POST PRANDIAL PLASMA GLUCOSE",
          result: null,
          unit: "mg/dL",
          flag: null,
          referenceRange: {
            low: 0,
            high: 0,
          },
        },
      ],
    },
  };
