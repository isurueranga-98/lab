export type HEPATITIS_B_SURFACE_ANTIGEN_TYPE = {
  id?: string;
  readonly name: "HEPATITIS B SURFACE ANTIGEN";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "HEPATITIS B SURFACE ANTIGEN";
      result: "positive" | "negative" | null;
    },
  ];
};
