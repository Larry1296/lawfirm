import { useParams } from "react-router-dom";

export default function AdminCaseDetails() {
  const { caseId } = useParams();
  return <div>Case #{caseId}</div>;
}
