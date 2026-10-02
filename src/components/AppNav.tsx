import Link from "next/link";

const items = [
  ["/discover", "Discover"],
  ["/matches", "Matches"],
  ["/messages", "Messages"],
  ["/recovery", "Recovery"],
  ["/profile", "Profile"],
  ["/safety", "Safety"],
];

export default function AppNav() {
  return (
    <nav className="appNav">
      <Link className="brand" href="/">Recovery in Love</Link>
      <div className="appNavLinks">
        {items.map(([href, label]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
      </div>
    </nav>
  );
}
