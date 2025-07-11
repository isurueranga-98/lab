export type HAEMOGLOBIN_HB_TYPE = {
  id?: string;
  name: "HAEMOGLOBIN (HB)";
  sampleType: "BLOOD";
  price: number | null;
  results: [
    {
      name: "R.B.C";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "M/μL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "HAEMOGLOBIN";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "g/dL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "HCT";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "%";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "M.C.V";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "fL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "M.C.H";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "pg";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "M.C.H.C";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "g/dL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "RDW";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "%";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
  ];
};
