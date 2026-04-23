import React from "react";
import ActivityItem from "../ui/advanced/ActivityItem";

export default function ActivityFeed() {
  const activities = [
    {
      title: "Case CR-2026-001 updated",
      time: "2 mins ago",
      type: "update",
    },
    {
      title: "New client registered",
      time: "1 hour ago",
      type: "user",
    },
    {
      title: "Court hearing scheduled",
      time: "Today",
      type: "calendar",
    },
  ];

  return (
    <div className="space-y-3">
      {activities.map((a, i) => (
        <ActivityItem key={i} title={a.title} time={a.time} type={a.type} />
      ))}
    </div>
  );
}
