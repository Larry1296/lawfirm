import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/authStore";

export default function LogoutButton({ onLogout }) {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
    onLogout?.(); // optional callback (e.g. close sidebar)
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-green-900 py-2 rounded-xl font-semibold hover:translate-y-[-2px] transition"
    >
      <LogOut size={16} />
      Logout
    </button>
  );
}
