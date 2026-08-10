"use client";

import { useEffect, useState } from "react";
import { Bell, BellRing, BellOff } from "lucide-react";

// حوّلي المفتاح العام (VAPID) من base64url إلى Uint8Array — مطلوب لتفعيل الاشتراك
function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)));
}

type Status = "idle" | "loading" | "subscribed" | "denied" | "unsupported";

export function NotificationOptIn() {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
      setStatus("unsupported");
      return;
    }
    if (Notification.permission === "denied") {
      setStatus("denied");
      return;
    }

    navigator.serviceWorker.ready.then(async (registration) => {
      const existing = await registration.pushManager.getSubscription();
      if (existing) setStatus("subscribed");
    });
  }, []);

  const handleSubscribe = async () => {
    setStatus("loading");
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      const permission = await Notification.requestPermission();

      if (permission !== "granted") {
        setStatus("denied");
        return;
      }

      const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
      if (!vapidPublicKey) {
        console.error("NEXT_PUBLIC_VAPID_PUBLIC_KEY غير موجود في متغيرات البيئة");
        setStatus("idle");
        return;
      }

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidPublicKey),
      });

      await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(subscription),
      });

      setStatus("subscribed");
    } catch (err) {
      console.error("فشل الاشتراك بالتنبيهات:", err);
      setStatus("idle");
    }
  };

  if (status === "unsupported") return null;

  if (status === "subscribed") {
    return (
      <div className="flex items-center gap-2 rounded-full glass-chip px-4 py-2 text-xs font-bold text-emerald-600">
        <BellRing className="h-3.5 w-3.5" />
        التنبيهات مفعّلة
      </div>
    );
  }

  if (status === "denied") {
    return (
      <div className="flex items-center gap-2 rounded-full glass-chip px-4 py-2 text-xs font-bold text-muted">
        <BellOff className="h-3.5 w-3.5" />
        التنبيهات موقوفة من إعدادات المتصفح
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleSubscribe}
      disabled={status === "loading"}
      className="flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-xs font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      <Bell className="h-3.5 w-3.5" />
      {status === "loading" ? "جارٍ التفعيل..." : "فعّلي تنبيهات المحتوى الجديد"}
    </button>
  );
}
