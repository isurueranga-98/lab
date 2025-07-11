"use client";
import { useQuickTestState } from "@/store";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GrNext, GrPrevious } from "react-icons/gr";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  handleBack: () => void;
  handleNext: () => void;
};

export const QuickTestPayment = ({
  handleBack,
  handleNext,
}: Props): React.JSX.Element => {
  const { selectedTests, paymentInformation, setPaymentInformation } =
    useQuickTestState((state) => state);

  // total fee
  const total =
    paymentInformation?.total ||
    selectedTests.reduce((acc, test) => acc + test.price!, 0); //to be fixed

  // discount for total fee
  const [discount, setDiscount] = useState<number>(
    paymentInformation?.discount || 0,
  );

  // after discount applied
  const totalPayble =
    paymentInformation?.totalPayble || total - (total * discount) / 100;

  // initial payment
  const [initialPayment, setInitialPayment] = useState<number>(
    paymentInformation?.initialPayment || 0,
  );

  // balance after initial payment
  const balance = paymentInformation?.balance || totalPayble - initialPayment;

  // payment method
  const [paymentMethod, setPaymentMethod] = useState<
    "CASH" | "CARD" | "CHEQUE" | "ONLINE"
  >("CASH");

  return (
    <div className="m-auto w-3/4">
      {/* selected tests */}
      <div className="flex justify-between border-b-[1px] border-black pb-2">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-start">No</th>
              <th className="text-start">Test Name</th>
              <th className="text-end">Price</th>
            </tr>
          </thead>
          <tbody>
            {selectedTests.map((test, index) => (
              <tr key={test.id}>
                <td>{index + 1}</td>
                <td>{test.name}</td>
                <td className="text-end">
                  {!test.price ? (
                    <span className="text-destructive">NOT_CONFIGURED</span>
                  ) : (
                    test.price
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* payment form */}
      <div>
        <div>
          <div className="flex items-center justify-between">
            <div>Total</div>
            <div>{total}</div>
          </div>
          <div className="flex items-center justify-between">
            <div>Discount (%)</div>
            <div>
              <Input onChange={(e) => setDiscount(Number(e.target.value))} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>Total payble</div>
            <div>{totalPayble}</div>
          </div>
          <div className="flex items-center justify-between">
            <div>Initial Payment</div>
            <div>
              <Input
                onChange={(e) => setInitialPayment(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>Payment Method</div>
            <div className="py-2">
              <Select
                onValueChange={(e) =>
                  setPaymentMethod(e as "CASH" | "CARD" | "CHEQUE" | "ONLINE")
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Payment Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CASH">Cash</SelectItem>
                  <SelectItem value="CARD">Card</SelectItem>
                  <SelectItem value="CHEQUE">Cheque</SelectItem>
                  <SelectItem value="ONLINE">Online</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>Balance</div>
            <div>{balance}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-4">
        <Button onClick={handleBack}>
          <GrPrevious /> Select test
        </Button>
        <Button
          onClick={() => {
            setPaymentInformation({
              total,
              discount,
              totalPayble,
              initialPayment,
              balance,
              paymentMethod,
            });
            handleNext();
          }}
        >
          Receipt <GrNext />
        </Button>
      </div>
    </div>
  );
};
