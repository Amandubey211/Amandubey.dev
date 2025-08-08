// app/contact/components/EnhancedFormField.tsx
"use client";

import { motion } from "framer-motion";
import { ChangeEvent, FocusEvent } from "react";

export function EnhancedFormField({
  id,
  type,
  placeholder,
  error,
  ...props
}: {
  id: string;
  type: string;
  placeholder: string;
  error?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  const isTextarea = type === "textarea";

  // UPDATED: Styling for a full, rounded border
  const commonClasses = `
    block w-full appearance-none bg-transparent px-4 py-3
    border-2 rounded-xl transition duration-300
    placeholder:text-gray-500 text-white
    focus:outline-none
    ${error ? "border-red-500" : "border-gray-800 focus:border-lime-400"}
  `;

  const commonProps = {
    id,
    name: id,
    placeholder,
    "aria-invalid": !!error,
    "aria-describedby": error ? `${id}-error` : undefined,
    className: commonClasses,
    ...props,
  };

  return (
    <div className="relative">
      {isTextarea ? (
        <textarea
          {...commonProps}
          rows={5}
          className={`${commonProps.className} resize-none`}
        />
      ) : (
        <input {...commonProps} type={type} />
      )}
      {error && (
        <motion.p
          id={`${id}-error`}
          className="text-red-500 text-sm mt-2 flex items-center gap-1"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
