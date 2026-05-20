import { Briefcase, BarChart3, Users } from "lucide-react";

export const stats = [
  {
    title: "Active Cases",
    value: 128,
    icon: Briefcase,
    color: "blue",
  },
  {
    title: "Revenue",
    value: "KSh 1.24M",
    icon: BarChart3,
    color: "green",
  },
  {
    title: "New Clients",
    value: 24,
    icon: Users,
    color: "purple",
  },
  {
    title: "Overdue Invoices",
    value: 7,
    icon: BarChart3,
    color: "red",
  },
];

export const urgentDeadlines = [
  { title: "Case #1023 Filing Deadline", date: "May 2" },
  { title: "Mwangi vs State Submission", date: "May 4" },
];

export const upcomingHearings = [
  { case: "Amina Hassan vs ABC Ltd", date: "May 3" },
  { case: "John Doe vs County Gov", date: "May 6" },
];

export const notifications = [
  "New case assigned",
  "Invoice overdue",
  "Client uploaded document",
  "Court hearing rescheduled",
];

export const staffPerformance = [
  { name: "Adv. Kamau", value: 80 },
  { name: "Adv. Wanjiku", value: 65 },
  { name: "Assistant Brian", value: 90 },
];
