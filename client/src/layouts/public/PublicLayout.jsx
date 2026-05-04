import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import PublicNavbar from "./PublicNavbar";
import Footer from "../../components/Footer";

export default function PublicLayout() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scrollY / 600, 1);
  const isLight = progress > 0.5;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* ✅ Pass isLight to navbar */}
      <PublicNavbar isLight={isLight} />

      {/* ✅ Inject isLight into routed pages (HeroSection lives here) */}
      <main className="flex-1">
        <Outlet context={{ isLight }} />
      </main>

      <Footer />
    </div>
  );
}
