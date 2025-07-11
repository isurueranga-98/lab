"use client";

import { useState, useEffect } from "react";
import { PageContainer } from "@/components/layout/page-container.layout";
import { LoginForm } from "@/components/forms/login.form";
import { Button } from "@/components/ui/button";
import { LogOut, User, Shield, TestTube, ArrowRight } from "lucide-react";
import { removeAuthToken } from "@/lib/auth-client";
import { logoutUser } from "@/lib/actions/logout";
import { useAuthContext } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";

const HomePage = (): JSX.Element => {
  const { user, isAuthenticated, logout: contextLogout } = useAuthContext();
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<{
    id: string;
    username: string;
    userID: string;
    role: string;
  } | null>(null);

  // Update local state when context user changes
  useEffect(() => {
    if (user) {
      setCurrentUser({
        id: user.userId,
        username: user.username,
        userID: user.userID,
        role: user.role,
      });
    } else {
      setCurrentUser(null);
    }
  }, [user]);

  // Role-based navigation configuration
  const getNavigationItems = (role: string) => {
    const baseItems = [
      { title: "Home", path: "/", description: "Return to homepage", icon: "🏠" }
    ];

    switch (role) {
      case "ADMIN":
        return [
          ...baseItems,
          { title: "Register User", path: "/auth/register", description: "Register new users", icon: "👤" },
          // { title: "Employees", path: "/employees", description: "Manage employee records", icon: "👥" },
          { title: "Tests", path: "/tests", description: "Manage laboratory tests", icon: "🧪" },
          { title: "Quick Test", path: "/quick-test", description: "Perform quick tests", icon: "⚡" },
          // { title: "Test Form", path: "/test-form", description: "Create test forms", icon: "📝" },
          // { title: "Enter Results", path: "/enter-results", description: "Enter test results", icon: "📊" }
        ];
      case "EMPLOYEE":
        return [
          ...baseItems,
          { title: "Quick Test", path: "/quick-test", description: "Perform quick tests", icon: "⚡" },
          { title: "Tests", path: "/tests", description: "View laboratory tests", icon: "🧪" }
        ];
      case "TESTER":
        return [
          ...baseItems,
          { title: "Tests", path: "/tests", description: "View and manage tests", icon: "🧪" }
        ];
      default:
        return baseItems;
    }
  };

  const navigationItems = currentUser ? getNavigationItems(currentUser.role) : [];

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleLoginSuccess = (user: {
    id: string;
    username: string;
    userID: string;
    role: string;
  }) => {
    setCurrentUser(user);
  };

  const handleLogout = async () => {
    try {
      // Call server action to clear server-side cookie
      await logoutUser();
      
      // Clear client-side token (both localStorage and cookies)
      removeAuthToken();
      
      // Update context
      contextLogout();
      
      // Reset local state
      setCurrentUser(null);
      
      console.log("Logged out successfully - JWT token removed from localStorage and cookies");
    } catch (error) {
      console.error("Logout error:", error);
      // Still clear client state even if server logout fails
      removeAuthToken();
      contextLogout();
      setCurrentUser(null);
    }
  };

  return (
    <PageContainer>
      <div className="min-h-screen ">
        {!isAuthenticated ? (
          <div className="flex items-center justify-center min-h-screen px-4">
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          </div>
        ) : (
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-6xl mx-auto px-4 py-8">
              {/* Header Section */}
              <div className="text-center mb-8">
                
                <h1 className="text-4xl font-bold mt-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Welcome Back, {currentUser?.username}!
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
                  {currentUser?.role === "ADMIN"
                    ? "System Administrator Dashboard"
                    : currentUser?.role === "TESTER"
                    ? "Laboratory Testing Portal"
                    : "Employee Dashboard"}
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">
              {/* User Profile Card */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                      {currentUser?.username.charAt(0).toUpperCase()}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Profile Information</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Username</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{currentUser?.username}</p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">User ID</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{currentUser?.userID}</p>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Role</p>
                      <div className="flex items-center gap-2">
                        {currentUser?.role === "ADMIN" ? (
                          <Shield className="h-5 w-5 text-orange-500" />
                        ) : currentUser?.role === "TESTER" ? (
                          <TestTube className="h-5 w-5 text-green-500" />
                        ) : (
                          <User className="h-5 w-5 text-blue-500" />
                        )}
                        <span className={`font-semibold ${
                          currentUser?.role === "ADMIN"
                            ? "text-orange-500"
                            : currentUser?.role === "TESTER"
                            ? "text-green-500"
                            : "text-blue-500"
                        }`}>
                          {currentUser?.role === "ADMIN"
                            ? "Administrator"
                            : currentUser?.role === "TESTER"
                            ? "Tester"
                            : "Employee"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button 
                      onClick={handleLogout} 
                      variant="outline" 
                      className="w-full bg-red-50 border-red-200 text-red-600 hover:bg-red-100 hover:border-red-300 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              </div>

              {/* Navigation Section */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Quick Access</h2>
                  </div>
                  
                  <div className="grid gap-4 sm:grid-cols-2">
                    {navigationItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavigation(item.path)}
                        className="group relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative flex items-center gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                              {item.icon}
                            </div>
                          </div>
                          
                          <div className="flex-grow text-left">
                            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                              {item.description}
                            </p>
                          </div>
                          
                          <div className="flex-shrink-0">
                            <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>              </div>

              {/* Footer */}
              {/* <div className="text-center mt-12 pb-8">
                <p className="text-gray-500 dark:text-gray-400">
                  LabLynx Management System • {new Date().getFullYear()}
                </p>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default HomePage;
