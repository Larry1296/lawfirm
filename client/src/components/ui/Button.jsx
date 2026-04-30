export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-150 active:translate-y-1 select-none";

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variants = {
    // ================= PRIMARY CTA =================
    primary: `
      bg-blue-600 text-white
      hover:bg-blue-700
      shadow-[0_6px_0_#1d4ed8]
      active:shadow-[0_2px_0_#1e40af]
    `,

    // ================= GREEN CTA (Get Started) =================
    success: `
      bg-green-600 text-white
      hover:bg-green-700
      shadow-[0_6px_0_#15803d]
      active:shadow-[0_2px_0_#166534]
    `,

    // ================= SECONDARY (LIGHT CARD BUTTON) =================
    secondary: `
      bg-white text-blue-900
      hover:bg-gray-100
      shadow-[0_6px_0_#d1d5db]
      active:shadow-[0_2px_0_#9ca3af]
    `,

    // ================= GHOST (DARK HERO USE) =================
    ghost: `
      bg-transparent text-white
      hover:bg-white/10
      shadow-[0_6px_0_rgba(255,255,255,0.15)]
      active:shadow-[0_2px_0_rgba(255,255,255,0.08)]
    `,

    // ================= OUTLINE (DARK BACKGROUND) =================
    outlineDark: `
      border border-white/30 text-white
      hover:bg-white/10
      shadow-[0_6px_0_rgba(255,255,255,0.12)]
      active:shadow-[0_2px_0_rgba(255,255,255,0.06)]
    `,

    // ================= OUTLINE (LIGHT BACKGROUND) =================
    outlineLight: `
      border border-black/20 text-black
      hover:bg-black/10
      shadow-[0_6px_0_rgba(0,0,0,0.12)]
      active:shadow-[0_2px_0_rgba(0,0,0,0.06)]
    `,
  };

  return (
    <button
      className={`
        ${base}
        ${sizes[size]}
        ${variants[variant]}
        hover:scale-[1.03]
        active:scale-[0.98]
        focus:outline-none
        focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
