"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  { title: "Age confirmation", body: "Recovery in Love is for adults 18 and older.", field: "I confirm I am 18 or older" },
  { title: "About you", body: "Start with the basics you want potential matches to know.", field: "First name" },
  { title: "Dating preferences", body: "Choose age range, distance, relationship type, and who you want to meet.", field: "Long-term relationship" },
  { title: "Recovery preferences", body: "Tell us your boundaries and what kind of partner lifestyle works for you.", field: "Sober partner preferred" },
  { title: "Relationship goals", body: "Define what commitment and support look like to you.", field: "Intentional and long-term" },
  { title: "Mental-health disclosure", body: "Optional. You control whether this stays private or is shared after matching.", field: "Keep private for now" },
  { title: "Attachment assessment", body: "Connect a licensed provider or complete an approved assessment when available.", field: "Assessment integration ready" },
  { title: "Enneagram", body: "Personality assessment results can be added through the assessment provider layer.", field: "Assessment integration ready" },
  { title: "Recovery compatibility", body: "Your own questionnaire can help explain recovery and lifestyle alignment.", field: "Compatibility questionnaire" },
  { title: "Privacy controls", body: "Set separate visibility for profile, recovery, assessment, and mental-health information.", field: "Matches only" },
  { title: "Photo verification", body: "Identity verification can be enabled before public launch.", field: "Verification pending" },
  { title: "Preview", body: "Review your profile before you start discovering people.", field: "Ready to explore" },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const current = steps[step];

  return (
    <main className="onboardingShell">
      <section className="onboardingPanel">
        <Link href="/" className="brand">Recovery in Love</Link>
        <div className="progressTrack"><div style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
        <div className="eyebrow">Step {step + 1} of {steps.length}</div>
        <h1>{current.title}</h1>
        <p className="sectionIntro">{current.body}</p>

        <div className="onboardingField">
          <label>{current.field}</label>
          {step === 0 ? (
            <label className="checkRow"><input type="checkbox" /> Yes, I am 18+</label>
          ) : (
            <input placeholder={current.field} />
          )}
        </div>

        <div className="onboardingActions">
          <button className="secondaryButton" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>Back</button>
          {step < steps.length - 1 ? (
            <button className="primaryButton" onClick={() => setStep((s) => s + 1)}>Continue</button>
          ) : (
            <Link className="primaryButton" href="/discover">Start matching</Link>
          )}
        </div>
      </section>
    </main>
  );
}
