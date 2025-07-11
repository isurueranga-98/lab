export type URINE_PREGNANCY_TEST_TYPE = {
  id?: string;
  readonly name: "URINE PREGNANCY TEST";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "URINE FOR hCG";
      result: "positive" | "negative" | null;
    },
  ];
};
