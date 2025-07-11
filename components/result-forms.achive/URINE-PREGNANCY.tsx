"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const URINE_PREGNANCY = () => {
  const [SERUM_SODIUM, setSERUM_SODIUM] = useState(0);

  const [note, setNote] = useState("");

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td className="px-4">Test</td>
            <td className="px-4">Result</td>
          </tr>
        </thead>
        <tbody>
          {/* ------------------------- */}
          <tr>
            <td className="px-4">URINE FOR hCG</td>
            <td className="px-4">
              <div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Positive</SelectItem>
                    <SelectItem value="dark">Negative</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
