"use client";

import { useState } from "react";
import { CurrentTime } from "@/components/digital-clock";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut, User, Shield, TestTube } from "lucide-react";
import { removeAuthToken } from "@/lib/auth-client";
import { logoutUser } from "@/lib/actions/logout";
import { useAuthContext } from "@/contexts/auth-context";

export const Header = (): JSX.Element => {
  const { user, isAuthenticated, logout: contextLogout } = useAuthContext();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      // Call server action to clear server-side cookie
      await logoutUser();
      
      // Clear client-side token
      removeAuthToken();
      
      // Update context
      contextLogout();
      
      // Reload the page to update the UI
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
      // Still clear client state even if server logout fails
      removeAuthToken();
      contextLogout();
      window.location.href = "/";
    } finally {
      setIsLoggingOut(false);
    }
  };

  const getUserIcon = () => {
    if (user?.role === "ADMIN") {
      return <Shield className="h-4 w-4 text-orange-500" />;
    } else if (user?.role === "TESTER") {
      return <TestTube className="h-4 w-4 text-green-500" />;
    } else {
      return <User className="h-4 w-4 text-blue-500" />;
    }
  };

  const getUserAvatar = () => {
    const initials = user?.username ? user.username.substring(0, 2).toUpperCase() : "U";
    const bgColor = user?.role === "ADMIN" 
      ? "bg-orange-500" 
      : user?.role === "TESTER" 
      ? "bg-green-500" 
      : "bg-blue-500";
    
    return (
      <div className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center text-white text-sm font-medium`}>
        {initials}
      </div>
    );
  };

  return (
    <header className="w-full h-16">
      <div className="w-full h-full flex justify-between">
        <div className="w-2/6 h-full bg-primary rounded-br-full shadow-md shadow-gray-500"></div>
        <div className="w-2/6 h-full bg-white shadow-md shadow-gray-300 rounded-b-full">
          <div className="w-full h-full flex justify-center items-center">
            <CurrentTime />
          </div>
        </div>
        <div className="w-1/6 h-full bg-primary rounded-l-full shadow-md shadow-gray-500 flex items-center justify-center pr-4">
          {isAuthenticated && user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-white hover:bg-primary/80 focus:bg-primary/80"
                  disabled={isLoggingOut}
                >
                  {getUserAvatar()}
                  <span className="text-sm font-medium max-w-20 truncate">
                    {user.username}
                  </span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5">
                  <div className="flex items-center gap-2">
                    {getUserIcon()}
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{user.username}</span>
                      <span className="text-xs text-muted-foreground">
                        {user.role === "ADMIN" 
                          ? "Administrator" 
                          : user.role === "TESTER" 
                          ? "Tester" 
                          : "Employee"}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    ID: {user.userID}
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="text-red-600 focus:text-red-600 focus:bg-red-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  {isLoggingOut ? "Logging out..." : "Sign out"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </div>
      </div>
    </header>
  );
};
