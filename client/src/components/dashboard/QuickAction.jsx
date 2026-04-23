import React from "react";
import Button from "../ui/primitives/Button";

export default function QuickAction() {
  return (
    <div className="flex flex-col gap-2">
      <Button variant="primary">Create Case</Button>
      <Button variant="secondary">Add Client</Button>
      <Button variant="outline">Schedule Hearing</Button>
    </div>
  );
}
