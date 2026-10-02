import AppNav from "@/components/AppNav";
import { demoProfiles } from "@/lib/demo-data";
import Link from "next/link";

export default function MatchesPage() {
  return (
    <main>
      <AppNav />
      <section className="appPage">
        <div className="eyebrow">Matches</div>
        <h1>Your connections</h1>
        <div className="listCards">
          {demoProfiles.slice(0, 2).map((profile) => (
            <Link className="listCard" href="/messages" key={profile.id}>
              <div className="avatar">{profile.name[0]}</div>
              <div>
                <strong>{profile.name}, {profile.age}</strong>
                <p>{profile.recoveryDuration} · {profile.relationshipGoal}</p>
              </div>
              <span>Message</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
