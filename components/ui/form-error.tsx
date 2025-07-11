import { FC } from "react";

type FormErrorProps = {
  message?: string;
};

const FormError: FC<FormErrorProps> = ({ message }) => {
  return (
    <>
      {message && (
        <div className="py-4">
          <p className="text-sm text-red-500">{message}</p>
        </div>
      )}
    </>
  );
};

export default FormError;
