import AppNav from "@/components/AppNav";

export default function ProfilePage() {
  return (
    <main>
      <AppNav />
      <section className="appPage narrow">
        <div className="eyebrow">Profile</div>
        <h1>Profile preview</h1>
        <div className="profilePreview">
          <div className="profilePreviewPhoto" />
          <div>
            <h2>You, 31</h2>
            <p>Norfolk, VA · Long-term relationship</p>
            <div className="pills">
              <span className="pill">Recovery summary visible</span>
              <span className="pill">Attachment result visible</span>
              <span className="pill">Mental-health details private</span>
            </div>
          </div>
        </div>
        <div className="settingsCard">
          <div className="settingRow"><span>Public profile</span><strong>Visible</strong></div>
          <div className="settingRow"><span>Recovery profile</span><strong>Matches only</strong></div>
          <div className="settingRow"><span>Mental-health disclosure</span><strong>Private</strong></div>
          <div className="settingRow"><span>Assessment visibility</span><strong>Selected results only</strong></div>
        </div>
      </section>
    </main>
  );
}
