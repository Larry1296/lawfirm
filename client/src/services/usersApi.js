import apiClient from "../core/api/axios";

// AUTH
export const login = (data) => apiClient.post("/auth/login/", data);

export const register = (data) => apiClient.post("/auth/register/", data);

export const getMe = () => apiClient.get("/auth/me/");

// STAFF
export const getStaff = () => apiClient.get("/auth/staff/");

export const createStaff = (data) =>
  apiClient.post("/auth/create-staff/", data);

export const updateStaffPermissions = (id, data) =>
  apiClient.patch(`/auth/staff/${id}/permissions/`, data);

export const deleteUser = (id) => apiClient.delete(`/auth/staff/${id}/delete/`);

// CLIENTS
export const getClients = () => apiClient.get("/auth/clients/");

export const createClient = (data) =>
  apiClient.post("/auth/create-client/", data);

export const convertClientToMember = (id) =>
  apiClient.post(`/auth/clients/${id}/convert/`);

export const addClientToFirm = (id) =>
  apiClient.post(`/auth/clients/${id}/add-to-firm/`);

export const deleteClient = (id) =>
  apiClient.delete(`/auth/clients/${id}/delete/`);

// USER
export const getUser = (id) => apiClient.get(`/auth/users/${id}/`);
