export type SGOT_AND_SGPT_TYPE = {
  id?: string;
  name: "SGOT & SGPT (AST & ALT)";
  sampleType: "BLOOD";
  price: number | null;
  results: [
    {
      name: "SGOT (AST)";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "U/L";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      name: "SGPT (ALT)";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "U/L";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ];
};
