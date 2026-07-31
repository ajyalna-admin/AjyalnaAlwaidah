"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, ExternalLink } from "lucide-react";
import { chatbot } from "@/lib/data";

export function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ y: -3 }}
        className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 rounded-full bg-navy text-cream px-5 py-3.5 text-sm font-bold shadow-lg shadow-navy/20 hover:bg-navy-light transition-colors duration-200"
      >
        <MessageCircle className="h-4 w-4" />
        {chatbot.label}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-0 sm:p-6"
          >
            <div
              className="absolute inset-0 bg-navy-deep/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full sm:max-w-md h-[85vh] sm:h-[600px] glass-card sm:rounded-3xl rounded-t-3xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/40 shrink-0">
                <p className="font-display font-bold text-sm">{chatbot.label}</p>
                <div className="flex items-center gap-2">
                  <a
                    href={chatbot.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/50 hover:bg-white/80 transition-colors"
                    aria-label="فتح في تبويب جديد"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button
                    onClick={() => setOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/50 hover:bg-white/80 transition-colors"
                    aria-label="إغلاق"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <iframe src={chatbot.url} className="flex-1 w-full bg-white" title={chatbot.label} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
