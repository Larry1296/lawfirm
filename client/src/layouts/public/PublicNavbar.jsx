// src/layouts/public/PublicNavbar.jsx
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import NavLink from "../../components/ui/NavLink";
import Button3D from "../../components/ui/Button3D";

const links = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Reviews" },
  { id: "contact", label: "Contact" },
  { id: "about", label: "About" },
];

export default function PublicNavbar() {
  const location = useLocation();
  const isAuthPage = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ].includes(location.pathname);

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Track which section is active on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      links.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) current = section.id;
      });
      setActive(current);
      if (menuOpen) setMenuOpen(false); // close mobile menu on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 120, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[92%]">
        <div
          className="
            flex items-center justify-between
            px-6 md:px-10 py-4
            rounded-2xl
            bg-[color:var(--brand-primary)]
            border border-[color:var(--border-light)]
            shadow-[0_12px_36px_rgba(0,0,0,0.2)]
            transition-all duration-300
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-20 md:h-24 md:w-24 rounded-2xl object-cover"
            />
            <span className="font-extrabold text-lg md:text-2xl text-white">
              Sheria Desk
            </span>
          </div>

          {/* Desktop Nav */}
          {!isAuthPage && (
            <div className="hidden lg:flex items-center gap-6">
              {links.map((link) => (
                <NavLink
                  key={link.id}
                  label={link.label}
                  active={active === link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className="text-white hover:text-[color:var(--brand-accent)] font-semibold"
                />
              ))}
              {/* CTA Button */}
              <Button3D
                label="Get Started"
                onClick={() => handleScrollTo("cta")}
                variant="accent"
              />
            </div>
          )}

          {/* Hamburger */}
          {!isAuthPage && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5"
            >
              <span
                className={`w-6 h-0.5 bg-white transition ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white transition ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {!isAuthPage && menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center
                        bg-[color:var(--brand-primary)] text-white transition-all duration-300"
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-3xl text-white"
          >
            ✕
          </button>

          {/* Links */}
          <div className="flex flex-col items-center gap-6 px-6 w-full max-w-md">
            {links.map((link) => (
              <NavLink
                key={link.id}
                label={link.label}
                active={active === link.id}
                onClick={() => handleScrollTo(link.id)}
                className="text-white hover:text-[color:var(--brand-accent)] text-lg"
              />
            ))}
            {/* CTA Button */}
            <Button3D
              label="Get Started"
              onClick={() => handleScrollTo("cta")}
              variant="accent"
              fullWidth
            />
          </div>
        </div>
      )}
    </>
  );
}
