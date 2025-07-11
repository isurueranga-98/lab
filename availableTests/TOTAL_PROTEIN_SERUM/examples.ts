import { TOTAL_PROTEIN_SERUM_TYPE } from "@availableTests/TOTAL_PROTEIN_SERUM/type"

type TOTAL_PROTEIN_SERUM_EXAMPLES = {
  configured: TOTAL_PROTEIN_SERUM_TYPE;
  notConfigured: TOTAL_PROTEIN_SERUM_TYPE;
};

export const EXAMPLES: TOTAL_PROTEIN_SERUM_EXAMPLES = {

  configured:{
    name: "TOTAL PROTEIN - SERUM",
    price: 1200,
    sampleType: "BLOOD",
    results:[
      {
        name: "TOTAL PROTEIN",
        result: null,
        flag: "",
        unit: "g/dl",
        referenceRange: {
          low: 8,
          high: 4,
        },
      },
      {
        name: "ALBUMIN",
        result: null,
        flag: "",
        unit: "g/L",
        referenceRange: {
          low: 5,
          high: 7,
        },
      },
      {
        name: "GLOBULIN",
        result: null,
        flag: "",
        unit: "g/L",
        referenceRange: {
          low: 7,
          high: 2,
        },
      },
      {
        name: "A / G RATIO",
        result: null,
        flag: "",
        referenceRange: {
          low: 7,
          high: 3,
        },
      },
    ],
  },
  notConfigured:{
    name: "TOTAL PROTEIN - SERUM",
    price: null,
    sampleType: "BLOOD",
    results:[
      {
        name: "TOTAL PROTEIN",
        result: null,
        flag: "",
        unit: "g/dl",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "ALBUMIN",
        result: null,
        flag: "",
        unit: "g/L",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "GLOBULIN",
        result: null,
        flag: "",
        unit: "g/L",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "A / G RATIO",
        result: null,
        flag: "",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ],
}
}