import axios from "axios";
import { refreshToken } from "./authApi";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/* ================================
   REQUEST INTERCEPTOR
================================ */
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/* ================================
   RESPONSE INTERCEPTOR (AUTO REFRESH)
================================ */
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Prevent infinite loop
    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    // Only handle 401 errors
    if (error.response?.status === 401) {
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem("refresh");

        if (!refresh) {
          throw new Error("No refresh token found");
        }

        const res = await refreshToken(refresh);

        const newAccess = res.access;

        // update storage
        localStorage.setItem("access", newAccess);

        // IMPORTANT: update axios instance header (not just defaults)
        api.defaults.headers.common.Authorization = `Bearer ${newAccess}`;

        // retry original request
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        return api(originalRequest);
      } catch (err) {
        console.error("Refresh failed:", err);

        // clean logout
        localStorage.clear();
        window.location.href = "/login";

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
