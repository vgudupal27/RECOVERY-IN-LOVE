import AppNav from "@/components/AppNav";

const items = [
  ["Recovery status", "In recovery"],
  ["Recovery duration", "3 years"],
  ["My boundary", "Completely abstinent"],
  ["Partner preference", "Sober partner preferred"],
  ["Recovery approach", "Open to multiple approaches"],
  ["Visibility", "Show summary to matches only"],
];

export default function RecoveryPage() {
  return (
    <main>
      <AppNav />
      <section className="appPage narrow">
        <div className="eyebrow">Recovery profile</div>
        <h1>Your recovery preferences are yours to control.</h1>
        <p className="sectionIntro">These fields are separate from the public profile and can have stricter visibility settings.</p>
        <div className="settingsCard">
          {items.map(([label, value]) => (
            <div className="settingRow" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
