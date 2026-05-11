/* AI4FH Lab — Page: Home */

const PILLAR_ICONS = {
  "01":
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6" /><path d="M10 3v6.5L5.5 18a2 2 0 0 0 1.7 3h9.6a2 2 0 0 0 1.7-3L14 9.5V3" /><path d="M7.5 14h9" />
    </svg>,

  "02":
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </svg>,

  "03":
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 2v2" /><path d="M15 2v2" /><path d="M9 20v2" /><path d="M15 20v2" /><path d="M2 9h2" /><path d="M2 15h2" /><path d="M20 9h2" /><path d="M20 15h2" />
    </svg>,

  "04":
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /><circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>,

  "05":
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>

};

function PageHome({ onNavigate }) {
  return (
    <div className="page">
      {/* HERO */}
      <section style={{ position: "relative", paddingTop: 96, paddingBottom: 96, overflow: "hidden" }}>
        <div className="hero-bg" aria-hidden></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }} className="hero-grid">
            <div>
              <h1 className="display" style={{ fontSize: "clamp(56px, 9vw, 132px)", letterSpacing: "-0.025em" }}>
                AI for <span style={{ fontStyle: "italic", color: "var(--accent-deep)" }}>food</span><br />
                and <span style={{ fontStyle: "italic" }}>health</span>.
              </h1>
              <p style={{ fontSize: 19, color: "var(--ink-2)", maxWidth: 560, marginTop: 28, textWrap: "pretty", lineHeight: 1.55 }}>We work on bioactive compound discovery, smart biomanufacturing, and large language models — releasing open-source code and public webservers, alongside wet-lab collaborations.

              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
                <button className="btn btn-primary" onClick={() => onNavigate("research")}>Read our research</button>
                <button className="btn btn-ghost" onClick={() => onNavigate("join")}>Join the lab →</button>
              </div>
            </div>
            <div>
              <div className="mono" style={{ marginBottom: 16, color: "var(--ink-3)", fontSize: 15 }}>// LAB INDEX</div>
              <div style={{ display: "grid", gap: 0 }}>
                <Stat k="Open-source models &amp; servers" v="7+" />
                <Stat k="Predictive models published" v="20+" />
                <Stat k="Established" v={window.LAB.founded} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH PILLARS PREVIEW */}
      <section className="page-section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 56 }} className="split-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Research</div>
              <h2 className="display" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
                Research directions
              </h2>
              <p style={{ marginTop: 16, color: "var(--ink-3)", lineHeight: 1.6, maxWidth: 380 }}>
                Five active threads at the AI–food–health interface.
              </p>
              <button
                className="btn btn-ghost"
                style={{ marginTop: 28 }}
                onClick={() => onNavigate("research")}>
                
                See all research →
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {window.PILLARS.map((p, i) => {
                const isImpact = i === window.PILLARS.length - 1;
                return (
                  <div
                    key={p.n}
                    className="cell"
                    style={{
                      gridColumn: isImpact ? "1 / -1" : "auto",
                      background: isImpact ? "var(--paper-3)" : undefined,
                      borderColor: isImpact ? "var(--rule)" : undefined,
                      paddingTop: 28
                    }}>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
                      <div style={{ color: "var(--ink-2)", display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40 }}>
                        {PILLAR_ICONS[p.n]}
                      </div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-4)", letterSpacing: "0.08em" }}>{p.n}</div>
                    </div>
                    <div style={{ fontSize: 24, fontFamily: "var(--font-display)", marginBottom: 12, letterSpacing: "-0.005em", lineHeight: 1.15 }}>{p.title}</div>
                    <div style={{ color: "var(--ink-2)", lineHeight: 1.6, fontSize: 14, maxWidth: isImpact ? 640 : "none" }}>{p.body}</div>
                  </div>);

              })}
            </div>
          </div>
        </div>
      </section>

      <hr className="hr" />

      {/* SELECTED PROJECTS */}
      <section className="page-section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 36, gap: 24, flexWrap: "wrap" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Open source</div>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}>Models &amp; webservers from the lab</h2>
            </div>
            <a className="link" href="https://github.com/dzjxzyd">github.com/dzjxzyd ↗</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {window.PROJECTS.map((p, i) =>
            <a key={p.name} href={p.href} target="_blank" rel="noopener" className="cell" style={{ display: "block", textDecoration: "none" }}>
                <div className="cell-tag">{String(i + 1).padStart(2, "0")} / OS</div>
                <div className="cell-num">↗</div>
                <div style={{ marginTop: 56, display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                  <div style={{ fontSize: 24, fontFamily: "var(--font-display)" }}>{p.name}</div>
                </div>
                <div className="mono" style={{ marginBottom: 12, color: "var(--accent-deep)", display: "flex", alignItems: "center", gap: 10 }}>
                  <span>{p.kind}</span>
                  {p.webserver && (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "2px 8px", borderRadius: 999, background: "var(--accent-soft)", color: "var(--accent-deep)", fontSize: 10, letterSpacing: "0.06em" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent-deep)" }}></span>
                      WEBSERVER
                    </span>
                  )}
                </div>
                <div style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55 }}>{p.body}</div>
              </a>
            )}
          </div>
        </div>
      </section>

      <hr className="hr" />

      {/* RECENT NEWS */}
      <section className="page-section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 56 }} className="split-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>News</div>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}>News</h2>
              <button className="btn btn-ghost" style={{ marginTop: 24 }} onClick={() => onNavigate("news")}>All updates →</button>
            </div>
            <div>
              {window.NEWS.slice(0, 4).map((n, i) =>
              <div key={i} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 24, padding: "20px 0", borderTop: i === 0 ? "none" : "1px solid var(--rule-soft)" }}>
                  <div className="mono" style={{ paddingTop: 4 }}>{n.date}</div>
                  <div style={{ color: "var(--ink-2)", lineHeight: 1.55 }}>{n.body}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <hr className="hr" />

      {/* CTA */}
      <section className="page-section">
        <div className="container">
          <div style={{
            background: "var(--paper-2)",
            border: "1px solid var(--rule-soft)",
            borderRadius: 16,
            padding: "56px clamp(28px, 5vw, 72px)",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 40,
            alignItems: "center",
            position: "relative",
            overflow: "hidden"
          }} className="cta-card">
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="live-dot" style={{ display: "inline-block", verticalAlign: "middle", marginRight: 8 }}></span>Open positions</div>
              <h3 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 44px)", marginBottom: 14 }}>
                Open positions
              </h3>
              <p style={{ color: "var(--ink-2)", fontSize: 16, lineHeight: 1.6 }}>
                Recruiting MSc / PhD students and postdocs. Backgrounds in ML, food chemistry, microbiology, computational chemistry, biochemistry, bioinformatics, or synthetic biology are all welcome.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start", position: "relative", zIndex: 1 }}>
              <button className="btn btn-primary" onClick={() => onNavigate("join")}>See open positions</button>
              <a className="link" style={{ marginTop: 4 }} href={`mailto:${window.LAB.email}`}>{window.LAB.email}</a>
            </div>
          </div>
        </div>
      </section>
    </div>);

}

function Stat({ k, v }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      padding: "18px 0",
      borderTop: "1px solid var(--rule-soft)",
      gap: 16
    }}>
      <span className="mono" style={{ textTransform: "none", letterSpacing: "0.02em", fontSize: 17, lineHeight: 1.35 }} dangerouslySetInnerHTML={{ __html: k }} />
      <span className="display" style={{ fontSize: 34, color: "var(--ink)" }}>{v}</span>
    </div>);

}

Object.assign(window, { PageHome });
