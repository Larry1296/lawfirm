// src/modules/staff/lawyer/billing/LawyerBilling.jsx

import {
  CreditCard,
  DollarSign,
  FileText,
  TrendingUp,
  Wallet,
  Sparkles,
} from "lucide-react";

import { useContext } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";

export default function LawyerBilling() {
  const { theme } = useContext(ThemeContext);

  const card =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] border border-[color:var(--border-dark)] text-white"
      : "bg-[color:var(--surface-light)] border border-[color:var(--border-light)] text-black";

  const stats = [
    { label: "Total Earnings", value: "KES 1,240,000", icon: DollarSign },
    { label: "Pending Payments", value: "KES 320,000", icon: Wallet },
    { label: "Invoices", value: 48, icon: FileText },
    { label: "Revenue Growth", value: "+18%", icon: TrendingUp },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold font-display">Billing & Finance</h1>
        <p className="text-sm text-gray-500 mt-2">
          Manage invoices, payments, and financial records.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className={`p-6 rounded-2xl shadow-soft ${card}`}>
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">{s.label}</p>
                <h2 className="text-2xl font-bold mt-2">{s.value}</h2>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-[color:var(--brand-primary)] text-white flex items-center justify-center">
                <s.icon size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* QUICK ACTIONS */}
      <div className={`p-6 rounded-2xl shadow-soft ${card}`}>
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>

        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-xl bg-[color:var(--brand-primary)] text-white flex items-center gap-2">
            <CreditCard size={16} />
            Create Invoice
          </button>

          <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200">
            Record Payment
          </button>

          <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200">
            Export Reports
          </button>

          <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center gap-2">
            <Sparkles size={16} />
            AI Insights
          </button>
        </div>
      </div>
    </div>
  );
}
