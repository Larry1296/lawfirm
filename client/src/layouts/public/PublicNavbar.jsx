import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const links = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Reviews" },
  { id: "cta", label: "Get Started" },
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

  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // ================= SCROLL LOGIC =================
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (menuOpen) setMenuOpen(false); // close menu on scroll

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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const progress = Math.min(scrollY / 600, 1);
  const isLight = progress > 0.5;

  // ================= SCROLL TO SECTION =================
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[92%]">
        <div
          style={{
            backgroundColor: `rgba(255,255,255,${0.08 + progress * 0.85})`,
            backdropFilter: `blur(${10 + progress * 10}px)`,
            borderColor: `rgba(255,255,255,${0.15 + progress * 0.3})`,
          }}
          className="
            flex items-center justify-between
            px-4 md:px-8 py-4
            rounded-3xl border
            shadow-[0_25px_70px_rgba(0,0,0,0.25)]
            transition-all duration-300
          "
        >
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 md:h-20 md:w-20 rounded-2xl object-cover"
            />

            <span
              className={`font-extrabold text-lg md:text-2xl ${
                isLight ? "text-black" : "text-white"
              }`}
            >
              Sheria Desk
            </span>
          </div>

          {/* DESKTOP NAV */}
          {!isAuthPage && (
            <div className="hidden lg:flex gap-3">
              {links.map((link) => {
                const isActive = active === link.id;

                return (
                  <button
                    key={link.id}
                    onClick={() => handleScrollTo(link.id)}
                    className={`
                      px-5 py-2 rounded-full font-medium
                      transition-all duration-200

                      shadow-[0_6px_0_rgba(0,0,0,0.15)]
                      active:shadow-[0_2px_0_rgba(0,0,0,0.1)]
                      active:translate-y-1

                      ${
                        isActive
                          ? isLight
                            ? "bg-black text-white"
                            : "bg-white text-blue-900"
                          : isLight
                            ? "text-black/70 hover:bg-black/10"
                            : "text-white/80 hover:bg-white/10"
                      }
                    `}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* HAMBURGER */}
          {!isAuthPage && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5"
            >
              <span
                className={`w-6 h-0.5 transition ${
                  isLight ? "bg-black" : "bg-white"
                } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-6 h-0.5 transition ${
                  isLight ? "bg-black" : "bg-white"
                } ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-6 h-0.5 transition ${
                  isLight ? "bg-black" : "bg-white"
                } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          )}
        </div>
      </div>

      {/* ================= FULLSCREEN OVERLAY ================= */}
      {!isAuthPage && menuOpen && (
        <div
          style={{
            backgroundColor: `rgba(255,255,255,${0.08 + progress * 0.85})`,
            backdropFilter: `blur(${20 + progress * 10}px)`,
          }}
          className="
            fixed inset-0 z-40
            flex flex-col items-center justify-center
            transition-all duration-300
          "
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setMenuOpen(false)}
            className={`absolute top-6 right-6 text-3xl ${
              isLight ? "text-black" : "text-white"
            }`}
          >
            ✕
          </button>

          {/* NAV LINKS */}
          <div className="flex flex-col items-center gap-6 px-6 w-full max-w-md">
            {links.map((link) => {
              const isActive = active === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`
                    w-full text-center px-6 py-4 rounded-2xl font-semibold text-lg
                    transition-all duration-200

                    shadow-[0_8px_0_rgba(0,0,0,0.2)]
                    active:shadow-[0_3px_0_rgba(0,0,0,0.15)]
                    active:translate-y-1

                    ${
                      isActive
                        ? isLight
                          ? "bg-black text-white"
                          : "bg-white text-blue-900"
                        : isLight
                          ? "text-black/80 hover:bg-black/10"
                          : "text-white/90 hover:bg-white/10"
                    }
                  `}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
