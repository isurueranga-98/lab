import { LIPID_PROFILE_RANDOM_TYPE } from "@availableTests/LIPID_PROFILE_RANDOM/type";

type LIPID_PROFILE_RANDOM_EXAMPLES = {
  configured: LIPID_PROFILE_RANDOM_TYPE;
  notConfigured: LIPID_PROFILE_RANDOM_TYPE;
};

export const EXAMPLES: LIPID_PROFILE_RANDOM_EXAMPLES = {
  configured: {
    name: "LIPID PROFILE (RANDOM)",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "SERUM CHOLESTEROL",
        result: null,
        unit: "mg/dL",
        
      },
      {
        name: "SERUM TRYGLYCERIDES",
        result: null,
        unit: "mg/dL",
        
      },
      {
        name: "H.D.L",
        result: null,
        unit: "mg/dL",
        
      },
      {
        name: "L.D.L",
        result: null,
        unit: "mg/dL",
        
      },
      {
        name: "V.L.D.L",
        result: null,
        unit: "mg/dL",
        
      },
      {
        name: "CHOLESTEROL / HDL",
        result: null,
        
      },
      {
        name: "LDL / HDL",
        result: null,
        
      },
    ],
  },
  notConfigured: {
    name: "LIPID PROFILE (RANDOM)",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "SERUM CHOLESTEROL",
        result: null,
        unit: "mg/dL",
        
      },
      {
        name: "SERUM TRYGLYCERIDES",
        result: null,
        unit: "mg/dL",
        
      },
      {
        name: "H.D.L",
        result: null,
        unit: "mg/dL",
        
      },
      {
        name: "L.D.L",
        result: null,
        unit: "mg/dL",
        
      },
      {
        name: "V.L.D.L",
        result: null,
        unit: "mg/dL",
        
      },
      {
        name: "CHOLESTEROL / HDL",
        result: null,
        
      },
      {
        name: "LDL / HDL",
        result: null,
        
      },
    ],
  },
}