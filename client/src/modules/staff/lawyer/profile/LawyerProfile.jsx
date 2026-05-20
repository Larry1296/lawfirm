// src/modules/staff/lawyer/profile/LawyerProfile.jsx

import {
  User,
  Briefcase,
  Shield,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  FileText,
  Clock,
} from "lucide-react";

import { useContext, useState } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";

export default function LawyerProfile() {
  const { theme } = useContext(ThemeContext);

  const [editMode, setEditMode] = useState(false);

  const [profile, setProfile] = useState({
    name: "Adv. Brian Mwangi",
    email: "brian.mwangi@lawfirm.co.ke",
    phone: "+254 712 345 678",
    location: "Nairobi, Kenya",
    role: "Co-Lawyer",
    license: "LSK/2022/8891",
    department: "Litigation",
  });

  const card =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] border border-[color:var(--border-dark)] text-white"
      : "bg-[color:var(--surface-light)] border border-[color:var(--border-light)] text-black";

  const muted =
    theme === "dark" ? "text-[color:var(--text-muted-dark)]" : "text-gray-500";

  const stats = [
    { label: "Active Cases", value: 14, icon: FileText },
    { label: "Hearings This Month", value: 6, icon: Calendar },
    { label: "Billable Hours", value: 82, icon: Clock },
    { label: "Completed Matters", value: 31, icon: Award },
  ];

  const workload = [
    { type: "Civil Cases", value: 8 },
    { type: "Criminal Cases", value: 4 },
    { type: "Corporate Matters", value: 2 },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display flex items-center gap-2">
            <User className="text-[color:var(--brand-primary)]" />
            Lawyer Profile
          </h1>

          <p className={`text-sm mt-2 ${muted}`}>
            Manage professional identity, workload, and performance overview.
          </p>
        </div>

        <button
          onClick={() => setEditMode(!editMode)}
          className="px-5 py-2 rounded-xl bg-[color:var(--brand-primary)] text-white"
        >
          {editMode ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      {/* PROFILE CARD */}
      <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* AVATAR */}
          <div className="w-28 h-28 rounded-2xl bg-[color:var(--brand-primary)] flex items-center justify-center text-white text-3xl font-bold">
            BM
          </div>

          {/* INFO */}
          <div className="flex-1 space-y-3">
            {editMode ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                  className="p-2 rounded-xl bg-gray-100 outline-none"
                />

                <input
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  className="p-2 rounded-xl bg-gray-100 outline-none"
                />

                <input
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                  className="p-2 rounded-xl bg-gray-100 outline-none"
                />

                <input
                  value={profile.location}
                  onChange={(e) =>
                    setProfile({ ...profile, location: e.target.value })
                  }
                  className="p-2 rounded-xl bg-gray-100 outline-none"
                />
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold">{profile.name}</h2>

                <p className={muted}>{profile.role}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mt-3">
                  <p className="flex items-center gap-2">
                    <Mail size={16} /> {profile.email}
                  </p>

                  <p className="flex items-center gap-2">
                    <Phone size={16} /> {profile.phone}
                  </p>

                  <p className="flex items-center gap-2">
                    <MapPin size={16} /> {profile.location}
                  </p>

                  <p className="flex items-center gap-2">
                    <Shield size={16} /> {profile.license}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className={`p-6 rounded-2xl shadow-soft ${card}`}>
            <div className="flex justify-between">
              <div>
                <p className={muted}>{s.label}</p>
                <h2 className="text-2xl font-bold mt-2">{s.value}</h2>
              </div>

              <s.icon className="text-[color:var(--brand-primary)]" />
            </div>
          </div>
        ))}
      </div>

      {/* WORKLOAD */}
      <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Briefcase className="text-[color:var(--brand-primary)]" />
          Case Workload Breakdown
        </h2>

        <div className="space-y-4">
          {workload.map((w, i) => (
            <div key={i} className="flex justify-between items-center">
              <span>{w.type}</span>

              <div className="flex items-center gap-3 w-2/3">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[color:var(--brand-primary)]"
                    style={{ width: `${w.value * 10}%` }}
                  />
                </div>

                <span className="text-sm w-10 text-right">{w.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUMMARY */}
      <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
        <h2 className="text-lg font-bold flex items-center gap-2">
          <Award className="text-yellow-500" />
          Performance Summary
        </h2>

        <p className={`text-sm mt-2 ${muted}`}>
          Strong litigation performance with consistent case handling
          efficiency. Recommended for senior case assignment pipeline.
        </p>
      </div>
    </div>
  );
}
