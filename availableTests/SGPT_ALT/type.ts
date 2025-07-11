export type SGPT_ALT_TYPE = {
  id?: string;
  name: "SGPT (ALT)";
  sampleType: "BLOOD";
  price: number | null;
  results: [
    {
      name: "SGPT (ALT)";
      result: number | null;
      flag: "" | "L" | "H";
      unit: "U/L";
      referenceRange: {
        low: number | null;
        hight: number | null;
      };
    },
  ];
};
