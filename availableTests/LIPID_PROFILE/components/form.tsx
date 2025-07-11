"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export const LIPID_PROFILE_FORM = () => {
  //TOTAL CHOLESTEROL
  const [TOTAL_CHOLESTEROL, setTOTAL_CHOLESTEROL] = useState(0);

  //SERUM TRIGLYCERDES
  const [SERUM_TRIGLYCERDES, setSERUM_TRIGLYCERDES] = useState(0);

  //H.D.L
  const [HDL, setHDL] = useState(0);

  //L.D.L
  const [LDL, setLDL] = useState(0);

  //V.L.D.L
  const [VLDL, setVLDL] = useState(0);

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
          {/* ----------- //TOTAL CHOLESTEROL //-------------- */}
          <tr>
            <td className="px-4">TOTAL CHOLESTEROL</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) => setTOTAL_CHOLESTEROL(Number(e.target.value))}
                />
              </div>
            </td>
            <td className="px-4">mg/dl</td>
            <td className="px-4">
              {TOTAL_CHOLESTEROL < 140
                ? "L"
                : TOTAL_CHOLESTEROL > 240
                  ? "H"
                  : ""}
            </td>
            <td className="px-4">(140 - 240)</td>
          </tr>
          {/* ------------//SERUM TRIGLYCERDES //------------- */}
          <tr>
            <td className="px-4">SERUM TRIGLYCERDES</td>
            <td className="px-4">
              <div>
                <Input
                  onChange={(e) =>
                    setSERUM_TRIGLYCERDES(Number(e.target.value))
                  }
                />
              </div>
            </td>
            <td className="px-4">mg/dl</td>
            <td className="px-4">
              {SERUM_TRIGLYCERDES < 100
                ? "L"
                : SERUM_TRIGLYCERDES > 200
                  ? "H"
                  : ""}
            </td>
            <td className="px-4">(10 - 200)</td>
          </tr>
          {/* -----------  //H.D.L //-------------- */}
          <tr>
            <td className="px-4">H.D.L</td>
            <td className="px-4">
              <div>
                <Input onChange={(e) => setHDL(Number(e.target.value))} />
              </div>
            </td>
            <td className="px-4">mg/dl</td>
            <td className="px-4">{HDL < 40 ? "L" : HDL > 60 ? "H" : ""}</td>
            <td className="px-4">(40 - 60)</td>
          </tr>
          {/* -------------//L.D.L //------------ */}
          <tr>
            <td className="px-4">L.D.L</td>
            <td className="px-4">
              <div>
                <Input
                  readOnly
                  value={Math.floor(
                    TOTAL_CHOLESTEROL - HDL - SERUM_TRIGLYCERDES / 5,
                  )}
                />
              </div>
            </td>
            <td className="px-4">mg/dl</td>
            <td className="px-4">{LDL < 129 ? "" : "H"}</td>
            <td className="px-4">(&lt; 129)</td>
          </tr>
          {/* -------------//V.L.D.L //------------ */}
          <tr>
            <td className="px-4">V.L.D.L</td>
            <td className="px-4">
              <div>
                <Input readOnly value={Math.floor(SERUM_TRIGLYCERDES / 5)} />
              </div>
            </td>
            <td className="px-4">mg/dl</td>
            <td className="px-4">{VLDL < 10 ? "L" : VLDL > 41 ? "H" : ""}</td>
            <td className="px-4">(10 - 41)</td>
          </tr>
          {/* -----------//CHOLESTEROL / HDL //-------------- */}
          <tr>
            <td className="px-4">CHOLESTEROL / HDL</td>
            <td className="px-4">
              <div>
                <Input
                  readOnly
                  value={Math.floor(TOTAL_CHOLESTEROL / HDL) || 0}
                />
              </div>
            </td>
            <td className="px-4"></td>
            <td className="px-4">
              {TOTAL_CHOLESTEROL / HDL < 135
                ? "L"
                : TOTAL_CHOLESTEROL / HDL > 147
                  ? "H"
                  : ""}
            </td>
            <td className="px-4">(2 - 5)</td>
          </tr>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">LDL / HDL</td>
            <td className="px-4">
              <div>
                <Input
                  readOnly
                  value={
                    Math.floor(
                      (TOTAL_CHOLESTEROL - HDL - SERUM_TRIGLYCERDES / 5) / HDL,
                    ) || 0
                  }
                />
              </div>
            </td>
            <td className="px-4"></td>
            <td className="px-4">
              {(TOTAL_CHOLESTEROL - HDL - SERUM_TRIGLYCERDES / 5) / HDL < 135
                ? "L"
                : (TOTAL_CHOLESTEROL - HDL - SERUM_TRIGLYCERDES / 5) / HDL > 147
                  ? "H"
                  : ""}
            </td>
            <td className="px-4">(0.01 - 3.3)</td>
          </tr>
          {/* ------------------------- */}
        </tbody>
      </table>
    </div>
  );
};
