import API from "./apiClient";
import refreshClient from "./refreshClient";

// =========================
// RESPONSE INTERCEPTOR
// =========================
API.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // ❌ Skip retry for auth routes (VERY IMPORTANT)
    const isAuthRoute =
      originalRequest.url?.includes("/auth/login") ||
      originalRequest.url?.includes("/auth/register") ||
      originalRequest.url?.includes("/auth/token/refresh");

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isAuthRoute
    ) {
      originalRequest._retry = true;

      const refresh = localStorage.getItem("refresh");

      // ❌ No refresh token → logout immediately
      if (!refresh) {
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(error);
      }

      try {
        const res = await refreshClient.post("/auth/token/refresh/", {
          refresh,
        });

        const newAccess = res.data.access;

        // ✅ Save new token
        localStorage.setItem("access", newAccess);

        // ✅ Update header and retry request
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        return API(originalRequest);
      } catch (err) {
        console.error("Token refresh failed:", err);

        // ❌ Refresh failed → force logout
        localStorage.clear();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);

export default API;
