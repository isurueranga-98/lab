"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export const HEMOGLOBIN_FORM = () => {
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
            <td className="px-4">R.B.C</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_SODIUM(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">mmol/L</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_SODIUM > 147 ? "H" : ""}
            </td>
            <td className="px-4">(135 - 147)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">HAEMOGLOBIN</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_POTASSIUM(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">mmol/L</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_POTASSIUM > 147 ? "H" : ""}
            </td>
            <td className="px-4">(3.5 - 5.1)</td>
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
            <td className="px-4">mmol/L</td>
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
            <td className="px-4">mmol/L</td>
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
            <td className="px-4">mmol/L</td>
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
            <td className="px-4">mmol/L</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_CHLORIDE > 147 ? "H" : ""}
            </td>
            <td className="px-4">(96 - 108)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">RDW</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_CHLORIDE(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">mmol/L</td>
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
