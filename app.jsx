/* AI4FH Lab — App shell with router + tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "accentHue": 150,
  "fontPair": "space-inter",
  "density": "comfortable"
}/*EDITMODE-END*/;

const FONT_PAIRS = {
  "space-inter": {
    display: '"Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif',
    body: '"Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif',
    label: "Space Grotesk × Inter Tight",
  },
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = React.useState(() => {
    const h = window.location.hash.replace("#", "");
    return window.NAV.find((n) => n.id === h) ? h : "home";
  });

  React.useEffect(() => {
    const onMove = (e) => {
      document.body.style.setProperty("--mx", `${e.clientX}px`);
      document.body.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  // Apply theme + accent + font tweaks
  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", tweaks.theme);
    root.style.setProperty("--accent-h", tweaks.accentHue);
    const pair = FONT_PAIRS[tweaks.fontPair] || FONT_PAIRS["space-inter"];
    root.style.setProperty("--font-display", pair.display);
    root.style.setProperty("--font-body", pair.body);
    document.body.style.setProperty("--gutter", tweaks.density === "compact" ? "clamp(16px, 3vw, 36px)" : "clamp(20px, 4vw, 56px)");
  }, [tweaks]);

  const navigate = (id) => {
    setActive(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#", "");
      if (window.NAV.find((n) => n.id === h)) setActive(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const Page = {
    home: window.PageHome,
    research: window.PageResearch,
    people: window.PagePeople,
    publications: window.PagePublications,
    news: window.PageNews,
    join: window.PageJoin,
    collab: window.PageCollab,
  }[active] || window.PageHome;

  return (
    <>
      <TopBar active={active} onNavigate={navigate} />
      <HUD />
      <main key={active}>
        <Page onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Theme">
          <TweakRadio
            label="Mode"
            value={tweaks.theme}
            onChange={(v) => setTweak("theme", v)}
            options={[{ value: "light", label: "Light" }, { value: "dark", label: "Dark" }]}
          />
        </TweakSection>
        <TweakSection title="Accent">
          <TweakSlider
            label="Hue"
            value={tweaks.accentHue}
            onChange={(v) => setTweak("accentHue", v)}
            min={0} max={360} step={1}
            unit="°"
          />
          <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
            {[150, 145, 70, 200, 260, 330, 30].map((h) => (
              <button
                key={h}
                onClick={() => setTweak("accentHue", h)}
                style={{
                  width: 26, height: 26,
                  borderRadius: "50%",
                  background: `oklch(0.55 0.06 ${h})`,
                  border: tweaks.accentHue === h ? "2px solid var(--ink)" : "1px solid var(--rule)",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </TweakSection>
        <TweakSection title="Typography">
          <TweakSelect
            label="Pairing"
            value={tweaks.fontPair}
            onChange={(v) => setTweak("fontPair", v)}
            options={Object.entries(FONT_PAIRS).map(([k, v]) => ({ value: k, label: v.label }))}
          />
        </TweakSection>
        <TweakSection title="Layout">
          <TweakRadio
            label="Density"
            value={tweaks.density}
            onChange={(v) => setTweak("density", v)}
            options={[{ value: "comfortable", label: "Comfortable" }, { value: "compact", label: "Compact" }]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
