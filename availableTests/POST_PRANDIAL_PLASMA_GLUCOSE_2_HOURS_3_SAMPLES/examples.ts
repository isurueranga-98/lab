import { POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_3_SAMPLES_TYPE } from "@availableTests/POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_3_SAMPLES/type";

type POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_3_SAMPLES_EXAMPLES = {
  configured: POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_3_SAMPLES_TYPE;
  notConfigured: POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_3_SAMPLES_TYPE;
};

export const EXAMPLES: POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_3_SAMPLES_EXAMPLES =
  {
    configured: {
      name: "POST PRANDIAL PLASMA GLUCOSE (2 hours) 3 SAMPLES",
      price: 1200,
      sampleType: "BLOOD",
      results: [
        {
          name: "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER BREAKFAST)",
          result: null,
          unit: "mg/dl",
          flag: "",
          referenceRange: {
            low: 0,
            high: 0,
          },
        },
        {
          name: "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER LUNCH))",
          result: null,
          unit: "mg/dl",
          flag: "",
          referenceRange: {
            low: 0,
            high: 0,
          },
        },
        {
          name: "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER DINNER))",
          result: null,
          unit: "mg/dl",
          flag: "",
          referenceRange: {
            low: 0,
            high: 0,
          },
        },
      ],
    },
    notConfigured: {
      name: "POST PRANDIAL PLASMA GLUCOSE (2 hours) 3 SAMPLES",
      price: null,
      sampleType: "BLOOD",
      results: [
        {
          name: "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER BREAKFAST)",
          result: null,
          unit: "mg/dl",
          flag: "",
          referenceRange: {
            low: null,
            high: null,
          },
        },
        {
          name: "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER LUNCH))",
          result: null,
          unit: "mg/dl",
          flag: "",
          referenceRange: {
            low: null,
            high: null,
          },
        },
        {
          name: "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER DINNER))",
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
