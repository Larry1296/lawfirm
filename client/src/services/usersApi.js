import API from "./api";

// STAFF
export const createStaff = async (data) => {
  const res = await API.post("/auth/create-staff/", data);
  return res.data;
};

export const getStaff = async () => {
  const res = await API.get("/auth/staff/");
  return res.data;
};

export const updateStaffPermissions = async (id, data) => {
  const res = await API.patch(`/auth/staff/${id}/permissions/`, data);
  return res.data;
};

// CLIENTS
export const createClient = async (data) => {
  const res = await API.post("/auth/create-client/", data);
  return res.data;
};

export const getClients = async () => {
  const res = await API.get("/auth/clients/");
  return res.data;
};
