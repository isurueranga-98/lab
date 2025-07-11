import { QuickTestStep } from "@/lib/utils/types";
import { FaUserCircle } from "react-icons/fa";
import { FaFlask } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { IoReceipt } from "react-icons/io5";
import clsx from "clsx";

type CurrentStageProps = {
  name: string;
  step: QuickTestStep;
  currentStep: QuickTestStep;
  completed: boolean;
  onClick: () => void;
};

export const QuickTestProgressIndicator = ({
  name,
  step,
  currentStep,
  completed,
  onClick,
}: CurrentStageProps): React.JSX.Element => {
  return (
    <button disabled={!completed}>
      <div
        className={`flex h-12 w-48 justify-center px-3 py-1 ${clsx({
          "rounded-lg shadow-sm shadow-green-500": completed,
          "rounded-lg shadow-sm shadow-violet-500": step === currentStep,
        })}`}
        onClick={onClick}
      >
        <div className="flex items-center space-x-3">
          {step === "PATIENT_DETAILS" ? (
            <FaUserCircle className="h-6 w-6" />
          ) : step === "SELECT_TESTS" ? (
            <FaFlask className="h-6 w-6" />
          ) : step === "PAYMENT" ? (
            <MdOutlinePayment className="h-6 w-6" />
          ) : step === "RECEIPT" ? (
            <IoReceipt className="h-6 w-6" />
          ) : null}
          <p className="text-sm">{name}</p>
        </div>
      </div>
    </button>
  );
};
