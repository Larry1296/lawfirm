// src/modules/staff/lawyer/communication/LawyerChat.jsx

import ChatWindow from "../../../core/communication/ChatWindow";

export default function LawyerChat() {
  const messages = [
    {
      user: "Senior Partner",
      text: "Prepare affidavit for Case 120/2026",
      time: "10:30",
    },
    { user: "You", text: "Draft ready for review", time: "10:32" },
    { user: "Client", text: "Any updates?", time: "11:00" },
  ];

  return <ChatWindow title="Lawyer Communication Hub" messages={messages} />;
}
