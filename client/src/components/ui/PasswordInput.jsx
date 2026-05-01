import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({
  label,
  value,
  onChange,
  placeholder = "Password",
  name,
}) {
  const [show, setShow] = useState(false);

  return (
    <div>
      {label && <label className="text-sm font-medium">{label}</label>}

      <div className="relative mt-1">
        <input
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full px-4 py-3 pr-10
            border rounded-xl
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
        />

        {/* Toggle button */}
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="
            absolute right-3 top-1/2 -translate-y-1/2
            text-gray-500 hover:text-gray-700
            flex items-center justify-center
          "
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}
