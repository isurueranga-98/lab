export type STOOL_OCCULT_BLOOD_TYPE = {
  id?: string;
  readonly name: "STOOL OCCULT BLOOD";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "STOOL OCCULT BLOOD";
      result: "positive" | "negative" | null;
    },
  ];
};
