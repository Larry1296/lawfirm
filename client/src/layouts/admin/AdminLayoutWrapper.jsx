import React from "react";
import AdminLayout from "./AdminLayout";
import ThemeProvider from "../../core/store/ThemeProvider";

export default function AdminLayoutWrapper() {
  return (
    <ThemeProvider role="admin">
      <AdminLayout />
    </ThemeProvider>
  );
}
