import { RegisterForm } from "@/components/forms/register.form";

const RegisterPage = (): JSX.Element => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
