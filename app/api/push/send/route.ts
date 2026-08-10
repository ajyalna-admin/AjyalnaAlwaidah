import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import webpush from "web-push";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

webpush.setVapidDetails(
  process.env.VAPID_SUBJECT || "mailto:Ajyalnaalwaidah@gmail.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export async function POST(request: Request) {
  try {
    // حماية بسيطة: لازم ترسلين نفس السر الموجود بمتغيرات البيئة
    const { adminSecret, title, body, url } = await request.json();

    if (!process.env.PUSH_ADMIN_SECRET || adminSecret !== process.env.PUSH_ADMIN_SECRET) {
      return NextResponse.json({ error: "غير مصرح" }, { status: 401 });
    }

    if (!title || !body) {
      return NextResponse.json({ error: "العنوان والنص مطلوبان" }, { status: 400 });
    }

    const { data: subscriptions, error } = await supabaseAdmin
      .from("push_subscriptions")
      .select("*");

    if (error) {
      console.error("Supabase fetch error:", error);
      return NextResponse.json({ error: "تعذّر جلب المشتركين" }, { status: 500 });
    }

    const payload = JSON.stringify({ title, body, url: url || "/" });

    const results = await Promise.allSettled(
      (subscriptions || []).map((sub) =>
        webpush.sendNotification(
          {
            endpoint: sub.endpoint,
            keys: { p256dh: sub.p256dh, auth: sub.auth },
          },
          payload
        )
      )
    );

    // نظّفي الاشتراكات المنتهية/الملغاة (410 Gone أو 404) تلقائيًا
    const expiredEndpoints: string[] = [];
    results.forEach((result, i) => {
      if (
        result.status === "rejected" &&
        (result.reason?.statusCode === 410 || result.reason?.statusCode === 404)
      ) {
        expiredEndpoints.push(subscriptions![i].endpoint);
      }
    });

    if (expiredEndpoints.length > 0) {
      await supabaseAdmin.from("push_subscriptions").delete().in("endpoint", expiredEndpoints);
    }

    const sent = results.filter((r) => r.status === "fulfilled").length;
    const failed = results.length - sent;

    return NextResponse.json({ success: true, sent, failed, total: results.length });
  } catch (err) {
    console.error("Push send error:", err);
    return NextResponse.json({ error: "فشل الإرسال" }, { status: 500 });
  }
}
