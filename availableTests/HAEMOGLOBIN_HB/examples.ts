import { HAEMOGLOBIN_HB_TYPE } from "@/availableTests/HAEMOGLOBIN_HB/type";

type HAEMOGLOBIN_HB_EXAMPLES = {
  configured: HAEMOGLOBIN_HB_TYPE;
  notConfigured: HAEMOGLOBIN_HB_TYPE;
};

export const EXAMPLES: HAEMOGLOBIN_HB_EXAMPLES = {
  configured: {
    name: "HAEMOGLOBIN (HB)",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "R.B.C",
        result: null,
        flag: "",
        unit: "M/μL",
        referenceRange: {
          low: 2,
          hight: 8,
        },
      },
      {
        name: "HAEMOGLOBIN",
        result: null,
        flag: "",
        unit: "g/dL",
        referenceRange: {
          low: 1,
          hight: 5,
        },
      },
      {
        name: "HCT",
        result: null,
        flag: "",
        unit: "%",
        referenceRange: {
          low: 1,
          hight: 5,
        },
      },
      {
        name: "M.C.V",
        result: null,
        flag: "",
        unit: "fL",
        referenceRange: {
          low: 2,
          hight: 8,
        },
      },
      {
        name: "M.C.H",
        result: null,
        flag: "",
        unit: "pg",
        referenceRange: {
          low: 1,
          hight: 9,
        },
      },
      {
        name: "M.C.H.C",
        result: null,
        flag: "",
        unit: "g/dL",
        referenceRange: {
          low: 1,
          hight: 8,
        },
      },
      {
        name: "RDW",
        result: null,
        flag: "",
        unit: "%",
        referenceRange: {
          low: 4,
          hight: 6,
        },
      },
    ],
  },
  notConfigured: {
    name: "HAEMOGLOBIN (HB)",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "R.B.C",
        result: null,
        flag: "",
        unit: "M/μL",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
      {
        name: "HAEMOGLOBIN",
        result: null,
        flag: "",
        unit: "g/dL",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
      {
        name: "HCT",
        result: null,
        flag: "",
        unit: "%",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
      {
        name: "M.C.V",
        result: null,
        flag: "",
        unit: "fL",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
      {
        name: "M.C.H",
        result: null,
        flag: "",
        unit: "pg",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
      {
        name: "M.C.H.C",
        result: null,
        flag: "",
        unit: "g/dL",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
      {
        name: "RDW",
        result: null,
        flag: "",
        unit: "%",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
    ],
  },
};
