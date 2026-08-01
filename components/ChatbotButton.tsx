"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { chatbot } from "@/lib/data";

type ChatMessage = {
  role: "user" | "assistant" | "error";
  content: string;
};

export function ChatbotButton() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);

  const openPanel = () => {
    setOpen(true);
    if (messages.length === 0) {
      setMessages([{ role: "assistant", content: chatbot.welcome }]);
    }
  };

  const send = async (text: string) => {
    const value = text.trim();
    if (!value || sending) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: value }];
    setMessages(nextMessages);
    setInput("");
    setSending(true);

    try {
      const apiMessages = nextMessages
        .filter((m) => m.role !== "error")
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessages((prev) => [...prev, { role: "error", content: data.error || chatbot.errorMessage }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "error", content: chatbot.errorMessage }]);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <motion.button
        onClick={openPanel}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: open ? 0 : 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 rounded-full bg-navy text-cream px-5 py-3.5 text-sm font-bold shadow-lg shadow-navy/20 hover:bg-navy-light transition-colors duration-200"
        style={{ pointerEvents: open ? "none" : "auto" }}
      >
        <MessageCircle className="h-4 w-4" />
        {chatbot.label}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 sm:bottom-6 sm:left-6 z-[110] w-full sm:w-[380px] max-w-full h-[85vh] sm:h-[600px] max-h-[calc(100vh-24px)] glass-card sm:rounded-3xl rounded-t-3xl overflow-hidden flex flex-col"
          >
            <div className="relative bg-navy px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky/25">
                  <Sparkles className="h-4 w-4 text-sky-ice" />
                </span>
                <div>
                  <p className="text-cream font-bold text-sm">{chatbot.label}</p>
                  <p className="text-cream/60 text-[11px] flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" />
                    متصل الآن
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-cream"
                aria-label="إغلاق"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-navy text-cream mr-auto rounded-bl-md"
                      : m.role === "error"
                      ? "bg-red-50 border border-red-200 text-red-700 ml-auto rounded-br-md"
                      : "bg-white/70 border border-white/60 text-navy ml-auto rounded-br-md"
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {sending && (
                <div className="ml-auto bg-white/70 border border-white/60 rounded-2xl rounded-br-md px-4 py-3 flex gap-1.5 w-fit">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-navy/40 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
            </div>

            {messages.length <= 1 && !sending && (
              <div className="px-4 pb-3 flex flex-wrap gap-2 shrink-0">
                {chatbot.starters.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="glass-chip rounded-full px-3 py-1.5 text-xs font-medium hover:bg-sky/20 transition-colors duration-200"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="p-3 border-t border-white/40 flex items-center gap-2 shrink-0">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder={chatbot.placeholder}
                className="flex-1 rounded-full border border-line bg-white/70 px-4 py-2.5 text-sm outline-none focus:border-sky-deep transition-colors"
              />
              <button
                onClick={() => send(input)}
                disabled={sending || !input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-cream hover:bg-navy-light transition-colors duration-200 disabled:opacity-40"
                aria-label="إرسال"
              >
                <Send className="h-4 w-4 -scale-x-100" />
              </button>
            </div>
            <p className="text-center text-[10px] text-muted pb-2.5 shrink-0">{chatbot.footNote}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
