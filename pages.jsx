/* AI4FH Lab — Pages: Research, People, Publications, News, Join, Collab */

function PageResearch({ onNavigate }) {
  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Research"
            title="Research"
            lead="Five threads — bioactive discovery, smart biomanufacturing, foundation models, broader AI for science, and agri-valorization for downstream impact."
          />

          <div style={{ display: "grid", gap: 1, background: "var(--rule-soft)", border: "1px solid var(--rule-soft)", borderRadius: 12, overflow: "hidden", marginTop: 24 }}>
            {window.PILLARS.map((p) => (
              <div key={p.n} style={{ background: "var(--paper)", padding: "36px 32px", display: "grid", gridTemplateColumns: "80px 1fr 200px", gap: 24, alignItems: "start" }} className="pillar-row">
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)", paddingTop: 6 }}>{p.n}</div>
                <div>
                  <div style={{ fontSize: 24, fontFamily: "var(--font-display)", letterSpacing: "-0.005em", marginBottom: 10 }}>{p.title}</div>
                  <div style={{ color: "var(--ink-2)", lineHeight: 1.6, maxWidth: 640 }}>{p.body}</div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "flex-end" }}>
                  {p.tags.map((t) => (
                    <span key={t} className="pill" style={{ fontSize: 11 }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="hr" />

      <section className="page-section">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Open source</div>
          <h2 className="display" style={{ fontSize: "clamp(28px, 3.6vw, 40px)", marginBottom: 36 }}>Models, benchmarks, and webservers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
            {window.PROJECTS.map((p) => (
              <a key={p.name} href={p.href} className="card" style={{ display: "block" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.04em", textTransform: "uppercase" }}>{p.kind}</div>
                  <span style={{ color: "var(--ink-3)" }}>↗</span>
                </div>
                <div style={{ fontSize: 22, fontFamily: "var(--font-display)", marginBottom: 10 }}>{p.name}</div>
                <div style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.6 }}>{p.body}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PagePeople() {
  const pi = window.PEOPLE.find((p) => p.pi);
  const others = window.PEOPLE.filter((p) => !p.pi);
  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="People" title="People" lead="The lab is led by Zhenjiao Du, with members from food engineering, pharmacy, and machine learning backgrounds." />

          {/* PI block */}
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, marginTop: 24, marginBottom: 56, paddingBottom: 56, borderBottom: "1px solid var(--rule-soft)" }} className="pi-grid">
            <Avatar src={pi.photo} initials={pi.initials} size={200} />
            <div>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Principal Investigator</div>
              <h3 className="display" style={{ fontSize: 36, marginBottom: 6 }}>{window.PI.name}</h3>
              <div style={{ color: "var(--ink-2)", marginBottom: 18 }}>{window.PI.title} · {window.PI.affiliation}</div>
              <div style={{ marginTop: 4, marginBottom: 18, display: "grid", gap: 6 }}>
                {window.PI.bio.map((line, i) => (
                  <div key={i} style={{ color: "var(--ink-2)", lineHeight: 1.55, fontSize: 15 }}>{line}</div>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 18, marginTop: 18 }}>
                {window.PI.links.map((l) => (
                  <a key={l.label} className="link" href={l.url}>{l.label} ↗</a>
                ))}
                <a className="link" href={`mailto:${window.PI.email}`}>{window.PI.email}</a>
              </div>
            </div>
          </div>

          <div className="eyebrow" style={{ marginBottom: 20 }}>Group members</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "var(--rule-soft)", border: "1px solid var(--rule-soft)", borderRadius: 12, overflow: "hidden" }}>
            {others.map((p) => (
              <div key={p.name} style={{ background: "var(--paper)", padding: 28, display: "flex", gap: 20, alignItems: "flex-start" }}>
                <Avatar src={p.photo} initials={p.initials} size={88} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 13, color: "var(--accent-deep)", marginBottom: 8 }}>{p.role}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)", lineHeight: 1.5 }}>{p.note}</div>
                  {p.extra && <div style={{ fontSize: 12, color: "var(--ink-3)", lineHeight: 1.5, marginTop: 4 }}>{p.extra}</div>}
                </div>
              </div>
            ))}
          </div>

          {/* Lab partner for life */}
          <div style={{ marginTop: 64 }}>
            <div className="eyebrow" style={{ marginBottom: 20, color: "var(--accent-deep)" }}>
              Lab partner for life <span style={{ color: "#c0504f" }}>♥</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 40, padding: 36, border: "1px solid var(--rule-soft)", borderRadius: 14, background: "var(--paper-2)", alignItems: "start" }} className="pi-grid">
              <Avatar src="images/yuandi.png" initials="YZ" size={240} />
              <div>
                <h3 className="display" style={{ fontSize: 32, marginBottom: 6 }}>Dr. Yuandi Zhang</h3>
                <div style={{ color: "var(--accent-deep)", marginBottom: 18, fontSize: 14 }}>Lab Co-founder (unofficial, but undisputed) · Chief Happiness Officer & Moral Compass</div>
                <dl style={{ display: "grid", gridTemplateColumns: "150px 1fr", rowGap: 10, columnGap: 16, fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)", margin: 0 }}>
                  <dt style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", paddingTop: 2 }}>Joined</dt>
                  <dd style={{ margin: 0 }}>Since forever <span aria-hidden>💍</span></dd>

                  <dt style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", paddingTop: 2 }}>Fun fact</dt>
                  <dd style={{ margin: 0 }}>She's been in the lab longer than the lab has existed.</dd>

                  <dt style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", paddingTop: 2 }}>Interests</dt>
                  <dd style={{ margin: 0 }}>Maintaining work–life balance, bakery, and travel</dd>

                  <dt style={{ color: "var(--ink-3)", fontFamily: "var(--font-mono)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", paddingTop: 2 }}>Email</dt>
                  <dd style={{ margin: 0 }}><a className="link" href="mailto:ask_zhenjiao@ucd.ie">ask_zhenjiao@ucd.ie</a></dd>
                </dl>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 56, padding: 32, border: "1px dashed var(--rule)", borderRadius: 12, color: "var(--ink-3)", fontSize: 14 }}>
            <strong style={{ color: "var(--ink-2)" }}>Alumni —</strong> coming soon. The lab was founded in {window.LAB.founded}; alumni profiles will appear here as members move on to next chapters.
          </div>
        </div>
      </section>
    </div>
  );
}

