export type TOTAL_PROTEIN_SERUM_TYPE = {

  id?: string;
  readonly name: "TOTAL PROTEIN - SERUM";
  price: number | null;
  readonly sampleType: "BLOOD";

  results:[
    {
      readonly name: "TOTAL PROTEIN";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "g/dl";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "ALBUMIN";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "g/L";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "GLOBULIN";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "g/L";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "A / G RATIO";
      result: number | null;
      flag: "" | "L" | "H";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ]
}