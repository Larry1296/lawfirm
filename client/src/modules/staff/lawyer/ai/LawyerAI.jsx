// src/modules/staff/lawyer/ai/LawyerAI.jsx

import {
  Bot,
  Sparkles,
  FileText,
  Search,
  Scale,
  AlertTriangle,
  Lightbulb,
  Send,
  History,
} from "lucide-react";

import { useContext, useState } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";

export default function LawyerAI() {
  const { theme } = useContext(ThemeContext);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello, I’m your Legal AI Assistant. I can summarize cases, draft documents, and analyze legal issues.",
    },
  ]);

  const card =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] border border-[color:var(--border-dark)] text-white"
      : "bg-[color:var(--surface-light)] border border-[color:var(--border-light)] text-black";

  const muted =
    theme === "dark" ? "text-[color:var(--text-muted-dark)]" : "text-gray-500";

  const quickActions = [
    "Summarize case file",
    "Draft affidavit",
    "Analyze legal risk",
    "Generate case timeline",
    "Find legal precedent (Kenya)",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };

    const aiMsg = {
      role: "ai",
      text: "AI Draft: Based on your input, this is a structured legal analysis (dummy response). In production, this would connect to your backend AI service.",
    };

    setMessages([...messages, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display flex items-center gap-2">
            <Bot className="text-[color:var(--brand-primary)]" />
            Legal AI Assistant
          </h1>

          <p className={`text-sm mt-2 ${muted}`}>
            AI-powered drafting, summarization, and legal analysis engine.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center gap-2">
            <History size={16} />
            History
          </button>

          <button className="px-4 py-2 rounded-xl bg-[color:var(--brand-primary)] text-white flex items-center gap-2">
            <Sparkles size={16} />
            New Session
          </button>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="flex flex-wrap gap-3">
        {quickActions.map((q, i) => (
          <button
            key={i}
            onClick={() => setInput(q)}
            className={`px-4 py-2 rounded-xl text-sm ${
              theme === "dark"
                ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {q}
          </button>
        ))}
      </div>

      {/* MAIN AI PANEL */}
      <div className={`rounded-2xl shadow-soft ${card} overflow-hidden`}>
        {/* CHAT AREA */}
        <div className="h-[420px] overflow-y-auto p-5 space-y-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-2xl text-sm ${
                  m.role === "user"
                    ? "bg-[color:var(--brand-primary)] text-white"
                    : theme === "dark"
                      ? "bg-black/30"
                      : "bg-gray-100"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="p-4 border-t border-gray-200 flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask AI: e.g. Summarize Civil Case 120/2026..."
            className={`flex-1 px-4 py-2 rounded-xl outline-none ${
              theme === "dark" ? "bg-black/30 text-white" : "bg-gray-100"
            }`}
          />

          <button
            onClick={handleSend}
            className="px-5 py-2 rounded-xl bg-[color:var(--brand-primary)] text-white flex items-center gap-2"
          >
            <Send size={16} />
            Send
          </button>
        </div>
      </div>

      {/* AI CAPABILITIES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Case Summarization",
            desc: "Auto-summarize long legal case files into structured briefs.",
            icon: FileText,
          },
          {
            title: "Legal Risk Detection",
            desc: "Detect inconsistencies, missing filings, and risks in cases.",
            icon: AlertTriangle,
          },
          {
            title: "Legal Research",
            desc: "Search precedents and legal principles (Kenya-focused structure).",
            icon: Search,
          },
        ].map((item, i) => (
          <div key={i} className={`p-6 rounded-2xl shadow-soft ${card}`}>
            <item.icon className="text-[color:var(--brand-primary)]" />
            <h2 className="font-bold mt-3">{item.title}</h2>
            <p className={`text-sm mt-2 ${muted}`}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
