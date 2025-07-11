import { POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST_TYPE } from "@availableTests/POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST/type";

type POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST_EXAMPLES = {
  configured: POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST_TYPE;
  notConfigured: POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST_TYPE;
};

export const EXAMPLES: POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST_EXAMPLES =
  {
    configured: {
      name: "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER BREAKFAST)",
      price: 1200,
      sampleType: "BLOOD",
      results: [
        {
          name: "POST PRANDIAL PLASMA GLUCOSE",
          result: null,
          unit: "mg/dl",
          flag: "",
          referenceRange: {
            low: 2,
            high: 5,
          },
        },
      ],
    },
    notConfigured: {
      name: "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER BREAKFAST)",
      price: null,
      sampleType: "BLOOD",
      results: [
        {
          name: "POST PRANDIAL PLASMA GLUCOSE",
          result: null,
          unit: "mg/dl",
          flag: "",
          referenceRange: {
            low: null,
            high: null,
          },
        },
      ],
    },
  };
