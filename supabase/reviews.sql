create extension if not exists pgcrypto;

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name varchar(80) not null,
  rating smallint not null check (rating between 1 and 5),
  service varchar(120),
  review_text varchar(1000) not null,
  locale varchar(2) not null check (locale in ('es','en','ru','uk','de','fr','pl','ro','nl','it')),
  status varchar(10) not null default 'pending' check (status in ('pending','approved','rejected')),
  ip_hash char(64) not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists reviews_public_idx on public.reviews (locale, status, created_at desc);
create index if not exists reviews_rate_limit_idx on public.reviews (ip_hash, created_at desc);

alter table public.reviews enable row level security;
