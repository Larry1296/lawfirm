export default function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full px-3 py-2
          border border-gray-200
          rounded-lg
          shadow-sm
          focus:outline-none
          focus:ring-2 focus:ring-blue-500
          focus:border-blue-500
          transition
        "
      />
    </div>
  );
}
