"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function AuthPage() {
  const supabase = createClient();
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage("");

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo:
            typeof window !== "undefined"
              ? `${window.location.origin}/onboarding`
              : undefined,
        },
      });

      setMessage(
        error
          ? error.message
          : "Account created. Check your email if confirmation is enabled."
      );
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setMessage(error ? error.message : "Signed in successfully.");
      if (!error) window.location.href = "/discover";
    }

    setBusy(false);
  }

  return (
    <main className="onboardingShell">
      <section className="onboardingPanel">
        <Link href="/" className="brand">Recovery in Love</Link>
        <div className="eyebrow">{mode === "signup" ? "Create account" : "Welcome back"}</div>
        <h1>{mode === "signup" ? "Start with a private account." : "Sign in."}</h1>
        <p className="sectionIntro">
          Your recovery and mental-health information stays separate from your public profile and follows your privacy choices.
        </p>

        <form className="formCard authCard" onSubmit={submit}>
          <label>Email</label>
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />

          <label>Password</label>
          <input
            type="password"
            required
            minLength={8}
            autoComplete={mode === "signup" ? "new-password" : "current-password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
          />

          <button className="primaryButton formButton" disabled={busy}>
            {busy ? "Working..." : mode === "signup" ? "Create account" : "Sign in"}
          </button>

          {message && <p className="statusText">{message}</p>}
        </form>

        <button
          className="secondaryButton authSwitch"
          onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
        >
          {mode === "signup" ? "Already have an account? Sign in" : "Need an account? Sign up"}
        </button>
      </section>
    </main>
  );
}
