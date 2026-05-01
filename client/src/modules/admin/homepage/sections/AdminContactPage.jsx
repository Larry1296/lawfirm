import { useState } from "react";
import ContactSectionEditorPage from "./ContactSectionEditor";

/* =========================
   DUMMY MESSAGES
========================= */
const initialMessages = [
  {
    id: 1,
    name: "John Doe",
    email: "john@email.com",
    message: "I need legal help.",
    date: "2026-04-30",
    read: false,
  },
  {
    id: 2,
    name: "Amina Hassan",
    email: "amina@email.com",
    message: "Can I book consultation?",
    date: "2026-04-29",
    read: true,
  },
];

export default function AdminContactPage() {
  const [activeTab, setActiveTab] = useState("settings");
  const [messages, setMessages] = useState(initialMessages);

  const toggleRead = (id) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, read: !m.read } : m)),
    );
  };

  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-2xl font-semibold">Contact Management</h1>
        <p className="text-sm text-gray-500">
          Manage contact details and incoming messages
        </p>
      </div>

      {/* ================= TABS ================= */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab("settings")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "settings" ? "bg-blue-900 text-white" : "bg-gray-100"
          }`}
        >
          Contact Settings
        </button>

        <button
          onClick={() => setActiveTab("messages")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "messages" ? "bg-blue-900 text-white" : "bg-gray-100"
          }`}
        >
          Messages
        </button>
      </div>

      {/* ================= CONTENT ================= */}

      {activeTab === "settings" && <ContactSectionEditorPage />}

      {activeTab === "messages" && (
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-sm">
              <tr>
                <th className="p-3">Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Date</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {messages.map((msg) => (
                <tr
                  key={msg.id}
                  className={`border-t ${!msg.read ? "bg-blue-50" : ""}`}
                >
                  <td className="p-3 font-medium">{msg.name}</td>

                  <td className="text-sm text-gray-600">{msg.email}</td>

                  <td className="text-sm max-w-xs truncate">{msg.message}</td>

                  <td className="text-sm">{msg.date}</td>

                  <td>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        msg.read ? "bg-gray-200" : "bg-green-100 text-green-700"
                      }`}
                    >
                      {msg.read ? "Read" : "New"}
                    </span>
                  </td>

                  <td className="flex gap-2 p-3">
                    <button
                      onClick={() => toggleRead(msg.id)}
                      className="text-blue-600 text-sm"
                    >
                      Toggle
                    </button>

                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="text-red-500 text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
