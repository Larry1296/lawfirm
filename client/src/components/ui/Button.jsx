export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300";

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variants = {
    primary: "bg-blue-600 text-white hover:scale-105 hover:bg-blue-700",
    secondary: "bg-white text-blue-900 hover:bg-gray-100",
    ghost: "bg-transparent hover:bg-white/10 text-white",
    outline: "border border-white/30 text-white hover:bg-white/10",
    darkOutline: "border border-black/20 text-black hover:bg-black/10",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
