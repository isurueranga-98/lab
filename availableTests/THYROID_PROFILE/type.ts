export type THYROID_PROFILE_TYPE = {
  id?: string;
  readonly name: "THYROID PROFILE";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "TSH - 3rd Generation";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "μlU/ml";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
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
    {
      readonly name: "Free Triiodothyronine (F.T3)";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "pg/ml";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ],
}