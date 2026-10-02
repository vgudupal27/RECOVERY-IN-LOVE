import AppNav from "@/components/AppNav";
import ProfileCard from "@/components/ProfileCard";
import { demoProfiles } from "@/lib/demo-data";

export default function DiscoverPage() {
  return (
    <main>
      <AppNav />
      <section className="appPage">
        <div className="pageHeader">
          <div>
            <div className="eyebrow">Discover</div>
            <h1>People aligned with your boundaries.</h1>
            <p>Recommendations are based on preferences and explainable compatibility signals, not clinical predictions.</p>
          </div>
        </div>
        <div className="discoverStack">
          {demoProfiles.map((profile) => <ProfileCard key={profile.id} profile={profile} />)}
        </div>
      </section>
    </main>
  );
}
