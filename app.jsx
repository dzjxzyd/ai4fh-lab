/* AI4FH Lab — App shell with router + tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accentHue": 145,
  "fontPair": "instrument-inter",
  "density": "comfortable"
}/*EDITMODE-END*/;

const FONT_PAIRS = {
  "instrument-inter": {
    display: '"Instrument Serif", Georgia, serif',
    body: '"Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif',
    label: "Instrument Serif × Inter Tight",
  },
  "fraunces-ibm": {
    display: '"Fraunces", Georgia, serif',
    body: '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, sans-serif',
    label: "Fraunces × IBM Plex Sans",
  },
  "newsreader-geist": {
    display: '"Newsreader", Georgia, serif',
    body: '"Geist", -apple-system, BlinkMacSystemFont, sans-serif',
    label: "Newsreader × Geist",
  },
  "redaction-sohne": {
    display: '"DM Serif Display", Georgia, serif',
    body: '"Manrope", -apple-system, BlinkMacSystemFont, sans-serif',
    label: "DM Serif Display × Manrope",
  },
};

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [active, setActive] = React.useState(() => {
    const h = window.location.hash.replace("#", "");
    return window.NAV.find((n) => n.id === h) ? h : "home";
  });

  // Apply theme + accent + font tweaks
  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", tweaks.theme);
    root.style.setProperty("--accent-h", tweaks.accentHue);
    const pair = FONT_PAIRS[tweaks.fontPair] || FONT_PAIRS["instrument-inter"];
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
            {[145, 30, 70, 200, 260, 330, 15].map((h) => (
              <button
                key={h}
                onClick={() => setTweak("accentHue", h)}
                style={{
                  width: 26, height: 26,
                  borderRadius: "50%",
                  background: `oklch(0.55 0.06 ${h})`,
                  border: tweaks.accentHue === h ? "2px solid #000" : "1px solid rgba(0,0,0,0.15)",
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
