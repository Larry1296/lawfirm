import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

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
  }, []);

  const progress = Math.min(scrollY / 600, 1);
  const isLight = progress > 0.5;

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%]">
      <div
        style={{
          backgroundColor: `rgba(255,255,255,${0.08 + progress * 0.85})`,
          backdropFilter: `blur(${10 + progress * 10}px)`,
          borderColor: `rgba(255,255,255,${0.15 + progress * 0.3})`,
        }}
        className="
          grid grid-cols-[auto_1fr]
          grid-rows-2
          items-center

          h-36 md:h-40

          px-8 py-5
          rounded-3xl
          border
          shadow-[0_25px_70px_rgba(0,0,0,0.25)]
          transition-all duration-300
        "
      >
        {/* ================= LOGO (SPANS 2 ROWS) ================= */}
        <div className="row-span-2 flex items-center gap-4 pr-6">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-20 md:h-24 md:w-24 object-cover rounded-2xl"
          />

          <span
            className={`
              font-extrabold
              text-[clamp(1.2rem,1.5vw,2rem)]
              ${isLight ? "text-black" : "text-white"}
            `}
          >
            Sheria Desk
          </span>
        </div>

        {/* ================= NAV LINKS (ROW 1) ================= */}
        {!isAuthPage && (
          <div className="flex justify-center gap-3">
            {links.map((link) => (
              <button
                key={link.id}
                className={`
                  px-5 py-2 rounded-full font-medium
                  text-[clamp(0.75rem,1vw,1rem)]
                  transition-all duration-300

                  ${
                    active === link.id
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
            ))}
          </div>
        )}

        {/* ================= AUTH BUTTONS (ROW 2) ================= */}
        {!isAuthPage && (
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className={`
                px-6 py-2 rounded-full font-semibold
                text-[clamp(0.75rem,1vw,1rem)]
                transition-all duration-300

                ${
                  isLight
                    ? "border border-black/20 text-black hover:bg-black/10"
                    : "border border-white/30 text-white hover:bg-white/10"
                }
              `}
            >
              Login
            </Link>

            <Link
              to="/register"
              className="
                px-6 py-2 rounded-full font-semibold
                text-[clamp(0.75rem,1vw,1rem)]
                bg-green-600 text-white
                hover:bg-green-700 hover:scale-105
                transition-all duration-300
                shadow-lg
              "
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
