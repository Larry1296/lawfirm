// src/modules/staff/lawyer/clients/LawyerClients.jsx

import {
  BadgeCheck,
  Briefcase,
  Building2,
  Eye,
  Filter,
  Mail,
  Phone,
  Plus,
  Search,
  User2,
  Users,
} from "lucide-react";

import { useContext, useMemo, useState } from "react";

import ThemeContext from "../../../../core/store/ThemeContext";

const clients = [
  {
    id: "CL-001",
    name: "John Mwangi",
    type: "Individual",
    phone: "+254 712 345 678",
    email: "johnmwangi@gmail.com",
    cases: 4,
    status: "Active",
    category: "Litigation",
  },
  {
    id: "CL-002",
    name: "BlueWave Limited",
    type: "Corporate",
    phone: "+254 733 111 222",
    email: "legal@bluewave.co.ke",
    cases: 7,
    status: "Priority",
    category: "Tax",
  },
  {
    id: "CL-003",
    name: "Sarah Otieno",
    type: "Individual",
    phone: "+254 700 654 321",
    email: "sarah.otieno@gmail.com",
    cases: 2,
    status: "Pending",
    category: "Succession",
  },
  {
    id: "CL-004",
    name: "Nairobi Holdings",
    type: "Corporate",
    phone: "+254 711 888 999",
    email: "admin@nboholdings.co.ke",
    cases: 5,
    status: "Active",
    category: "Commercial",
  },
];

export default function LawyerClients() {
  const { theme } = useContext(ThemeContext);

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const cardClasses =
    theme === "dark"
      ? `
        bg-[color:var(--surface-dark)]
        border
        border-[color:var(--border-dark)]
      `
      : `
        bg-[color:var(--surface-light)]
        border
        border-[color:var(--border-light)]
      `;

  const mutedText =
    theme === "dark" ? "text-[color:var(--text-muted-dark)]" : "text-gray-500";

  const filteredClients = useMemo(() => {
    return clients.filter((client) => {
      const matchesSearch =
        client.name.toLowerCase().includes(search.toLowerCase()) ||
        client.category.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        activeFilter === "All" ? true : client.type === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  const getStatusStyles = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-500/10 text-green-500";
      case "Priority":
        return "bg-orange-500/10 text-orange-500";
      case "Pending":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* =========================
          PAGE HEADER
      ========================== */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
        <div>
          <h1 className="text-3xl font-bold font-display">Clients</h1>

          <p className={`mt-2 text-sm ${mutedText}`}>
            Manage individual and corporate clients within your legal practice.
          </p>
        </div>

        <button
          className="
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-2xl
            bg-[color:var(--brand-primary)]
            text-white
            font-medium
            shadow-soft
            hover:opacity-90
            transition-all
            duration-300
          "
        >
          <Plus size={18} />
          Add Client
        </button>
      </div>

      {/* =========================
          STATS
      ========================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Total Clients</p>

              <h2 className="text-3xl font-bold mt-2">128</h2>
            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-blue-500
                text-white
                flex
                items-center
                justify-center
              "
            >
              <Users size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Corporate Clients</p>

              <h2 className="text-3xl font-bold mt-2">42</h2>
            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-violet-500
                text-white
                flex
                items-center
                justify-center
              "
            >
              <Building2 size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Active Matters</p>

              <h2 className="text-3xl font-bold mt-2">64</h2>
            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-emerald-500
                text-white
                flex
                items-center
                justify-center
              "
            >
              <Briefcase size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Priority Clients</p>

              <h2 className="text-3xl font-bold mt-2">11</h2>
            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-orange-500
                text-white
                flex
                items-center
                justify-center
              "
            >
              <BadgeCheck size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          FILTER BAR
      ========================== */}
      <div
        className={`
          rounded-2xl
          shadow-soft
          p-5
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-4
          ${cardClasses}
        `}
      >
        {/* SEARCH */}
        <div
          className={`
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-2xl
            border
            w-full
            lg:max-w-md
            ${
              theme === "dark"
                ? `
                  bg-[color:var(--background-dark)]
                  border-[color:var(--border-dark)]
                `
                : `
                  bg-white
                  border-[color:var(--border-light)]
                `
            }
          `}
        >
          <Search size={18} className={mutedText} />

          <input
            type="text"
            placeholder="Search clients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              bg-transparent
              outline-none
              text-sm
            "
          />
        </div>

        {/* FILTERS */}
        <div className="flex items-center gap-3 flex-wrap">
          {["All", "Individual", "Corporate"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`
                px-4
                py-2
                rounded-xl
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  activeFilter === item
                    ? "bg-[color:var(--brand-primary)] text-white"
                    : theme === "dark"
                      ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                      : "bg-white hover:bg-gray-100"
                }
              `}
            >
              {item}
            </button>
          ))}

          <button
            className={`
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              text-sm
              font-medium
              transition-all
              duration-300
              ${
                theme === "dark"
                  ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                  : "bg-white hover:bg-gray-100"
              }
            `}
          >
            <Filter size={16} />
            Filters
          </button>
        </div>
      </div>

      {/* =========================
          CLIENT LIST
      ========================== */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className={`
              rounded-2xl
              shadow-soft
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              ${cardClasses}
            `}
          >
            {/* HEADER */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-[color:var(--brand-primary)]
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  {client.type === "Corporate" ? (
                    <Building2 size={24} />
                  ) : (
                    <User2 size={24} />
                  )}
                </div>

                <div>
                  <h2 className="text-xl font-bold">{client.name}</h2>

                  <p className={`text-sm mt-1 ${mutedText}`}>
                    {client.type} Client
                  </p>
                </div>
              </div>

              <span
                className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-semibold
                  ${getStatusStyles(client.status)}
                `}
              >
                {client.status}
              </span>
            </div>

            {/* DETAILS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
              <div className="flex items-start gap-3">
                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-blue-500
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Phone size={18} />
                </div>

                <div>
                  <p className={`text-xs ${mutedText}`}>Phone</p>

                  <h3 className="font-semibold mt-1">{client.phone}</h3>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-violet-500
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Mail size={18} />
                </div>

                <div>
                  <p className={`text-xs ${mutedText}`}>Email</p>

                  <h3 className="font-semibold mt-1 break-all">
                    {client.email}
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-orange-500
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Briefcase size={18} />
                </div>

                <div>
                  <p className={`text-xs ${mutedText}`}>Active Cases</p>

                  <h3 className="font-semibold mt-1">{client.cases} Matters</h3>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-emerald-500
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <BadgeCheck size={18} />
                </div>

                <div>
                  <p className={`text-xs ${mutedText}`}>Category</p>

                  <h3 className="font-semibold mt-1">{client.category}</h3>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-3 mt-8">
              <button
                className="
                  flex-1
                  min-w-[150px]
                  px-5
                  py-3
                  rounded-2xl
                  bg-[color:var(--brand-primary)]
                  text-white
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:opacity-90
                  transition-all
                  duration-300
                "
              >
                <Eye size={18} />
                View Profile
              </button>

              <button
                className={`
                  flex-1
                  min-w-[150px]
                  px-5
                  py-3
                  rounded-2xl
                  font-medium
                  transition-all
                  duration-300
                  ${
                    theme === "dark"
                      ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                      : "bg-gray-100 hover:bg-gray-200"
                  }
                `}
              >
                Open Cases
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
