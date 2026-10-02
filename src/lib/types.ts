export type ProfileRecord = {
  id: string;
  first_name: string;
  birth_date: string;
  gender: string | null;
  pronouns: string | null;
  sexual_orientation: string | null;
  city: string | null;
  region: string | null;
  bio: string | null;
  occupation: string | null;
  education: string | null;
  relationship_goal: string | null;
  created_at: string;
  updated_at: string;
};

export type RecoveryProfileRecord = {
  user_id: string;
  recovery_status: string | null;
  recovery_start_date: string | null;
  display_sobriety_duration: boolean;
  continuous_sobriety: boolean | null;
  recovery_approach: string | null;
  own_substance_boundary: string | null;
  partner_substance_boundary: string | null;
  wants_partner_in_recovery: boolean | null;
  wants_sober_partner: boolean | null;
  visibility: string;
  updated_at: string;
};
