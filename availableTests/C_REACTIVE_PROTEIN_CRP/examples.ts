import { C_REACTIVE_PROTEIN_CRP_TYPE } from "@availableTests/C_REACTIVE_PROTEIN_CRP/type"

type C_REACTIVE_PROTEIN_CRP_EXAMPLES = {
  configured: C_REACTIVE_PROTEIN_CRP_TYPE;
  notConfigured: C_REACTIVE_PROTEIN_CRP_TYPE;
};
export const EXAMPLES: C_REACTIVE_PROTEIN_CRP_EXAMPLES = {
  configured: {
    name: "C REACTIVE PROTEIN (CRP)",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "C REACTIVE PROTEIN",
        result: null,
        flag: "" ,
        unit: "mg/dL",
        referenceRange: {
          low: 5,
          high: 9,
        },
      },
    ],
},
  notConfigured: {
    name: "C REACTIVE PROTEIN (CRP)",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "C REACTIVE PROTEIN",
        result: null,
        flag: "" ,
        unit: "mg/dL",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ],
},
}