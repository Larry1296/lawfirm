// src/modules/client/cases/ClientCaseHub.jsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Search,
  Filter,
  FolderOpen,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from "lucide-react";

/* =========================================================
   SERVICES
========================================================= */
import { getClientCases } from "../../../services/clientApi";

/* =========================================================
   CLIENT CASE HUB (ALL CASES VIEW)
========================================================= */
export default function ClientCaseHub() {
  const [loading, setLoading] = useState(true);
  const [cases, setCases] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getClientCases();
        setCases(res?.data || []);
      } catch (err) {
        console.error("Cases load error:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const filteredCases = cases
    .filter((c) => {
      if (filter === "ALL") return true;
      return c.status === filter;
    })
    .filter((c) => c.title?.toLowerCase().includes(search.toLowerCase()));

  const getStatusUI = (status) => {
    switch (status) {
      case "OPEN":
        return "text-green-400 bg-green-500/10 border-green-500/30";
      case "PENDING":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/30";
      case "CLOSED":
        return "text-gray-400 bg-gray-500/10 border-gray-500/30";
      case "URGENT":
        return "text-red-400 bg-red-500/10 border-red-500/30";
      default:
        return "text-blue-400 bg-blue-500/10 border-blue-500/30";
    }
  };

  if (loading) {
    return <div className="p-6 text-white">Loading cases...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <Briefcase size={22} />
            My Legal Cases
          </h1>
          <p className="text-white/60 text-sm">
            Track all your active and past legal matters
          </p>
        </div>

        <div className="flex items-center gap-2 text-yellow-300">
          <AlertTriangle size={18} />
          <span className="text-sm">Case Tracking Active</span>
        </div>
      </motion.div>

      {/* CONTROLS */}
      <div className="flex flex-col lg:flex-row gap-3 justify-between">
        {/* SEARCH */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl flex-1">
          <Search size={16} className="text-white/50" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search cases..."
            className="bg-transparent text-white w-full outline-none text-sm"
          />
        </div>

        {/* FILTER */}
        <div className="flex gap-2">
          {["ALL", "OPEN", "PENDING", "CLOSED", "URGENT"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-2 rounded-xl text-xs border transition ${
                filter === f
                  ? "bg-blue-600 text-white border-blue-500"
                  : "bg-white/5 text-white/60 border-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* CASE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCases.map((c) => (
          <motion.div
            key={c.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3"
          >
            {/* TITLE */}
            <div className="flex justify-between items-start">
              <h2 className="text-white font-semibold text-sm">{c.title}</h2>

              <span
                className={`px-2 py-1 text-xs rounded-full border ${getStatusUI(
                  c.status,
                )}`}
              >
                {c.status}
              </span>
            </div>

            {/* META */}
            <div className="space-y-1 text-white/60 text-xs">
              <p>Case Type: {c.type || "General"}</p>
              <p className="flex items-center gap-1">
                <Clock size={12} />
                Next: {c.next_hearing || "Not set"}
              </p>
            </div>

            {/* PROGRESS BAR */}
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600"
                style={{ width: `${c.progress || 40}%` }}
              />
            </div>

            {/* ACTION */}
            <button
              onClick={() => (window.location.href = `/client/cases/${c.id}`)}
              className="w-full mt-2 bg-white/10 hover:bg-white/20 text-white text-sm py-2 rounded-xl flex items-center justify-center gap-2"
            >
              <FolderOpen size={14} />
              Open Case
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
