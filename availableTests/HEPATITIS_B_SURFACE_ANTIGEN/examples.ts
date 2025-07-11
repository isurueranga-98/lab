import { HEPATITIS_B_SURFACE_ANTIGEN_TYPE } from "@availableTests/HEPATITIS_B_SURFACE_ANTIGEN/type"

type HEPATITIS_B_SURFACE_ANTIGEN_EXAMPLES = {
  configured: HEPATITIS_B_SURFACE_ANTIGEN_TYPE;
  notConfigured: HEPATITIS_B_SURFACE_ANTIGEN_TYPE;
};
export const EXAMPLES: HEPATITIS_B_SURFACE_ANTIGEN_EXAMPLES = {
  configured: {
    name: "HEPATITIS B SURFACE ANTIGEN",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "HEPATITIS B SURFACE ANTIGEN",
        result: null,
        
      },
    ],
  },
  notConfigured: {
    name: "HEPATITIS B SURFACE ANTIGEN",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "HEPATITIS B SURFACE ANTIGEN",
        result: null,
        
      },
    ],
  },
}