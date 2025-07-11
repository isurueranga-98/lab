import { QuickTest } from "@/lib/utils/types";

export const Receipt = ({
  patientInformation,
  paymentInformation,
  selectedTests,
  id,
}: QuickTest): React.JSX.Element => {
  return (
    <div className="m-auto w-3/4">
      {/* patient details */}
      <div className="flex justify-between border-b-[1px] border-black pb-2">
        <div className="w-1/2">
          <p>
            <strong>Reference Number:</strong>
            <span>{id}</span>
          </p>
          <p>
            <strong> Patient Name: </strong>
            <span>{`${patientInformation?.title ? patientInformation.title : ""} ${patientInformation?.firstName ? patientInformation.firstName : ""} ${patientInformation?.middleName ? patientInformation.middleName : ""} ${patientInformation?.lastName ? patientInformation.lastName : ""}`}</span>
          </p>
          <p>
            <strong> Age: </strong>
            <span>{`${patientInformation?.age.years ? patientInformation.age.years : "0"} years ${patientInformation?.age.months ? patientInformation.age.months : "0"} months ${patientInformation?.age.days ? patientInformation.age.days : "0"} days`}</span>
          </p>
          <p>
            <strong>Gender: </strong>
            <span>
              {patientInformation?.gender ? patientInformation.gender : ""}
            </span>
          </p>
        </div>
        <div className="flex w-1/2 justify-center">
          <div>
            <p>
              <strong> Referred By: </strong>
              <span>
                {patientInformation?.referredBy
                  ? patientInformation.referredBy
                  : ""}
              </span>
            </p>
            <p>
              <strong> Phone Number: </strong>
              <span>
                {patientInformation?.phone ? patientInformation.phone : ""}
              </span>
            </p>
            <p>
              <strong>Email: </strong>
              <span>
                {patientInformation?.email ? patientInformation.email : ""}
              </span>
            </p>
            <p>
              <strong> Address: </strong>
              <span>{`${patientInformation?.address.street ? patientInformation.address.street : ""}, ${patientInformation?.address.city ? patientInformation.address.city : ""}`}</span>
            </p>
          </div>
        </div>
      </div>
      {/* selected tests */}
      <div className="flex justify-between border-b-[1px] border-black pb-2">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-start">Test Name</th>
              <th className="text-start">Price</th>
            </tr>
          </thead>
          <tbody>
            {selectedTests.map((test) => (
              <tr key={test.id}>
                <td>{test.name}</td>
                <td>{test.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* payment form */}
      <div>
        <div>
          <div className="flex items-center justify-between pr-36">
            <div>Total</div>
            <div>{paymentInformation?.total}</div>
          </div>
          <div className="flex items-center justify-between pr-36">
            <div>Discount (%)</div>
            <div>{paymentInformation?.discount}</div>
          </div>
          <div className="flex items-center justify-between pr-36">
            <div>Total payble</div>
            <div>{paymentInformation?.totalPayble}</div>
          </div>
          <div className="flex items-center justify-between pr-36">
            <div>Initial Payment</div>
            <div>{paymentInformation?.initialPayment}</div>
          </div>
          <div className="flex items-center justify-between pr-36">
            <div>Payment Method</div>
            <div>{paymentInformation?.paymentMethod}</div>
          </div>
          <div className="flex items-center justify-between pr-36">
            <div>Balance</div>
            <div>{paymentInformation?.balance}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
