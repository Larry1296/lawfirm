import axios from "axios";

// =========================
// MAIN API CLIENT
// =========================
const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// =========================
// ATTACH ACCESS TOKEN (SAFE)
// =========================
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  // ❌ DO NOT attach token to auth routes
  const isAuthRoute =
    config.url?.includes("/auth/login") ||
    config.url?.includes("/auth/register") ||
    config.url?.includes("/auth/token/refresh");

  if (token && !isAuthRoute) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;
