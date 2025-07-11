export type LIPID_PROFILE_RANDOM_TYPE = {
  id?: string;
  readonly name: "LIPID PROFILE (RANDOM)";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "SERUM CHOLESTEROL";
      result: number | null;
      readonly unit: "mg/dL";
      
    },
    {
      readonly name: "SERUM TRYGLYCERIDES";
      result: number | null;
      readonly unit: "mg/dL";
      
    },
    {
      readonly name: "H.D.L";
      result: number | null;
      readonly unit: "mg/dL";
      
    },
    {
      readonly name: "L.D.L";
      result: number | null;
      readonly unit: "mg/dL";
      
    },
    {
      readonly name: "V.L.D.L";
      result: number | null;
      readonly unit: "mg/dL";
      
    },
    {
      readonly name: "CHOLESTEROL / HDL";
      result: number | null;
      
    },
    {
      readonly name: "LDL / HDL";
      result: number | null;
      
    },
  ],
}