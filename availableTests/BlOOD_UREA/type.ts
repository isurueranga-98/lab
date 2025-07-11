export type BlOOD_UREA_TYPE = {
  id?: string;
  readonly name: "BlOOD UREA";
  price: number | null;
  readonly sampleType: "BLOOD";
  results:[
    {
      readonly name: "BlOOD UREA";
      result: number | null;
      flag: "" | "L" | "H";
      readonly unit: "mg/dl";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ]
}