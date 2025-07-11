export type FILARIA_ANTIBODY_TEST_FAT_TYPE = {
  id?: string;
  readonly name: "FILARIA ANTIBODY TEST(FAT)";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "FILARIA - IgM";
      result: "positive" | "negative" | null;
    },
    {
      readonly name: "FILARIA - IgG";
      result: "positive" | "negative" | null;
    },
  ];
};
