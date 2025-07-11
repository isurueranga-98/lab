export type ORAL_GLUCOSE_TOLERANCE_TEST_3_SAMPLE_TYPE = {
  id?: string;
  readonly name: "ORAL GLUCOSE TOLERANCE TEST - 3 SAMPLE";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "Fasting";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "mg/dl";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "1 hour";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "mg/dl";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "2 hour";
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