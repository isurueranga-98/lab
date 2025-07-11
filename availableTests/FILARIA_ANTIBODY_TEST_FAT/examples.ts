import { FILARIA_ANTIBODY_TEST_FAT_TYPE } from "@availableTests/FILARIA_ANTIBODY_TEST_FAT/type"

type FILARIA_ANTIBODY_TEST_FAT_EXAMPLES = {
  configured: FILARIA_ANTIBODY_TEST_FAT_TYPE;
  notConfigured: FILARIA_ANTIBODY_TEST_FAT_TYPE;
};

export const EXAMPLES: FILARIA_ANTIBODY_TEST_FAT_EXAMPLES = {
  configured: {
    name: "FILARIA ANTIBODY TEST(FAT)",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "FILARIA - IgM",
        result: null,
        
      },
      {
        name: "FILARIA - IgG",
        result: null,
        
      },
    ],
  },
  notConfigured: {
    name: "FILARIA ANTIBODY TEST(FAT)",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "FILARIA - IgM",
        result: null,
        
      },
      {
        name: "FILARIA - IgG",
        result: null,
        
      },
    ],
  },
}