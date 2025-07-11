import { DENGUE_VIRUS_ANTIBODY_TEST_TYPE } from "@availableTests/DENGUE_VIRUS_ANTIBODY_TEST/type"

type DENGUE_VIRUS_ANTIBODY_TEST_EXAMPLES = {
  configured: DENGUE_VIRUS_ANTIBODY_TEST_TYPE;
  notConfigured: DENGUE_VIRUS_ANTIBODY_TEST_TYPE;
};
export const EXAMPLES: DENGUE_VIRUS_ANTIBODY_TEST_EXAMPLES = {
  configured: {
    name: "DENGUE VIRUS ANTIBODY TEST",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "Dengue IgM Antibody",
        result: null,
        
        },
        {
        name: "Dengue IgG Antibody",
        result: null,
        
        },
    ],
  },
  notConfigured: {
    name: "DENGUE VIRUS ANTIBODY TEST",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "Dengue IgM Antibody",
        result: null,
        
        },
        {
        name: "Dengue IgG Antibody",
        result: null,
        
        },
    ]
  }
}