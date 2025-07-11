export type URINE_FULL_REPORT_TYPE = {
  id?: string;
  readonly name: "URINE FULL REPORT";
  price: number | null;
  readonly sampleType: "URINE";
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
  ];
}