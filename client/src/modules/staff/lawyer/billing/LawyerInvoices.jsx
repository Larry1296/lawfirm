// src/modules/staff/lawyer/billing/LawyerInvoices.jsx

import { FileText, Eye, Download } from "lucide-react";
import { useContext } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";

export default function LawyerInvoices() {
  const { theme } = useContext(ThemeContext);

  const card =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] border border-[color:var(--border-dark)] text-white"
      : "bg-[color:var(--surface-light)] border border-[color:var(--border-light)] text-black";

  const invoices = [
    {
      id: "INV-001",
      client: "Nairobi Holdings",
      amount: "120,000",
      status: "Paid",
    },
    {
      id: "INV-002",
      client: "James Mwangi",
      amount: "45,000",
      status: "Pending",
    },
    {
      id: "INV-003",
      client: "GreenField Ltd",
      amount: "200,000",
      status: "Overdue",
    },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-3xl font-bold">Invoices</h1>

      <div className="space-y-4">
        {invoices.map((inv) => (
          <div key={inv.id} className={`p-5 rounded-2xl shadow-soft ${card}`}>
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-bold">{inv.id}</h2>
                <p className="text-sm text-gray-500">{inv.client}</p>
              </div>

              <div>
                <p className="font-bold">KES {inv.amount}</p>
                <span className="text-xs text-gray-500">{inv.status}</span>
              </div>

              <div className="flex gap-2">
                <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200">
                  <Eye size={16} />
                </button>
                <button className="p-2 rounded-xl bg-[color:var(--brand-primary)] text-white">
                  <Download size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
