import React from "react";
import AuthLayout from "./AuthLayout";
import ThemeProvider from "../../core/store/ThemeProvider";

export default function AuthLayoutWrapper() {
  return (
    <ThemeProvider role="auth">
      <AuthLayout />
    </ThemeProvider>
  );
}
