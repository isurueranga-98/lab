export type TSH_3RD_GENERATION_TYPE = {
  id?: string;
  readonly name: "TSH (3rd Generation)";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "TSH - 3rd Generation";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "μIU/ml";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ],
}