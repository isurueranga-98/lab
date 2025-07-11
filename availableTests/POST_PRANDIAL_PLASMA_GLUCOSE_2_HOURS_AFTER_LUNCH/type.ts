export type POST_PRANDIAL_PLASMA_GLUCOSE_2_HOURS_AFTER_LUNCH_TYPE = {
  id?: string;
  readonly name: "POST PRANDIAL PLASMA GLUCOSE (2 HOURS AFTER LUNCH)";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "POST PRANDIAL PLASMA GLUCOSE";
      result: number | null;
      readonly unit: "mg/dL";
      flag: string | null;
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ];
};
