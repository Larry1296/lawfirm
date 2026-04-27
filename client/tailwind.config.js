/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        /* ===============================
           LIGHT THEME PALETTE
           Custom Legal-Tech Identity
        =============================== */
        brand: {
          primary: "#05339C", // strong legal blue
          secondary: "#1055C9", // active interface blue
          accent: "#41A67E", // calm trust-building green
          warning: "#FFE8DB", // warm neutral highlight
        },

        /* ===============================
           DARK THEME PALETTE
           Derived from Light Theme
        =============================== */
        darkbrand: {
          base: "#041C52", // darker version of primary
          surface: "#0A2B73", // deepened secondary
          accent: "#2E7C5E", // muted dark green
          text: "#F5F7FA", // readable soft white
          muted: "#B8C5D6", // supporting text
          highlight: "#FFD8C2", // softened warm neutral
        },

        /* ===============================
           UNIVERSAL UI TOKENS
        =============================== */
        ui: {
          border: "#D9E4F2",
          muted: "#6B7A90",
          success: "#41A67E",
          danger: "#D64545",
          info: "#1055C9",
        },
      },

      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      boxShadow: {
        soft: "0 4px 14px rgba(5,51,156,0.08)",
        card: "0 10px 25px rgba(5,51,156,0.12)",
        glow: "0 0 0 3px rgba(16,85,201,0.18)",
        darkcard: "0 10px 30px rgba(2,18,56,0.55)",
      },

      borderRadius: {
        xl2: "1rem",
        xl3: "1.25rem",
        xl4: "1.5rem",
      },

      backgroundImage: {
        "hero-light":
          "linear-gradient(135deg, #05339C 0%, #1055C9 50%, #41A67E 100%)",

        "hero-dark":
          "linear-gradient(135deg, #041C52 0%, #0A2B73 55%, #2E7C5E 100%)",

        "card-light": "linear-gradient(180deg, #FFFFFF 0%, #FFE8DB 100%)",

        "card-dark": "linear-gradient(180deg, #0A2B73 0%, #041C52 100%)",
      },

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
          "0%,100%": { boxShadow: "0 0 0 0 rgba(16,85,201,0.30)" },
          "50%": { boxShadow: "0 0 0 8px rgba(16,85,201,0)" },
        },
      },

      animation: {
        float: "float 4s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-out",
        pulseGlow: "pulseGlow 2s infinite",
      },

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
