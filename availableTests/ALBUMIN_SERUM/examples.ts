import { ALBUMIN_SERUM_TYPE } from "@availableTests/ALBUMIN_SERUM/type"

type ALBUMIN_SERUM_EXAMPLES = {
  configured: ALBUMIN_SERUM_TYPE;
  notConfigured: ALBUMIN_SERUM_TYPE;
};

export const EXAMPLES: ALBUMIN_SERUM_EXAMPLES ={
  configured:{
    name: "AlBUMIN - SERUM",
    price: 1200,
    sampleType: "BLOOD",
    results:[
      {
        name: "AlBUMIN",
        result: null,
        flag: "" ,
         unit: "g/dl",
        referenceRange: {
          low: 4,
          high: 7,
        },
      },
    ]
  },
  notConfigured:{
    name: "AlBUMIN - SERUM",
    price: null,
    sampleType: "BLOOD",
    results:[
      {
        name: "AlBUMIN",
        result: null,
        flag: "" ,
         unit: "g/dl",
        referenceRange: {
          low: null,
          high: null,
        },
      },
    ]
  }
}