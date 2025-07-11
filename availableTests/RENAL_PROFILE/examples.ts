import { RENAL_PROFILE_TYPE } from "@availableTests/RENAL_PROFILE/type";

type RENAL_PROFILE_EXAMPLES = {
  configured: RENAL_PROFILE_TYPE;
  notConfigured: RENAL_PROFILE_TYPE;
}

export const EXAMPLES: RENAL_PROFILE_EXAMPLES = {
  configured: {
    name: "RENAL PROFILE",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "BLOOD UREA",
        result: null,
        flag: "",
        unit: "mg/dL",
        referenceRange: {
          low: 5,
          high: 9,
        },
      },
      {
        name: "SERUM CREATININE",
        result: null,
        flag: "",
        unit: "mg/dL",
        referenceRange: {
          low: 0.5,
          high: 1.2,
        },
      },
      {
        name: "SERUM SODIUM",
        result: null,
        flag: "",
        unit: "mmol/L",
        referenceRange: {
          low: 145,
          high: 145.5,
        },
      },
      {
        name: "SERUM POTASSIUM",
        result: null,
        flag: "",
        unit: "mmol/L",
        referenceRange: {
          low: 3.5,
          high: 4.5,
        },
      },
      {
        name: "SERUM - CHLORIDE",
        result: null,
        flag: "",
        unit: "mmol/L",
        referenceRange: {
          low: 3.5,
          high: 4.5,
        },
      },
      {
        name: "TOTAL - CALCIUM",
        result: null,
        flag: "",
        unit: "mgl/dL",
        referenceRange: {
          low: 3.5,
          high: 4.5,
        },
      },
      {
        name: "INORGANIC PHOSPHORUS",
        result: null,
        flag: "",
        unit: "mg/dL",
        referenceRange: {
          low: 3.5,
          high: 4.5,
        },
      },
      {
        name: "URIC ACID",
        result: null,
        flag: "",
        unit: "mg/dL",
        referenceRange: {
          low: 3.5,
          high: 4.5,
        },
      },
    ]
  },
  notConfigured: {
    id: undefined,
    name: "RENAL PROFILE",
    sampleType: "BLOOD",
    price: null,
    results: [
      {
        name: "BLOOD UREA",
        result: null,
        flag: "",
        unit: "mg/dL",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "SERUM CREATININE",
        result: null,
        flag: "",
        unit: "mg/dL",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "SERUM SODIUM",
        result: null,
        flag: "",
        unit: "mmol/L",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "SERUM POTASSIUM",
        result: null,
        flag: "",
        unit: "mmol/L",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "SERUM - CHLORIDE",
        result: null,
        flag: "",
        unit: "mmol/L",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "TOTAL - CALCIUM",
        result: null,
        flag: "",
        unit: "mgl/dL",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "INORGANIC PHOSPHORUS",
        result: null,
        flag: "",
        unit: "mg/dL",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "URIC ACID",
        result: null,
        flag: "",
        unit: "mg/dL",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ]
  }
}