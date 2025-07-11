export type POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_BREAKFAST_TYPE = {
  id?: string;
  readonly name: "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER BREAKFAST)";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "POST PRANDIAL PLASMA GLUCOSE";
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
