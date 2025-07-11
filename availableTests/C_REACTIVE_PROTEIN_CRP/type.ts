export type C_REACTIVE_PROTEIN_CRP_TYPE = {
  id?: string;
  readonly name: "C REACTIVE PROTEIN (CRP)";
  price: number | null;
  readonly sampleType: "BLOOD";
  results:[
    {
      readonly name: "C REACTIVE PROTEIN";
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