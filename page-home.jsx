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

  "06":
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>,

  "05":
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="12" cy="18" r="3" /><path d="M9 6h6M7.5 8.6l3 6.8M16.5 8.6l-3 6.8" />
    </svg>

};

function useCountUp(target, duration = 1400) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const start = performance.now();
    let frame;
    const tick = (time) => {
      const progress = Math.min(1, (time - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return value;
}

// Remember completed phrases across in-app navigation; a fresh page load plays once.
const typedHeroPhrases = new Set();
function Typewriter({ text, delay = 350, speed = 85 }) {
  const [count, setCount] = React.useState(() =>
    typedHeroPhrases.has(text) || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? text.length : 0);
  React.useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer;
    let current = 0;
    const finish = () => {
      clearTimeout(timer);
      typedHeroPhrases.add(text);
      setCount(text.length);
    };
    const tick = () => {
      current += 1;
      setCount(current);
      if (current < text.length) timer = setTimeout(tick, speed);
      else typedHeroPhrases.add(text);
    };
    if (motion.matches || typedHeroPhrases.has(text)) finish();
    else { setCount(0); timer = setTimeout(tick, delay); }
    const onMotion = () => { if (motion.matches) finish(); };
    motion.addEventListener("change", onMotion);
    return () => { clearTimeout(timer); motion.removeEventListener("change", onMotion); };
  }, [text, delay, speed]);
  return (
    <span className="hero-typewriter" aria-label={text}>
      <span aria-hidden="true">
        {Array.from(text).map((letter, i) => (
          <span key={i} className={`typed-character ${i < count ? "is-visible" : ""}`}>
            {letter}{i === Math.max(0, count - 1) && <span className="typing-cursor" />}
          </span>
        ))}
      </span>
    </span>
  );
}

function PageHome({ onNavigate, t }) {
  return (
    <div className="page">
      {/* HERO */}
      <section className="home-hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-content">
          <div className="eyebrow hero-eyebrow">AI4FH LAB · UCD</div>
          <h1 className="display hero-title">
            {t("home.heroTitleA")} <Typewriter key={t("home.heroPhrase")} text={t("home.heroPhrase")} />
          </h1>
          <div className="hero-body">
            <div className="hero-copy">
              <p className="hero-lead">{t("home.heroLead")}</p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => onNavigate("research")}>{t("home.readResearch")}</button>
                <button className="btn btn-ghost" onClick={() => onNavigate("join")}>{t("home.joinLab")}</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="logo-field" aria-hidden="true">
                <svg className="logo-network" viewBox="0 0 480 240" fill="none">
                  <path d="M18 170L72 60L180 30L310 42L436 80L462 184L354 214L184 208L18 170M72 60L184 208M310 42L354 214" />
                  {[[18,170],[72,60],[180,30],[310,42],[436,80],[462,184],[354,214],[184,208]].map(([cx,cy],i) =>
                    <circle key={i} cx={cx} cy={cy} r="2.5" style={{animationDelay: `${i * 0.35}s`}} />)}
                </svg>
              </div>
              <img className="hero-logo" src="images/logos/AI4FH_white_transparent.svg" width="1949" height="498" alt="AI4FH" />
            </div>
          </div>
          <div className="hero-metrics">
            <div className="mono hero-status"><span className="live-dot" />{t("home.labIndex")}</div>
            <div className="hero-stat"><strong>7+</strong><span dangerouslySetInnerHTML={{ __html: t("home.statModels") }} /></div>
            <div className="hero-stat"><strong>20+</strong><span dangerouslySetInnerHTML={{ __html: t("home.statPublished") }} /></div>
            <div className="hero-stat"><strong>{window.LAB.founded}</strong><span>{t("home.statEstablished")}</span></div>
          </div>
        </div>
      </section>

      {/* RESEARCH PILLARS PREVIEW */}
      <section className="page-section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 56 }} className="split-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>{t("home.research")}</div>
              <h2 className="display" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
                {t("home.researchDirections")}
              </h2>
              <p style={{ marginTop: 16, color: "var(--ink-3)", lineHeight: 1.6, maxWidth: 380 }}>
                {t("home.researchLead")}
              </p>
              <button
                className="btn btn-ghost"
                style={{ marginTop: 28 }}
                onClick={() => onNavigate("research")}>
                
                {t("home.seeAllResearch")}
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {window.PILLARS.map((p, i) => {
                const isImpact = p.n === "06";
                return (
                  <div
                    key={p.n}
                    className="cell"
                    style={{
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
                    <div style={{ fontSize: 24, fontFamily: "var(--font-display)", marginBottom: 12, letterSpacing: "-0.005em", lineHeight: 1.15 }}>{t(`pillars.${i}.title`)}</div>
                    <div style={{ color: "var(--ink-2)", lineHeight: 1.6, fontSize: 14, maxWidth: isImpact ? 640 : "none" }}>{t(`pillars.${i}.body`)}</div>
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
              <div className="eyebrow" style={{ marginBottom: 12 }}>{t("home.openSource")}</div>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}>{t("home.modelsTitle")}</h2>
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
                      {t("home.webserver")}
                    </span>
                  )}
                </div>
                <div style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55 }}>{t(`projects.${i}`)}</div>
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
              <div className="eyebrow" style={{ marginBottom: 12 }}>{t("home.news")}</div>
              <h2 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 44px)" }}>{t("home.news")}</h2>
              <button className="btn btn-ghost" style={{ marginTop: 24 }} onClick={() => onNavigate("news")}>{t("home.allUpdates")}</button>
            </div>
            <div>
              {window.NEWS.slice(0, 4).map((n, i) =>
              <div key={i} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 24, padding: "20px 0", borderTop: i === 0 ? "none" : "1px solid var(--rule-soft)" }}>
                  <div className="mono" style={{ paddingTop: 4 }}>{n.date}</div>
                  <div style={{ color: "var(--ink-2)", lineHeight: 1.55 }}>{t(`newsItems.${i}`)}</div>
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
              <div className="eyebrow" style={{ marginBottom: 14 }}><span className="live-dot" style={{ display: "inline-block", verticalAlign: "middle", marginRight: 8 }}></span>{t("home.ctaEyebrow")}</div>
              <h3 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 44px)", marginBottom: 14 }}>
                {t("home.ctaTitle")}
              </h3>
              <p style={{ color: "var(--ink-2)", fontSize: 16, lineHeight: 1.6 }}>
                {t("home.ctaLead")}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start", position: "relative", zIndex: 1 }}>
              <button className="btn btn-primary" onClick={() => onNavigate("join")}>{t("home.seeOpenPositions")}</button>
              <a className="link" style={{ marginTop: 4 }} href={`mailto:${window.LAB.email}`}>{window.LAB.email}</a>
            </div>
          </div>
        </div>
      </section>
    </div>);

}

function Stat({ k, v }) {
  const match = String(v).match(/^(\d+)(.*)$/);
  const number = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const count = useCountUp(number || 0, 1400);

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      padding: "18px 0",
      borderTop: "1px solid var(--rule-soft)",
      gap: 16
    }}>
      <span className="mono" style={{ textTransform: "none", letterSpacing: "0.02em", fontSize: 17, lineHeight: 1.35, color: "var(--ink-2)" }} dangerouslySetInnerHTML={{ __html: k }} />
      <span className="display" style={{ fontSize: 34, color: "var(--accent)", textShadow: "0 0 16px var(--accent-glow)" }}>
        {number !== null ? `${count}${suffix}` : v}
      </span>
    </div>);

}

Object.assign(window, { PageHome });
