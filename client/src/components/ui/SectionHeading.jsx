import React from "react";

export default function SectionHeading({ title, subtitle, className = "" }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2
        className={`
          text-4xl md:text-5xl font-extrabold
          relative inline-block
          text-[color:var(--brand-primary)]
          shadow-[0_6px_0_rgba(0,0,0,0.2)]
          active:shadow-[0_2px_0_rgba(0,0,0,0.15)]
          transition-all duration-200
        `}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-[color:var(--text-muted)] max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
