import axios from "./axios";

/* =========================================
   LOGIN
========================================= */
export const loginUser = async (credentials) => {
  const { data } = await axios.post("/auth/login/", credentials);
  return data;
};

/* =========================================
   REGISTER (CLIENT SELF SIGNUP)
========================================= */
export const registerClient = async (payload) => {
  const { data } = await axios.post("/auth/register/", payload);

  if (data.success) {
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
    localStorage.setItem("user", JSON.stringify(data.user));
  }

  return data;
};

/* =========================================
   CURRENT USER (SESSION BOOTSTRAP)
========================================= */
export const getCurrentUser = async () => {
  const { data } = await axios.get("/auth/me/");
  return data;
};

/* =========================================
   REFRESH TOKEN (JWT)
========================================= */
export const refreshToken = async (refresh) => {
  const { data } = await axios.post("/auth/token/refresh/", {
    refresh,
  });

  return data;
};

/* =========================================
   CREATE ASSISTANT (LAWYER ONLY)
========================================= */
export const createAssistant = async (payload) => {
  const { data } = await axios.post("/auth/create-assistant/", payload);
  return data;
};

/* =========================================
   CREATE CLIENT (LAWYER / ASSISTANT)
========================================= */
export const createClient = async (payload) => {
  const { data } = await axios.post("/auth/create-client/", payload);
  return data;
};

/* =========================================
   TOGGLE ASSISTANT PERMISSION
========================================= */
export const toggleAssistantPermission = async (userId) => {
  const { data } = await axios.post(`/auth/toggle-assistant/${userId}/`);
  return data;
};

/* =========================================
   LIST ASSISTANTS
========================================= */
export const getAssistants = async () => {
  const { data } = await axios.get("/auth/assistants/");
  return data;
};

/* =========================================
   LIST CLIENTS
========================================= */
export const getClients = async () => {
  const { data } = await axios.get("/auth/clients/");
  return data;
};

/* =========================================
   LOGOUT (CLIENT SIDE ONLY)
========================================= */
export const logoutUser = async () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  localStorage.removeItem("user");
  return true;
};
