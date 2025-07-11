import { BlOOD_UREA_TYPE } from "@availableTests/BlOOD_UREA/type";

type BlOOD_UREA_EXAMPLES = {
  configured: BlOOD_UREA_TYPE;
  notConfigured: BlOOD_UREA_TYPE;
};
export const EXAMPLES: BlOOD_UREA_EXAMPLES = {
  configured: {
    name: "BlOOD UREA",
    price: 1200,
    sampleType: "BLOOD",
    results:[
      {
        name: "BlOOD UREA",
        result:null,
        flag: "",
        unit: "mg/dl",
        referenceRange: {
          low:8,
          high:5,
        },
      },
    ]
  },
  notConfigured: {
    name: "BlOOD UREA",
    price: null,
    sampleType: "BLOOD",
    results:[
      {
        name: "BlOOD UREA",
        result:null,
        flag: "",
        unit: "mg/dl",
        referenceRange: {
          low:null,
          high:null,
        },
      },
    ]
  },
}