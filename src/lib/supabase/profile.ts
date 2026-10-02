import { createClient } from "@/lib/supabase/client";

export async function upsertBasicProfile(input: {
  first_name: string;
  birth_date: string;
  city?: string;
  region?: string;
  relationship_goal?: string;
}) {
  const supabase = createClient();
  const { data: auth } = await supabase.auth.getUser();
  const user = auth.user;

  if (!user) throw new Error("You must be signed in.");

  const { error } = await supabase
    .from("profiles")
    .upsert({
      id: user.id,
      ...input,
      updated_at: new Date().toISOString(),
    });

  if (error) throw error;
}

export async function saveRecoveryProfile(input: {
  recovery_status?: string;
  recovery_start_date?: string;
  recovery_approach?: string;
  own_substance_boundary?: string;
  partner_substance_boundary?: string;
  wants_partner_in_recovery?: boolean;
  wants_sober_partner?: boolean;
  visibility?: string;
}) {
  const supabase = createClient();
  const { data: auth } = await supabase.auth.getUser();
  const user = auth.user;

  if (!user) throw new Error("You must be signed in.");

  const { error } = await supabase
    .from("recovery_profiles")
    .upsert({
      user_id: user.id,
      ...input,
      updated_at: new Date().toISOString(),
    });

  if (error) throw error;
}
