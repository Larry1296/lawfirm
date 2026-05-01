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
    <div className="p-6 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Contact Section</h1>
          <p className="text-sm text-gray-500">
            Manage contact page content & form
          </p>
        </div>

        {/* ENABLE / DISABLE */}
        <button
          onClick={() => updateField("enabled", !data.enabled)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold ${
            data.enabled
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {data.enabled ? "Enabled" : "Disabled"}
        </button>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= LEFT: CONTACT INFO ================= */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="font-semibold text-lg">Contact Information</h2>

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
              <p className="font-medium">Phones</p>
              <button
                onClick={() => addListItem("phones")}
                className="text-blue-600 text-sm"
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
                  className="text-red-500 text-sm"
                >
                  X
                </button>
              </div>
            ))}
          </div>

          {/* EMAILS */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium">Emails</p>
              <button
                onClick={() => addListItem("emails")}
                className="text-blue-600 text-sm"
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
                  className="text-red-500 text-sm"
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
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="font-semibold text-lg">Contact Form</h2>

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
          <div className="mt-6 p-4 border rounded-xl space-y-2">
            <h3 className="font-bold text-lg">{data.form.title}</h3>

            <input
              className="w-full border p-2 rounded"
              placeholder="Full Name"
            />

            <button className="w-full bg-blue-900 text-white py-2 rounded">
              {data.form.buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* ================= SAVE ================= */}
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-blue-900 text-white rounded-xl">
          Save Contact Section
        </button>
      </div>
    </div>
  );
}
