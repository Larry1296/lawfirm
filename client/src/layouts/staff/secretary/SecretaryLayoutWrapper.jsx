import React from "react";
import SecretaryLayout from "./SecretaryLayout";
import ThemeProvider from "../../core/store/ThemeProvider";

export default function SecretaryLayoutWrapper() {
  return (
    <ThemeProvider role="SECRETARY">
      <SecretaryLayout />
    </ThemeProvider>
  );
}
