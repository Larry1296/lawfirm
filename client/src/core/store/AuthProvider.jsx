import { useState } from "react";

import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse user:", error);
      return null;
    }
  });

  const [accessToken, setAccessToken] = useState(() => {
    return localStorage.getItem("accessToken");
  });

  const [refreshToken, setRefreshToken] = useState(() => {
    return localStorage.getItem("refreshToken");
  });

  const login = ({ user, access, refresh }) => {
    setUser(user);
    setAccessToken(access);
    setRefreshToken(refresh);

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  // =========================
  // ROLE HELPERS (ADD THIS)
  // =========================
  const role = user?.role;
  const firmRole = user?.firm_role;

  const isAdmin = role === "ADMIN";
  const isClient = role === "CLIENT";
  const isStaff = role === "STAFF";

  const isLawyer = firmRole === "LAWYER";
  const isSecretary = firmRole === "SECRETARY";

  const value = {
    user,
    accessToken,
    refreshToken,

    login,
    logout,

    isAuthenticated: !!accessToken,

    // roles
    role,
    firmRole,

    // helpers
    isAdmin,
    isClient,
    isStaff,
    isLawyer,
    isSecretary,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
