import authApi from "./authApi";
import API from "./apiClient";

// =========================
// AUTH
// =========================
export const login = (data) => authApi.post("/auth/login/", data);

export const register = (data) => authApi.post("/auth/register/", data);

export const getMe = () => authApi.get("/auth/me/");

// =========================
// STAFF
// =========================
export const createStaff = (data) => API.post("/auth/create-staff/", data);

export const getStaff = () => API.get("/auth/staff/");

export const updateStaffPermissions = (id, data) =>
  API.patch(`/auth/staff/${id}/permissions/`, data);

export const deleteUser = (id) => API.delete(`/auth/staff/${id}/delete/`);

// =========================
// CLIENTS
// =========================
export const createClient = (data) => API.post("/auth/create-client/", data);

export const getClients = () => API.get("/auth/clients/");

// =========================
// CLIENT CONVERSION (🔥 NEW FEATURE YOU BUILT)
// =========================
export const convertClientToMember = (userId) =>
  API.post(`/auth/clients/${userId}/convert/`);

export const addClientToFirm = (userId) =>
  API.post(`/auth/clients/${userId}/add-to-firm/`);

// =========================
// USER GENERAL
// =========================
export const getUser = (id) => API.get(`/auth/users/${id}/`);

export const deleteClient = (id) => API.delete(`/auth/clients/${id}/delete/`);
