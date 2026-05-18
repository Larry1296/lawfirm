import { useState } from "react";
import { Input3D } from "../../../../components/ui/Input3D";
import { Textarea3D } from "../../../../components/ui/TextArea3D";

/* =========================
   INITIAL DATA
========================= */
const initialData = {
  enabled: true,

  title: "Get in Touch",
  subtitle:
    "Have a legal question or need assistance? Our team is ready to help you 24/7.",

  contactInfo: {
    address: "Nairobi Legal District, Kenya\nCorporate Law Chambers",

    phones: ["+254 700 000 000", "+254 711 000 111"],

    emails: ["support@lawfirm.com", "info@lawfirm.com"],

    note: "We respond to all inquiries within 24 hours with strict confidentiality.",
  },

  form: {
    title: "Send a Message",
    buttonText: "Send Message",
  },
};

export default function ContactSectionEditorPage() {
  const [data, setData] = useState(initialData);

  /* =========================
     GLOBAL UPDATE
  ========================= */
  const updateField = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* =========================
     NESTED UPDATE (CONTACT INFO)
  ========================= */
  const updateContact = (field, value) => {
    setData((prev) => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [field]: value,
      },
    }));
  };

  /* =========================
     FORM UPDATE
  ========================= */
  const updateForm = (field, value) => {
    setData((prev) => ({
      ...prev,
      form: {
        ...prev.form,
        [field]: value,
      },
    }));
  };

  /* =========================
     UPDATE LIST (phones/emails)
  ========================= */
  const updateListItem = (type, index, value) => {
    const updated = [...data.contactInfo[type]];
    updated[index] = value;

    setData((prev) => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [type]: updated,
      },
    }));
  };

  const addListItem = (type) => {
    setData((prev) => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [type]: [...prev.contactInfo[type], ""],
      },
    }));
  };

  const removeListItem = (type, index) => {
    const updated = data.contactInfo[type].filter((_, i) => i !== index);

    setData((prev) => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [type]: updated,
      },
    }));
  };

  return (
    <div className="p-6 space-y-6 animate-fadeIn">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
            Contact Section
          </h1>

          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
            Manage contact page content & form
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= LEFT: CONTACT INFO ================= */}
        <div
          className="
            bg-surface-light dark:bg-surface-dark
            border border-border-light dark:border-border-dark
            shadow-soft rounded-2xl p-6 space-y-4
          "
        >
          <h2 className="font-semibold text-lg text-text-primary-light dark:text-text-primary-dark">
            Contact Information
          </h2>

          <Input3D
            label="Section Title"
            value={data.title}
            onChange={(val) => updateField("title", val)}
          />

          <Textarea3D
            label="Subtitle"
            value={data.subtitle}
            onChange={(val) => updateField("subtitle", val)}
          />

          {/* ADDRESS */}
          <Textarea3D
            label="Address"
            value={data.contactInfo.address}
            onChange={(val) => updateContact("address", val)}
          />

          {/* PHONES */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-text-primary-light dark:text-text-primary-dark">
                Phones
              </p>

              <button
                onClick={() => addListItem("phones")}
                className="text-brand-primary text-sm font-medium"
              >
                + Add
              </button>
            </div>

            {data.contactInfo.phones.map((phone, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <Input3D
                  value={phone}
                  onChange={(val) => updateListItem("phones", i, val)}
                />

                <button
                  onClick={() => removeListItem("phones", i)}
                  className="text-error text-sm font-medium"
                >
                  X
                </button>
              </div>
            ))}
          </div>

          {/* EMAILS */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium text-text-primary-light dark:text-text-primary-dark">
                Emails
              </p>

              <button
                onClick={() => addListItem("emails")}
                className="text-brand-primary text-sm font-medium"
              >
                + Add
              </button>
            </div>

            {data.contactInfo.emails.map((email, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <Input3D
                  value={email}
                  onChange={(val) => updateListItem("emails", i, val)}
                />

                <button
                  onClick={() => removeListItem("emails", i)}
                  className="text-error text-sm font-medium"
                >
                  X
                </button>
              </div>
            ))}
          </div>

          {/* NOTE */}
          <Textarea3D
            label="Info Note"
            value={data.contactInfo.note}
            onChange={(val) => updateContact("note", val)}
          />
        </div>

        {/* ================= RIGHT: FORM SETTINGS ================= */}
        <div
          className="
            bg-surface-light dark:bg-surface-dark
            border border-border-light dark:border-border-dark
            shadow-soft rounded-2xl p-6 space-y-4
          "
        >
          <h2 className="font-semibold text-lg text-text-primary-light dark:text-text-primary-dark">
            Contact Form
          </h2>

          <Input3D
            label="Form Title"
            value={data.form.title}
            onChange={(val) => updateForm("title", val)}
          />

          <Input3D
            label="Button Text"
            value={data.form.buttonText}
            onChange={(val) => updateForm("buttonText", val)}
          />

          {/* ================= PREVIEW ================= */}
          <div
            className="
              mt-6 p-4 rounded-xl border
              border-border-light dark:border-border-dark
              bg-background-light dark:bg-background-dark
              space-y-3
            "
          >
            <h3 className="font-bold text-lg text-text-primary-light dark:text-text-primary-dark">
              {data.form.title}
            </h3>

            <input
              className="
                w-full rounded-xl border p-3 outline-none
                bg-surface-light dark:bg-surface-dark
                border-border-light dark:border-border-dark
                text-text-primary-light dark:text-text-primary-dark
                placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark
              "
              placeholder="Full Name"
            />

            <button
              className="
                w-full py-3 rounded-xl
                bg-brand-primary text-white
                hover:opacity-90 transition
                shadow-soft
              "
            >
              {data.form.buttonText}
            </button>
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
          Save Contact Section
        </button>
      </div>
    </div>
  );
}
