export type SERUM_CREATININE_TYPE = {
  id?: string;
  name: "SERUM CREATININE";
  sampleType: "BLOOD";
  price: number | null;
  results: [
    {
      name: "SERUM CREATININE";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mg/dL";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      name: "Estimated GFR CKD - EPI";
      result: number | null;
      unit: "mL/min/1.73m2";
      flag: "" | "L" | "H";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ];
};
