import axios from "axios";

// Create the main API instance
const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

// Attach the access token to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Create the refresh client instance
const refreshClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

// Interceptor to handle token expiry and automatic refresh
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If token expired (401 response) and not retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refresh = localStorage.getItem("refresh");

      try {
        // Request new access token with the refresh token
        const res = await refreshClient.post("/auth/token/refresh/", {
          refresh: refresh,
        });

        const newAccess = res.data.access;

        // Save new access token
        localStorage.setItem("access", newAccess);

        // Update the original request header with new token
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        // Retry the original request with new token
        return API(originalRequest);
      } catch (err) {
        console.error("Token refresh failed:", err);
        // If refresh failed, log out user and clear storage
        localStorage.clear();
        window.location.href = "/login"; // Redirect to login
      }
    }

    return Promise.reject(error);
  },
);

export default API;
