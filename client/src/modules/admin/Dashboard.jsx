import { useEffect, useState } from "react";

/* API */
import {
  getAssistants,
  getClients,
  createAssistant,
  createClient,
  toggleAssistantPermission,
} from "../../core/api/authApi";

/* UI SYSTEM */
import Card from "../../components/ui/data-display/Card";
import Table from "../../components/ui/data-display/Table";
import Button from "../../components/ui/primitives/Button";
import Input from "../../components/ui/primitives/Input";
import Switch from "../../components/ui/forms/Switch";
import Spinner from "../../components/ui/primitives/Spinner";

export default function LawyerDashboard() {
  const [assistants, setAssistants] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);

  const [assistantForm, setAssistantForm] = useState({
    email: "",
    password: "",
    full_name: "",
    national_id: "",
    phone_number: "",
  });

  const [clientForm, setClientForm] = useState({
    email: "",
    password: "",
    full_name: "",
    national_id: "",
    phone_number: "",
  });

  /* ===============================
     LOAD DATA
  =============================== */
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        const [a, c] = await Promise.all([getAssistants(), getClients()]);

        setAssistants(a.data);
        setClients(c.data);
      } catch (err) {
        console.error("Failed to load dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  /* ===============================
     CREATE ASSISTANT
  =============================== */
  const handleCreateAssistant = async () => {
    try {
      await createAssistant({
        ...assistantForm,
        role: "ASSISTANT",
      });

      setAssistantForm({
        email: "",
        password: "",
        full_name: "",
        national_id: "",
        phone_number: "",
      });

      const [a, c] = await Promise.all([getAssistants(), getClients()]);

      setAssistants(a.data);
      setClients(c.data);
    } catch (err) {
      console.error(err);
    }
  };

  /* ===============================
     CREATE CLIENT
  =============================== */
  const handleCreateClient = async () => {
    try {
      await createClient({
        ...clientForm,
        role: "CLIENT",
      });

      setClientForm({
        email: "",
        password: "",
        full_name: "",
        national_id: "",
        phone_number: "",
      });

      const [a, c] = await Promise.all([getAssistants(), getClients()]);

      setAssistants(a.data);
      setClients(c.data);
    } catch (err) {
      console.error(err);
    }
  };

  /* ===============================
     TOGGLE PERMISSION
  =============================== */
  const handleTogglePermission = async (id) => {
    try {
      await toggleAssistantPermission(id);

      const [a, c] = await Promise.all([getAssistants(), getClients()]);

      setAssistants(a.data);
      setClients(c.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      {/* ================= LOADING STATE ================= */}
      {loading && (
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-darkbrand-text">
          <Spinner />
          Loading dashboard data...
        </div>
      )}

      {/* ================= ASSISTANTS ================= */}
      <Card>
        <h2 className="font-semibold mb-4">Assistants</h2>

        <Table
          columns={[
            { header: "Name", accessor: "user.profile.full_name" },
            { header: "Email", accessor: "user.email" },
            { header: "Can Create Clients", accessor: "can_create_clients" },
            { header: "Action", accessor: "action" },
          ]}
          data={assistants.map((a) => ({
            ...a,
            action: (
              <Switch
                checked={a.can_create_clients}
                onChange={() => handleTogglePermission(a.user.id)}
              />
            ),
          }))}
        />
      </Card>

      {/* ================= CREATE ASSISTANT ================= */}
      <Card>
        <h2 className="font-semibold mb-4">Create Assistant</h2>

        <div className="grid grid-cols-2 gap-3">
          <Input
            placeholder="Full Name"
            value={assistantForm.full_name}
            onChange={(e) =>
              setAssistantForm({ ...assistantForm, full_name: e.target.value })
            }
          />

          <Input
            placeholder="Email"
            value={assistantForm.email}
            onChange={(e) =>
              setAssistantForm({ ...assistantForm, email: e.target.value })
            }
          />

          <Input
            placeholder="Password"
            type="password"
            value={assistantForm.password}
            onChange={(e) =>
              setAssistantForm({ ...assistantForm, password: e.target.value })
            }
          />

          <Input
            placeholder="Phone"
            value={assistantForm.phone_number}
            onChange={(e) =>
              setAssistantForm({
                ...assistantForm,
                phone_number: e.target.value,
              })
            }
          />

          <Button onClick={handleCreateAssistant}>Create Assistant</Button>
        </div>
      </Card>

      {/* ================= CREATE CLIENT ================= */}
      <Card>
        <h2 className="font-semibold mb-4">Create Client</h2>

        <div className="grid grid-cols-2 gap-3">
          <Input
            placeholder="Full Name"
            value={clientForm.full_name}
            onChange={(e) =>
              setClientForm({ ...clientForm, full_name: e.target.value })
            }
          />

          <Input
            placeholder="Email"
            value={clientForm.email}
            onChange={(e) =>
              setClientForm({ ...clientForm, email: e.target.value })
            }
          />

          <Input
            placeholder="Password"
            type="password"
            value={clientForm.password}
            onChange={(e) =>
              setClientForm({ ...clientForm, password: e.target.value })
            }
          />

          <Button onClick={handleCreateClient}>Create Client</Button>
        </div>
      </Card>

      {/* ================= CLIENTS ================= */}
      <Card>
        <h2 className="font-semibold mb-4">Clients</h2>

        <Table
          columns={[
            { header: "Name", accessor: "user.profile.full_name" },
            { header: "Email", accessor: "user.email" },
          ]}
          data={clients}
        />
      </Card>
    </div>
  );
}
