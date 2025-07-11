export type HIV_1_AND_2_ANTIBODY_TYPE = {
  id?: string;
  readonly name: "HIV (1 & 2) ANTIBODY";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "HIV 1 & 2 ANTIBODY";
      result: "positive" | "negative" | null;
    },
  ];
};
