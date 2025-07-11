import { LIPID_PROFILE_TYPE } from "@availableTests/LIPID_PROFILE/type";

type LIPID_PROFILE_EXAMPLES = {
  configured: LIPID_PROFILE_TYPE;
  notConfigured: LIPID_PROFILE_TYPE;
};

export const EXAMPLES: LIPID_PROFILE_EXAMPLES = {
  configured: {
    name: "LIPID PROFILE",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "TOTAL CHOLESTEROL",
        result: null,
        flag: "" ,
        unit: "mg/dL",
        referenceRange: {
          low: 1,
          hight: 6,
        },
      },
      {
        name: "SERUM TRIGLYCERIDES",
        result: null,
        flag: "" ,
        unit: "mg/dL",
        referenceRange: {
          low: 2,
          hight: 6,
        },
      },
      {
        name: "H.D.L.",
        result: null,
        flag: "" ,
        unit: "mg/dL",
        referenceRange: {
          low: 1,
          hight: 8,
        },
      },
      {
        name: "L.D.L.",
        result: null,
        flag: "" ,
        unit: "mg/dL",
        referenceRange: {
          low: 3,
          hight: 7,
        },
      },
      {
        name: "V.L.D.L.",
        result: null,
        flag: "" ,
        unit: "mg/dL",
        referenceRange: {
          low: 2,
          hight: 8,
        },
      },
      {
        name: "CHOLESTEROL / HDL",
        result: null,
        flag: "" ,
        unit: "",
        referenceRange: {
          low: 2,
          hight: 6,
        },
      },
      {
        name: "LDL/ HDL",
        result: null,
        flag: "" ,
        unit: "",
        referenceRange: {
          low: 3,
          hight: 9,
        },
      },
    ],
  },
  notConfigured: {
    name: "LIPID PROFILE",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "TOTAL CHOLESTEROL",
        result: null,
        flag: "" ,
        unit: "mg/dL",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
      {
        name: "SERUM TRIGLYCERIDES",
        result: null,
        flag: "" ,
        unit: "mg/dL",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
      {
        name: "H.D.L.",
        result: null,
        flag: "" ,
        unit: "mg/dL",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
      {
        name: "L.D.L.",
        result: null,
        flag: "" ,
        unit: "mg/dL",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
      {
        name: "V.L.D.L.",
        result: null,
        flag: "" ,
        unit: "mg/dL",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
      {
        name: "CHOLESTEROL / HDL",
        result: null,
        flag: "" ,
        unit: "",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
      {
        name: "LDL/ HDL",
        result: null,
        flag: "" ,
        unit: "",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
    ],
  },
}