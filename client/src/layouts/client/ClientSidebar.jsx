import { NavLink } from "react-router-dom";

const links = [
  { name: "Dashboard", path: "/client/dashboard", end: true },
  { name: "Cases", path: "/client/cases", end: true }, // 👈 important
  { name: "Case Tracking", path: "/client/cases/tracking" },
  { name: "Court Session", path: "/client/cases/court-session" },
  { name: "Notifications", path: "/client/cases/notifications" },
  { name: "Chat", path: "/client/cases/chat" },
  { name: "Profile", path: "/client/profile" },
];

export default function ClientSidebar() {
  return (
    <aside className="w-64 bg-blue-900 text-white flex flex-col">
      {/* LOGO */}
      <div className="p-4 font-bold text-xl border-b border-blue-700">
        Lawfirm
      </div>

      {/* NAV */}
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.end || false}
            className={({ isActive }) =>
              `block px-4 py-2 rounded transition ${
                isActive ? "bg-blue-400 text-black" : "hover:bg-blue-700"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* FOOTER */}
      <div className="p-4 border-t border-blue-700">
        <button className="w-full bg-blue-400 text-black py-2 rounded">
          Logout
        </button>
      </div>
    </aside>
  );
}
