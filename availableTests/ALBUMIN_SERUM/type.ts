export type ALBUMIN_SERUM_TYPE ={
  id?: string;
  readonly name: "AlBUMIN - SERUM";
  price: number | null;
  readonly sampleType: "BLOOD";

  results :[

    {
      readonly name: "AlBUMIN";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "g/dl";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },

  ]
}  