function PagePublications() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", ...new Set(window.PUBLICATIONS.flatMap((p) => p.tags))];
  const filtered = filter === "All" ? window.PUBLICATIONS : window.PUBLICATIONS.filter((p) => p.tags.includes(filter));
  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Publications"
            title="Publications"
            lead="Selected recent work. Full list on Google Scholar."
          />
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className="pill"
                style={{
                  borderColor: filter === t ? "var(--ink)" : "var(--rule)",
                  background: filter === t ? "var(--ink)" : "transparent",
                  color: filter === t ? "var(--paper)" : "var(--ink-2)",
                  cursor: "pointer",
                }}
              >
                {t}
              </button>
            ))}
            <a href={window.PI.links[0].url} className="link" style={{ marginLeft: "auto", alignSelf: "center", fontSize: 13 }}>
              View on Google Scholar ↗
            </a>
          </div>
          <div>
            {filtered.map((p, i) => (
              <a key={i} href={p.href} style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", gap: 32, padding: "28px 0", borderTop: "1px solid var(--rule-soft)", textDecoration: "none" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--paper-2)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                className="pub-row"
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)", paddingTop: 6 }}>{p.year}</div>
                <div>
                  <div style={{ fontSize: 18, lineHeight: 1.4, marginBottom: 6, letterSpacing: "-0.005em" }}>{p.title}</div>
                  <div style={{ fontSize: 14, color: "var(--ink-3)" }}>{p.authors} · <em>{p.venue}</em></div>
                </div>
                <div style={{ display: "flex", gap: 6, alignSelf: "start" }}>
                  {p.tags.map((t) => <span key={t} className="pill" style={{ fontSize: 11 }}>{t}</span>)}
                </div>
              </a>
            ))}
            <div style={{ borderTop: "1px solid var(--rule-soft)" }} />
          </div>
        </div>
      </section>
    </div>
  );
}

