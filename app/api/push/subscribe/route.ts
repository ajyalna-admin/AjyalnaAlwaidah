import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// نستخدم service role key هنا (سري، على الخادم فقط) عشان نقدر نكتب بالجدول
// بدون الحاجة لسياسات RLS عامة تسمح بالإدراج من أي شخص.
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const subscription = await request.json();

    if (!subscription?.endpoint || !subscription?.keys?.p256dh || !subscription?.keys?.auth) {
      return NextResponse.json({ error: "بيانات الاشتراك غير مكتملة" }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from("push_subscriptions").upsert(
      {
        endpoint: subscription.endpoint,
        p256dh: subscription.keys.p256dh,
        auth: subscription.keys.auth,
      },
      { onConflict: "endpoint" }
    );

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "تعذّر حفظ الاشتراك" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Push subscribe error:", err);
    return NextResponse.json({ error: "طلب غير صالح" }, { status: 400 });
  }
}
