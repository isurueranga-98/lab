export type SERUM_CHOLESTEROL_TYPE = {
  id?: string;
  name: "SERUM CHOLESTEROL";
  sampleType: "BLOOD";
  price: number | null;
  results: [
    {
      name: "SERUM CHOLESTEROL";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "mg/dL";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ];
};
