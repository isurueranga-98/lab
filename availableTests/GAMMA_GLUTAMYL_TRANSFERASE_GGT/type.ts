export type GAMMA_GLUTAMYL_TRANSFERASE_GGT_TYPE = {
  id?: string;
  readonly name: "GAMMA GLUTAMYL TRANSFERASE(GGT)";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "GAMMA - GT";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "U/L";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ],
}