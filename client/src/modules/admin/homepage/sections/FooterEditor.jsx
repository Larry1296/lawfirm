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
        <div>
          <h1 className="text-2xl font-semibold text-[color:var(--text-primary-light)] dark:text-[color:var(--text-primary-dark)]">
            Footer Settings
          </h1>

          <p className="text-sm text-[color:var(--text-muted-light)] dark:text-[color:var(--text-muted-dark)]">
            Customize footer branding and contact information
          </p>
        </div>

        <button
          onClick={() => updateField("enabled", !data.enabled)}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            data.enabled
              ? "bg-success/20 text-success"
              : "bg-[color:var(--border-light)] dark:bg-[color:var(--border-dark)] text-[color:var(--text-muted-light)] dark:text-[color:var(--text-muted-dark)]"
          }`}
        >
          {data.enabled ? "Enabled" : "Disabled"}
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* ================= LEFT ================= */}
        <div
          className="
            bg-[color:var(--surface-light)]
            dark:bg-[color:var(--surface-dark)]
            border border-[color:var(--border-light)]
            dark:border-[color:var(--border-dark)]
            rounded-2xl shadow-soft p-6 space-y-4
          "
        >
          <h2 className="font-semibold text-lg text-[color:var(--text-primary-light)] dark:text-[color:var(--text-primary-dark)]">
            Branding
          </h2>

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

          <h2 className="font-semibold text-lg pt-4 text-[color:var(--text-primary-light)] dark:text-[color:var(--text-primary-dark)]">
            Contact Info
          </h2>

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
        <div
          className="
            bg-[color:var(--surface-light)]
            dark:bg-[color:var(--surface-dark)]
            border border-[color:var(--border-light)]
            dark:border-[color:var(--border-dark)]
            rounded-2xl shadow-soft p-6 space-y-4
          "
        >
          <h2 className="font-semibold text-lg text-[color:var(--text-primary-light)] dark:text-[color:var(--text-primary-dark)]">
            Social Links
          </h2>

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

          <h2 className="font-semibold text-lg pt-4 text-[color:var(--text-primary-light)] dark:text-[color:var(--text-primary-dark)]">
            Footer Bottom
          </h2>

          <Input3D
            label="Copyright Text"
            value={data.copyright}
            onChange={(val) => updateField("copyright", val)}
          />

          {/* ================= PREVIEW ================= */}
          <div
            className="
              mt-6 rounded-xl p-4 border
              bg-[color:var(--background-light)]
              dark:bg-[color:var(--background-dark)]
              border-[color:var(--border-light)]
              dark:border-[color:var(--border-dark)]
            "
          >
            <p className="font-bold text-[color:var(--text-primary-light)] dark:text-[color:var(--text-primary-dark)]">
              {data.brandName}
            </p>

            <p className="text-sm text-[color:var(--text-muted-light)] dark:text-[color:var(--text-muted-dark)] mb-3">
              {data.description}
            </p>

            <div className="space-y-1 text-sm text-[color:var(--text-primary-light)] dark:text-[color:var(--text-primary-dark)]">
              <p>{data.contact.location}</p>
              <p>{data.contact.phone}</p>
              <p>{data.contact.email}</p>
            </div>

            <div className="mt-4 text-xs text-[color:var(--text-muted-light)] dark:text-[color:var(--text-muted-dark)]">
              {data.copyright}
            </div>
          </div>
        </div>
      </div>

      {/* SAVE */}
      <div className="flex justify-end">
        <button
          className="
            px-6 py-2 rounded-xl text-white font-medium
            bg-[color:var(--brand-primary)]
            hover:opacity-90
            shadow-medium transition
          "
        >
          Save Footer
        </button>
      </div>
    </div>
  );
}
