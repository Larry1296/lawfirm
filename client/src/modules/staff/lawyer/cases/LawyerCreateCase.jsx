// src/modules/staff/lawyer/cases/LawyerCreateCase.jsx

import {
  ArrowLeft,
  Briefcase,
  CalendarDays,
  FileText,
  Save,
  Scale,
  User2,
  Building2,
  AlertTriangle,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import ThemeContext from "../../../../core/store/ThemeContext";

export default function LawyerCreateCase() {
  const { theme } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    title: "",
    client: "",
    caseType: "",
    court: "",
    judge: "",
    priority: "",
    hearingDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const cardClasses =
    theme === "dark"
      ? `
        bg-[color:var(--surface-dark)]
        border
        border-[color:var(--border-dark)]
      `
      : `
        bg-[color:var(--surface-light)]
        border
        border-[color:var(--border-light)]
      `;

  const inputClasses =
    theme === "dark"
      ? `
        bg-[color:var(--background-dark)]
        border-[color:var(--border-dark)]
        text-white
        placeholder:text-gray-500
      `
      : `
        bg-white
        border-[color:var(--border-light)]
        text-gray-900
      `;

  const mutedText =
    theme === "dark" ? "text-[color:var(--text-muted-dark)]" : "text-gray-500";

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* =========================
          PAGE HEADER
      ========================== */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        <div>
          <Link
            to="/lawyer/cases"
            className={`
              inline-flex
              items-center
              gap-2
              text-sm
              mb-4
              hover:text-[color:var(--brand-primary)]
              transition-all
              duration-300
              ${mutedText}
            `}
          >
            <ArrowLeft size={16} />
            Back to Cases
          </Link>

          <h1 className="text-3xl font-bold font-display">Create New Case</h1>

          <p className={`mt-2 text-sm ${mutedText}`}>
            Register and manage a new legal matter within the law firm.
          </p>
        </div>

        {/* SAVE BUTTON */}
        <button
          className="
            inline-flex
            items-center
            gap-2
            px-5
            py-3
            rounded-2xl
            bg-[color:var(--brand-primary)]
            text-white
            font-medium
            shadow-soft
            hover:opacity-90
            transition-all
            duration-300
          "
        >
          <Save size={18} />
          Save Case
        </button>
      </div>

      {/* =========================
          QUICK STATS
      ========================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Open Cases</p>

              <h2 className="text-3xl font-bold mt-2">48</h2>
            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-blue-500
                text-white
                flex
                items-center
                justify-center
              "
            >
              <Briefcase size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Upcoming Hearings</p>

              <h2 className="text-3xl font-bold mt-2">12</h2>
            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-emerald-500
                text-white
                flex
                items-center
                justify-center
              "
            >
              <CalendarDays size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Courts Covered</p>

              <h2 className="text-3xl font-bold mt-2">8</h2>
            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-orange-500
                text-white
                flex
                items-center
                justify-center
              "
            >
              <Scale size={24} />
            </div>
          </div>
        </div>

        <div className={`p-6 rounded-2xl shadow-soft ${cardClasses}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm ${mutedText}`}>Urgent Matters</p>

              <h2 className="text-3xl font-bold mt-2">4</h2>
            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-red-500
                text-white
                flex
                items-center
                justify-center
              "
            >
              <AlertTriangle size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          FORM SECTION
      ========================== */}
      <div
        className={`
          rounded-2xl
          shadow-soft
          p-6 lg:p-8
          ${cardClasses}
        `}
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Case Information</h2>

          <p className={`mt-2 text-sm ${mutedText}`}>
            Fill in all relevant legal and client details for the new case.
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-8">
          {/* =========================
              BASIC INFO
          ========================== */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Basic Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CASE TITLE */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Case Title
                </label>

                <div className="relative">
                  <Briefcase
                    size={18}
                    className={`
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      ${mutedText}
                    `}
                  />

                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter case title"
                    className={`
                      w-full
                      pl-11
                      pr-4
                      py-3
                      rounded-2xl
                      border
                      outline-none
                      transition-all
                      duration-300
                      focus:ring-2
                      focus:ring-[color:var(--brand-primary)]
                      ${inputClasses}
                    `}
                  />
                </div>
              </div>

              {/* CLIENT */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Client Name
                </label>

                <div className="relative">
                  <User2
                    size={18}
                    className={`
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      ${mutedText}
                    `}
                  />

                  <input
                    type="text"
                    name="client"
                    value={formData.client}
                    onChange={handleChange}
                    placeholder="Enter client name"
                    className={`
                      w-full
                      pl-11
                      pr-4
                      py-3
                      rounded-2xl
                      border
                      outline-none
                      transition-all
                      duration-300
                      focus:ring-2
                      focus:ring-[color:var(--brand-primary)]
                      ${inputClasses}
                    `}
                  />
                </div>
              </div>

              {/* CASE TYPE */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Case Type
                </label>

                <select
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleChange}
                  className={`
                    w-full
                    px-4
                    py-3
                    rounded-2xl
                    border
                    outline-none
                    transition-all
                    duration-300
                    focus:ring-2
                    focus:ring-[color:var(--brand-primary)]
                    ${inputClasses}
                  `}
                >
                  <option value="">Select case type</option>

                  <option value="Criminal">Criminal</option>

                  <option value="Civil">Civil</option>

                  <option value="Family">Family</option>

                  <option value="Land">Land & Environment</option>

                  <option value="Commercial">Commercial</option>

                  <option value="Employment">Employment</option>

                  <option value="Succession">Succession</option>
                </select>
              </div>

              {/* PRIORITY */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Priority
                </label>

                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className={`
                    w-full
                    px-4
                    py-3
                    rounded-2xl
                    border
                    outline-none
                    transition-all
                    duration-300
                    focus:ring-2
                    focus:ring-[color:var(--brand-primary)]
                    ${inputClasses}
                  `}
                >
                  <option value="">Select priority</option>

                  <option value="Low">Low</option>

                  <option value="Medium">Medium</option>

                  <option value="High">High</option>

                  <option value="Critical">Critical</option>
                </select>
              </div>
            </div>
          </div>

          {/* =========================
              COURT DETAILS
          ========================== */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Court Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* COURT */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Court Name
                </label>

                <div className="relative">
                  <Building2
                    size={18}
                    className={`
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      ${mutedText}
                    `}
                  />

                  <input
                    type="text"
                    name="court"
                    value={formData.court}
                    onChange={handleChange}
                    placeholder="e.g Milimani High Court"
                    className={`
                      w-full
                      pl-11
                      pr-4
                      py-3
                      rounded-2xl
                      border
                      outline-none
                      transition-all
                      duration-300
                      focus:ring-2
                      focus:ring-[color:var(--brand-primary)]
                      ${inputClasses}
                    `}
                  />
                </div>
              </div>

              {/* JUDGE */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Presiding Judge
                </label>

                <div className="relative">
                  <Scale
                    size={18}
                    className={`
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      ${mutedText}
                    `}
                  />

                  <input
                    type="text"
                    name="judge"
                    value={formData.judge}
                    onChange={handleChange}
                    placeholder="Enter judge name"
                    className={`
                      w-full
                      pl-11
                      pr-4
                      py-3
                      rounded-2xl
                      border
                      outline-none
                      transition-all
                      duration-300
                      focus:ring-2
                      focus:ring-[color:var(--brand-primary)]
                      ${inputClasses}
                    `}
                  />
                </div>
              </div>

              {/* HEARING DATE */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Hearing Date
                </label>

                <div className="relative">
                  <CalendarDays
                    size={18}
                    className={`
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      ${mutedText}
                    `}
                  />

                  <input
                    type="date"
                    name="hearingDate"
                    value={formData.hearingDate}
                    onChange={handleChange}
                    className={`
                      w-full
                      pl-11
                      pr-4
                      py-3
                      rounded-2xl
                      border
                      outline-none
                      transition-all
                      duration-300
                      focus:ring-2
                      focus:ring-[color:var(--brand-primary)]
                      ${inputClasses}
                    `}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              DESCRIPTION
          ========================== */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Case Description</h3>

            <div className="relative">
              <FileText
                size={18}
                className={`
                  absolute
                  left-4
                  top-5
                  ${mutedText}
                `}
              />

              <textarea
                rows={7}
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide a detailed case description..."
                className={`
                  w-full
                  pl-11
                  pr-4
                  py-4
                  rounded-2xl
                  border
                  outline-none
                  resize-none
                  transition-all
                  duration-300
                  focus:ring-2
                  focus:ring-[color:var(--brand-primary)]
                  ${inputClasses}
                `}
              />
            </div>
          </div>

          {/* =========================
              ACTIONS
          ========================== */}
          <div
            className={`
              pt-6
              border-t
              flex
              items-center
              justify-end
              gap-4
              ${
                theme === "dark"
                  ? "border-[color:var(--border-dark)]"
                  : "border-[color:var(--border-light)]"
              }
            `}
          >
            <button
              type="button"
              className={`
                px-5
                py-3
                rounded-2xl
                font-medium
                transition-all
                duration-300
                ${
                  theme === "dark"
                    ? "bg-[color:var(--background-dark)] hover:bg-white/10"
                    : "bg-gray-100 hover:bg-gray-200"
                }
              `}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                inline-flex
                items-center
                gap-2
                px-6
                py-3
                rounded-2xl
                bg-[color:var(--brand-primary)]
                text-white
                font-medium
                shadow-soft
                hover:opacity-90
                transition-all
                duration-300
              "
            >
              <Save size={18} />
              Save New Case
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
