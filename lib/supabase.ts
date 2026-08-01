import { createClient } from "@supabase/supabase-js";

// هذي المفاتيح آمنة للعرض العلني (Publishable / anon key) —
// الحماية الفعلية تتم عبر سياسات RLS في قاعدة البيانات، مو بإخفاء المفتاح.
const SUPABASE_URL = "https://jvfnavosjdemurbstyna.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_8Ky5WIYc-vlQwnb72e8RGQ_m7fN2YPD";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export type SubmissionType =
  | "rating"
  | "review"
  | "tip"
  | "file"
  | "link"
  | "platform"
  | "tutor"
  | "ambassador";

export type Submission = {
  id: string;
  type: SubmissionType;
  course_slug: string | null;
  payload: Record<string, string>;
  status: "pending" | "approved" | "rejected";
  helpful_count: number;
  not_helpful_count: number;
  created_at: string;
};
