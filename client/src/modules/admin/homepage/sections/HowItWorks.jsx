import { useState, useContext } from "react";
import { Input3D } from "../../../../components/ui/Input3D";
import { Textarea3D } from "../../../../components/ui/TextArea3D";
import ThemeContext from "../../../../core/store/ThemeContext";

/* =========================
   INITIAL DATA
========================= */
const initialData = {
  enabled: true,
  title: "How It Works",
  subtitle: "Simple 3-step process",
  steps: [
    {
      id: 1,
      title: "Consultation",
      description: "We understand your legal needs",
      icon: "💬",
    },
    {
      id: 2,
      title: "Case Review",
      description: "We analyze your case in detail",
      icon: "📄",
    },
    {
      id: 3,
      title: "Resolution",
      description: "We deliver the best outcome",
      icon: "⚖️",
    },
  ],
};

export default function HowItWorksEditorPage() {
  const { theme } = useContext(ThemeContext);

  const [data, setData] = useState(initialData);

  /* =========================
     UPDATE TOP FIELDS
  ========================= */
  const updateField = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* =========================
     UPDATE STEP
  ========================= */
  const updateStep = (id, key, value) => {
    setData((prev) => ({
      ...prev,
      steps: prev.steps.map((step) =>
        step.id === id ? { ...step, [key]: value } : step,
      ),
    }));
  };

  /* =========================
     ADD STEP
  ========================= */
  const addStep = () => {
    const newStep = {
      id: Date.now(),
      title: "",
      description: "",
      icon: "⭐",
    };

    setData((prev) => ({
      ...prev,
      steps: [...prev.steps, newStep],
    }));
  };

  /* =========================
     DELETE STEP
  ========================= */
  const deleteStep = (id) => {
    setData((prev) => ({
      ...prev,
      steps: prev.steps.filter((s) => s.id !== id),
    }));
  };

  /* =========================
     MOVE STEP UP
  ========================= */
  const moveUp = (index) => {
    if (index === 0) return;

    const steps = [...data.steps];
    [steps[index - 1], steps[index]] = [steps[index], steps[index - 1]];

    setData((prev) => ({ ...prev, steps }));
  };

  /* =========================
     MOVE STEP DOWN
  ========================= */
  const moveDown = (index) => {
    if (index === data.steps.length - 1) return;

    const steps = [...data.steps];
    [steps[index + 1], steps[index]] = [steps[index], steps[index + 1]];

    setData((prev) => ({ ...prev, steps }));
  };

  /* =========================
     THEME CLASSES
  ========================= */
  const pageBg =
    theme === "dark"
      ? "bg-background-dark text-text-primary-dark"
      : "bg-background-light text-gray-900";

  const cardBg =
    theme === "dark"
      ? "bg-surface-dark border border-border-dark"
      : "bg-surface-light border border-border-light";

  const mutedText = theme === "dark" ? "text-text-muted-dark" : "text-gray-500";

  const previewCard =
    theme === "dark"
      ? "bg-background-dark border border-border-dark"
      : "bg-gray-50 border border-border-light";

  const buttonPrimary = "bg-brand-primary hover:opacity-90 text-white";

  return (
    <div className={`p-6 space-y-6 ${pageBg}`}>
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">How It Works Section</h1>

          <p className={`text-sm ${mutedText}`}>Manage step-by-step process</p>
        </div>

        {/* ENABLE / DISABLE */}
        <button
          onClick={() => updateField("enabled", !data.enabled)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
            data.enabled
              ? "bg-success/20 text-success"
              : theme === "dark"
                ? "bg-surface-dark text-text-muted-dark border border-border-dark"
                : "bg-gray-200 text-gray-600"
          }`}
        >
          {data.enabled ? "Enabled" : "Disabled"}
        </button>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= LEFT: EDIT FORM ================= */}
        <div className={`${cardBg} p-6 rounded-2xl shadow-soft space-y-4`}>
          <h2 className="font-semibold text-lg">Section Settings</h2>

          {/* TITLE */}
          <Input3D
            label="Section Title"
            value={data.title}
            onChange={(val) => updateField("title", val)}
          />

          {/* SUBTITLE */}
          <Input3D
            label="Subtitle"
            value={data.subtitle}
            onChange={(val) => updateField("subtitle", val)}
          />

          {/* ADD STEP */}
          <button
            onClick={addStep}
            className={`w-full py-2 rounded-xl font-medium transition ${buttonPrimary}`}
          >
            + Add Step
          </button>

          {/* STEPS */}
          <div className="space-y-3">
            {data.steps.map((step, index) => (
              <div
                key={step.id}
                className={`${previewCard} p-4 rounded-xl space-y-3`}
              >
                {/* ICON */}
                <Input3D
                  label="Icon"
                  value={step.icon}
                  onChange={(val) => updateStep(step.id, "icon", val)}
                />

                {/* TITLE */}
                <Input3D
                  label="Step Title"
                  value={step.title}
                  onChange={(val) => updateStep(step.id, "title", val)}
                />

                {/* DESCRIPTION */}
                <Textarea3D
                  label="Description"
                  value={step.description}
                  onChange={(val) => updateStep(step.id, "description", val)}
                />

                {/* ACTIONS */}
                <div className="flex justify-between pt-2 text-sm">
                  <div className="flex gap-2">
                    <button
                      onClick={() => moveUp(index)}
                      className={`
                        px-3 py-1 rounded-lg transition
                        ${
                          theme === "dark"
                            ? "bg-surface-dark hover:bg-border-dark"
                            : "bg-gray-100 hover:bg-gray-200"
                        }
                      `}
                    >
                      ↑
                    </button>

                    <button
                      onClick={() => moveDown(index)}
                      className={`
                        px-3 py-1 rounded-lg transition
                        ${
                          theme === "dark"
                            ? "bg-surface-dark hover:bg-border-dark"
                            : "bg-gray-100 hover:bg-gray-200"
                        }
                      `}
                    >
                      ↓
                    </button>
                  </div>

                  <button
                    onClick={() => deleteStep(step.id)}
                    className="text-error hover:opacity-80"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT: PREVIEW ================= */}
        <div className={`${cardBg} p-6 rounded-2xl shadow-soft`}>
          <h2 className="font-semibold text-lg mb-4">Live Preview</h2>

          {!data.enabled ? (
            <p className={`${mutedText} italic`}>Section is disabled</p>
          ) : (
            <>
              <h3 className="text-xl font-bold">{data.title}</h3>

              <p className={`text-sm mb-4 ${mutedText}`}>{data.subtitle}</p>

              <div className="space-y-3">
                {data.steps.map((step) => (
                  <div
                    key={step.id}
                    className={`
                      p-4 rounded-xl flex gap-3
                      ${previewCard}
                    `}
                  >
                    <div className="text-2xl">{step.icon}</div>

                    <div>
                      <p className="font-semibold">{step.title}</p>

                      <p className={`text-sm ${mutedText}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* ================= SAVE ================= */}
      <div className="flex justify-end">
        <button
          className={`
            px-6 py-2 rounded-xl shadow-medium transition
            ${buttonPrimary}
          `}
        >
          Save Section
        </button>
      </div>
    </div>
  );
}
