import { useState, useContext } from "react";
import { Input3D } from "../../../../components/ui/Input3D";
import { Textarea3D } from "../../../../components/ui/TextArea3D";
import ThemeContext from "../../../../core/store/ThemeContext";

/* =========================
   ICON OPTIONS
========================= */
const iconOptions = ["⚖️", "⚡", "⭐", "🛡️", "📜", "💼"];

const initialFeatures = {
  enabled: true,
  title: "Why Choose Us",
  items: [
    {
      id: 1,
      title: "Expert Lawyers",
      description: "Highly experienced legal professionals",
      icon: "⚖️",
    },
    {
      id: 2,
      title: "Fast Case Handling",
      description: "Quick and efficient legal processes",
      icon: "⚡",
    },
  ],
};

export default function FeaturesSectionEditorPage() {
  const { theme } = useContext(ThemeContext);

  const [features, setFeatures] = useState(initialFeatures);

  const updateField = (field, value) => {
    setFeatures((prev) => ({ ...prev, [field]: value }));
  };

  const updateItem = (id, key, value) => {
    setFeatures((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === id ? { ...item, [key]: value } : item,
      ),
    }));
  };

  const addFeature = () => {
    setFeatures((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        { id: Date.now(), title: "", description: "", icon: "⭐" },
      ],
    }));
  };

  const deleteFeature = (id) => {
    setFeatures((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  const moveUp = (index) => {
    if (index === 0) return;

    const items = [...features.items];
    [items[index - 1], items[index]] = [items[index], items[index - 1]];

    setFeatures((prev) => ({ ...prev, items }));
  };

  const moveDown = (index) => {
    if (index === features.items.length - 1) return;

    const items = [...features.items];
    [items[index + 1], items[index]] = [items[index], items[index + 1]];

    setFeatures((prev) => ({ ...prev, items }));
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
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Features Section</h1>

          <p className={`text-sm ${mutedText}`}>
            Manage homepage feature cards
          </p>
        </div>

        <button
          onClick={() => updateField("enabled", !features.enabled)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
            features.enabled
              ? "bg-success/20 text-success"
              : theme === "dark"
                ? "bg-surface-dark text-text-muted-dark border border-border-dark"
                : "bg-gray-200 text-gray-600"
          }`}
        >
          {features.enabled ? "Enabled" : "Disabled"}
        </button>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* EDIT FORM */}
        <div className={`${cardBg} p-6 rounded-2xl shadow-soft space-y-4`}>
          <h2 className="font-semibold text-lg">Section Settings</h2>

          <Input3D
            label="Section Title"
            value={features.title}
            onChange={(val) => updateField("title", val)}
          />

          <button
            onClick={addFeature}
            className={`w-full py-2 rounded-xl font-medium transition ${buttonPrimary}`}
          >
            + Add Feature
          </button>

          <div className="space-y-3">
            {features.items.map((item, index) => (
              <div
                key={item.id}
                className={`${previewCard} rounded-xl p-4 space-y-3`}
              >
                {/* ICON SELECT */}
                <select
                  value={item.icon}
                  onChange={(e) => updateItem(item.id, "icon", e.target.value)}
                  className={`
                    w-full rounded-lg p-3 outline-none transition
                    ${
                      theme === "dark"
                        ? "bg-surface-dark border border-border-dark text-text-primary-dark"
                        : "bg-white border border-border-light text-gray-900"
                    }
                  `}
                >
                  {iconOptions.map((icon) => (
                    <option key={icon} value={icon}>
                      {icon}
                    </option>
                  ))}
                </select>

                <Input3D
                  label="Title"
                  value={item.title}
                  onChange={(val) => updateItem(item.id, "title", val)}
                />

                <Textarea3D
                  label="Description"
                  value={item.description}
                  onChange={(val) => updateItem(item.id, "description", val)}
                />

                <div className="flex justify-between pt-2">
                  <div className="flex gap-2 text-sm">
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
                    onClick={() => deleteFeature(item.id)}
                    className="text-error text-sm hover:opacity-80"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LIVE PREVIEW */}
        <div className={`${cardBg} p-6 rounded-2xl shadow-soft`}>
          <h2 className="font-semibold text-lg mb-4">Live Preview</h2>

          {!features.enabled && (
            <p className={`${mutedText} italic`}>Section is disabled</p>
          )}

          {features.enabled && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold">{features.title}</h3>

              <div className="grid gap-3">
                {features.items.map((item) => (
                  <div
                    key={item.id}
                    className={`
                      p-4 rounded-xl flex gap-3
                      ${previewCard}
                    `}
                  >
                    <div className="text-2xl">{item.icon}</div>

                    <div>
                      <p className="font-semibold">{item.title}</p>

                      <p className={`text-sm ${mutedText}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SAVE */}
      <div className="flex justify-end">
        <button
          className={`
            px-6 py-2 rounded-xl shadow-medium transition
            ${buttonPrimary}
          `}
        >
          Save Features Section
        </button>
      </div>
    </div>
  );
}
