/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      /* =========================
       * COLOR SYSTEM (LAW FIRM)
       * ========================= */
      colors: {
        /* Base backgrounds */
        background: {
          light: "#F8FAFC",
          dark: "#0B1220",
        },

        surface: {
          light: "#FFFFFF",
          dark: "#111B2E",
        },

        border: {
          light: "#E2E8F0",
          dark: "#1F2A44",
        },

        /* Text */
        text: {
          primary: {
            light: "#0F172A",
            dark: "#E5E7EB",
          },
          muted: {
            light: "#64748B",
            dark: "#94A3B8",
          },
        },

        /* =========================
         * BRAND (OPTION 1)
         * ========================= */
        brand: {
          primary: "#0A2540", // Deep Navy
          accent: "#C8A24A", // Gold
        },

        /* Dark-mode adjusted accent (optional glow variant) */
        brandDark: {
          primary: "#3B82F6", // UI blue highlight
          accent: "#D4AF37", // brighter gold
        },

        /* =========================
         * STATUS COLORS
         * ========================= */
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#3B82F6",

        /* =========================
         * ROLE COLORS (IMPORTANT FOR YOU)
         * ========================= */
        roles: {
          admin: "#0A2540", // navy (authority)
          staff: "#1D4ED8", // blue (operations)
          client: "#059669", // green (trust)
          secretary: "#7C3AED", // purple (support)
          lawyer: "#0A2540", // same as admin navy tone
        },
      },

      /* =========================
       * TYPOGRAPHY
       * ========================= */
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        display: ["Poppins", "ui-sans-serif"],
      },

      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "30px"],
        "2xl": ["24px", "36px"],
        "3xl": ["30px", "40px"],
        "4xl": ["36px", "44px"],
      },

      /* =========================
       * SHADOWS (LAW FIRM STYLE)
       * ========================= */
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.06)",
        medium: "0 6px 18px rgba(0,0,0,0.10)",
        strong: "0 12px 30px rgba(0,0,0,0.15)",
      },

      /* =========================
       * BORDER RADIUS
       * ========================= */
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },

      /* =========================
       * ANIMATIONS (UI POLISH)
       * ========================= */
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(-10px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 0.25s ease-out",
        slideIn: "slideIn 0.25s ease-out",
      },
    },
  },

  plugins: [],
};
