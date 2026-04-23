import React from "react";
import { NavLink } from "react-router-dom";

/* You can later replace icons with lucide-react or your own */
const links = [
  { name: "Dashboard", path: "/lawyer/dashboard" },
  { name: "Cases", path: "/lawyer/cases" },
  { name: "Clients", path: "/lawyer/clients" },
  { name: "Users", path: "/lawyer/users" },
  { name: "Settings", path: "/lawyer/settings" },
];

export default function Sidebar({ collapsed }) {
  return (
    <aside
      className={`h-screen bg-white dark:bg-darkbrand-surface border-r border-ui-border transition-all duration-300
      ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* LOGO */}
      <div className="p-4 font-bold text-brand-primary">
        {collapsed ? "L" : "LawyerSys"}
      </div>

      {/* NAV LINKS */}
      <nav className="mt-4 flex flex-col gap-1">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `px-4 py-2 text-sm rounded-lg mx-2 transition
              ${
                isActive
                  ? "bg-brand-primary text-white"
                  : "text-gray-600 dark:text-darkbrand-text hover:bg-gray-100 dark:hover:bg-darkbrand-base"
              }`
            }
          >
            {collapsed ? link.name[0] : link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
