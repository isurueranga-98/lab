import { PROFILE_LIVER_TYPE } from "@availableTests/PROFILE_LIVER/type"

type PROFILE_LIVER_EXAMPLES = {
  configured: PROFILE_LIVER_TYPE;
  notconfigured: PROFILE_LIVER_TYPE;  
}

export const EXAMPLES: PROFILE_LIVER_EXAMPLES = {

  configured:{
    name: "PROFILE - LIVER",
    price: 1200,
    sampleType: "BLOOD",
    results:[
      {
        name: "TOTAL PROTEIN",
        result:null,
        flag: "",
        unit: "g/dL",
        referenceRange: {
          low: 8,
          high: 5,
        },
      },
      {
        name: "ALBUMIN",
        result: null,
        flag: "" ,
        unit: "g/dL",
        referenceRange: {
          low: 5,
          high: 7,
        },
      },
      {
        name: "GLOBULIN",
        result: null,
        flag: "" ,
        unit: "g/dL",
        referenceRange: {
          low: 7,
          high: 1,
        },
      },
      {
        name: "ALBUMIN / GLOBULIN RATIO",
        result: null,
        flag: "" ,
        referenceRange: {
          low: 5,
          high: 9,
        },
      },
      {
        name: "TOTAL BILIRUBIN",
        result: null,
        flag: "" ,
        unit: "mg/dL",
        referenceRange: {
          low: 6,
          high: 3,
        },
      },
      {
        name: "ALKALINE PHOSPHATTASE",
        result: null,
        flag: "" ,
        unit: "U/L",
        referenceRange: {
          low: 8,
          high: 2,
        },
      },
      {
        name: "SGOT (AST)",
        result: null,
        flag: "" ,
        unit: "U/L",
        referenceRange: {
          low: 7,
          high: 2,
        },
      },
      {
        name: "SGPT (ALT)",
        result: null,
        flag: "" ,
        unit: "U/L",
        referenceRange: {
          low: 4,
          high: 9,
        },
      },
      {
        name: "GAMMA - GT",
        result: null,
        flag: "" ,
        unit: "U/L",
        referenceRange: {
          low: 4,
          high: 2,
        },
      },
      
    ],
  },
  notconfigured:{
    name: "PROFILE - LIVER",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "TOTAL PROTEIN",
        result:null,
        flag: "",
        unit: "g/dL",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "ALBUMIN",
        result: null,
        flag: "" ,
        unit: "g/dL",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "GLOBULIN",
        result: null,
        flag: "" ,
        unit: "g/dL",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "ALBUMIN / GLOBULIN RATIO",
        result: null,
        flag: "" ,
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "TOTAL BILIRUBIN",
        result: null,
        flag: "" ,
        unit: "mg/dL",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "ALKALINE PHOSPHATTASE",
        result: null,
        flag: "" ,
        unit: "U/L",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "SGOT (AST)",
        result: null,
        flag: "" ,
        unit: "U/L",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "SGPT (ALT)",
        result: null,
        flag: "" ,
        unit: "U/L",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "GAMMA - GT",
        result: null,
        flag: "" ,
        unit: "U/L",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ],
  },
};