function PageNews() {
  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <SectionHeader eyebrow="News" title="News" lead="Updates from the lab." />
          <div style={{ maxWidth: 820 }}>
            {window.NEWS.map((n, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 32, padding: "28px 0", borderTop: i === 0 ? "1px solid var(--rule)" : "1px solid var(--rule-soft)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--ink-3)" }}>{n.date}</div>
                <div style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.6 }}>{n.body}</div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--rule-soft)" }} />
          </div>

          <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="news-images">
            <div className="placeholder-img" style={{ aspectRatio: "4 / 3" }}>
              <img src="images/first.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 6 }} onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>The first day</div>
              <h3 className="display" style={{ fontSize: 32, marginBottom: 14 }}>June 2025 — AI4FH is established at UCD.</h3>
              <p style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>
                The lab opened its doors in summer 2025 within the School of Biosystems & Food Engineering. We are now recruiting students and collaborators across the AI–food–health interface.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PageJoin() {
  const roles = [
    {
      title: "MSc & PhD Students",
      detail: "Fully-funded positions in AI4Science with a focus on bioactive peptides, fermentation, or microbial language models. Strong programming or wet-lab background welcome — we will help you bridge. Happy to support scholarship applications including the Government of Ireland Postgraduate Scholarship Programme and equivalent national / international schemes.",
      cta: "3 year or 4-year programme",
    },
    {
      title: "Postdoctoral Scientists",
      detail: "Supporting fellowship applications welcome (MSCA, Wellcome, Research Ireland, etc.). Ideal candidates blend AI methods with a domain — biochemistry, microbiology, food chemistry, or synthetic biology.",
      cta: "Rolling intake",
    },
  ];

  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Open positions"
            title="Open positions"
            lead="Recruiting at all levels. Backgrounds in ML, food chemistry, microbiology, computational chemistry, biochemistry, bioinformatics, or synthetic biology are all welcome."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16, marginTop: 24 }}>
            {roles.map((r) => (
              <div key={r.title} className="card">
                <div style={{ fontSize: 22, fontFamily: "var(--font-display)", marginBottom: 14 }}>{r.title}</div>
                <div style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{r.detail}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56, padding: "44px 40px", borderRadius: 14, background: "var(--paper-2)", border: "1px solid var(--rule-soft)" }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>How to apply</div>
            <p style={{ color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 24, maxWidth: 720 }}>
              Send a short email with your CV, a link to your GitHub or Scholar profile if you have one, and a sentence or two about which research direction interests you.
            </p>
            <a href={`mailto:${window.LAB.email}?subject=AI4FH%20Application`} className="btn btn-primary">{window.LAB.email}</a>
          </div>
        </div>
      </section>
    </div>
  );
}

function PageCollab() {
  const areas = [
    { title: "Industry R&D", body: "Bilateral and consortium projects with food, ingredient and bioprocessing companies — co-developing AI tools for ingredient discovery, fermentation optimisation, and side-stream valorisation. We engage through Enterprise Ireland Innovation Partnerships, BiOrbic SFI Bioeconomy Research Centre, Horizon Europe MSCA fellowships (Sustain-FIT) and direct industry contracts, with terms managed through UCD's NovaUCD." },
    { title: "Joint research proposals", body: "Always open to co-developing grant applications with academic partners — UK-Ireland, US-Ireland, EU (Horizon Europe, MSCA), and Irish national schemes (Research Ireland, Enterprise Ireland, EI-SFI co-funded calls). Bringing AI to food, health, microbiology, and bioprocessing. We co-supervise students, share compute and wet-lab pipelines, and partner with groups across Ireland, Europe, North America and Asia." },
    { title: "Custom model development", body: "We help partners build, fine-tune and deploy domain-specific models tailored to their data and pipelines — from quick feasibility studies to multi-year R&D programmes, with options for dedicated support and on-premise deployment, arranged through UCD's ConsultUCD / NovaUCD." },
    { title: "Talks & advisory", body: "Invited talks and short-form advisory work on AI strategy for food, ingredients, nutraceuticals, and bioprocessing companies — formal engagements arranged via ConsultUCD, in line with UCD's external activity policy." },
  ];

  return (
    <div className="page">
      <section className="page-section">
        <div className="container">
          <SectionHeader
            eyebrow="Collaboration"
            title="Collaboration"
            lead="We partner with companies and academic groups across food chemistry, fermentation, synthetic biology, nutrition, and microbiology — with extensions into nutraceuticals, cosmetics, and pharmaceuticals."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16, marginTop: 24 }}>
            {areas.map((a) => (
              <div key={a.title} className="card">
                <div style={{ fontSize: 20, fontFamily: "var(--font-display)", marginBottom: 10 }}>{a.title}</div>
                <div style={{ color: "var(--ink-2)", lineHeight: 1.6 }}>{a.body}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40, alignItems: "center" }} className="cta-card">
            <div>
              <h3 className="display" style={{ fontSize: 32, marginBottom: 14 }}>Have a problem at the AI / food / health interface?</h3>
              <p style={{ color: "var(--ink-2)", lineHeight: 1.6, maxWidth: 600 }}>
                We are happiest in early-stage conversations — long before a contract — to figure out whether what you need is a model, a benchmark, a fermentation experiment, or none of the above.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
              <a className="btn btn-primary" href={`mailto:${window.LAB.email}?subject=Collaboration`}>Start a conversation</a>
              <a className="link" href={`mailto:${window.LAB.email}`}>{window.LAB.email}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { PageResearch, PagePeople, PagePublications, PageNews, PageJoin, PageCollab });
