import { motion } from "framer-motion";
import { MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export default function CaseChatPreview({ caseId }) {
  const [message, setMessage] = useState("");

  // TEMP mock data (later replaced with API / websocket)
  const messages = [
    {
      sender: "LAWYER",
      text: "Please confirm if you received the court summons.",
      time: "10:30",
    },
    {
      sender: "CLIENT",
      text: "Yes, I received it yesterday evening.",
      time: "10:45",
    },
    {
      sender: "LAWYER",
      text: "Good. We will prepare your affidavit this week.",
      time: "11:10",
    },
  ];

  const handleSend = () => {
    if (!message.trim()) return;

    // Later: send to API (case-linked thread)
    console.log("Send message:", {
      caseId,
      message,
    });

    setMessage("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[color:var(--surface-dark)] rounded-2xl p-5 shadow-soft border border-white/10 flex flex-col h-[360px]"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-white font-semibold flex items-center gap-2">
          <MessageSquare size={18} />
          Case Chat
        </h2>

        <span className="text-xs text-white/40">Live with your lawyer</span>
      </div>

      {/* CHAT MESSAGES */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              msg.sender === "CLIENT" ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                msg.sender === "CLIENT"
                  ? "bg-blue-600 text-white"
                  : "bg-white/10 text-white"
              }`}
            >
              {msg.text}
            </div>

            <span className="text-[10px] text-white/40 mt-1">
              {msg.sender} • {msg.time}
            </span>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message your lawyer about this case..."
          className="flex-1 bg-white/5 text-white text-sm px-3 py-2 rounded-lg outline-none"
        />

        <button
          onClick={handleSend}
          className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
        >
          <Send size={16} className="text-white" />
        </button>
      </div>

      {/* FOOTER NOTE */}
      <div className="mt-2 text-[10px] text-white/40">
        This chat is legally linked to case #{caseId}
      </div>
    </motion.div>
  );
}
