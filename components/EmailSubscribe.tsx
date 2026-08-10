"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";

export function EmailSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/email/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="flex items-center gap-2 rounded-full glass-chip px-4 py-2.5 text-xs font-bold text-emerald-600">
        <Check className="h-3.5 w-3.5" />
        تم الاشتراك بنجاح
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap items-center gap-2 rounded-full glass-chip p-1.5 pr-4"
    >
      <Mail className="h-4 w-4 shrink-0 text-sky-deep" />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="بريدك الإلكتروني لتصلك التحديثات"
        className="min-w-0 flex-1 bg-transparent text-xs text-navy placeholder:text-muted focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 rounded-full bg-navy px-4 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "..." : "اشتراك"}
      </button>
      {status === "error" && (
        <p className="w-full text-[11px] text-red-600">صار خطأ، حاولي مرة ثانية.</p>
      )}
    </form>
  );
}
