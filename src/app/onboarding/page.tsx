const steps = [
  "18+ confirmation",
  "Create account",
  "Basic profile",
  "Dating preferences",
  "Recovery preferences",
  "Relationship goals",
  "Optional mental-health disclosure",
  "Attachment assessment",
  "Enneagram assessment",
  "Recovery compatibility assessment",
  "Privacy controls",
  "Photo verification",
  "Profile preview",
];

export default function OnboardingPage() {
  return (
    <main className="section">
      <div className="eyebrow">Onboarding</div>
      <h2>Build a profile around what actually matters.</h2>
      <p className="sectionIntro">
        This first scaffold shows the onboarding flow that will become the interactive
        account setup experience.
      </p>

      <div className="grid">
        {steps.map((step, index) => (
          <article className="feature" key={step}>
            <div className="eyebrow">Step {index + 1}</div>
            <h3>{step}</h3>
          </article>
        ))}
      </div>
    </main>
  );
}
