"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "@/lib/schema/login.schema";
import { loginUser } from "@/lib/actions/login";
import { setAuthToken } from "@/lib/auth-client";
import { useAuthContext } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff, LogIn } from "lucide-react";

interface LoginFormProps {
  onLoginSuccess?: (user: { id: string; username: string; userID: string; role: string }) => void;
}

export const LoginForm = ({ onLoginSuccess }: LoginFormProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { login: contextLogin } = useAuthContext();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userID: "",
      password: "",
    },
  });

  const handleSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    try {
      const result = await loginUser(data);

      if (result.success) {
        console.log("Login successful:", result.user);
        form.reset();
        
        // Store JWT token on client side (localStorage and cookies)
        if (result.token) {
          setAuthToken(result.token);
          console.log("JWT token stored in localStorage and cookies");
        }
        
        // Update auth context
        if (result.user) {
          contextLogin({
            userId: result.user.id,
            username: result.user.username,
            userID: result.user.userID,
            role: result.user.role,
          });
        }
        
        if (onLoginSuccess && result.user) {
          onLoginSuccess(result.user);
        }
        
        // Navigate based on user role
        if (result.user?.role === "EMPLOYEE") {
          console.log("Redirecting employee to quick-test page...");
          // router.push("/quick-test");
        } else if (result.user?.role === "TESTER") {
          console.log("Tester logged in, staying on home page...");
          // Stay on home page for testers
        } else if (result.user?.role === "ADMIN") {
          // You can add admin dashboard navigation here
          console.log("Admin logged in successfully");
          alert(`Welcome back, Admin! Role: ${result.user?.role}`);
        } else {
          alert(`Welcome back! Role: ${result.user?.role}`);
        }
      } else {
        console.error("Login failed:", result.message);
        
        // Handle field-specific errors
        if (result.errors) {
          Object.entries(result.errors).forEach(([field, errors]) => {
            form.setError(field as keyof LoginFormData, {
              type: "server",
              message: errors[0],
            });
          });
        } else {
          alert(`Login failed: ${result.message}`);
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="flex justify-center">
          <LogIn className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p className="text-muted-foreground">
          Sign in to your account to continue
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="userID"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User ID</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your user ID"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      disabled={isSubmitting}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isSubmitting}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </Form>

      {/* <div className="text-center text-sm">
        <span className="text-muted-foreground">Don&apos;t have an account? </span>
        <a
          href="/auth/register"
          className="text-primary hover:underline font-medium"
        >
          Create account
        </a>
      </div> */}
    </div>
  );
};
