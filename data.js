/* AI4FH Lab — Content data */

window.LAB = {
  name: "AI4FH Lab",
  fullName: "Artificial Intelligence for Food & Health",
  tagline: "We build AI systems that read the language of biology — peptides, proteins, microbes — and turn it into food and health.",
  affiliation: "School of Biosystems & Food Engineering",
  university: "University College Dublin",
  location: "Dublin, Ireland",
  email: "zhenjiao.du@ucd.ie",
  founded: "June 2025",
};

window.PI = {
  name: "Zhenjiao Du, PhD",
  title: "Ad Astra Fellow · Assistant Professor",
  affiliation: "School of Biosystems & Food Engineering, UCD",
  email: "zhenjiao.du@ucd.ie",
  photo: "images/002_square.jpg",
  bio: [
    "Postdoc, Duke University, 2025",
    "Ph.D. Kansas State University (USA), 2024",
    "M.E. China Agricultural University (China), 2020",
    "B.E. Wuhan Polytechnic University (China), 2018",
  ],
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=JSRi5xEAAAAJ&hl=zh-CN&oi=ao" },
    { label: "ORCID", url: "https://orcid.org/0000-0002-8492-4328" },
    { label: "GitHub", url: "https://github.com/dzjxzyd" },
    { label: "UCD Profile", url: "https://people.ucd.ie/zhenjiao.du" },
  ],
};

window.PILLARS = [
  {
    n: "01",
    title: "Bioactive Discovery",
    body: "Leveraging AI to discover and produce bioactive peptides and small molecules from agricultural byproducts.",
    tags: ["Peptides", "pLM"],
  },
  {
    n: "02",
    title: "Smart Biomanufacturing",
    body: "Leveraging AI for rational experimental design in fermentation and biomanufacturing.",
    tags: ["Bayesian opt.", "Bioprocess"],
  },
  {
    n: "03",
    title: "Large language models for AI4Science",
    body: "Building lightweight pre-trained models for proteins, peptides, and microbial communities — small enough to fine-tune and serve.",
    tags: ["LLMs", "ESM"],
  },
  {
    n: "04",
    title: "AI for Science",
    body: "Applying LLMs and deep learning across food chemistry, nutritional science, and biochemistry.",
    tags: ["AI4Science", "LLMs"],
  },
  {
    n: "05",
    title: "Agri-Valorization",
    body: "Converting agricultural waste into high-value functional ingredients through AI-optimized processes.",
    tags: ["Impact", "Circular food"],
  },
];

window.PEOPLE = [
  {
    name: "Dr. Zhenjiao Du",
    role: "Principal Investigator",
    note: "Ad Astra Fellow · Assistant Professor",
    photo: "images/002_square.jpg",
    extra: "PhD, Kansas State · Postdoc, Duke",
    initials: "ZD",
    pi: true,
  },
  {
    name: "Qidong Xue",
    role: "PhD Student",
    note: "Joining 2025 · M.S. Jiangnan University",
    photo: "images/xqd.jpg",
    extra: "B.S. Jiangnan University",
    initials: "QX",
  },
  {
    name: "Dongyang Xu",
    role: "PhD Student",
    note: "Joining 2025 · M.S. South China University of Technology",
    photo: null,
    extra: "B.E. Nanchang University",
    initials: "DX",
  },
  {
    name: "Chuanyu Zhang",
    role: "MSc Student",
    note: "2025 — 2026",
    photo: "images/zcy.jpg",
    extra: "B.E. Dalian University of Technology",
    initials: "CZ",
    alumni: true,
  },
  {
    name: "Muxi Yu",
    role: "MSc Student",
    note: "2025 — 2026",
    photo: null,
    extra: "B.E. Jiangsu Univ. of Science & Technology",
    initials: "MY",
    alumni: true,
  },
  {
    name: "Xiao Wang",
    role: "Volunteer",
    note: "2025 — 2026",
    photo: null,
    extra: "B.S. China Pharmaceutical University",
    initials: "XW",
    alumni: true,
  },
  {
    name: "Zhan Zhang",
    role: "Volunteer",
    note: "2025 — 2026",
    photo: "images/zz.jpg",
    extra: "B.E. Harbin University of Commerce",
    initials: "ZZ",
    alumni: true,
  },
];

window.PROJECTS = [
  {
    name: "PepBERT",
    body: "Lightweight pretrained language model for peptide representation. Small enough to fine-tune on a single GPU; strong on bioactivity benchmarks.",
    href: "https://doi.org/10.1016/j.fufo.2026.100999",
    kind: "Model",
  },
  {
    name: "FusionESP",
    body: "Enzyme–substrate pair prediction by fusing ESM-2 protein embeddings with MoLFormer substrate embeddings through specifically designed projection heads and a contrastive learning architecture.",
    href: "https://doi.org/10.1021/acs.jcim.4c02357",
    kind: "Model",
    webserver: true,
  },
  {
    name: "UniDL4BioPep",
    body: "A universal deep-learning architecture for binary classification across many bioactive peptide tasks, with a public webserver and PyTorch / Keras builds.",
    href: "https://doi.org/10.1093/bib/bbad135",
    kind: "Model",
    webserver: true,
  },
  {
    name: "pLM4ACE",
    body: "Protein language-model-based predictor for screening peptides with high antihypertensive (ACE-inhibitory) activity.",
    href: "https://doi.org/10.1016/j.foodchem.2023.137162",
    kind: "Model",
    webserver: true,
  },
  {
    name: "pLM4Alg",
    body: "Protein language-model-based predictors for allergenic proteins and peptides — a screening tool for food allergy risk.",
    href: "https://doi.org/10.1021/acs.jafc.3c07143",
    kind: "Model",
    webserver: true,
  },
  {
    name: "Antioxidant dipeptide prediction",
    body: "Computer-aided framework for predicting, screening, and designing antioxidative dipeptides — applied to sorghum proteins.",
    href: "https://doi.org/10.1021/acsfoodscitech.2c00286",
    kind: "Model",
  },
  {
    name: "Antioxidant tripeptide prediction",
    body: "Comprehensive evaluation and comparison of machine learning methods for QSAR modeling of antioxidant tripeptides.",
    href: "https://doi.org/10.1021/acsomega.2c03062",
    kind: "Model",
  },
];

