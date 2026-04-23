import React from "react";

export default function Stepper({
  steps = [],
  currentStep = 1,
  className = "",
}) {
  return (
    <div
      className={`
        w-full
        flex items-center justify-between
        ${className}
      `}
    >
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={index} className="flex items-center flex-1">
            {/* STEP CIRCLE */}
            <div className="flex flex-col items-center relative">
              <div
                className={`
                  w-9 h-9
                  rounded-full
                  flex items-center justify-center
                  text-sm font-medium
                  transition-all duration-300 ease-smooth

                  ${
                    isCompleted
                      ? "bg-brand-primary text-white shadow-glow"
                      : isActive
                        ? "bg-brand-secondary text-gray-900 shadow-card"
                        : "bg-white dark:bg-darkbrand-surface text-gray-500 border border-ui-border"
                  }
                `}
              >
                {isCompleted ? "✓" : stepNumber}
              </div>

              {/* LABEL */}
              <span
                className={`
                  text-xs mt-2 text-center
                  max-w-[80px]
                  ${
                    isActive
                      ? "text-brand-primary font-medium"
                      : "text-ui-muted dark:text-gray-400"
                  }
                `}
              >
                {step}
              </span>
            </div>

            {/* LINE */}
            {index !== steps.length - 1 && (
              <div
                className={`
                  flex-1 h-[2px] mx-3
                  transition-all duration-300 ease-smooth

                  ${
                    stepNumber < currentStep
                      ? "bg-brand-primary"
                      : "bg-ui-border dark:bg-darkbrand-base"
                  }
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
