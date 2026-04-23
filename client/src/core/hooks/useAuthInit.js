import { useEffect } from "react";
import { getCurrentUser } from "../api/authApi";

export default function useAuthInit(setUser) {
  useEffect(() => {
    const init = async () => {
      const token = localStorage.getItem("access");

      if (!token) return;

      try {
        const user = await getCurrentUser();

        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
      } catch (err) {
        console.error(err);
        localStorage.clear();
      }
    };

    init();
  }, [setUser]);
}
