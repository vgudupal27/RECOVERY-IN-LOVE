# Recovery in Love setup

## 1. Supabase

Create or open the Supabase project for this app.

In **SQL Editor**, run the full contents of:

`supabase/schema.sql`

This creates the application tables and Row Level Security policies.

## 2. Authentication

In Supabase:

- Authentication → Providers → Email
- Enable Email provider
- For early testing, you may disable mandatory email confirmation if desired
- Add your deployed site URL under Authentication → URL Configuration
- Add the auth callback URL:
  - `https://YOUR-DOMAIN/onboarding`

## 3. Environment variables

Add these variables to your local `.env.local` and your deployment platform:

`NEXT_PUBLIC_SUPABASE_URL`
`NEXT_PUBLIC_SUPABASE_ANON_KEY`

Do not commit a service-role key.

## 4. Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 5. Deploy

Recommended: Vercel.

- Import the GitHub repository
- Framework preset: Next.js
- Add both Supabase environment variables
- Deploy
- Copy the production URL into Supabase Authentication URL Configuration

## Current implementation

Implemented:
- Landing page
- Email/password sign up and sign in
- Interactive onboarding
- Discover profiles
- Like/pass demo interaction
- Match list
- Messaging demo
- Recovery profile
- Profile privacy view
- Safety/reporting UI
- Trust & Safety admin UI
- Supabase client
- Database schema and initial RLS policies

Next production work:
- Save onboarding data to Supabase
- Replace demo profiles with database queries
- Persist likes and generate mutual matches
- Persist conversations/messages
- Upload photos to Supabase Storage
- Private evidence storage and moderator access
- Server-side auth/session protection
- Role-based admin authorization
