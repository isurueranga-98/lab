export type FULL_BLOOD_COUNT_TYPE = {
	id?: string;
	readonly name: "FULL BLOOD COUNT";
	price: number | null;
	results: [
		{
			readonly name: "W.B.C";
			result: number | null;
			flag: "" | "L" | "H";
			readonly unit: "/cumm";
			referenceRange: {
				low: number | null;
				high: number | null;
			}
		},
		{
			readonly name: "Neutrophils";
			result: number | null;
			flag: "" | "L" | "H";
			readonly unit: "%";
			referenceRange: {
				low: number | null;
				high: number | null;
			}
		},
		{
			readonly name: "Lymphocytes";
			result: number | null;
			flag: "" | "L" | "H";
			readonly unit: "%";
			referenceRange: {
				low: number | null;
				high: number | null;
			}
		},
		{
			readonly name: "Monocytes";
			result: number | null;
			flag: "" | "L" | "H";
			readonly unit: "%";
			referenceRange: {
				low: number | null;
				high: number | null;
			}
		},
		{
			readonly name: "Eosirophils";
			result: number | null;
			flag: "" | "L" | "H";
			readonly unit: "%";
			referenceRange: {
				low: number | null;
				high: number | null;
			}
		},
		{
			readonly name: "Basophils";
			result: number | null;
			flag: "" | "L" | "H";
			readonly unit: "%";
			referenceRange: {
				low: number | null;
				high: number | null;
			}
		},
		{
			readonly name: "Neutrophils";
			result: number | null;
			flag: "" | "L" | "H";
			readonly unit: "%";
			referenceRange: {
				low: number | null;
				high: number | null;
			}
		},
		{
			readonly name: "Lymphocytes";
			result: number | null;
			flag: "" | "L" | "H";
			readonly unit: "%";
			referenceRange: {
				low: number | null;
				high: number | null;
			}
		},
		{
			readonly name: "Monocytes";
			result: number | null;
			flag: "" | "L" | "H";
			readonly unit: "%";
			referenceRange: {
				low: number | null;
				high: number | null;
			}
		},
		{
			readonly name: "Eosirophils";
			result: number | null;
			flag: "" | "L" | "H";
			readonly unit: "%";
			referenceRange: {
				low: number | null;
				high: number | null;
			}
		},
		{
			readonly name: "Basophils";
			result: number | null;
			flag: "" | "L" | "H";
			readonly unit: "%";
			referenceRange: {
				low: number | null;
				high: number | null;
			}
		},

	]
}
