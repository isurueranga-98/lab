export type HBA1C_GLYCOSYLATED_HAEMOGLOBIN_TYPE = {
  id?: string;
  readonly name: "HBA1C (GLYCOSYLATED HAEMOGLOBIN)";
  price: number | null;
  readonly sampleType: "BLOOD";
  results: [
    {
      readonly name: "HBA1C";
      result: number | null;
      readonly unit: "%";
      flag: "" | "L" | "H";
      referenceRange: {
        low: number | null;
        high: number | null;
      };
    },
  ];
};
