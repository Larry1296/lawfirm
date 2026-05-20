// src/modules/staff/lawyer/security/LawyerSecurity.jsx

import { useContext, useState } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";
import {
  Shield,
  Lock,
  Smartphone,
  Monitor,
  KeyRound,
  LogOut,
  Eye,
} from "lucide-react";

export default function LawyerSecurity() {
  const { theme } = useContext(ThemeContext);

  const [twoFA, setTwoFA] = useState(true);

  const card =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] text-white border border-[color:var(--border-dark)]"
      : "bg-[color:var(--surface-light)] text-black border border-[color:var(--border-light)]";

  const muted =
    theme === "dark" ? "text-[color:var(--text-muted-dark)]" : "text-gray-500";

  const sessions = [
    {
      device: "Windows - Chrome",
      location: "Nairobi, Kenya",
      time: "Active now",
      icon: Monitor,
    },
    {
      device: "iPhone 14 Pro",
      location: "Mombasa, Kenya",
      time: "2 hours ago",
      icon: Smartphone,
    },
  ];

  const logs = [
    {
      action: "Login Successful",
      time: "Today 08:21 AM",
    },
    {
      action: "Password Changed",
      time: "Yesterday 06:10 PM",
    },
    {
      action: "New Device Login",
      time: "2 days ago",
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Shield className="text-[color:var(--brand-primary)]" />
          Security
        </h1>

        <p className={`text-sm mt-2 ${muted}`}>
          Manage your account security, devices, and authentication.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PASSWORD */}
        <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Lock />
            Password
          </h2>

          <p className={`text-sm mt-2 ${muted}`}>
            Update your password regularly for better security.
          </p>

          <div className="space-y-3 mt-5">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full p-2 rounded-xl bg-gray-100 dark:bg-gray-800 outline-none"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full p-2 rounded-xl bg-gray-100 dark:bg-gray-800 outline-none"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 rounded-xl bg-gray-100 dark:bg-gray-800 outline-none"
            />

            <button className="w-full mt-2 py-2 rounded-xl bg-[color:var(--brand-primary)] text-white flex items-center justify-center gap-2">
              <KeyRound size={16} />
              Update Password
            </button>
          </div>
        </div>

        {/* 2FA */}
        <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Shield />
            Two-Factor Authentication
          </h2>

          <p className={`text-sm mt-2 ${muted}`}>
            Add an extra layer of protection to your account.
          </p>

          <div className="flex items-center justify-between mt-6">
            <span>Enable 2FA</span>

            <button
              onClick={() => setTwoFA(!twoFA)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                twoFA ? "bg-[color:var(--brand-primary)]" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transform transition ${
                  twoFA ? "translate-x-6" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ACTIVE SESSIONS */}
      <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
        <h2 className="text-lg font-bold flex items-center gap-2">
          <Monitor />
          Active Sessions
        </h2>

        <div className="mt-5 space-y-4">
          {sessions.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3"
              >
                <div className="flex items-center gap-3">
                  <Icon className="text-[color:var(--brand-primary)]" />
                  <div>
                    <p className="font-medium">{s.device}</p>
                    <p className={`text-xs ${muted}`}>{s.location}</p>
                  </div>
                </div>

                <span className="text-xs text-green-500">{s.time}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* LOGIN HISTORY */}
      <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
        <h2 className="text-lg font-bold flex items-center gap-2">
          <Eye />
          Recent Activity
        </h2>

        <div className="mt-5 space-y-3">
          {logs.map((log, i) => (
            <div
              key={i}
              className="flex justify-between items-center text-sm border-b border-gray-200 dark:border-gray-700 pb-2"
            >
              <span>{log.action}</span>
              <span className={muted}>{log.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* LOGOUT ALL DEVICES */}
      <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
        <button className="px-5 py-2 rounded-xl bg-red-500 text-white flex items-center gap-2">
          <LogOut size={16} />
          Logout All Devices
        </button>
      </div>
    </div>
  );
}
