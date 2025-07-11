export type GLUCOSE_LEVEL_1HR_AFTER_50G_OF_GLUCOSE_GLUCOSE_CHALANGE_TEST_TYPE = {
  id?: string;
  readonly name: "Glucose Level - 1hr After 50 g of Glucose (Glucose Chalange Test)";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "GLUCOSE CHALANGE TEST";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "mg/dl";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ],
}