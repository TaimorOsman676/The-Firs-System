"use client";

import * as React from "react";
import type { Dict } from "@/i18n/getDictionary";
import { Icon } from "./Icon";

interface Props {
  dict: Dict;
  variant?: "services" | "contact";
}

interface FormState {
  projectName: string;
  date: string;
  materialsSystem: string;
  contactPerson: string;
  email: string;
  phone?: string;
  message: string;
}

export function SampleRequestForm({ dict, variant = "contact" }: Props) {
  const config = variant === "contact" ? dict.contact.form : dict.services.sampleForm;
  const isContact = variant === "contact";

  const [state, setState] = React.useState<FormState>({
    projectName: "",
    date: "",
    materialsSystem: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setState((s) => ({ ...s, [key]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.projectName || !state.materialsSystem || !state.email) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 800);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8"
    >
      <div className="mb-6">
        <h3 className="text-display text-2xl font-medium md:text-3xl">{config.title}</h3>
        {"subtitle" in config && config.subtitle && (
          <p className="mt-2 text-sm text-[var(--color-fg-muted)]">{config.subtitle}</p>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label={config.fields.projectName} required>
          <input
            type="text"
            required
            value={state.projectName}
            onChange={update("projectName")}
            className={inputClass}
          />
        </Field>

        <Field label={isContact ? dict.contact.form.fields.date : dict.services.sampleForm.fields.deliveryDate} required>
          <input
            type="date"
            required
            value={state.date}
            onChange={update("date")}
            className={inputClass}
          />
        </Field>

        <Field label={config.fields.materialsSystem} required className="md:col-span-2">
          <div className="relative">
            <select
              required
              value={state.materialsSystem}
              onChange={update("materialsSystem")}
              className={`${inputClass} appearance-none pe-10`}
            >
              <option value="" disabled>
                {dict.common.selectPlaceholder}
              </option>
              {config.systems.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            <Icon
              name="ChevronDown"
              size={16}
              className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-[var(--color-fg-subtle)]"
            />
          </div>
        </Field>

        {isContact && (
          <Field label={dict.contact.form.fields.contactPerson} required>
            <input
              type="text"
              required
              value={state.contactPerson}
              onChange={update("contactPerson")}
              className={inputClass}
            />
          </Field>
        )}

        <Field label={isContact ? dict.contact.form.fields.email : dict.services.sampleForm.fields.email} required>
          <input
            type="email"
            required
            value={state.email}
            onChange={update("email")}
            className={inputClass}
            dir="ltr"
          />
        </Field>

        {isContact && (
          <Field label={dict.contact.form.fields.phone}>
            <input
              type="tel"
              value={state.phone}
              onChange={update("phone")}
              className={inputClass}
              dir="ltr"
            />
          </Field>
        )}

        <Field
          label={isContact ? dict.contact.form.fields.message : dict.services.sampleForm.fields.message}
          className="md:col-span-2"
        >
          <textarea
            rows={4}
            value={state.message}
            onChange={update("message")}
            className={`${inputClass} resize-none py-3`}
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[var(--color-fg-subtle)]">
          {status === "error" ? dict.common.formError : ""}
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 text-sm font-semibold text-black hover:bg-[var(--color-accent-hover)] disabled:opacity-60 transition"
        >
          {status === "sent" ? <Icon name="Check" size={16} /> : <Icon name="Send" size={14} />}
          <span>
            {status === "sending"
              ? dict.common.sending
              : status === "sent"
                ? dict.common.sent
                : config.submit}
          </span>
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "h-11 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] focus:border-[var(--color-accent)]/50 focus:outline-none transition";

function Field({
  label,
  required,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-xs font-medium text-[var(--color-fg-muted)]">
        {label}
        {required && <span className="text-[var(--color-accent)]"> *</span>}
      </span>
      {children}
    </label>
  );
}
