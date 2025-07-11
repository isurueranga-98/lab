export type ELECTROLYTES_SERUM_TYPE = {
  id?: string;
  readonly name: "ELECTROLYTES - SERUM";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "SERUM SODIUM";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "mmol/L";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "SERUM POTASSIUM";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "mmol/L";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "SERUM CHLORIDE";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "mmol/L";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ];
};
