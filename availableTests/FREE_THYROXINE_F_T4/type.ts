export type FREE_THYROXINE_F_T4_TYPE = {
  id?: string;
  readonly name: "FREE THYROXINE (F T4)";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "Free Thyroxine (F.T4)";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "ng/dl";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ],
}