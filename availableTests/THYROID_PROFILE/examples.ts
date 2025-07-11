import { THYROID_PROFILE_TYPE } from "@availableTests/THYROID_PROFILE/type";

type THYROID_PROFILE_EXAMPLES = {
  configured: THYROID_PROFILE_TYPE;
  notConfigured: THYROID_PROFILE_TYPE;
};

export const EXAMPLES: THYROID_PROFILE_EXAMPLES = {
  configured: {
    name: "THYROID PROFILE",
    price: 1200,
    sampleType: "BLOOD",
    results: [
      {
        name: "TSH - 3rd Generation",
        result: null,
        flag: "",
        unit: "μlU/ml",
        referenceRange: {
          low: 4,
          high: 8,
        },
      },
      {
        name: "Free Thyroxine (F.T4)",
        result: null,
        flag: "",
        unit: "ng/dl",
        referenceRange: {
          low: 8,
          high: 9,
        },
      },
      {
        name: "Free Triiodothyronine (F.T3)",
        result: null,
        flag: "",
        unit: "pg/ml",
        referenceRange: {
          low: 2,
          high: 8,
        },
      },
    ],
  },
  notConfigured: {
    name: "THYROID PROFILE",
    price: null,
    sampleType: "BLOOD",
    results: [
      {
        name: "TSH - 3rd Generation",
        result: null,
        flag: "",
        unit: "μlU/ml",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "Free Thyroxine (F.T4)",
        result: null,
        flag: "",
        unit: "ng/dl",
        referenceRange: {
          low: null,
          high: null,
        },
      },
      {
        name: "Free Triiodothyronine (F.T3)",
        result: null,
        flag: "",
        unit: "pg/ml",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ],
  },
}