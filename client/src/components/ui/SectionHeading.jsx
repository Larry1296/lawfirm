export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignStyles = {
    center: "text-center mx-auto",
    left: "text-left",
  };

  return (
    <div className={`max-w-3xl mb-16 ${alignStyles[align]} ${className}`}>
      {/* ================= 3D TITLE ================= */}
      <h2
        className="
          text-4xl font-bold text-blue-700
          relative inline-block
          transform-gpu
        "
        style={{
          textShadow: `
            0 1px 0 #1d4ed8,
            0 2px 0 #1e40af,
            0 3px 0 rgba(0,0,0,0.08),
            0 6px 12px rgba(0,0,0,0.12)
          `,
        }}
      >
        {title}

        {/* ================= UNDERLINE (3D ACCENT) ================= */}
        <span
          className="
            block h-[4px] w-16 mt-3 rounded-full
            bg-blue-600
            mx-auto
            shadow-[0_3px_0_rgba(29,78,216,0.3)]
          "
        />
      </h2>

      {/* ================= SUBTITLE ================= */}
      {subtitle && (
        <p className="mt-5 text-gray-600 text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
