import React from "react";
import ClientLayout from "./ClientLayout";
import ThemeProvider from "../../core/store/ThemeProvider";

export default function ClientLayoutWrapper() {
  return (
    <ThemeProvider role="client">
      <ClientLayout />
    </ThemeProvider>
  );
}
