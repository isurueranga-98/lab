import { HBA1C_GLYCOSYLATED_HAEMOGLOBIN_TYPE } from "@availableTests/HBA1C_GLYCOSYLATED_HAEMOGLOBIN/type";

type HBA1C_GLYCOSYLATED_HAEMOGLOBIN_EXAMPLES = {
  configured: HBA1C_GLYCOSYLATED_HAEMOGLOBIN_TYPE;
  notConfigured: HBA1C_GLYCOSYLATED_HAEMOGLOBIN_TYPE;
};

export const EXAMPLES: HBA1C_GLYCOSYLATED_HAEMOGLOBIN_EXAMPLES = {
  configured: {
    name: "HBA1C (GLYCOSYLATED HAEMOGLOBIN)",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "HBA1C",
        result: null,
        unit: "%",
        flag: "",
        referenceRange: {
          low: 4,
          high: 6,
        },
      },
    ],
  },
  notConfigured: {
    name: "HBA1C (GLYCOSYLATED HAEMOGLOBIN)",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "HBA1C",
        result: null,
        unit: "%",
        flag: "",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ],
  },
};
