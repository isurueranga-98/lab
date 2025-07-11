export type FASTING_PLASMA_GLUCOSE_TYPE = {
  id?: string;
  name: "FASTING PLASMA GLUCOSE";
  sampleType: "BLOOD";
  price: number | null;
  results: [
    {
      name: "Glucose - Fasting";
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
