export type URIC_ACID_TYPE = {
  id?: string;
  readonly name: "URIC - ACID";
  price: number | null;
  readonly sampleType: "BLOOD";

  results :[

    {
      readonly name: "URIC ACID";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "mg/dL";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },

  ]

}