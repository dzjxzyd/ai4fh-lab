/* AI4FH Lab — Shared chrome components */

const { useState, useEffect, useRef } = React;

function TopBar({ active, onNavigate }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); onNavigate("home"); setOpen(false); }}>
          <span className="brand-mark">AI4FH<span className="dot">.</span></span>
          <span className="brand-sub">Lab · UCD</span>
        </a>
        <nav className={`nav ${open ? "open" : ""}`}>
          {window.NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`nav-item ${active === n.id ? "active" : ""}`}
              onClick={(e) => { e.preventDefault(); onNavigate(n.id); setOpen(false); }}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button className="nav-mobile-toggle" onClick={() => setOpen((v) => !v)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand-mark" style={{ fontSize: 22, marginBottom: 10 }}>
              AI4FH<span className="dot" style={{ color: "var(--accent)" }}>.</span>
            </div>
            <div className="muted" style={{ maxWidth: 360, lineHeight: 1.6 }}>
              Artificial Intelligence for Food & Health Lab.<br />
              School of Biosystems & Food Engineering,<br />
              University College Dublin, Ireland.
            </div>
          </div>
          <div>
            <h5>Lab</h5>
            <ul>
              {window.NAV.slice(1, 5).map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} onClick={(e) => { e.preventDefault(); onNavigate(n.id); }} className="link">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Engage</h5>
            <ul>
              <li><a href="#join" onClick={(e) => { e.preventDefault(); onNavigate("join"); }} className="link">Open positions</a></li>
              <li><a href="#collab" onClick={(e) => { e.preventDefault(); onNavigate("collab"); }} className="link">Collaborate</a></li>
              <li><a href={`mailto:${window.LAB.email}`} className="link">Email us</a></li>
            </ul>
          </div>
          <div>
            <h5>Elsewhere</h5>
            <ul>
              <li><a href={window.PI.links[0].url} className="link">Google Scholar</a></li>
              <li><a href={window.PI.links[2].url} className="link">GitHub</a></li>
              <li><a href={window.PI.links[1].url} className="link">ORCID</a></li>
              <li><a href={window.PI.links[3].url} className="link">UCD profile</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025–2026 AI4FH Lab · UCD</span>
          <span style={{ fontFamily: "var(--font-mono)" }}>Dublin · 53.31°N, 6.22°W</span>
        </div>
      </div>
    </footer>
  );
}

/* Avatar with graceful image fallback to initials */
function Avatar({ src, initials, size = 96 }) {
  const [failed, setFailed] = useState(false);
  const showImg = src && !failed;
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 8,
        overflow: "hidden",
        background: "var(--paper-3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        border: "1px solid var(--rule-soft)",
      }}
    >
      {showImg ? (
        <img
          src={src}
          alt=""
          onError={() => setFailed(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: size * 0.42,
            color: "var(--ink-3)",
            letterSpacing: "-0.02em",
          }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}

/* Section header — used across pages */
function SectionHeader({ eyebrow, title, lead, align = "left" }) {
  return (
    <div style={{ textAlign: align, marginBottom: 36, maxWidth: align === "center" ? 720 : 720, marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>
      {eyebrow && <div className="eyebrow" style={{ marginBottom: 14 }}>{eyebrow}</div>}
      <h2 className="display" style={{ fontSize: "clamp(34px, 5vw, 56px)", marginBottom: lead ? 18 : 0 }}>{title}</h2>
      {lead && <p style={{ fontSize: 18, color: "var(--ink-2)", lineHeight: 1.55, textWrap: "pretty" }}>{lead}</p>}
    </div>
  );
}

function HUD() {
  const [t, setT] = useState(() => new Date());
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => setT(new Date()), 1000);
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setScroll(max > 0 ? h.scrollTop / max * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      clearInterval(tick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const pad = (n) => String(n).padStart(2, "0");
  const timestamp = `${t.getUTCFullYear()}.${pad(t.getUTCMonth() + 1)}.${pad(t.getUTCDate())} ${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())} UTC`;

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          width: `${scroll}%`,
          zIndex: 60,
          background: "var(--accent)",
          boxShadow: "0 0 12px var(--accent), 0 0 24px var(--accent-glow)",
          transition: "width 0.08s linear",
          pointerEvents: "none",
        }}
      />
      <div
        className="hud-clock"
        style={{
          position: "fixed",
          bottom: 16,
          right: 18,
          zIndex: 60,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--accent)",
          letterSpacing: "0.08em",
          textShadow: "0 0 8px var(--accent-glow)",
          padding: "6px 10px",
          border: "1px solid color-mix(in oklch, var(--accent) 40%, transparent)",
          background: "color-mix(in oklch, var(--paper) 60%, transparent)",
          backdropFilter: "blur(8px)",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span className="live-dot" style={{ marginRight: 0 }} />
        <span>SYS · {timestamp}</span>
      </div>
    </>
  );
}

Object.assign(window, { TopBar, Footer, Avatar, SectionHeader, HUD });
