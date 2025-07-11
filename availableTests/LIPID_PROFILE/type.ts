export type LIPID_PROFILE_TYPE = {
  id?: string;
  name: "LIPID PROFILE";
  sampleType: "BLOOD";
  price: number | null;
  results: [
    {
      name: "TOTAL CHOLESTEROL";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mg/dL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "SERUM TRIGLYCERIDES";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mg/dL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "H.D.L.";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mg/dL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "L.D.L.";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mg/dL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "V.L.D.L.";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mg/dL";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "CHOLESTEROL / HDL";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
    {
      name: "LDL/ HDL";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
  ];
};
