// src/modules/client/cases/CaseDetails.jsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  MessageSquare,
  Bot,
  Calendar,
  Clock,
  AlertTriangle,
  User,
  Send,
  Paperclip,
} from "lucide-react";

/* =========================================================
   SERVICES
========================================================= */
import { getCaseDetails, sendCaseMessage } from "../../../services/clientApi";

/* =========================================================
   CASE DETAILS PAGE (AI + CHAT + INTELLIGENCE HUB)
========================================================= */
export default function CaseDetails({ caseId }) {
  const [loading, setLoading] = useState(true);
  const [caseData, setCaseData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getCaseDetails(caseId);
        setCaseData(res?.data?.case);
        setMessages(res?.data?.messages || []);
      } catch (err) {
        console.error("Case load error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (caseId) load();
  }, [caseId]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const tempMsg = {
      id: Date.now(),
      sender: "CLIENT",
      message: input,
      created_at: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, tempMsg]);
    setInput("");
    setSending(true);

    try {
      const res = await sendCaseMessage(caseId, {
        message: input,
      });

      setMessages((prev) => [...prev, res?.data]);
    } catch (err) {
      console.error("Send message error:", err);
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return <div className="p-6 text-white">Loading case...</div>;
  }

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* =====================================================
          LEFT: CASE INFO + AI INSIGHTS
      ===================================================== */}
      <div className="space-y-4">
        {/* CASE SUMMARY */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <h2 className="text-white font-semibold flex items-center gap-2">
            <FileText size={18} />
            Case Overview
          </h2>

          <div className="mt-3 space-y-2 text-sm text-white/70">
            <p>
              <span className="text-white">Title:</span> {caseData?.title}
            </p>
            <p>
              <span className="text-white">Status:</span> {caseData?.status}
            </p>
            <p>
              <span className="text-white">Type:</span> {caseData?.type}
            </p>

            <p className="flex items-center gap-2">
              <Calendar size={14} />
              Next Hearing: {caseData?.next_hearing || "Not set"}
            </p>
          </div>
        </div>

        {/* AI CASE ASSISTANT */}
        <div className="bg-white/5 border border-yellow-500/20 rounded-2xl p-4">
          <h2 className="text-yellow-300 font-semibold flex items-center gap-2">
            <Bot size={18} />
            AI Case Assistant
          </h2>

          <div className="mt-3 text-sm text-white/70 space-y-2">
            <p>• Based on your case status, prepare supporting documents.</p>
            <p>• Next hearing requires updated affidavit submission.</p>
            <p>
              • Risk level: <span className="text-yellow-300">Medium</span>
            </p>
          </div>
        </div>

        {/* DEADLINES */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <h2 className="text-white font-semibold flex items-center gap-2">
            <AlertTriangle size={18} />
            Deadlines
          </h2>

          <div className="mt-3 space-y-2 text-sm text-white/70">
            <p>• File response: 3 days remaining</p>
            <p>• Submit evidence: 7 days remaining</p>
          </div>
        </div>
      </div>

      {/* =====================================================
          CENTER: CHAT (LAWYER + AI + CLIENT)
      ===================================================== */}
      <div className="lg:col-span-2 flex flex-col bg-white/5 border border-white/10 rounded-2xl">
        {/* HEADER */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-white font-semibold flex items-center gap-2">
            <MessageSquare size={18} />
            Case Communication
          </h2>

          <span className="text-xs text-green-400 flex items-center gap-1">
            <Bot size={14} />
            AI Active
          </span>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-[500px]">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${
                msg.sender === "CLIENT" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-xl text-sm ${
                  msg.sender === "CLIENT"
                    ? "bg-blue-600 text-white"
                    : msg.sender === "LAWYER"
                      ? "bg-white/10 text-white"
                      : "bg-yellow-500/10 text-yellow-200"
                }`}
              >
                <div className="flex items-center gap-2 mb-1 text-xs opacity-70">
                  {msg.sender === "CLIENT" ? (
                    <User size={12} />
                  ) : msg.sender === "LAWYER" ? (
                    <FileText size={12} />
                  ) : (
                    <Bot size={12} />
                  )}
                  {msg.sender}
                </div>

                {msg.message}
              </div>
            </motion.div>
          ))}
        </div>

        {/* INPUT */}
        <div className="p-3 border-t border-white/10 flex items-center gap-2">
          <button className="text-white/50 hover:text-white">
            <Paperclip size={18} />
          </button>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type message to lawyer or AI assistant..."
            className="flex-1 bg-white/5 text-white px-3 py-2 rounded-xl outline-none border border-white/10"
          />

          <button
            onClick={sendMessage}
            disabled={sending}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl flex items-center gap-2"
          >
            <Send size={16} />
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
