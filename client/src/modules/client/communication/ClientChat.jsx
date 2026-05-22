// src/modules/client/communication/ClientChat.jsx

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Paperclip,
  Search,
  Bot,
  User,
  Shield,
  Phone,
  Video,
  MoreVertical,
} from "lucide-react";

import { getChatThread, sendMessage } from "../../../services/chatApi";

export default function ClientChat() {
  const [threads, setThreads] = useState([]);
  const [activeThread, setActiveThread] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const bottomRef = useRef(null);

  useEffect(() => {
    const loadThreads = async () => {
      try {
        const res = await getChatThread();
        setThreads(res.data?.threads || []);
        if (res.data?.threads?.length) {
          setActiveThread(res.data.threads[0]);
          setMessages(res.data.threads[0].messages || []);
        }
      } finally {
        setLoading(false);
      }
    };

    loadThreads();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSelectThread = (thread) => {
    setActiveThread(thread);
    setMessages(thread.messages || []);
  };

  const handleSend = async () => {
    if (!input.trim() || !activeThread) return;

    const tempMsg = {
      id: Date.now(),
      content: input,
      sender: "CLIENT",
      created_at: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, tempMsg]);
    setInput("");

    try {
      const res = await sendMessage({
        threadId: activeThread.id,
        message: input,
      });

      setMessages(res.data?.messages || []);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div className="p-6 text-white">Loading chat...</div>;
  }

  return (
    <div className="h-[calc(100vh-80px)] flex bg-[color:var(--surface-dark)] text-white rounded-2xl overflow-hidden shadow-2xl">
      {/* =====================================================
          SIDEBAR THREADS
      ===================================================== */}
      <div className="w-80 border-r border-white/10 flex flex-col">
        <div className="p-4 border-b border-white/10">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Shield size={18} /> Case Conversations
          </h2>

          <div className="mt-3 relative">
            <Search size={16} className="absolute left-3 top-3 text-white/50" />
            <input
              className="w-full pl-9 pr-3 py-2 bg-white/5 rounded-lg outline-none text-sm"
              placeholder="Search cases..."
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {threads.map((t) => (
            <div
              key={t.id}
              onClick={() => handleSelectThread(t)}
              className={`p-4 cursor-pointer border-b border-white/5 hover:bg-white/5 ${
                activeThread?.id === t.id ? "bg-white/10" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-sm">{t.case_title}</p>
                <span className="text-xs text-white/40">{t.unread_count}</span>
              </div>

              <p className="text-xs text-white/50 truncate">{t.last_message}</p>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          CHAT AREA
      ===================================================== */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <div className="p-4 border-b border-white/10 flex justify-between items-center">
          <div>
            <h3 className="font-semibold text-sm">
              {activeThread?.case_title || "Case Chat"}
            </h3>
            <p className="text-xs text-white/50">Secure legal communication</p>
          </div>

          <div className="flex gap-3 text-white/60">
            <Phone size={16} className="cursor-pointer" />
            <Video size={16} className="cursor-pointer" />
            <MoreVertical size={16} className="cursor-pointer" />
          </div>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
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
                className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
                  msg.sender === "CLIENT" ? "bg-blue-600" : "bg-white/10"
                }`}
              >
                <p>{msg.content}</p>
                <span className="text-[10px] text-white/50 block mt-1">
                  {new Date(msg.created_at).toLocaleTimeString()}
                </span>
              </div>
            </motion.div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* INPUT */}
        <div className="p-3 border-t border-white/10 flex items-center gap-2">
          <button className="p-2 hover:bg-white/10 rounded-lg">
            <Paperclip size={16} />
          </button>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 px-3 py-2 bg-white/5 rounded-lg outline-none text-sm"
            placeholder="Type your message..."
          />

          <button
            onClick={handleSend}
            className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
