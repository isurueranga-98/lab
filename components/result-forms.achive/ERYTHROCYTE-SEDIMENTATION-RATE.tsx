"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export const ERYTHROCYTE_SEDIMENTATION_RATE = () => {
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
            <td className="px-4">E.S.R. 1st Hour</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setSERUM_SODIUM(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">mm</td>
            <td className="px-4">
              {SERUM_SODIUM < 135 ? "L" : SERUM_SODIUM > 147 ? "H" : ""}
            </td>
            <td className="px-4">(135 - 147)</td>
          </tr>
          {/* ------------------------- */}
        </tbody>
      </table>

      <p>Normal Value:</p>
      <p>05-13 mm / 1hour reading</p>
    </div>
  );
};
