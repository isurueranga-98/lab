export type POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_3_SAMPLES_TYPE = {
  id?: string;
  readonly name: "POST PRANDIAL PLASMA GLUCOSE (2 hours) 3 SAMPLES";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER BREAKFAST)";
      result: number | null;
      readonly unit: "mg/dl";
      flag: "" | "L" | "H";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER LUNCH))";
      result: number | null;
      readonly unit: "mg/dl";
      flag: "" | "L" | "H";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
    {
      readonly name: "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER DINNER))";
      result: number | null;
      readonly unit: "mg/dl";
      flag: "" | "L" | "H";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ];
};
