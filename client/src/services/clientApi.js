// src/services/clientApi.js

import api from "../core/api/axios";

/* =========================================================
   DASHBOARD
========================================================= */
export const getClientDashboard = async () => {
  const response = await api.get("/client/dashboard");
  return response.data;
};

/* =========================================================
   DOCUMENTS
========================================================= */
export const getClientDocuments = async () => {
  const response = await api.get("/client/documents");
  return response.data;
};

export const uploadClientDocument = async (formData) => {
  const response = await api.post("/client/documents", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const deleteClientDocument = async (id) => {
  const response = await api.delete(`/client/documents/${id}`);

  return response.data;
};
