import Link from "next/link";
import { ThemeToggle } from "../components/ThemeToggle";

const Swatch = ({ name, value, role, className = "" }: { name: string; value: string; role: string; className?: string }) => (
  <article className="swatch-card">
    <div className={`swatch ${className}`} style={{ background: value }} />
    <span>{name}</span><b>{value}</b><p>{role}</p>
  </article>
);

export default function BrandSystem() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const assets = [
    ["Primary GPOST wordmark", "gpost-wordmark-reference.png", "Use on white or very light backgrounds. Preserve the white field and proportions."],
    ["GPOST application icon", "gpost-icon-reference.png", "Use for compact identity, favicons, navigation, and small branded moments."],
    ["Geographic strategy system", "geographic-strategy-reference.png", "Use in dark-mode strategy covers, hero panels, section dividers, and presentation graphics."],
    ["Social preview card", "../og.png", "Use for link previews and executive presentation covers. Do not crop the safe margins."]
  ];

  return (
    <main className="brand-page">
      <header className="topbar brand-topbar">
        <Link className="brand brand-link" href="/">
          <img className="brand-wordmark" src={`${basePath}/brand/gpost-wordmark-transparent.png`} alt="GPOST — need to know" />
          <img className="brand-icon" src={`${basePath}/brand/gpost-icon-transparent.png`} alt="" />
          <span className="strategy-name">GPOST<br/><small>Brand System</small></span>
        </Link>
        <nav aria-label="Brand guide sections">
          <a href="#modes">Modes</a><a href="#assets">Assets</a><a href="#tokens">Tokens</a><a href="#pages">Page system</a>
        </nav>
        <Link className="brand-guide-link" href="/">Strategy site</Link>
        <ThemeToggle />
      </header>

      <section className="brand-hero">
        <div>
          <p className="eyebrow">GPOST STRATEGY · DESIGN SYSTEM 1.0</p>
          <h1>One identity.<br/><em>Two expressions.</em></h1>
          <p>The light expression connects to GPOST&apos;s existing public identity. The dark expression signals the future-state operating strategy. Shared typography, geometry, spacing, and evidence labels keep both recognizably part of one system.</p>
        </div>
        <img src={`${basePath}/brand/geographic-strategy-reference.png`} alt="GPOST geographic strategy motif" />
      </section>

      <section id="modes" className="brand-section">
        <div className="brand-section-head"><p className="eyebrow">01 · EXPERIENCE MODES</p><h2>Use mode to clarify context.</h2><p>Theme is semantic—not merely decorative. The active mode persists across pages using the header control.</p></div>
        <div className="mode-grid">
          <article className="mode-card light-mode-card"><span>LIGHT · CURRENT-STATE CONTINUITY</span><img src={`${basePath}/brand/gpost-wordmark-reference.png`} alt="GPOST wordmark"/><h3>Familiar, open, informational.</h3><p>Use for verified company facts, existing-product explanations, public-source research, and materials that need to feel close to GPOST&apos;s present website.</p><ul><li>White and cloud backgrounds</li><li>Royal blue primary action</li><li>Dark navy text</li><li> restrained geographic lines</li></ul></article>
          <article className="mode-card dark-mode-card"><span>DARK · FUTURE-STATE STRATEGY</span><img src={`${basePath}/brand/geographic-strategy-reference.png`} alt="Geographic strategy system"/><h3>Decisive, connected, operational.</h3><p>Use for recommendations, target architecture, payments orchestration, operating-model design, AI roadmaps, and executive decision points.</p><ul><li>Midnight and deep navy fields</li><li>Cobalt structure and navigation</li><li>Lime reserved for progress</li><li>Geographic systems as the signature motif</li></ul></article>
        </div>
      </section>

      <section id="assets" className="brand-section brand-assets-section">
        <div className="brand-section-head"><p className="eyebrow">02 · APPROVED RESOURCES</p><h2>Use supplied marks. Do not redraw them.</h2><p>These files are packaged with the project as working references. Confirm original trademark files with GPOST before any external commercial launch.</p></div>
        <div className="asset-grid">
          {assets.map(([name, file, note]) => {
            const path = file.startsWith("../") ? `${basePath}/${file.slice(3)}` : `${basePath}/brand/${file}`;
            return <article key={name}><div><img src={path} alt={name}/></div><span>PNG RESOURCE</span><h3>{name}</h3><p>{note}</p><a href={path} download>Download asset ↓</a></article>;
          })}
        </div>
        <div className="logo-rules"><strong>Identity guardrails</strong><span>Do not recolor the supplied GPOST mark.</span><span>Do not remove or retype “need to know.”</span><span>Do not stretch, rotate, add effects, or place on noisy imagery.</span><span>Maintain clear space equal to the icon&apos;s internal information symbol.</span></div>
      </section>

      <section id="tokens" className="brand-section token-section">
        <div className="brand-section-head"><p className="eyebrow">03 · DESIGN TOKENS</p><h2>A compact palette with clear jobs.</h2><p>Use cobalt to organize, lime to signal progress, and cyan to orient. Avoid adding new accent colors without a functional reason.</p></div>
        <div className="swatch-grid">
          <Swatch name="Midnight" value="#071522" role="Dark canvas and footer" />
          <Swatch name="Strategy Navy" value="#10233A" role="Primary dark surface" />
          <Swatch name="GPOST Cobalt" value="#1767F2" role="Navigation and action" />
          <Swatch name="Signal Cyan" value="#18A9CF" role="Orientation and labels" />
          <Swatch name="Progress Lime" value="#B8D930" role="Progress, proof, completion" />
          <Swatch name="Warm Paper" value="#F4F1EA" role="Editorial light canvas" />
          <Swatch name="Cloud" value="#F7FAFF" role="Current-state light surface" />
          <Swatch name="Ink" value="#101D2F" role="Primary light-mode text" />
        </div>
        <div className="type-grid">
          <article><span>DISPLAY · GEORGIA</span><h3>Trusted place becomes trusted action.</h3><p>Use sentence case, compact line height, and restrained italics for strategic emphasis.</p></article>
          <article><span>INTERFACE · ARIAL / HELVETICA</span><h4>OPERATING MODEL · EVIDENCE · ROADMAP</h4><p>Use uppercase labels with generous tracking; body copy remains plain, concise, and easy to scan.</p></article>
        </div>
      </section>

      <section id="pages" className="brand-section page-system-section">
        <div className="brand-section-head"><p className="eyebrow">04 · ADDITIONAL PAGE SYSTEM</p><h2>New pages should feel inevitable.</h2><p>Follow the sequence below before inventing a new layout. Reuse existing classes and components whenever possible.</p></div>
        <div className="page-anatomy">
          <article><span>01</span><strong>Orient</strong><p>Shared header, active theme, page number, and a 6–12 word executive headline.</p></article>
          <article><span>02</span><strong>Frame</strong><p>One short thesis paragraph. Identify whether the content is fact, interpretation, or hypothesis.</p></article>
          <article><span>03</span><strong>Make visible</strong><p>Use one primary visual relationship: flow, hierarchy, comparison, timeline, or scorecard.</p></article>
          <article><span>04</span><strong>Make actionable</strong><p>End with decisions, owners, measures, risks, or next steps—not a generic summary.</p></article>
        </div>
        <div className="page-template">
          <div className="template-preview"><span>EYEBROW · SECTION NUMBER</span><h3>One strategic idea<br/>per page.</h3><p>Supporting context should fit in two short paragraphs.</p><div><i/><i/><i/></div></div>
          <div className="template-guidance"><h3>Page checklist</h3><ul><li>Use the shared header and theme control.</li><li>Cap content width at approximately 1,250 pixels.</li><li>Start with an outcome, not a topic label.</li><li>Use the three evidence badges consistently.</li><li>Reserve lime for progress, completion, or the recommended path.</li><li>Use geographic art only where place or connected systems are central.</li><li>Check contrast, keyboard navigation, mobile stacking, and reduced-motion behavior.</li><li>Link every public fact to an authoritative source.</li></ul><a href={`${basePath}/brand/BRAND_SYSTEM.md`} download>Download implementation guide ↓</a></div>
        </div>
      </section>

      <footer><span>GPOST STRATEGY BRAND SYSTEM · VERSION 1.0</span><span><Link href="/">Return to strategy</Link> · Resources supplied for Joe Kessler&apos;s GPOST GM candidacy.</span></footer>
    </main>
  );
}
