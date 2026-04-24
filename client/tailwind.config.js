/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        /* ===============================
           LIGHT THEME PALETTE
           Executive Navy + Gold + Clean UI
        =============================== */
        brand: {
          primary: "#0F172A", // deep executive navy
          secondary: "#334155", // slate blue / sidebar / panels
          accent: "#C9A227", // prestige legal gold
          warning: "#D97706", // deadline / caution amber
        },

        /* ===============================
           DARK THEME PALETTE
           Premium Chambers Feel
        =============================== */
        darkbrand: {
          base: "#020617", // rich black navy
          surface: "#111827", // dark slate surface
          text: "#E5E7EB", // soft readable white
        },

        /* ===============================
           UNIVERSAL UI TOKENS
        =============================== */
        ui: {
          border: "#E5E7EB",
          muted: "#6B7280",
          success: "#16A34A",
          danger: "#DC2626",
          info: "#2563EB",
        },
      },

      /* ===============================
         TYPOGRAPHY
      =============================== */
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      /* ===============================
         SHADOWS (Luxury UI Feel)
      =============================== */
      boxShadow: {
        soft: "0 4px 14px rgba(15,23,42,0.08)",
        card: "0 10px 25px rgba(15,23,42,0.10)",
        glow: "0 0 0 3px rgba(201,162,39,0.22)",
        darkcard: "0 10px 30px rgba(0,0,0,0.55)",
      },

      /* ===============================
         BORDER RADIUS
      =============================== */
      borderRadius: {
        xl2: "1rem",
        xl3: "1.25rem",
        xl4: "1.5rem",
      },

      /* ===============================
         BACKGROUND GRADIENTS
      =============================== */
      backgroundImage: {
        "hero-light":
          "linear-gradient(135deg, #0F172A 0%, #334155 45%, #C9A227 100%)",

        "hero-dark":
          "linear-gradient(135deg, #020617 0%, #111827 60%, #1E293B 100%)",

        "card-light":
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)",

        "card-dark":
          "linear-gradient(180deg, rgba(17,24,39,1) 0%, rgba(2,6,23,1) 100%)",
      },

      /* ===============================
         ANIMATIONS
      =============================== */
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },

        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(201,162,39,0.30)" },
          "50%": { boxShadow: "0 0 0 8px rgba(201,162,39,0)" },
        },
      },

      animation: {
        float: "float 4s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-out",
        pulseGlow: "pulseGlow 2s infinite",
      },

      /* ===============================
         SPACING / CONTAINER
      =============================== */
      maxWidth: {
        dashboard: "1600px",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },

  plugins: [],
};
