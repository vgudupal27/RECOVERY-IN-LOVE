-- Recovery in Love initial database foundation
-- Sensitive domains are intentionally separated from public profile data.

create extension if not exists "uuid-ossp";

create table if not exists public.profiles (
  id uuid primary key,
  first_name text not null,
  birth_date date not null,
  gender text,
  pronouns text,
  sexual_orientation text,
  city text,
  region text,
  bio text,
  occupation text,
  education text,
  relationship_goal text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.preferences (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  min_age int,
  max_age int,
  max_distance_miles int,
  genders text[],
  relationship_types text[],
  wants_children text,
  updated_at timestamptz not null default now()
);

create table if not exists public.recovery_profiles (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  recovery_status text,
  recovery_start_date date,
  display_sobriety_duration boolean not null default true,
  continuous_sobriety boolean,
  recovery_approach text,
  own_substance_boundary text,
  partner_substance_boundary text,
  wants_partner_in_recovery boolean,
  wants_sober_partner boolean,
  visibility text not null default 'matches',
  updated_at timestamptz not null default now()
);

create table if not exists public.mental_health_profiles (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  disclosures text[],
  partner_should_understand text[],
  visibility text not null default 'private',
  updated_at timestamptz not null default now()
);

create table if not exists public.assessment_results (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  assessment_type text not null,
  provider text not null,
  provider_version text,
  result_label text,
  result_json jsonb,
  completed_at timestamptz not null default now(),
  unique(user_id, assessment_type, provider)
);

create table if not exists public.likes (
  id uuid primary key default uuid_generate_v4(),
  from_user_id uuid not null references public.profiles(id) on delete cascade,
  to_user_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique(from_user_id, to_user_id)
);

create table if not exists public.matches (
  id uuid primary key default uuid_generate_v4(),
  user_a uuid not null references public.profiles(id) on delete cascade,
  user_b uuid not null references public.profiles(id) on delete cascade,
  matched_at timestamptz not null default now(),
  unmatched_at timestamptz
);

create table if not exists public.conversations (
  id uuid primary key default uuid_generate_v4(),
  match_id uuid not null unique references public.matches(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default uuid_generate_v4(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  sender_id uuid not null references public.profiles(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table if not exists public.blocks (
  id uuid primary key default uuid_generate_v4(),
  blocker_id uuid not null references public.profiles(id) on delete cascade,
  blocked_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique(blocker_id, blocked_id)
);

create table if not exists public.reports (
  id uuid primary key default uuid_generate_v4(),
  reporter_id uuid not null references public.profiles(id) on delete cascade,
  reported_user_id uuid references public.profiles(id) on delete set null,
  category text not null,
  description text,
  status text not null default 'open',
  created_at timestamptz not null default now()
);

create table if not exists public.relationship_verifications (
  id uuid primary key default uuid_generate_v4(),
  initiator_id uuid not null references public.profiles(id) on delete cascade,
  partner_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'pending',
  verified_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.moderation_evidence (
  id uuid primary key default uuid_generate_v4(),
  report_id uuid not null references public.reports(id) on delete cascade,
  storage_path text not null,
  media_type text,
  created_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default uuid_generate_v4(),
  actor_user_id uuid,
  action text not null,
  target_type text,
  target_id uuid,
  metadata jsonb,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.preferences enable row level security;
alter table public.recovery_profiles enable row level security;
alter table public.mental_health_profiles enable row level security;
alter table public.assessment_results enable row level security;
alter table public.likes enable row level security;
alter table public.matches enable row level security;
alter table public.conversations enable row level security;
alter table public.messages enable row level security;
alter table public.blocks enable row level security;
alter table public.reports enable row level security;
alter table public.relationship_verifications enable row level security;
alter table public.moderation_evidence enable row level security;
alter table public.audit_logs enable row level security;

-- RLS policies will be added together with Supabase Auth once auth wiring begins.


-- Auth-linked profile policies
-- Run this schema in the Supabase SQL editor.

alter table public.profiles
  add constraint profiles_auth_user_fk
  foreign key (id) references auth.users(id) on delete cascade;

create policy "profiles_select_authenticated"
on public.profiles for select
to authenticated
using (true);

create policy "profiles_insert_self"
on public.profiles for insert
to authenticated
with check (auth.uid() = id);

create policy "profiles_update_self"
on public.profiles for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

create policy "preferences_self"
on public.preferences for all
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "recovery_profiles_self"
on public.recovery_profiles for all
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "mental_health_profiles_self"
on public.mental_health_profiles for all
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "assessment_results_self"
on public.assessment_results for all
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "likes_insert_self"
on public.likes for insert
to authenticated
with check (auth.uid() = from_user_id);

create policy "likes_select_related"
on public.likes for select
to authenticated
using (auth.uid() = from_user_id or auth.uid() = to_user_id);

create policy "matches_select_related"
on public.matches for select
to authenticated
using (auth.uid() = user_a or auth.uid() = user_b);

create policy "messages_select_if_participant"
on public.messages for select
to authenticated
using (
  exists (
    select 1
    from public.conversations c
    join public.matches m on m.id = c.match_id
    where c.id = messages.conversation_id
      and (m.user_a = auth.uid() or m.user_b = auth.uid())
  )
);

create policy "messages_insert_if_participant"
on public.messages for insert
to authenticated
with check (
  auth.uid() = sender_id
  and exists (
    select 1
    from public.conversations c
    join public.matches m on m.id = c.match_id
    where c.id = messages.conversation_id
      and (m.user_a = auth.uid() or m.user_b = auth.uid())
  )
);

create policy "blocks_self"
on public.blocks for all
to authenticated
using (auth.uid() = blocker_id)
with check (auth.uid() = blocker_id);

create policy "reports_insert_self"
on public.reports for insert
to authenticated
with check (auth.uid() = reporter_id);

create policy "reports_select_self"
on public.reports for select
to authenticated
using (auth.uid() = reporter_id);

create policy "relationship_verifications_related"
on public.relationship_verifications for select
to authenticated
using (auth.uid() = initiator_id or auth.uid() = partner_id);

create policy "relationship_verifications_insert_self"
on public.relationship_verifications for insert
to authenticated
with check (auth.uid() = initiator_id);
