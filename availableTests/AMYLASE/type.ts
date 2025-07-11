export type AMYLASE_TYPE = {
  id?: string;
  readonly name: "AMYLASE";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "SERUM AMAYLASE";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "U/L";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ]
}