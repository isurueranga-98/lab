import { SGOT_AST_TYPE } from "@availableTests/SGOT_AST/type";

type SGOT_AST_EXAMPLES = {
  configured: SGOT_AST_TYPE;
  notConfigured: SGOT_AST_TYPE;
};

export const EXAMPLES: SGOT_AST_EXAMPLES = {
  configured: {
    name: "SGOT (AST)",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "SGOT (AST)",
        result: null,
        flag: "" ,
        unit: "U/L",
        referenceRange: {
          low: 1,
          hight: 4,
        },
      },
    ],
  },
  notConfigured: {
    name: "SGOT (AST)",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "SGOT (AST)",
        result: null,
        flag: "" ,
        unit: "U/L",
        referenceRange: {
          low: null,
          hight: null,
        },
      },
    ],
  },
}