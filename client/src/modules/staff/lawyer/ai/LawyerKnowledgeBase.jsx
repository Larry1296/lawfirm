// src/modules/staff/lawyer/ai/LawyerKnowledgeBase.jsx

import {
  BookOpen,
  Search,
  Folder,
  FileText,
  Plus,
  Tag,
  Star,
  Clock,
  Bookmark,
  Lightbulb,
} from "lucide-react";

import { useContext, useMemo, useState } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";

export default function LawyerKnowledgeBase() {
  const { theme } = useContext(ThemeContext);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const card =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] border border-[color:var(--border-dark)] text-white"
      : "bg-[color:var(--surface-light)] border border-[color:var(--border-light)] text-black";

  const muted =
    theme === "dark" ? "text-[color:var(--text-muted-dark)]" : "text-gray-500";

  const knowledge = [
    {
      id: 1,
      title: "Land Dispute Strategy Template",
      category: "Templates",
      tags: ["Land Law", "Civil", "Kenya"],
      updated: "2 days ago",
      author: "Senior Partner",
      pinned: true,
      summary:
        "Standard approach for handling land ownership disputes including affidavit structure and evidence checklist.",
    },
    {
      id: 2,
      title: "High Court Filing Checklist",
      category: "Procedures",
      tags: ["Court Filing", "Civil Procedure"],
      updated: "5 days ago",
      author: "Legal Admin",
      pinned: true,
      summary:
        "Step-by-step filing requirements for High Court civil matters in Kenya.",
    },
    {
      id: 3,
      title: "Injunction Application Framework",
      category: "Templates",
      tags: ["Urgent Relief", "Litigation"],
      updated: "1 week ago",
      author: "Litigation Team",
      pinned: false,
      summary:
        "Structure for drafting temporary and permanent injunction applications.",
    },
    {
      id: 4,
      title: "Client Interview SOP",
      category: "SOPs",
      tags: ["Client Intake", "Procedure"],
      updated: "2 weeks ago",
      author: "Operations",
      pinned: false,
      summary:
        "Standard process for conducting initial client interviews and case intake.",
    },
    {
      id: 5,
      title: "Evidence Handling Guidelines",
      category: "Compliance",
      tags: ["Evidence", "Chain of Custody"],
      updated: "3 weeks ago",
      author: "Compliance Team",
      pinned: false,
      summary:
        "Rules for collecting, storing, and presenting evidence in court.",
    },
  ];

  const categories = ["All", "Templates", "Procedures", "SOPs", "Compliance"];

  const filtered = useMemo(() => {
    let data = knowledge;

    if (category !== "All") {
      data = data.filter((k) => k.category === category);
    }

    if (query.trim()) {
      data = data.filter((k) =>
        k.title.toLowerCase().includes(query.toLowerCase()),
      );
    }

    return data;
  }, [query, category]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display flex items-center gap-2">
            <BookOpen className="text-[color:var(--brand-primary)]" />
            Knowledge Base
          </h1>

          <p className={`text-sm mt-2 ${muted}`}>
            Internal legal knowledge, templates, SOPs, and firm intelligence
            hub.
          </p>
        </div>

        <button className="px-5 py-3 rounded-2xl bg-[color:var(--brand-primary)] text-white flex items-center gap-2">
          <Plus size={18} />
          New Entry
        </button>
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
        {/* SEARCH */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 w-full lg:w-1/2">
          <Search size={16} className="text-gray-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search knowledge base..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* FILTERS */}
        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-xl text-sm ${
                category === c
                  ? "bg-[color:var(--brand-primary)] text-white"
                  : theme === "dark"
                    ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                    : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: "Total Entries", value: 128, icon: Folder },
          { label: "Pinned Items", value: 12, icon: Star },
          { label: "Recent Updates", value: 6, icon: Clock },
        ].map((s, i) => (
          <div key={i} className={`p-6 rounded-2xl shadow-soft ${card}`}>
            <div className="flex justify-between">
              <div>
                <p className={muted}>{s.label}</p>
                <h2 className="text-2xl font-bold mt-2">{s.value}</h2>
              </div>
              <s.icon className="text-[color:var(--brand-primary)]" />
            </div>
          </div>
        ))}
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {filtered.map((k) => (
          <div key={k.id} className={`p-6 rounded-2xl shadow-soft ${card}`}>
            {/* TOP */}
            <div className="flex justify-between items-start gap-4">
              <div className="flex gap-3">
                <FileText className="text-[color:var(--brand-primary)] mt-1" />

                <div>
                  <h2 className="font-bold flex items-center gap-2">
                    {k.title}
                    {k.pinned && <Star size={14} className="text-yellow-500" />}
                  </h2>

                  <p className={`text-sm mt-1 ${muted}`}>{k.summary}</p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {k.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 flex items-center gap-1"
                      >
                        <Tag size={12} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* META */}
              <div className="text-right text-sm text-gray-500">
                <p>{k.category}</p>
                <p className="mt-1">{k.updated}</p>
                <p className="mt-1">{k.author}</p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-3 mt-5">
              <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200">
                View
              </button>
              <button className="px-4 py-2 rounded-xl bg-[color:var(--brand-primary)] text-white">
                Open
              </button>
              <button className="px-4 py-2 rounded-xl bg-yellow-500 text-white flex items-center gap-2">
                <Bookmark size={14} />
                Pin
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* INSIGHT */}
      <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
        <h2 className="text-lg font-bold flex items-center gap-2">
          <Lightbulb className="text-yellow-500" />
          AI Insight
        </h2>
        <p className={`text-sm mt-2 ${muted}`}>
          Frequently used: Land dispute templates and injunction frameworks —
          consider optimizing for faster drafting.
        </p>
      </div>
    </div>
  );
}
