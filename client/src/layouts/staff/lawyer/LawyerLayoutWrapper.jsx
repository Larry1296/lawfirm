import React from "react";
import LawyerLayout from "./LawyerLayout";
import ThemeProvider from "../../core/store/ThemeProvider";

export default function LawyerLayoutWrapper() {
  return (
    <ThemeProvider role="LAWYER">
      <LawyerLayout />
    </ThemeProvider>
  );
}
