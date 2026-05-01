import { useState } from "react";
import { Input3D } from "../../../../components/ui/Input3D";
import { Textarea3D } from "../../../../components/ui/TextArea3D";

/* =========================
   INITIAL DATA
========================= */
const initialData = {
  enabled: true,

  brandName: "LawFirm",
  description:
    "Professional legal services you can trust. We provide reliable and efficient legal solutions tailored to your needs.",

  contact: {
    location: "Nairobi, Kenya",
    phone: "+254 700 000 000",
    email: "info@lawfirm.com",
  },

  social: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
  },

  copyright: "© 2026 LawFirm. All rights reserved.",
};

export default function FooterEditorPage() {
  const [data, setData] = useState(initialData);

  /* =========================
     UPDATE ROOT
  ========================= */
  const updateField = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* =========================
     UPDATE CONTACT
  ========================= */
  const updateContact = (field, value) => {
    setData((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value,
      },
    }));
  };

  /* =========================
     UPDATE SOCIAL
  ========================= */
  const updateSocial = (field, value) => {
    setData((prev) => ({
      ...prev,
      social: {
        ...prev.social,
        [field]: value,
      },
    }));
  };

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Footer Settings</h1>

        <button
          onClick={() => updateField("enabled", !data.enabled)}
          className={`px-4 py-2 rounded-lg ${
            data.enabled ? "bg-green-100 text-green-700" : "bg-gray-200"
          }`}
        >
          {data.enabled ? "Enabled" : "Disabled"}
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* ================= LEFT ================= */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="font-semibold">Branding</h2>

          <Input3D
            label="Brand Name"
            value={data.brandName}
            onChange={(val) => updateField("brandName", val)}
          />

          <Textarea3D
            label="Description"
            value={data.description}
            onChange={(val) => updateField("description", val)}
          />

          <h2 className="font-semibold pt-4">Contact Info</h2>

          <Input3D
            label="Location"
            value={data.contact.location}
            onChange={(val) => updateContact("location", val)}
          />

          <Input3D
            label="Phone"
            value={data.contact.phone}
            onChange={(val) => updateContact("phone", val)}
          />

          <Input3D
            label="Email"
            value={data.contact.email}
            onChange={(val) => updateContact("email", val)}
          />
        </div>

        {/* ================= RIGHT ================= */}
        <div className="bg-white p-6 rounded-2xl shadow space-y-4">
          <h2 className="font-semibold">Social Links</h2>

          <Input3D
            label="Facebook URL"
            value={data.social.facebook}
            onChange={(val) => updateSocial("facebook", val)}
          />

          <Input3D
            label="Twitter URL"
            value={data.social.twitter}
            onChange={(val) => updateSocial("twitter", val)}
          />

          <Input3D
            label="LinkedIn URL"
            value={data.social.linkedin}
            onChange={(val) => updateSocial("linkedin", val)}
          />

          <h2 className="font-semibold pt-4">Footer Bottom</h2>

          <Input3D
            label="Copyright Text"
            value={data.copyright}
            onChange={(val) => updateField("copyright", val)}
          />

          {/* ================= PREVIEW ================= */}
          <div className="mt-6 border rounded-xl p-4 text-sm">
            <p className="font-bold">{data.brandName}</p>

            <p className="text-gray-600 mb-3">{data.description}</p>

            <p>{data.contact.location}</p>
            <p>{data.contact.phone}</p>
            <p>{data.contact.email}</p>

            <div className="mt-4 text-gray-500 text-xs">{data.copyright}</div>
          </div>
        </div>
      </div>

      {/* SAVE */}
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-blue-900 text-white rounded-xl">
          Save Footer
        </button>
      </div>
    </div>
  );
}
