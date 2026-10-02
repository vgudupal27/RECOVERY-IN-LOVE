import AppNav from "@/components/AppNav";

const cases = [
  { id: "R-1024", type: "Relationship-status concern", status: "Open", age: "18 min" },
  { id: "R-1023", type: "Harassment", status: "Investigating", age: "2 hr" },
  { id: "R-1022", type: "Impersonation", status: "Waiting for user", age: "5 hr" },
];

export default function AdminPage() {
  return (
    <main>
      <AppNav />
      <section className="appPage">
        <div className="eyebrow">Admin · Trust & Safety</div>
        <h1>Moderation dashboard</h1>

        <div className="adminStats">
          <div className="statCard"><strong>3</strong><span>Open reports</span></div>
          <div className="statCard"><strong>1</strong><span>High priority</span></div>
          <div className="statCard"><strong>7</strong><span>Resolved this week</span></div>
          <div className="statCard"><strong>0</strong><span>Evidence exposed publicly</span></div>
        </div>

        <div className="tableCard">
          <div className="tableRow tableHead"><span>Case</span><span>Type</span><span>Status</span><span>Age</span></div>
          {cases.map((item) => (
            <div className="tableRow" key={item.id}>
              <strong>{item.id}</strong><span>{item.type}</span><span>{item.status}</span><span>{item.age}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
