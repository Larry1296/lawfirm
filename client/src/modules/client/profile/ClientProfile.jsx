// src/modules/client/clients/ClientDetails.jsx

import React, { useState } from "react";

/* =========================================================
   MOCK DATA (REMOVE WHEN BACKEND IS READY)
========================================================= */
const mockClient = {
  id: "CL-1001",
  fullName: "John Mwangi",
  email: "john.mwangi@email.com",
  phone: "+254 712 345 678",
  role: "client",
  status: "active",
  joinedAt: "2025-06-12",
  avatar: "https://i.pravatar.cc/150?img=12",

  address: "Nairobi, Kenya",

  cases: [
    {
      id: "CASE-001",
      title: "Land Dispute - Nairobi",
      status: "active",
      updatedAt: "2026-05-18",
    },
    {
      id: "CASE-002",
      title: "Contract Review",
      status: "pending",
      updatedAt: "2026-05-10",
    },
  ],

  documents: [
    { id: 1, name: "ID Copy.pdf", type: "ID", uploadedAt: "2026-04-01" },
    { id: 2, name: "Contract.pdf", type: "Legal", uploadedAt: "2026-04-15" },
  ],

  notes:
    "Client prefers communication via email. Has ongoing land dispute case requiring priority attention.",
};

/* =========================================================
   STATUS BADGE
========================================================= */
const StatusBadge = ({ status }) => {
  const colors = {
    active: "bg-green-100 text-green-700",
    inactive: "bg-gray-100 text-gray-600",
    pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        colors[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */
const ClientDetails = () => {
  const [client] = useState(mockClient);

  return (
    <div className="p-6 space-y-6">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="flex items-center justify-between bg-white p-5 rounded-xl shadow-sm">
        <div className="flex items-center gap-4">
          <img
            src={client.avatar}
            alt={client.fullName}
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h1 className="text-xl font-semibold">{client.fullName}</h1>
            <p className="text-sm text-gray-500">{client.email}</p>
          </div>
        </div>

        <StatusBadge status={client.status} />
      </div>

      {/* =====================================================
          BASIC INFO
      ===================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Basic Information</h2>

          <div className="space-y-3 text-sm">
            <p>
              <span className="text-gray-500">Phone:</span> {client.phone}
            </p>

            <p>
              <span className="text-gray-500">Address:</span> {client.address}
            </p>

            <p>
              <span className="text-gray-500">Client ID:</span> {client.id}
            </p>

            <p>
              <span className="text-gray-500">Joined:</span> {client.joinedAt}
            </p>
          </div>
        </div>

        {/* NOTES */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Notes</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {client.notes}
          </p>
        </div>
      </div>

      {/* =====================================================
          CASES
      ===================================================== */}
      <div className="bg-white p-5 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Cases</h2>

        <div className="space-y-3">
          {client.cases.map((c) => (
            <div
              key={c.id}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
            >
              <div>
                <p className="font-medium">{c.title}</p>
                <p className="text-xs text-gray-500">ID: {c.id}</p>
              </div>

              <div className="text-right">
                <StatusBadge status={c.status} />
                <p className="text-xs text-gray-400 mt-1">
                  Updated: {c.updatedAt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          DOCUMENTS
      ===================================================== */}
      <div className="bg-white p-5 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Documents</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500 border-b">
              <tr>
                <th className="py-2">Name</th>
                <th>Type</th>
                <th>Uploaded</th>
              </tr>
            </thead>

            <tbody>
              {client.documents.map((doc) => (
                <tr key={doc.id} className="border-b">
                  <td className="py-2">{doc.name}</td>
                  <td>{doc.type}</td>
                  <td>{doc.uploadedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* =====================================================
          ACTIONS
      ===================================================== */}
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Edit Client
        </button>

        <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
          Deactivate
        </button>

        <button className="px-4 py-2 bg-gray-200 rounded-lg">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ClientDetails;
