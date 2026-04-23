/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        /* ===============================
           LIGHT THEME PALETTE
        =============================== */
        brand: {
          primary: "#1B5E20", // deep legal green
          secondary: "#A7C4A0", // muted soft green
          accent: "#C2A878", // refined legal gold
          warning: "#D97706", // toned-down orange
        },

        /* ===============================
           DARK THEME PALETTE
        =============================== */
        darkbrand: {
          base: "#081C15", // deep green-black (NOT pure black)
          surface: "#0F2A20", // dark green surface
          text: "#E6F4EA", // soft readable light green
        },

        /* ===============================
           UNIVERSAL UI TOKENS
        =============================== */
        ui: {
          border: "#D1D5DB",
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
        soft: "0 4px 14px rgba(0,0,0,0.06)",
        card: "0 10px 25px rgba(0,0,0,0.08)",
        glow: "0 0 0 3px rgba(167,196,160,0.25)",
        darkcard: "0 10px 30px rgba(0,0,0,0.5)",
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
          "linear-gradient(135deg, #1B5E20 0%, #A7C4A0 45%, #C2A878 100%)",

        "hero-dark":
          "linear-gradient(135deg, #081C15 0%, #0F2A20 60%, #1B3A2F 100%)",

        "card-light":
          "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(246,248,246,1) 100%)",

        "card-dark":
          "linear-gradient(180deg, rgba(15,42,32,1) 0%, rgba(8,28,21,1) 100%)",
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
          "0%,100%": { boxShadow: "0 0 0 0 rgba(167,196,160,0.35)" },
          "50%": { boxShadow: "0 0 0 8px rgba(167,196,160,0)" },
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
