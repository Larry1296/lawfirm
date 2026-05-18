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

  // Track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      links.forEach((section) => {
        const el = document.getElementById(section.id);

        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
          current = section.id;
        }
      });

      setActive(current);

      // Close mobile menu while scrolling
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  // Smooth scroll to section
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: "smooth",
      });
    }

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
            shadow-[0_12px_36px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
            transition-all duration-300
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Sheria Desk Logo"
              className="h-16 w-16 md:h-20 md:w-20 rounded-2xl object-cover border border-white/20"
            />

            <span
              className="
                text-white
                font-extrabold
                text-xl md:text-2xl
                tracking-wide
                [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]
              "
            >
              Sheria Desk
            </span>
          </div>

          {/* Desktop Navigation */}
          {!isAuthPage && (
            <div className="hidden lg:flex items-center gap-6">
              {links.map((link) => (
                <NavLink
                  key={link.id}
                  label={link.label}
                  active={active === link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`
                    relative
                    text-white
                    font-extrabold
                    tracking-wide
                    text-sm xl:text-base
                    transition-all duration-300
                    hover:text-[color:var(--brand-accent)]
                    [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]
                    ${
                      active === link.id
                        ? "text-[color:var(--brand-accent)]"
                        : ""
                    }
                  `}
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

          {/* Hamburger Menu */}
          {!isAuthPage && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                lg:hidden
                flex flex-col gap-1.5
                p-2
              "
              aria-label="Toggle menu"
            >
              <span
                className={`
                  w-7 h-0.5 bg-white rounded-full transition-all duration-300
                  ${menuOpen ? "rotate-45 translate-y-2" : ""}
                `}
              />

              <span
                className={`
                  w-7 h-0.5 bg-white rounded-full transition-all duration-300
                  ${menuOpen ? "opacity-0" : ""}
                `}
              />

              <span
                className={`
                  w-7 h-0.5 bg-white rounded-full transition-all duration-300
                  ${menuOpen ? "-rotate-45 -translate-y-2" : ""}
                `}
              />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {!isAuthPage && menuOpen && (
        <div
          className="
            fixed inset-0 z-40
            flex flex-col items-center justify-center
            bg-[color:var(--brand-primary)]
            text-white
            transition-all duration-300
          "
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="
              absolute top-6 right-6
              text-4xl
              font-bold
              text-white
              hover:text-[color:var(--brand-accent)]
              transition-colors duration-200
            "
          >
            ✕
          </button>

          {/* Mobile Links */}
          <div className="flex flex-col items-center gap-8 px-6 w-full max-w-md">
            {links.map((link) => (
              <NavLink
                key={link.id}
                label={link.label}
                active={active === link.id}
                onClick={() => handleScrollTo(link.id)}
                className={`
                  text-white
                  text-2xl
                  font-extrabold
                  uppercase
                  tracking-widest
                  transition-all duration-300
                  hover:text-[color:var(--brand-accent)]
                  [text-shadow:0_2px_10px_rgba(0,0,0,0.9)]
                  ${
                    active === link.id
                      ? "text-[color:var(--brand-accent)] scale-105"
                      : ""
                  }
                `}
              />
            ))}

            {/* CTA Button */}
            <div className="w-full pt-4">
              <Button3D
                label="Get Started"
                onClick={() => handleScrollTo("cta")}
                variant="accent"
                fullWidth
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
