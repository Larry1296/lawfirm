import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; // adjust path if needed
import Button from "../ui/primitives/Button";

export default function Topbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <header className="w-full h-16 flex items-center justify-between px-6 border-b bg-white dark:bg-darkbrand-surface dark:border-darkbrand-border">
      {/* ================= LEFT: LOGO ================= */}
      <div className="flex items-center gap-2 font-bold text-lg text-gray-800 dark:text-white">
        ⚖️ LawFirm
      </div>

      {/* ================= RIGHT: USER + ACTIONS ================= */}
      <div className="flex items-center gap-4">
        {/* USER NAME */}
        <span className="text-sm text-gray-700 dark:text-gray-200">
          {user?.profile?.full_name || "User"}
        </span>

        {/* THEME TOGGLE */}
        <ThemeToggle />

        {/* LOGOUT */}
        <Button variant="danger" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
}