window.PUBLICATIONS = [
  {
    year: "2026",
    title: "PepBERT: Lightweight language models for bioactive peptide representation",
    authors: "Du Z., Caragea D., Guo X., Li Y.",
    venue: "Future Foods",
    tags: ["Peptides", "LLM"],
    href: "https://github.com/dzjxzyd/PepBERT",
  },
  {
    year: "2025",
    title: "FusionESP: improved enzyme–substrate pair prediction by fusing protein and chemical knowledge",
    authors: "Du Z., Fu W., Guo X., Caragea D., Li Y.",
    venue: "Journal of Chemical Information and Modeling",
    tags: ["ESM", "Enzymes"],
    href: "https://github.com/dzjxzyd/FusionESP",
  },
  {
    year: "2025",
    title: "Membrane selectivity mechanisms of antimicrobial peptide Snakin-Z against prokaryotic and eukaryotic membrane models",
    authors: "Kumar N., Du Z., Amachawadi R., Guo X., Zhao J., Li Y.",
    venue: "The Journal of Physical Chemistry",
    tags: ["Peptides", "AMP"],
    href: "#",
  },
  {
    year: "2024",
    title: "pLM4ACE: a protein language model-based deep learning predictor for screening peptides with high antihypertensive activity",
    authors: "Du Z., Ding X., Hsu W., Munir A., Xu Y., Li Y.",
    venue: "Food Chemistry, 137162",
    tags: ["Peptides", "Health"],
    href: "https://github.com/dzjxzyd/pLM4ACE",
  },
  {
    year: "2024",
    title: "pLM4Alg: protein language model-based predictors for allergenic proteins and peptides",
    authors: "Du Z., Xu Y., Liu C., Li Y.",
    venue: "Journal of Agricultural and Food Chemistry, 752–760",
    tags: ["Peptides", "Allergy"],
    href: "https://github.com/dzjxzyd/pLM4Alg",
  },
  {
    year: "2023",
    title: "UniDL4BioPep: a universal deep learning architecture for binary classification in peptide bioactivity",
    authors: "Du Z., Ding X., Xu Y., Li Y.",
    venue: "Briefings in Bioinformatics, 1–10  ·  Top 1% in ESI",
    tags: ["Peptides", "DL"],
    href: "https://github.com/dzjxzyd/UniDL4BioPep",
  },
  {
    year: "2023",
    title: "Bioinformatics approaches to discovering food-derived bioactive peptides: reviews and perspectives",
    authors: "Du Z., Comer J., Li Y.",
    venue: "Trends in Analytical Chemistry, 117051  ·  Top 1% in ESI",
    tags: ["Peptides", "Review"],
    href: "#",
  },
  {
    year: "2022",
    title: "Computer-aided approaches for predicting, screening, and designing antioxidative dipeptides and application to sorghum proteins",
    authors: "Du Z., Li Y.",
    venue: "ACS Food Science & Technology, 2(11), 1781–1788",
    tags: ["Peptides"],
    href: "#",
  },
  {
    year: "2022",
    title: "Review and perspective on bioactive peptides: a roadmap for research, development, and future opportunities",
    authors: "Du Z., Li Y.",
    venue: "Journal of Agriculture and Food Research, 100353",
    tags: ["Peptides", "Review"],
    href: "#",
  },
  {
    year: "2022",
    title: "Comprehensive evaluation and comparison of machine learning methods in QSAR modeling of antioxidant tripeptides",
    authors: "Du Z., Wang D., Li Y.",
    venue: "ACS Omega, 25760–25771",
    tags: ["Peptides", "ML"],
    href: "#",
  },
  {
    year: "2022",
    title: "Quantitative assessment of wheat quality using near-infrared spectroscopy: a comprehensive review",
    authors: "Du Z., Tian W., Tilley M., Wang D., Zhang G., Li Y.",
    venue: "Comprehensive Reviews in Food Science and Food Safety, 1–54",
    tags: ["Food", "NIR"],
    href: "#",
  },
  {
    year: "2020",
    title: "Recent advances in imaging techniques for bruise detection in fruits and vegetables",
    authors: "Du Z., Zeng X., Li X., Ding X., Cao J., Jiang W.",
    venue: "Trends in Food Science & Technology, 99, 133–141",
    tags: ["Food", "Imaging"],
    href: "#",
  },
  {
    year: "2022",
    title: "Linear scaling reveals low-dimensional structure in observable microbial dynamics",
    authors: "Zhou Z., Chen X., Şimşek E., Hamrick G. S., Baig Y., Holmes Z. A., Du Z., Karig D. K., You L.",
    venue: "bioRxiv, 2025-06",
    tags: ["Microbial", "Dynamics"],
    href: "#",
  },
];

window.NEWS = [
  { date: "Jun 2025", body: "AI4FH Lab is established at UCD. We are open for PhD, MSc, and postdoc inquiries." },
];

window.NAV = [
  { id: "home", label: "Home" },
  { id: "research", label: "Research" },
  { id: "people", label: "People" },
  { id: "publications", label: "Publications" },
  { id: "news", label: "News" },
  { id: "join", label: "Open positions" },
  { id: "collab", label: "Collaborate" },
];
