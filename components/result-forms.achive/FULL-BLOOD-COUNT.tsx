"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export const FULL_BLOOD_COUNT = () => {
  // W.B.C
  const [WBC, setWBC] = useState(0);

  // Differential Neutrophils
  const [DIFFERENTIAL_NEUTROPHILS, setDIFFERENTIAL_NEUTROPHILS] = useState(0);

  // Differential Lymphocytes
  const [DIFFERENTIAL_LYMPHOCYTES, setDIFFERENTIAL_LYMPHOCYTES] = useState(0);

  // Differential Monocytes
  const [DIFFERENTIAL_MONOCYTES, setDIFFERENTIAL_MONOCYTES] = useState(0);

  // Differential Eosinophils
  const [DIFFERENTIAL_EOSINOPHILS, setDIFFERENTIAL_EOSINOPHILS] = useState(0);

  // Differential Basophils
  const [DIFFERENTIAL_BASOPHILS, setDIFFERENTIAL_BASOPHILS] = useState(0);

  const [SERUM_SODIUM, setSERUM_SODIUM] = useState(0);
  const [SERUM_POTASSIUM, setSERUM_POTASSIUM] = useState(0);
  const [SERUM_CHLORIDE, setSERUM_CHLORIDE] = useState(0);

  const [note, setNote] = useState("");

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td className="px-4">Test</td>
            <td className="px-4">Result</td>
            <td className="px-4">Unit</td>
            <td className="px-4">Flag</td>
            <td className="px-4">Reference Range</td>
          </tr>
        </thead>
        <tbody>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">W.B.C</td>
            <td className="px-4">
              <div>
                <Input onChange={(e) => setWBC(Number(e.target.value))} />
              </div>
            </td>
            <td className="px-4">/cumm</td>
            <td className="px-4">
              {WBC < 4000 ? "L" : WBC > 11000 ? "H" : ""}
            </td>
            <td className="px-4">(4000 - 11000)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td>Differential Count</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">Neutrophils</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) =>
                    setDIFFERENTIAL_NEUTROPHILS(Number(e.target.value))
                  }
                />
              </div>
            </td>
            <td className="px-4">%</td>
            <td className="px-4">
              {DIFFERENTIAL_NEUTROPHILS < 37
                ? "L"
                : DIFFERENTIAL_NEUTROPHILS > 70
                  ? "H"
                  : ""}
            </td>
            <td className="px-4">(37 - 70)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">Lymphocytes</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) =>
                    setDIFFERENTIAL_LYMPHOCYTES(Number(e.target.value))
                  }
                />
              </div>
            </td>
            <td className="px-4">%</td>
            <td className="px-4">
              {DIFFERENTIAL_LYMPHOCYTES < 10
                ? "L"
                : DIFFERENTIAL_LYMPHOCYTES > 50
                  ? "H"
                  : ""}
            </td>
            <td className="px-4">(10 - 50)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">Monocytes</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) =>
                    setDIFFERENTIAL_MONOCYTES(Number(e.target.value))
                  }
                />
              </div>
            </td>
            <td className="px-4">%</td>
            <td className="px-4">
              {DIFFERENTIAL_MONOCYTES < 1
                ? "L"
                : DIFFERENTIAL_MONOCYTES > 9
                  ? "H"
                  : ""}
            </td>
            <td className="px-4">(01 - 09)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">Eosinophils</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) =>
                    setDIFFERENTIAL_EOSINOPHILS(Number(e.target.value))
                  }
                />
              </div>
            </td>
            <td className="px-4">%</td>
            <td className="px-4">
              {DIFFERENTIAL_EOSINOPHILS < 0
                ? "L"
                : DIFFERENTIAL_EOSINOPHILS > 6
                  ? "H"
                  : ""}
            </td>
            <td className="px-4">(00 - 06)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">Basophils</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) =>
                    setDIFFERENTIAL_BASOPHILS(Number(e.target.value))
                  }
                />
              </div>
            </td>
            <td className="px-4">%</td>
            <td className="px-4">
              {DIFFERENTIAL_BASOPHILS < 0
                ? "L"
                : DIFFERENTIAL_BASOPHILS > 2
                  ? "H"
                  : ""}
            </td>
            <td className="px-4">(00 - 02)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td>Absolute Count</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">Neutrophils</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_POTASSIUM(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">/cumm</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_POTASSIUM > 147 ? "H" : ""}
            </td>
            <td className="px-4">(3.5 - 5.1)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">Lymphocytes</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_CHLORIDE(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">/cumm</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_CHLORIDE > 147 ? "H" : ""}
            </td>
            <td className="px-4">(96 - 108)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">Monocytes</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_CHLORIDE(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">/cumm</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_CHLORIDE > 147 ? "H" : ""}
            </td>
            <td className="px-4">(96 - 108)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">Eosinophils</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_CHLORIDE(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">/cumm</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_CHLORIDE > 147 ? "H" : ""}
            </td>
            <td className="px-4">(96 - 108)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">Basophils</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_CHLORIDE(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">/cumm</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_CHLORIDE > 147 ? "H" : ""}
            </td>
            <td className="px-4">(96 - 108)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">R.B.C</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_CHLORIDE(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">M/μL</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_CHLORIDE > 147 ? "H" : ""}
            </td>
            <td className="px-4">(96 - 108)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">Haemoglobin</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_CHLORIDE(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">g/dl</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_CHLORIDE > 147 ? "H" : ""}
            </td>
            <td className="px-4">(96 - 108)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">HCT</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_CHLORIDE(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">%</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_CHLORIDE > 147 ? "H" : ""}
            </td>
            <td className="px-4">(96 - 108)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">M.C.V</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_CHLORIDE(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">fL</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_CHLORIDE > 147 ? "H" : ""}
            </td>
            <td className="px-4">(96 - 108)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">M.C.H</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_CHLORIDE(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">pg</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_CHLORIDE > 147 ? "H" : ""}
            </td>
            <td className="px-4">(96 - 108)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">M.C.H.C</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_CHLORIDE(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">g/dl</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_CHLORIDE > 147 ? "H" : ""}
            </td>
            <td className="px-4">(96 - 108)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">R.D.W</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_CHLORIDE(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">%</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_CHLORIDE > 147 ? "H" : ""}
            </td>
            <td className="px-4">(96 - 108)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">Platelet Count</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_CHLORIDE(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">/cumm</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_CHLORIDE > 147 ? "H" : ""}
            </td>
            <td className="px-4">(96 - 108)</td>
          </tr>
          {/* ------------------------- */}
        </tbody>
      </table>
    </div>
  );
};
