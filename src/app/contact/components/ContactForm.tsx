// app/contact/components/ContactForm.tsx
"use client";

import { useState, useEffect, FormEvent, ChangeEvent, FocusEvent } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { LoaderCircle, CheckCircle2 } from "lucide-react";
import { EnhancedFormField } from "./EnhancedFormField";

// --- Type Definitions ---
type FormState = "idle" | "submitting" | "success" | "error";
type FormValues = { name: string; email: string; message: string };
type FormErrors = { name?: string; email?: string; message?: string };

// This variant can be used for the form fields
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });

  // Auto-dismiss functionality remains
  useEffect(() => {
    if (formState === "success" || formState === "error") {
      const timer = setTimeout(() => {
        setFormState("idle");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formState]);

  const validateForm = (
    values: FormValues,
    fieldName?: keyof FormValues
  ): FormErrors => {
    // Validation logic is unchanged
    const newErrors: FormErrors = {}; // Start fresh to remove old errors
    const runValidation = (field: keyof FormValues) => {
      switch (field) {
        case "name":
          if (!values.name?.trim()) newErrors.name = "Name is required.";
          break;
        case "email":
          if (!values.email?.trim()) newErrors.email = "Email is required.";
          else if (!/\S+@\S+\.\S+/.test(values.email))
            newErrors.email = "Please enter a valid email.";
          break;
        case "message":
          if (!values.message?.trim())
            newErrors.message = "A message is required.";
          else if (values.message.trim().length < 10)
            newErrors.message = "Message needs to be at least 10 characters.";
          break;
      }
    };
    if (fieldName) runValidation(fieldName);
    else {
      runValidation("name");
      runValidation("email");
      runValidation("message");
    }
    return newErrors;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    // Live validation
    if (errors[name as keyof FormErrors]) {
      setErrors(
        validateForm({ ...formValues, [name]: value }, name as keyof FormValues)
      );
    }
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target as { name: keyof FormValues };
    setErrors(validateForm(formValues, name));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setFormState("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      if (response.ok) {
        setFormState("success");
        setFormValues({ name: "", email: "", message: "" });
        (event.target as HTMLFormElement).reset();
      } else {
        setFormState("error");
      }
    } catch (error) {
      console.log(error);
      setFormState("error");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-8"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <motion.div variants={itemVariants}>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Full Name
        </label>
        <EnhancedFormField
          id="name"
          type="text"
          placeholder="Jane Doe"
          value={formValues.name}
          onChange={handleInputChange}
          onBlur={handleBlur}
          error={errors.name}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Email
        </label>
        <EnhancedFormField
          id="email"
          type="email"
          placeholder="jane@example.com"
          value={formValues.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          error={errors.email}
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Message
        </label>
        <EnhancedFormField
          id="message"
          type="textarea"
          placeholder="Tell me a bit about your project..."
          value={formValues.message}
          onChange={handleInputChange}
          onBlur={handleBlur}
          error={errors.message}
        />
      </motion.div>

      <motion.div variants={itemVariants} className="pt-2">
        <motion.button
          type="submit"
          disabled={formState === "submitting"}
          className="w-full sm:w-auto px-8 py-3 font-semibold text-white bg-transparent border-2 border-gray-700 rounded-full transition-all duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          whileTap={{ scale: 0.95 }}
        >
          {formState === "submitting" ? (
            <>
              <LoaderCircle className="animate-spin" size={20} />
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {formState === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-lime-400 font-medium flex items-center gap-2"
          >
            <CheckCircle2 size={20} /> Message sent successfully!
          </motion.div>
        )}
        {formState === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-red-500 font-medium"
          >
            An error occurred. Please try again.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
