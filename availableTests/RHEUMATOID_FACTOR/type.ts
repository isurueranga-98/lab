export type RHEUMATOID_FACTOR_TYPE = {
  id?: string;
  readonly name: "RHEUMATOID FACTOR";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "RHEUMATOID FACTOR";
      result: number | null;
      readonly unit: "IU/ml";
      flag: "" | "L" | "H";
      referenceRange: {
        low: number;
        high: number;
      };
    },
  ];
};
