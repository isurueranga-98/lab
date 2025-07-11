export type DENGUE_VIRUS_ANTIBODY_TEST_TYPE = {
  id?: string;
  readonly name: "DENGUE VIRUS ANTIBODY TEST";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "Dengue IgM Antibody";
      result: "positive" | "negative" | null;
    },
    {
      readonly name: "Dengue IgG Antibody";
      result: "positive" | "negative" | null;
    },
  ];
};
