export type HEPATITIS_C_ANTIBODY_TYPE = {
  id?: string;
  readonly name: "HEPATITIS C ANTIBODY";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "Hepatitis C Antibody";
      result: "positive" | "negative" | null;
    },
  ];
};
