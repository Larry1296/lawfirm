// src/modules/staff/lawyer/settings/LawyerSettings.jsx

import {
  Settings,
  Bell,
  Shield,
  Sun,
  Moon,
  Lock,
  Eye,
  Save,
} from "lucide-react";

import { useContext, useState } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";

/* =========================
   TOGGLE COMPONENT (FIXED)
========================= */
function Toggle({ enabled, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
        enabled
          ? "bg-[color:var(--brand-primary)]"
          : "bg-gray-300 dark:bg-gray-600"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition ${
          enabled ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
}

export default function LawyerSettings() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    caseUpdates: true,
    courtReminders: true,
  });

  const [privacy, setPrivacy] = useState({
    showProfile: true,
    activityStatus: true,
  });

  const [security, setSecurity] = useState({
    twoFactor: false,
    loginAlerts: true,
  });

  const card =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] border border-[color:var(--border-dark)] text-white"
      : "bg-[color:var(--surface-light)] border border-[color:var(--border-light)] text-black";

  const muted =
    theme === "dark" ? "text-[color:var(--text-muted-dark)]" : "text-gray-500";

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Settings className="text-[color:var(--brand-primary)]" />
          Settings
        </h1>

        <p className={`text-sm mt-2 ${muted}`}>
          Manage your professional preferences and security.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* THEME */}
        <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Sun />
            Appearance
          </h2>

          <div className="flex justify-between mt-6 items-center">
            <span>Dark Mode</span>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-[color:var(--brand-primary)] text-white"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Bell />
            Notifications
          </h2>

          <div className="space-y-4 mt-6">
            <div className="flex justify-between items-center">
              <span>Email Notifications</span>
              <Toggle
                enabled={notifications.email}
                onChange={() =>
                  setNotifications((p) => ({ ...p, email: !p.email }))
                }
              />
            </div>

            <div className="flex justify-between items-center">
              <span>SMS Alerts</span>
              <Toggle
                enabled={notifications.sms}
                onChange={() =>
                  setNotifications((p) => ({ ...p, sms: !p.sms }))
                }
              />
            </div>

            <div className="flex justify-between items-center">
              <span>Case Updates</span>
              <Toggle
                enabled={notifications.caseUpdates}
                onChange={() =>
                  setNotifications((p) => ({
                    ...p,
                    caseUpdates: !p.caseUpdates,
                  }))
                }
              />
            </div>

            <div className="flex justify-between items-center">
              <span>Court Reminders</span>
              <Toggle
                enabled={notifications.courtReminders}
                onChange={() =>
                  setNotifications((p) => ({
                    ...p,
                    courtReminders: !p.courtReminders,
                  }))
                }
              />
            </div>
          </div>
        </div>

        {/* PRIVACY */}
        <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Eye />
            Privacy
          </h2>

          <div className="space-y-4 mt-6">
            <div className="flex justify-between items-center">
              <span>Show Profile</span>
              <Toggle
                enabled={privacy.showProfile}
                onChange={() =>
                  setPrivacy((p) => ({
                    ...p,
                    showProfile: !p.showProfile,
                  }))
                }
              />
            </div>

            <div className="flex justify-between items-center">
              <span>Activity Status</span>
              <Toggle
                enabled={privacy.activityStatus}
                onChange={() =>
                  setPrivacy((p) => ({
                    ...p,
                    activityStatus: !p.activityStatus,
                  }))
                }
              />
            </div>
          </div>
        </div>

        {/* SECURITY */}
        <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Shield />
            Security
          </h2>

          <div className="space-y-4 mt-6">
            <div className="flex justify-between items-center">
              <span>Two-Factor Auth</span>
              <Toggle
                enabled={security.twoFactor}
                onChange={() =>
                  setSecurity((p) => ({
                    ...p,
                    twoFactor: !p.twoFactor,
                  }))
                }
              />
            </div>

            <div className="flex justify-between items-center">
              <span>Login Alerts</span>
              <Toggle
                enabled={security.loginAlerts}
                onChange={() =>
                  setSecurity((p) => ({
                    ...p,
                    loginAlerts: !p.loginAlerts,
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* SAVE */}
      <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
        <button className="px-5 py-2 rounded-xl bg-[color:var(--brand-primary)] text-white flex items-center gap-2">
          <Save size={16} />
          Save Changes
        </button>
      </div>
    </div>
  );
}
