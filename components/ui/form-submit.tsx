"use client";
import { FC, ReactNode, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type FormSubmitProps = {
  children: ReactNode;
  disabled?: boolean;
};

const FormSubmit: FC<FormSubmitProps> = ({ children, disabled = false }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending || disabled}>
      {children}
    </Button>
  );
};

export default FormSubmit;
