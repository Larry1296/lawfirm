export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        shadow-[0_10px_0_rgba(0,0,0,0.08)]
        hover:shadow-[0_14px_0_rgba(0,0,0,0.12)]
        transition-all duration-200
        active:translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
}
