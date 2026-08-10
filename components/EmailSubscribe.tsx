-- جدول تخزين إيميلات المشتركات
create table if not exists email_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table email_subscribers enable row level security;

-- صلاحيات service_role (نفس الدرس اللي تعلمناه من مشكلة push_subscriptions)
grant select, insert, update, delete on public.email_subscribers to service_role;
