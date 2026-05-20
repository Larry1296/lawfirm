// src/modules/staff/lawyer/tasks/LawyerTasks.jsx

import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  Filter,
  Flag,
  ListChecks,
  Plus,
  Search,
  Sparkles,
  SquareCheckBig,
  User,
  Users,
} from "lucide-react";

import { useContext, useMemo, useState } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";

const taskFilters = ["All", "Pending", "In Progress", "Completed", "Overdue"];

const tasksData = [
  {
    id: "TSK-001",
    title: "Prepare Witness Statement",
    case: "Civil Case 214/2026",
    priority: "High",
    status: "In Progress",
    due: "20 May 2026",
    assigned: "You",
  },
  {
    id: "TSK-002",
    title: "Review Contract Draft",
    case: "Commercial Agreement",
    priority: "Medium",
    status: "Pending",
    due: "22 May 2026",
    assigned: "You",
  },
  {
    id: "TSK-003",
    title: "File Court Documents",
    case: "Land Dispute Case",
    priority: "High",
    status: "Overdue",
    due: "18 May 2026",
    assigned: "Paralegal",
  },
  {
    id: "TSK-004",
    title: "Client Meeting Preparation",
    case: "Criminal Defence",
    priority: "Low",
    status: "Completed",
    due: "15 May 2026",
    assigned: "You",
  },
];

export default function LawyerTasks() {
  const { theme } = useContext(ThemeContext);

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const cardClasses =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] border border-[color:var(--border-dark)]"
      : "bg-[color:var(--surface-light)] border border-[color:var(--border-light)]";

  const mutedText =
    theme === "dark" ? "text-[color:var(--text-muted-dark)]" : "text-gray-500";

  const filteredTasks = useMemo(() => {
    return tasksData.filter((t) => {
      const matchesSearch =
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.case.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        activeFilter === "All" ? true : t.status === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500/10 text-red-500";
      case "Medium":
        return "bg-orange-500/10 text-orange-500";
      case "Low":
        return "bg-green-500/10 text-green-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircle2 size={16} className="text-green-500" />;
      case "Overdue":
        return <AlertCircle size={16} className="text-red-500" />;
      case "In Progress":
        return <Clock size={16} className="text-blue-500" />;
      default:
        return <SquareCheckBig size={16} className="text-gray-500" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
        <div>
          <h1 className="text-3xl font-bold font-display">Task Manager</h1>
          <p className={`mt-2 text-sm ${mutedText}`}>
            Manage legal workflow tasks, deadlines and assignments.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <button
            className={`
              px-5 py-3 rounded-2xl font-medium flex items-center gap-2
              ${
                theme === "dark"
                  ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                  : "bg-gray-100 hover:bg-gray-200"
              }
            `}
          >
            <Sparkles size={18} />
            AI Prioritize
          </button>

          <button className="px-5 py-3 rounded-2xl bg-[color:var(--brand-primary)] text-white font-medium flex items-center gap-2">
            <Plus size={18} />
            New Task
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { label: "Total Tasks", value: 48, icon: ListChecks, color: "blue" },
          { label: "Pending", value: 12, icon: Clock, color: "orange" },
          { label: "Completed", value: 28, icon: CheckCircle2, color: "green" },
          { label: "Overdue", value: 8, icon: AlertCircle, color: "red" },
        ].map((s, i) => (
          <div key={i} className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
            <div className="flex justify-between items-center">
              <div>
                <p className={`text-sm ${mutedText}`}>{s.label}</p>
                <h2 className="text-3xl font-bold mt-2">{s.value}</h2>
              </div>
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-${s.color}-500 text-white`}
              >
                <s.icon size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SEARCH + FILTER */}
      <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
        <div className="flex flex-col xl:flex-row gap-4 xl:items-center">
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl border flex-1 ${
              theme === "dark"
                ? "bg-[color:var(--background-dark)] border-[color:var(--border-dark)]"
                : "bg-white border-[color:var(--border-light)]"
            }`}
          >
            <Search size={18} className={mutedText} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tasks..."
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {taskFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-xl text-sm font-medium ${
                  activeFilter === f
                    ? "bg-[color:var(--brand-primary)] text-white"
                    : theme === "dark"
                      ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                      : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* TASK LIST */}
      <div className="space-y-5">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}
          >
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold">{task.title}</h2>
                  {getStatusIcon(task.status)}
                </div>

                <p className={`mt-2 text-sm ${mutedText}`}>{task.case}</p>

                <div className="flex items-center gap-4 mt-3 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full ${getPriorityStyle(task.priority)}`}
                  >
                    {task.priority}
                  </span>
                  <span className={mutedText}>Due: {task.due}</span>
                  <span className={mutedText}>Assigned: {task.assigned}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200">
                  View
                </button>
                <button className="px-4 py-2 rounded-xl bg-[color:var(--brand-primary)] text-white">
                  Complete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div
        className={`p-6 rounded-2xl shadow-soft flex justify-between items-center ${cardClasses}`}
      >
        <div>
          <h2 className="text-lg font-bold">Workflow Automation</h2>
          <p className={`text-sm ${mutedText}`}>
            AI can automatically assign and prioritize tasks based on urgency.
          </p>
        </div>

        <button className="px-5 py-3 rounded-2xl bg-[color:var(--brand-primary)] text-white flex items-center gap-2">
          <Sparkles size={18} />
          Enable AI
        </button>
      </div>
    </div>
  );
}
