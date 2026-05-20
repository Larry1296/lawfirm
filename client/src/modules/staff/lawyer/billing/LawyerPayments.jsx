// src/modules/staff/lawyer/billing/LawyerPayments.jsx

import { CreditCard, CheckCircle2, Clock } from "lucide-react";
import { useContext } from "react";
import ThemeContext from "../../../../core/store/ThemeContext";

export default function LawyerPayments() {
  const { theme } = useContext(ThemeContext);

  const card =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] border border-[color:var(--border-dark)] text-white"
      : "bg-[color:var(--surface-light)] border border-[color:var(--border-light)] text-black";

  const payments = [
    {
      id: "PAY-001",
      client: "Nairobi Holdings",
      amount: "120,000",
      status: "Completed",
    },
    {
      id: "PAY-002",
      client: "James Mwangi",
      amount: "45,000",
      status: "Pending",
    },
    {
      id: "PAY-003",
      client: "GreenField Ltd",
      amount: "200,000",
      status: "Completed",
    },
  ];

  const icon = (status) => {
    if (status === "Completed")
      return <CheckCircle2 className="text-green-500" />;
    return <Clock className="text-orange-500" />;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-3xl font-bold">Payments</h1>

      <div className="space-y-4">
        {payments.map((p) => (
          <div key={p.id} className={`p-5 rounded-2xl shadow-soft ${card}`}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <CreditCard />
                <div>
                  <h2 className="font-bold">{p.client}</h2>
                  <p className="text-sm text-gray-500">{p.id}</p>
                </div>
              </div>

              <div>
                <p className="font-bold">KES {p.amount}</p>
              </div>

              <div className="flex items-center gap-2">
                {icon(p.status)}
                <span className="text-sm">{p.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
