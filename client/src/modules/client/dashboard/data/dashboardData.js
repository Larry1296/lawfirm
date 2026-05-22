// Mock structure (later replaced by API: getClientDashboard)

export const clientDashboardMock = {
  case: {
    id: "CASE-001",
    title: "Civil Case - Contract Dispute",
    status: "ACTIVE",
    stage: "Discovery",
    next_hearing: "2026-06-02",
    lawyer: "Adv. Maina",
    court: "Milimani Law Courts",
  },

  events: [
    {
      id: 1,
      title: "Court Hearing",
      date: "2026-06-02",
      type: "hearing",
    },
    {
      id: 2,
      title: "Document Submission Deadline",
      date: "2026-05-28",
      type: "deadline",
    },
  ],

  alerts: [
    {
      id: 1,
      type: "warning",
      message: "You must submit affidavit before 28 May",
    },
    {
      id: 2,
      type: "info",
      message: "New message from your lawyer",
    },
  ],

  aiSuggestions: [
    {
      id: 1,
      title: "Prepare for cross-examination",
      description:
        "Review all contract communications and timeline inconsistencies.",
    },
    {
      id: 2,
      title: "Upload missing documents",
      description: "Bank statements from Jan–March are required for your case.",
    },
  ],

  chatPreview: {
    case_id: "CASE-001",
    last_messages: [
      {
        sender: "LAWYER",
        message: "Please confirm if you received summons.",
        time: "10:30",
      },
      {
        sender: "CLIENT",
        message: "Yes I received it yesterday.",
        time: "10:45",
      },
    ],
  },
};
