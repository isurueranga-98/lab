export type TROPONIN_I_QUALITATIVE_TYPE = {
  id?: string;
  name: "TROPONIN I (QUALITATIVE)";
  price: number | null;
  sampleType: "BLOOD";
  results: [{ name: "Troponin I"; result: "negative" | "positive" | null }];
};
