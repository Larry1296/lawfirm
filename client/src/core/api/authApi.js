import axios from "./axios";

/* =========================================
   LOGIN
========================================= */
export const loginUser = async (credentials) => {
  const { data } = await axios.post("/auth/login/", credentials);
  return data;
};

/* =========================================
   REGISTER (CLIENT SELF-SIGNUP)
========================================= */
export const registerClient = async (payload) => {
  const { data } = await axios.post("/auth/register/", payload);
  return data;
};

/* =========================================
   CURRENT USER (SESSION BOOTSTRAP)
   VERY IMPORTANT FOR AUTO LOGIN REFRESH
========================================= */
export const getCurrentUser = async () => {
  const { data } = await axios.get("/auth/me/");
  return data;
};

/* =========================================
   REFRESH TOKEN
========================================= */
export const refreshToken = async (refresh) => {
  const { data } = await axios.post("/auth/token/refresh/", {
    refresh,
  });

  return data;
};

/* =========================================
   LOGOUT
   (frontend + backend ready structure)
========================================= */
export const logoutUser = async () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  localStorage.removeItem("user");

  return true;
};

/* =========================================
   FORGOT PASSWORD
========================================= */
export const forgotPassword = async (email) => {
  const { data } = await axios.post("/auth/forgot-password/", {
    email,
  });

  return data;
};

/* =========================================
   RESET PASSWORD
========================================= */
export const resetPassword = async (payload) => {
  const { data } = await axios.post("/auth/reset-password/", payload);
  return data;
};

/* =========================================
   VERIFY EMAIL
========================================= */
export const verifyEmail = async (payload) => {
  const { data } = await axios.post("/auth/verify-email/", payload);
  return data;
};
