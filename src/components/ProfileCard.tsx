"use client";

import { Heart, X, Flag } from "lucide-react";
import type { DemoProfile } from "@/lib/demo-data";
import { useState } from "react";

export default function ProfileCard({ profile }: { profile: DemoProfile }) {
  const [status, setStatus] = useState<"idle" | "liked" | "passed">("idle");

  return (
    <article className="discoverCard">
      <div className="discoverPhoto">
        <div className="photoGradient">
          <div>
            <h2>{profile.name}, {profile.age}</h2>
            <p>{profile.city}</p>
          </div>
        </div>
      </div>

      <div className="discoverBody">
        <div className="pills">
          <span className="pill">{profile.recoveryDuration}</span>
          <span className="pill">{profile.relationshipGoal}</span>
          <span className="pill">{profile.recoveryBoundary}</span>
        </div>

        <p className="profileAbout">{profile.about}</p>

        <div className="scoreGrid">
          <Score label="Recovery" value={profile.compatibility.recovery} />
          <Score label="Goals" value={profile.compatibility.goals} />
          <Score label="Lifestyle" value={profile.compatibility.lifestyle} />
          <Score label="Communication" value={profile.compatibility.communication} />
        </div>

        <div className="whyBox">
          <strong>Why we're showing you this person</strong>
          <ul>
            {profile.why.map((reason) => <li key={reason}>{reason}</li>)}
          </ul>
        </div>

        <div className="cardActions">
          <button className="roundButton" onClick={() => setStatus("passed")} aria-label="Pass">
            <X size={22} />
          </button>
          <button className="roundButton primaryRound" onClick={() => setStatus("liked")} aria-label="Like">
            <Heart size={22} />
          </button>
          <a className="roundButton" href="/safety" aria-label="Report">
            <Flag size={20} />
          </a>
        </div>

        {status === "liked" && <p className="statusText">Liked. If they like you too, it becomes a match.</p>}
        {status === "passed" && <p className="statusText">Passed. This demo keeps the card visible so you can test the UI.</p>}
      </div>
    </article>
  );
}

function Score({ label, value }: { label: string; value: number }) {
  return (
    <div className="scoreItem">
      <span>{label}</span>
      <strong>{value}%</strong>
    </div>
  );
}
