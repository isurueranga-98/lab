export type VDRL_TYPE = {
  id?: string;
  readonly name: "V.D.R.L";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "V.D.R.L";
      result: "Non Reactive" | null;
      
    },
  ],
}