import { Heart, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="shell">
      <nav className="nav">
        <div className="brand">Recovery in Love</div>
        <div className="navLinks">
          <a href="#how-it-works">How it works</a>
          <a href="#safety">Safety</a>
          <a href="#compatibility">Compatibility</a>
          <a className="primaryButton" href="/auth">Join</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <div className="eyebrow">Recovery · Relationships · Self-awareness · Safety</div>
          <h1>Find love that supports where you’re going.</h1>
          <p>
            A dating experience built for adults who value recovery, emotional
            self-awareness, honest boundaries, and relationships that fit their lives.
          </p>
          <div className="actions">
            <a className="primaryButton" href="/auth">Create your profile</a>
            <a className="secondaryButton" href="#how-it-works">See how matching works</a>
          </div>
        </div>

        <div className="phoneCard" aria-label="Example match card">
          <div className="profileCard">
            <div className="profilePhoto">
              <div>
                <h2>Jordan, 31</h2>
                <div>Norfolk, VA · Long-term relationship</div>
              </div>
            </div>
            <div className="profileDetails">
              <div className="pills">
                <span className="pill">3 years in recovery</span>
                <span className="pill">Sober household</span>
                <span className="pill">Secure attachment</span>
                <span className="pill">Hiking</span>
              </div>
              <div className="matchReason">
                <strong>Why you may connect</strong>
                <br />
                You both want a long-term relationship, prefer a substance-free
                household, and value open communication.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <h2>More than swiping.</h2>
        <p className="sectionIntro">
          Profiles combine normal dating preferences with recovery boundaries,
          relationship goals, lifestyle, and optional assessment results. You control
          what is visible and what is used for matching.
        </p>

        <div className="grid">
          <article className="feature">
            <Heart size={24} />
            <h3>Recovery alignment</h3>
            <p>
              Match around sobriety preferences, substance-use boundaries, recovery
              philosophy, and the kind of support you want from a partner.
            </p>
          </article>
          <article className="feature">
            <Sparkles size={24} />
            <h3>Self-awareness</h3>
            <p>
              Attachment and personality assessments can add context without being
              treated as diagnoses or promises of relationship success.
            </p>
          </article>
          <article className="feature">
            <LockKeyhole size={24} />
            <h3>Privacy first</h3>
            <p>
              Sensitive recovery and mental-health information has its own visibility
              controls instead of being exposed automatically on your public profile.
            </p>
          </article>
          <article className="feature">
            <ShieldCheck size={24} />
            <h3>Built-in safety</h3>
            <p>
              Reporting, blocking, relationship-status concerns, and evidence review
              are designed as private Trust & Safety workflows.
            </p>
          </article>
        </div>
      </section>

      <section id="compatibility" className="section">
        <div className="notice">
          <h2>Compatibility should be explainable.</h2>
          <p>
            Instead of claiming a clinical “94% psychological match,” Recovery in Love
            explains the concrete reasons someone is being recommended: shared
            relationship goals, aligned recovery boundaries, lifestyle fit, interests,
            distance, and communication preferences.
          </p>
        </div>
      </section>

      <section id="safety" className="section">
        <h2>Safety without public shaming.</h2>
        <p className="sectionIntro">
          Relationship concerns and supporting evidence are submitted privately to
          moderation. Users can also mutually verify a relationship. The platform is
          designed to avoid public accusation boards, ownership-style “claiming,” and
          unrestricted reviews of identifiable people.
        </p>
      </section>

      <footer className="footer">
        Recovery in Love · Adults 18+ · Assessments are for self-awareness and
        compatibility support, not medical or psychiatric diagnosis.
      </footer>
    </main>
  );
}
