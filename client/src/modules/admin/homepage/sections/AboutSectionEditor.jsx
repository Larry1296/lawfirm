// src/modules/admin/homepage/sections/AboutSectionEditorPage.jsx
import { useState } from "react";
import { Input3D } from "../../../../components/ui/Input3D";
import { Textarea3D } from "../../../../components/ui/TextArea3D";

import { ShieldCheck, Scale, Gavel, Users } from "lucide-react";

const iconOptions = { ShieldCheck, Scale, Gavel, Users };

const initialData = {
  enabled: true,
  title: "About Our Legal Practice",
  subtitle:
    "We are a modern law firm dedicated to delivering trusted legal solutions with precision, confidentiality, and excellence.",

  items: [
    {
      id: 1,
      icon: "ShieldCheck",
      title: "Trusted Expertise",
      description:
        "Years of experience in handling complex legal matters across multiple jurisdictions.",
    },
    {
      id: 2,
      icon: "Scale",
      title: "Fair Justice",
      description:
        "We ensure every client receives fair representation and balanced legal counsel.",
    },
  ],

  missionTitle: "Our Mission",

  missionText:
    "We combine traditional legal excellence with modern technology to deliver faster, smarter, and more accessible legal services.",

  quote: "Justice should be accessible, transparent, and efficient.",
};

export default function AboutSectionEditorPage() {
  const [data, setData] = useState(initialData);

  const updateField = (field, value) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const updateItem = (id, key, value) =>
    setData((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === id ? { ...item, [key]: value } : item,
      ),
    }));

  const addItem = () =>
    setData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: Date.now(),
          icon: "Scale",
          title: "",
          description: "",
        },
      ],
    }));

  const deleteItem = (id) =>
    setData((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));

  const moveItem = (index, direction) => {
    const list = [...data.items];
    const newIndex = index + direction;

    if (newIndex < 0 || newIndex >= list.length) return;

    [list[index], list[newIndex]] = [list[newIndex], list[index]];

    setData((prev) => ({
      ...prev,
      items: list,
    }));
  };

  return (
    <div className="p-6 space-y-6 animate-fadeIn">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
            About Section
          </h1>

          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
            Manage about section content and firm story
          </p>
        </div>

        {/* ENABLE / DISABLE */}
        <button
          onClick={() => updateField("enabled", !data.enabled)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
            data.enabled
              ? "bg-success/20 text-success"
              : "bg-surface-light dark:bg-surface-dark text-text-muted-light dark:text-text-muted-dark"
          }`}
        >
          {data.enabled ? "Enabled" : "Disabled"}
        </button>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* ================= LEFT SIDE ================= */}
        <div
          className="
            bg-surface-light dark:bg-surface-dark
            border border-border-light dark:border-border-dark
            shadow-soft rounded-2xl
            p-6 space-y-4
          "
        >
          <h2 className="font-semibold text-lg text-text-primary-light dark:text-text-primary-dark">
            Section Content
          </h2>

          <Input3D
            label="Title"
            value={data.title}
            onChange={(val) => updateField("title", val)}
          />

          <Textarea3D
            label="Subtitle"
            value={data.subtitle}
            onChange={(val) => updateField("subtitle", val)}
          />

          {/* ADD ITEM */}
          <button
            onClick={addItem}
            className="
              w-full py-3 rounded-xl
              bg-brand-primary text-white
              shadow-soft hover:opacity-90
              transition
            "
          >
            + Add Item
          </button>

          {/* ITEMS */}
          {data.items.map((item, index) => {
            const Icon = iconOptions[item.icon];

            return (
              <div
                key={item.id}
                className="
                  border rounded-2xl p-4 space-y-3
                  border-border-light dark:border-border-dark
                  bg-background-light dark:bg-background-dark
                "
              >
                {/* ICON PREVIEW */}
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-10 h-10 rounded-xl
                      flex items-center justify-center
                      bg-brand-primary/10 text-brand-primary
                    "
                  >
                    {Icon && <Icon size={20} />}
                  </div>

                  <p className="font-medium text-text-primary-light dark:text-text-primary-dark">
                    Feature Icon
                  </p>
                </div>

                {/* ICON SELECT */}
                <select
                  value={item.icon}
                  onChange={(e) => updateItem(item.id, "icon", e.target.value)}
                  className="
                    w-full rounded-xl p-3 outline-none
                    bg-surface-light dark:bg-surface-dark
                    border border-border-light dark:border-border-dark
                    text-text-primary-light dark:text-text-primary-dark
                  "
                >
                  {Object.keys(iconOptions).map((key) => (
                    <option key={key}>{key}</option>
                  ))}
                </select>

                {/* TITLE */}
                <Input3D
                  label="Title"
                  value={item.title}
                  onChange={(val) => updateItem(item.id, "title", val)}
                />

                {/* DESCRIPTION */}
                <Textarea3D
                  label="Description"
                  value={item.description}
                  onChange={(val) => updateItem(item.id, "description", val)}
                />

                {/* ACTIONS */}
                <div className="flex justify-between text-sm pt-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => moveItem(index, -1)}
                      className="
                        px-3 py-1 rounded-lg
                        bg-background-light dark:bg-background-dark
                        border border-border-light dark:border-border-dark
                        text-text-primary-light dark:text-text-primary-dark
                      "
                    >
                      ↑
                    </button>

                    <button
                      onClick={() => moveItem(index, 1)}
                      className="
                        px-3 py-1 rounded-lg
                        bg-background-light dark:bg-background-dark
                        border border-border-light dark:border-border-dark
                        text-text-primary-light dark:text-text-primary-dark
                      "
                    >
                      ↓
                    </button>
                  </div>

                  <button
                    onClick={() => deleteItem(item.id)}
                    className="text-error font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          className="
            bg-surface-light dark:bg-surface-dark
            border border-border-light dark:border-border-dark
            shadow-soft rounded-2xl
            p-6 space-y-4
          "
        >
          <h2 className="font-semibold text-lg text-text-primary-light dark:text-text-primary-dark">
            Mission & Story
          </h2>

          <Input3D
            label="Mission Title"
            value={data.missionTitle}
            onChange={(val) => updateField("missionTitle", val)}
          />

          <Textarea3D
            label="Mission Text"
            value={data.missionText}
            onChange={(val) => updateField("missionText", val)}
          />

          <Textarea3D
            label="Quote"
            value={data.quote}
            onChange={(val) => updateField("quote", val)}
          />

          {/* ================= PREVIEW ================= */}
          <div
            className="
              border rounded-2xl p-5 mt-4
              border-border-light dark:border-border-dark
              bg-background-light dark:bg-background-dark
            "
          >
            <h3 className="font-bold text-lg mb-2 text-text-primary-light dark:text-text-primary-dark">
              {data.missionTitle}
            </h3>

            <p className="text-sm mb-3 text-text-muted-light dark:text-text-muted-dark">
              {data.missionText}
            </p>

            <p className="text-xs italic text-brand-accent">“{data.quote}”</p>
          </div>
        </div>
      </div>

      {/* ================= SAVE ================= */}
      <div className="flex justify-end">
        <button
          className="
            px-6 py-3 rounded-2xl
            bg-brand-primary text-white
            shadow-medium hover:opacity-90
            transition
          "
        >
          Save About Section
        </button>
      </div>
    </div>
  );
}
