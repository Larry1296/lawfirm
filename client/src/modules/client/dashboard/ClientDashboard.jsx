import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Briefcase,
  Calendar,
  AlertTriangle,
  MessageSquare,
} from "lucide-react";

/* =========================================================
   LOCAL DATA
========================================================= */
import { clientDashboardMock } from "./data/dashboardData";

/* =========================================================
   EXISTING WIDGETS ONLY
========================================================= */
import CaseSummaryCard from "./widgets/CaseSummaryCard";
import UpcomingEventsCard from "./widgets/UpcomingEventsCard";
import AIAssistantPanel from "./widgets/AIAssistantPanel";
import AlertsPanel from "./widgets/AlertsPanel";
import CaseChatPreview from "./widgets/CaseChatPreview";

export default function ClientDashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDashboard(clientDashboardMock);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-white animate-pulse">
        Loading your legal dashboard...
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-2xl font-bold text-white">
            Your Legal Dashboard
          </h1>

          <p className="text-white/60 text-sm">
            Case tracking, AI guidance, and communication hub
          </p>
        </div>

        <div className="flex items-center gap-2 text-yellow-400">
          <Bot size={18} />
          <span className="text-sm">AI Assistant Active</span>
        </div>
      </motion.div>

      {/* =====================================================
          KPI STRIP
      ===================================================== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/5 p-4 rounded-xl">
          <Briefcase className="text-blue-400" />

          <p className="text-white text-lg font-bold mt-2">
            {dashboard?.stats?.activeCases || 0}
          </p>

          <p className="text-white/50 text-xs">Active Cases</p>
        </div>

        <div className="bg-white/5 p-4 rounded-xl">
          <Calendar className="text-green-400" />

          <p className="text-white text-lg font-bold mt-2">
            {dashboard?.stats?.upcomingEvents || 0}
          </p>

          <p className="text-white/50 text-xs">Upcoming Events</p>
        </div>

        <div className="bg-white/5 p-4 rounded-xl">
          <MessageSquare className="text-purple-400" />

          <p className="text-white text-lg font-bold mt-2">
            {dashboard?.stats?.messages || 0}
          </p>

          <p className="text-white/50 text-xs">Messages</p>
        </div>

        <div className="bg-white/5 p-4 rounded-xl">
          <AlertTriangle className="text-red-400" />

          <p className="text-white text-lg font-bold mt-2">
            {dashboard?.stats?.alerts || 0}
          </p>

          <p className="text-white/50 text-xs">Alerts</p>
        </div>
      </div>

      {/* =====================================================
          MAIN GRID
      ===================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="space-y-6">
          <CaseSummaryCard caseData={dashboard?.case} />

          <UpcomingEventsCard events={dashboard?.upcomingEvents} />
        </div>

        {/* CENTER */}
        <div className="space-y-6">
          <CaseChatPreview caseId={dashboard?.case?.id} />
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <AIAssistantPanel caseData={dashboard?.case} />

          <AlertsPanel alerts={dashboard?.alerts} />
        </div>
      </div>
    </div>
  );
}
