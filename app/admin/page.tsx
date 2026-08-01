"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LogOut, CheckCircle2, XCircle, ShieldCheck, Mail } from "lucide-react";
import { supabase, type Submission } from "@/lib/supabase";
import type { Session } from "@supabase/supabase-js";

const typeLabels: Record<string, string> = {
  rating: "تقييم",
  review: "تجربة",
  tip: "نصيحة",
  file: "ملف",
  link: "رابط مفيد",
  platform: "منصة تعليمية",
  tutor: "مدرس خصوصي",
  ambassador: "سفير مقرر",
};

export default function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [pending, setPending] = useState<Submission[]>([]);
  const [notAdmin, setNotAdmin] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) loadPending();
  }, [session]);

  const loadPending = async () => {
    setNotAdmin(false);
    const { data, error } = await supabase
      .from("submissions")
      .select("*")
      .eq("status", "pending")
      .order("created_at", { ascending: false });

    if (error) {
      setNotAdmin(true);
      return;
    }
    setPending((data as Submission[]) ?? []);
  };

  const sendMagicLink = async () => {
    if (!email.trim()) return;
    await supabase.auth.signInWithOtp({ email: email.trim() });
    setMagicLinkSent(true);
  };

  const decide = async (id: string, status: "approved" | "rejected") => {
    await supabase.from("submissions").update({ status }).eq("id", id);
    setPending((prev) => prev.filter((p) => p.id !== id));
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  if (loading) return <div className="section-pad pt-40 text-center text-sm text-muted">جارِ التحميل...</div>;

  if (!session) {
    return (
      <main className="section-pad pt-40 pb-24">
        <div className="container-content max-w-sm">
          <div className="glass-card rounded-2xl p-8 text-center">
            <ShieldCheck className="h-8 w-8 text-sky-deep mx-auto mb-4" />
            <h1 className="font-display text-xl font-bold mb-2">لوحة تحكم الإدارة</h1>
            {magicLinkSent ? (
              <p className="text-sm text-muted leading-relaxed">
                أرسلنا رابط دخول لبريدك <span dir="ltr">{email}</span> — افتحيه من نفس الجهاز.
              </p>
            ) : (
              <>
                <p className="text-sm text-muted mb-5">سجّلي دخولك بالبريد المصرّح لك بالإدارة</p>
                <div className="flex items-center gap-2 rounded-xl border border-line bg-white/60 px-4 py-2.5 mb-4">
                  <Mail className="h-4 w-4 text-muted shrink-0" />
                  <input
                    type="email"
                    dir="ltr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>
                <button
                  onClick={sendMagicLink}
                  className="w-full rounded-full bg-navy text-cream px-6 py-2.5 text-sm font-bold hover:bg-navy-light transition-colors duration-200"
                >
                  إرسال رابط الدخول
                </button>
              </>
            )}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="section-pad pt-32 sm:pt-40 pb-24">
      <div className="container-content">
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-display text-2xl font-bold">مراجعة المساهمات</h1>
          <button
            onClick={signOut}
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-navy transition-colors"
          >
            <LogOut className="h-4 w-4" />
            تسجيل خروج
          </button>
        </div>

        {notAdmin && (
          <p className="glass-card rounded-2xl p-6 text-sm text-muted">
            هذا البريد غير مصرّح له بالدخول للوحة الإدارة. تأكدي إنه مضاف لجدول admins في Supabase.
          </p>
        )}

        {!notAdmin && pending.length === 0 && (
          <p className="glass-card rounded-2xl p-6 text-sm text-muted">لا توجد مساهمات بانتظار المراجعة حاليًا</p>
        )}

        <div className="grid gap-4 max-w-3xl">
          {pending.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="glass-card rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="glass-chip rounded-full px-3 py-1 text-xs font-bold">
                  {typeLabels[s.type] ?? s.type}
                </span>
                {s.course_slug && <span className="text-xs text-muted">{s.course_slug}</span>}
              </div>
              {s.payload.name && <p className="font-bold text-sm mb-1">{s.payload.name}</p>}
              <p className="text-sm leading-relaxed mb-2">{s.payload.content}</p>
              {s.payload.link && (
                <a href={s.payload.link} target="_blank" rel="noopener noreferrer" dir="ltr" className="text-xs text-sky-deep break-all">
                  {s.payload.link}
                </a>
              )}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => decide(s.id, "approved")}
                  className="inline-flex items-center gap-1.5 rounded-full bg-sky-deep text-cream px-4 py-2 text-xs font-bold hover:bg-navy transition-colors duration-200"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  اعتماد
                </button>
                <button
                  onClick={() => decide(s.id, "rejected")}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/60 border border-line px-4 py-2 text-xs font-bold hover:bg-white/90 transition-colors duration-200"
                >
                  <XCircle className="h-3.5 w-3.5" />
                  رفض
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
