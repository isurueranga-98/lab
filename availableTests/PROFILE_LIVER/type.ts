export type PROFILE_LIVER_TYPE  = {
  id?: string;
  readonly name: "PROFILE - LIVER";
  price: number | null;
  readonly sampleType: "BLOOD";

  results: [
    {
      readonly name: "TOTAL PROTEIN";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "g/dL";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "ALBUMIN";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "g/dL";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "GLOBULIN";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "g/dL";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "ALBUMIN / GLOBULIN RATIO";
      result: number | null;
      flag: "" | "L" | "H";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "TOTAL BILIRUBIN";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "mg/dL";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "ALKALINE PHOSPHATTASE";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "U/L";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "SGOT (AST)";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "U/L";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "SGPT (ALT)";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "U/L";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
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
  ]
}