"use client";

import AppNav from "@/components/AppNav";
import { useState } from "react";

const categories = [
  "Fake profile",
  "Impersonation",
  "Harassment",
  "Threats",
  "Sexual harassment",
  "Scam/fraud",
  "Financial solicitation",
  "Misrepresentation",
  "Relationship-status concern",
  "Substance-related safety concern",
  "Hate/abusive behavior",
  "Underage user",
  "Other",
];

export default function SafetyPage() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <AppNav />
      <section className="appPage narrow">
        <div className="eyebrow">Safety Center</div>
        <h1>Private reporting and relationship verification.</h1>
        <p className="sectionIntro">
          Reports and supporting evidence are intended for authorized Trust & Safety review, not public posting.
        </p>

        <div className="settingsCard formCard">
          <label>What are you reporting?</label>
          <select>
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>

          <label>Tell us what happened</label>
          <textarea rows={6} placeholder="Describe the concern. Avoid unnecessary private information about other people." />

          <label>Optional evidence</label>
          <input type="file" />

          <button className="primaryButton formButton" onClick={() => setSent(true)}>Submit report</button>
          {sent && <p className="statusText">Report captured in demo mode. Backend submission will activate when Supabase is connected.</p>}
        </div>

        <div className="notice safetyNotice">
          <h2>Relationship verification</h2>
          <p>Two consenting adults can mutually verify that they are in a relationship. A concern about someone else's relationship status goes through private moderation instead of a public “claim” board.</p>
          <button className="secondaryLight">Start verification</button>
        </div>
      </section>
    </main>
  );
}
