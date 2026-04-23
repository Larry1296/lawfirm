import axios from "axios";
import { refreshToken } from "./authApi";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/* ================================
   REQUEST: attach access token
================================ */
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/* ================================
   RESPONSE: auto refresh logic
================================ */
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // token expired
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem("refresh");

        if (!refresh) throw new Error("No refresh token");

        const res = await refreshToken(refresh);

        const newAccess = res.access;

        // store new access token
        localStorage.setItem("access", newAccess);

        // update header
        api.defaults.headers.common["Authorization"] = `Bearer ${newAccess}`;

        originalRequest.headers["Authorization"] = `Bearer ${newAccess}`;

        // retry original request
        return api(originalRequest);
      } catch (err) {
        console.error(err);
        // refresh failed → logout user
        localStorage.clear();
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  },
);

export default api;
