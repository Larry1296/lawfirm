import React, { useRef, useState } from "react";

export default function FileUpload({
  label,
  name,
  onChange,
  accept = "*",
  multiple = false,
  maxSizeMB = 10,
  className = "",
}) {
  const inputRef = useRef(null);
  const [fileNames, setFileNames] = useState([]);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e) => {
    const files = Array.from(e.target.files || []);

    // Validate file size
    const validFiles = files.filter((file) => {
      const sizeMB = file.size / (1024 * 1024);
      return sizeMB <= maxSizeMB;
    });

    const names = validFiles.map((f) => f.name);
    setFileNames(names);

    if (onChange) {
      onChange({
        target: {
          name,
          files: validFiles,
        },
      });
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* LABEL */}
      {label && (
        <label className="block text-sm mb-1 text-gray-700 dark:text-darkbrand-text">
          {label}
        </label>
      )}

      {/* DROP AREA */}
      <div
        onClick={handleClick}
        className="
          w-full
          cursor-pointer
          p-5
          rounded-xl2
          border border-dashed border-ui-border
          bg-white dark:bg-darkbrand-surface
          hover:border-brand-primary
          transition-all duration-300 ease-smooth
          text-center
        "
      >
        <p className="text-sm text-ui-muted dark:text-gray-400">
          Click to upload or drag & drop files
        </p>

        <p className="text-xs text-ui-muted mt-1">Max size: {maxSizeMB}MB</p>

        {/* FILE LIST */}
        {fileNames.length > 0 && (
          <ul className="mt-3 text-xs text-gray-700 dark:text-darkbrand-text space-y-1">
            {fileNames.map((name, idx) => (
              <li key={idx}>📄 {name}</li>
            ))}
          </ul>
        )}
      </div>

      {/* HIDDEN INPUT */}
      <input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}
