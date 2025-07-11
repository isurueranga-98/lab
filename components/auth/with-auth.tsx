"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, hasAnyRoleClient, getCurrentUserClient, syncTokenStorage } from "@/lib/auth-client";

interface WithAuthProps {
  requiredRoles?: string[];
  redirectTo?: string;
}

export function withAuth<T extends object>(
  WrappedComponent: React.ComponentType<T>,
  options: WithAuthProps = {}
) {
  const { requiredRoles = [], redirectTo = "/" } = options;

  return function AuthenticatedComponent(props: T) {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const checkAuth = () => {
        // Sync token storage first
        syncTokenStorage();
        
        if (!isAuthenticated()) {
          router.push(redirectTo);
          return;
        }

        if (requiredRoles.length > 0 && !hasAnyRoleClient(requiredRoles)) {
          router.push(redirectTo);
          return;
        }

        setIsAuthorized(true);
        setIsLoading(false);
      };

      checkAuth();
    }, [router]);

    if (isLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-2 text-muted-foreground">Loading...</p>
          </div>
        </div>
      );
    }

    if (!isAuthorized) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}

// Hook to get current user
export function useAuth() {
  const [user, setUser] = useState(getCurrentUserClient());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    syncTokenStorage();
    const currentUser = getCurrentUserClient();
    setUser(currentUser);
    setIsLoading(false);
  }, []);

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    hasRole: (role: string) => user?.role === role,
    hasAnyRole: (roles: string[]) => user ? roles.includes(user.role) : false,
  };
}
