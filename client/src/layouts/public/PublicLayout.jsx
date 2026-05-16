import React from "react";
import { Outlet } from "react-router-dom";
import PublicNavbar from "./PublicNavbar";
import Footer from "../../components/shared/Footer";

const PublicLayout = () => {
  return (
    <div className="public-layout">
      <PublicNavbar />
      <main className="pt-20">
        <Outlet /> {/* Render the current route's page here */}
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
