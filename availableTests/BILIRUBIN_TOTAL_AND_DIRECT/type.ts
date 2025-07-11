export type BILIRUBIN_TOTAL_AND_DIRECT_TYPE = {
  id?: string;
  readonly name: "BILIRUBIN TOTAL & DIRECT";
  price: number | null;
  readonly sampleType: "BLOOD";

  results: [
    {
      readonly name: "BILIRUBIN - TOTAL";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "mg/dl";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "BILIRUBIN - DIRECT";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "mg/dl";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "BILIRUBIN - INDIRECT";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "mg/dl";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ];
};
