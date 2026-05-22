// src/modules/client/documents/ClientDocuments.jsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Upload,
  Download,
  Search,
  Filter,
  Folder,
  Eye,
  Trash2,
  Shield,
  Clock,
  AlertTriangle,
} from "lucide-react";

/* =========================================================
   API (future)
========================================================= */
import {
  getClientDocuments,
  uploadClientDocument,
  deleteClientDocument,
} from "../../../services/clientApi";

export default function ClientDocuments() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await getClientDocuments();
        setDocuments(res.data?.documents || []);
      } catch (err) {
        console.error("Failed to load documents", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, []);

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await uploadClientDocument(formData);
      setDocuments((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteClientDocument(id);
      setDocuments((prev) => prev.filter((d) => d.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const filteredDocs = documents.filter((doc) => {
    const matchesSearch =
      doc.name?.toLowerCase().includes(search.toLowerCase()) ||
      doc.type?.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "ALL" ? true : doc.status === filter;

    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return <div className="p-6 text-white">Loading documents...</div>;
  }

  return (
    <div className="p-6 space-y-6 text-white">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Folder size={20} /> My Legal Documents
          </h1>
          <p className="text-white/60 text-sm">
            Secure storage for all your case-related files
          </p>
        </div>

        <label className="cursor-pointer">
          <input type="file" hidden onChange={handleUpload} />

          <div className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center gap-2">
            <Upload size={16} />
            {uploading ? "Uploading..." : "Upload Document"}
          </div>
        </label>
      </div>

      {/* =====================================================
          SEARCH + FILTER
      ===================================================== */}
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex-1 relative">
          <Search size={16} className="absolute left-3 top-3 text-white/40" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-white/5 rounded-xl outline-none"
            placeholder="Search documents..."
          />
        </div>

        <div className="flex gap-2">
          {["ALL", "CASE", "ID", "CONTRACT", "EVIDENCE"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-2 rounded-xl text-xs border ${
                filter === f
                  ? "bg-blue-600 border-blue-600"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* =====================================================
          STATS
      ===================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white/5 rounded-2xl">
          <p className="text-white/50 text-xs">Total Documents</p>
          <p className="text-xl font-bold">{documents.length}</p>
        </div>

        <div className="p-4 bg-white/5 rounded-2xl">
          <p className="text-white/50 text-xs">Case Files</p>
          <p className="text-xl font-bold">
            {documents.filter((d) => d.type === "CASE").length}
          </p>
        </div>

        <div className="p-4 bg-white/5 rounded-2xl">
          <p className="text-white/50 text-xs">Secure Files</p>
          <p className="text-xl font-bold">
            {documents.filter((d) => d.status === "SECURE").length}
          </p>
        </div>

        <div className="p-4 bg-white/5 rounded-2xl">
          <p className="text-white/50 text-xs">Pending Review</p>
          <p className="text-xl font-bold">
            {documents.filter((d) => d.status === "PENDING").length}
          </p>
        </div>
      </div>

      {/* =====================================================
          DOCUMENT LIST
      ===================================================== */}
      <div className="space-y-3">
        {filteredDocs.length === 0 ? (
          <div className="p-10 text-center text-white/50 bg-white/5 rounded-2xl">
            No documents found
          </div>
        ) : (
          filteredDocs.map((doc) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl"
            >
              {/* LEFT */}
              <div className="flex items-center gap-3">
                <FileText className="text-blue-400" />

                <div>
                  <p className="font-medium text-sm">{doc.name}</p>
                  <div className="flex items-center gap-3 text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {new Date(doc.created_at).toLocaleDateString()}
                    </span>

                    <span className="flex items-center gap-1">
                      <Shield size={12} />
                      {doc.status}
                    </span>

                    <span>{doc.type}</span>
                  </div>
                </div>
              </div>

              {/* RIGHT ACTIONS */}
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-white/10 rounded-lg">
                  <Eye size={16} />
                </button>

                <a
                  href={doc.file_url}
                  download
                  className="p-2 hover:bg-white/10 rounded-lg"
                >
                  <Download size={16} />
                </a>

                <button
                  onClick={() => handleDelete(doc.id)}
                  className="p-2 hover:bg-red-500/20 text-red-400 rounded-lg"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
