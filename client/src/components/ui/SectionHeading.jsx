import { useContext } from "react";
import ThemeContext from "../../core/store/ThemeContext";

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const { theme } = useContext(ThemeContext);

  const alignStyles = {
    center: "text-center mx-auto",
    left: "text-left",
  };

  const titleClasses =
    theme === "dark"
      ? "text-[color:var(--text-primary-dark)]"
      : "text-[color:var(--brand-primary)]";

  const subtitleClasses =
    theme === "dark" ? "text-[color:var(--text-muted-dark)]" : "text-gray-600";

  const underlineClasses =
    theme === "dark"
      ? "bg-[color:var(--brand-accent)] shadow-[0_3px_0_rgba(251,191,36,0.3)]"
      : "bg-[color:var(--brand-primary)] shadow-[0_3px_0_rgba(29,78,216,0.3)]";

  return (
    <div className={`max-w-3xl mb-16 ${alignStyles[align]} ${className}`}>
      {/* ================= TITLE ================= */}
      <h2
        className={`
          text-4xl font-bold
          relative inline-block
          transform-gpu
          ${titleClasses}
        `}
        style={{
          textShadow:
            theme === "dark"
              ? `
                0 1px 0 rgba(255,255,255,0.04),
                0 2px 0 rgba(255,255,255,0.03),
                0 6px 12px rgba(0,0,0,0.45)
              `
              : `
                0 1px 0 #1d4ed8,
                0 2px 0 #1e40af,
                0 3px 0 rgba(0,0,0,0.08),
                0 6px 12px rgba(0,0,0,0.12)
              `,
        }}
      >
        {title}

        {/* ================= UNDERLINE ================= */}
        <span
          className={`
            block h-[4px] w-16 mt-3 rounded-full
            mx-auto
            ${underlineClasses}
          `}
        />
      </h2>

      {/* ================= SUBTITLE ================= */}
      {subtitle && (
        <p
          className={`
            mt-5 text-lg leading-relaxed
            ${subtitleClasses}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
