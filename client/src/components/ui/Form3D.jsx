export default function Form3D({ children, title, subtitle }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="
          p-6 rounded-2xl
          bg-[color:var(--surface)]
          border border-[color:var(--border)]
          shadow-[var(--shadow-medium)]
        "
      >
        {title && (
          <h2 className="text-xl font-semibold text-[color:var(--text-primary)] mb-1">
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="text-sm text-[color:var(--text-muted)] mb-6">
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </div>
  );
}
