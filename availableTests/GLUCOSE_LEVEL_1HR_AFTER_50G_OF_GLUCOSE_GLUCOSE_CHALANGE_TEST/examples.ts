import { GLUCOSE_LEVEL_1HR_AFTER_50G_OF_GLUCOSE_GLUCOSE_CHALANGE_TEST_TYPE } from "@availableTests/GLUCOSE_LEVEL_1HR_AFTER_50G_OF_GLUCOSE_GLUCOSE_CHALANGE_TEST/type";

type GLUCOSE_LEVEL_1HR_AFTER_50G_OF_GLUCOSE_GLUCOSE_CHALANGE_TEST_EXAMPLES = {
  configured: GLUCOSE_LEVEL_1HR_AFTER_50G_OF_GLUCOSE_GLUCOSE_CHALANGE_TEST_TYPE;
  notConfigured: GLUCOSE_LEVEL_1HR_AFTER_50G_OF_GLUCOSE_GLUCOSE_CHALANGE_TEST_TYPE;
};

export const EXAMPLES: GLUCOSE_LEVEL_1HR_AFTER_50G_OF_GLUCOSE_GLUCOSE_CHALANGE_TEST_EXAMPLES = {
  configured: {
    name: "Glucose Level - 1hr After 50 g of Glucose (Glucose Chalange Test)",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "GLUCOSE CHALANGE TEST",
        result: null,
        flag: "",
        unit: "mg/dl",
        referenceRange: {
          low: 1,
          high: 8,
        },
      },
    ],
  },
  notConfigured: {
    name: "Glucose Level - 1hr After 50 g of Glucose (Glucose Chalange Test)",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "GLUCOSE CHALANGE TEST",
        result: null,
        flag: "",
        unit: "mg/dl",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ],
  },
}