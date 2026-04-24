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

    // prevent infinite retry loops
    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    // only handle unauthorized
    if (error.response?.status === 401) {
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem("refresh");

        if (!refresh) {
          throw new Error("Missing refresh token");
        }

        const res = await refreshToken(refresh);

        const newAccess = res.access;

        // store new access token
        localStorage.setItem("access", newAccess);

        // update axios header globally
        api.defaults.headers.common.Authorization = `Bearer ${newAccess}`;

        // retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        return api(originalRequest);
      } catch (err) {
        console.error("Token refresh failed:", err);

        // preserve navigation intent
        const currentPath = window.location.pathname;

        if (currentPath !== "/login") {
          sessionStorage.setItem("redirectAfterLogin", currentPath);
        }

        // clean session
        localStorage.clear();

        // redirect to login
        window.location.href = "/login";

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
