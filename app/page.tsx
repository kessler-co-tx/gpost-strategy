"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Bank,
  Buildings,
  ChatCircleText,
  Crosshair,
  DeviceMobile,
  FileText,
  LockKey,
  MapPin,
  Network,
  PaperPlaneTilt,
  RocketLaunch,
  ShareNetwork,
  ShieldCheck,
  Storefront,
  UserCircle,
} from "@phosphor-icons/react";

type View = "gpost" | "strategy";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

const gpostNav = [["mission", "Mission"], ["product", "Product"], ["payments", "Payments"]];
const strategyNav = [["office", "Office & People"], ["technology", "Technology & AI"], ["operations", "Global Operations"], ["scorecard", "Executive Scorecard"]];

const gpostTimeline = [
  { Icon: MapPin, title: "Physical Place", body: "A real-world place with an address, area, or current location." },
  { Icon: ShieldCheck, title: "Verified Relationship", body: "Permissioned relationships between recipients and publishers." },
  { Icon: Buildings, title: "Trusted Publisher", body: "Organizations with trust and authority to share information." },
  { Icon: FileText, title: "Relevant Information", body: "Timely, place-relevant information delivered with context." },
  { Icon: PaperPlaneTilt, title: "Response or Action", body: "Recipients reply, request, attend, share, purchase, or pay." },
];

const productLayers = [
  { Icon: Crosshair, title: "Place Identity", body: "Register the places that matter—an address, building, venue, suburb, region, current location, or watched area.", tags: ["Verified Access", "Watch Zones", "Geographic Targeting"] },
  { Icon: LockKey, title: "Trust & Permission", body: "Create a controlled relationship between recipients and publishers, with verification and user choice protecting relevance.", tags: ["Publisher Selection", "Closed Channel", "Block & Report"] },
  { Icon: ChatCircleText, title: "Information & Engagement", body: "Deliver rich, place-relevant communications and let recipients respond when the situation calls for it.", tags: ["Emergency Alerts", "Rich Media", "Requests"] },
  { Icon: RocketLaunch, title: "Service Layer", body: "Once identity, context, and trust exist, the same relationship can become a front door to useful local action.", tags: ["Government Services", "Payments", "Localized Intelligence"] },
];

const paymentExperience = [
  { Icon: UserCircle, title: "Person or Payer", body: "An everyday person uses a cell phone to pay a bill or purchase from a merchant." },
  { Icon: MapPin, title: "GPOST Context", body: "Trusted, place-relevant information creates the request and explains the action." },
  { Icon: Storefront, title: "Publisher or Merchant", body: "The publisher or merchant creates the trusted request, receives confirmation, and presents the completed state." },
];

const paymentSupport = [
  { Icon: Bank, title: "Payment Partners", body: "Licensed partners handle authorization, identity controls, funds movement, and settlement.", items: ["Stripe", "M-Pesa", "VietQR"] },
  { Icon: ShareNetwork, title: "Payment Rails", body: "The partner selects the payment method trusted in the local market.", items: ["Cards", "Bank Transfer", "Mobile Money", "A2A"] },
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [view, setView] = useState<View>("gpost");
  const [active, setActive] = useState("mission");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("view");
    const initial: View = requested === "strategy" ? "strategy" : "gpost";
    document.documentElement.dataset.view = initial;
    const frame = window.requestAnimationFrame(() => {
      setView(initial);
      setActive(initial === "gpost" ? "mission" : "office");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const nav = useMemo(() => view === "gpost" ? gpostNav : strategyNav, [view]);

  const switchView = (next: View) => {
    setView(next);
    setActive(next === "gpost" ? "mission" : "office");
    setMenuOpen(false);
    document.documentElement.dataset.view = next;
    const url = new URL(window.location.href);
    url.searchParams.set("view", next);
    window.history.replaceState({}, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigate = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className={`site ${view}`}>
      <header className="topbar">
        <button className="brand" onClick={() => navigate(view === "gpost" ? "mission" : "office")} aria-label="Return to the beginning">
          <img src={`${basePath}/brand/gpost-wordmark-transparent.png`} alt="GPOST" />
          <span className="strategy-brand"><img src={`${basePath}/brand/gpost-icon-transparent.png`} alt="" /><b>GPOST</b></span>
        </button>

        <nav className={menuOpen ? "open" : ""} aria-label={`${view === "gpost" ? "GPOST" : "Strategy"} sections`}>
          {nav.map(([id, label]) => (
            <button key={id} className={active === id ? "active" : ""} onClick={() => navigate(id)}>{label}</button>
          ))}
        </nav>

        <div className="view-switch" aria-label="Choose site view">
          <button className={view === "gpost" ? "selected" : ""} onClick={() => switchView("gpost")} aria-pressed={view === "gpost"}>GPOST</button>
          <button className={view === "strategy" ? "selected" : ""} onClick={() => switchView("strategy")} aria-pressed={view === "strategy"}>Strategy</button>
        </div>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Open section menu">
          <i /><i />
        </button>
      </header>

      {view === "gpost" ? <GpostView basePath={basePath} navigate={navigate} /> : <StrategyView basePath={basePath} navigate={navigate} />}

      {view === "gpost" ? (
        <GpostFooter basePath={basePath} navigate={navigate} switchView={switchView} />
      ) : (
        <footer className="strategy-footer">
          <span>GPOST · Product & Operating Strategy</span>
          <span>Leadership Discussion · August 2026</span>
        </footer>
      )}
    </main>
  );
}

function GpostView({ basePath, navigate }: { basePath: string; navigate: (id: string) => void }) {
  return <>
    <section id="mission" className="gpost-atlas-hero" aria-label="A Digital Address for the Physical World">
      <img className="atlas-hero-image" src={`${basePath}/brand/gpost-atlas-hero-map.png`} alt="A luminous coastal city map connected by geographic signals" />
      <div className="atlas-hero-wash" />
      <div className="atlas-hero-copy">
        <h1>A Digital Address<br />for the <em>Physical World.</em></h1>
        <p>GPOST connects people to the places that matter to them, enabling trusted organizations to deliver relevant information to an address, area, or current location while recipients respond with context.</p>
        <button className="atlas-primary" onClick={() => navigate("product")}>See How a Place Becomes Digital <ArrowRight size={20} weight="bold" /></button>
      </div>
      <div className="atlas-signal-nodes" aria-hidden="true">
        <span><UserCircle size={22} weight="duotone" /></span>
        <span><Buildings size={22} weight="duotone" /></span>
        <span><Storefront size={22} weight="duotone" /></span>
      </div>
      <div className="atlas-timeline" aria-label="GPOST trust model">
        {gpostTimeline.map(({ Icon, title, body }, index) => (
          <article key={title}>
            <div className="timeline-icon"><Icon size={44} weight="duotone" /></div>
            <span>0{index + 1}</span>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>

    <section id="product" className="atlas-section atlas-product-section">
      <SectionIntro number="01" label="Product" title={<>How GPOST Digitizes a Place.</>} body="A place becomes useful digitally when identity, permission, information, and services build on one another. The first three layers are visible in GPOST’s public materials; the fourth is the opportunity they create." />
      <div className="product-atlas">
        <img src={`${basePath}/brand/gpost-product-atlas-layers.png`} alt="Four geographic layers progressing from place identity to useful local services" />
        <div className="product-atlas-grid">
          {productLayers.map(({ Icon, title, body, tags }, index) => (
            <article key={title}>
              <div className="product-layer-icon"><Icon size={42} weight="duotone" /></div>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="payments" className="atlas-section atlas-payments-section">
      <SectionIntro number="02" label="Payments" title={<>From Trusted Information<br />to <em>Trusted Action.</em></>} body="The most credible model keeps GPOST focused on context and experience while approved third parties move money over the payment methods already trusted in each market." />

      <div className="payment-rail-system">
        <div className="payments-atlas payment-pyramid" aria-label="GPOST payment journey">
          <img src={`${basePath}/brand/gpost-payments-map-flow.png`} alt="A geographic transaction flow moving between five connected participants" />
          <p className="pyramid-label pyramid-experience-label"><span>GPOST User Experience</span><b>Controlled by GPOST</b></p>
          <div className="pyramid-experience">
            {paymentExperience.map(({ Icon, title, body }, index) => (
              <article key={title}>
                <div className="payment-node-icon"><Icon size={34} weight="duotone" /></div>
                <h3>{title}</h3>
                <p>{body}</p>
                {index < 2 && <ArrowRight className="pyramid-arrow" size={27} weight="bold" />}
              </article>
            ))}
          </div>
          <p className="pyramid-label pyramid-support-label"><span>Payment Infrastructure</span><b>Supported by Partners</b></p>
          <div className="pyramid-support">
            {paymentSupport.map(({ Icon, title, body, items }) => (
              <article key={title}>
                <div className="support-card-head">
                  <div className="payment-node-icon"><Icon size={29} weight="duotone" /></div>
                  <div><h3>{title}</h3><p>{body}</p></div>
                </div>
                <div className="support-list" aria-label={`${title} options`}>
                  {items.map(item => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rail-connections" aria-hidden="true">
          <span className="rail-connection rail-connection-mobile" />
          <span className="rail-connection rail-connection-a2a" />
        </div>

        <div className="rail-deep-dives" aria-label="Payment rail details">
          <article>
            <div className="rail-deep-dive-title"><DeviceMobile size={30} weight="duotone" /><h3>Mobile Money</h3></div>
            <p>Funds move within an existing mobile-money ecosystem tied to a mobile wallet or account. The provider owns credentials, authorization, the stored-value ledger, funds movement, and settlement; GPOST owns the trusted context, transaction status, and receipt.</p>
          </article>
          <article>
            <div className="rail-deep-dive-title"><Network size={30} weight="duotone" /><h3>A2A <small>(Account-to-Account)</small></h3></div>
            <p>Funds move directly from the payer’s bank account to the payee’s bank account through a bank-transfer or QR-enabled account-to-account network. The partner handles routing and authorization; GPOST presents the request and reconciles the returned confirmation.</p>
          </article>
        </div>
      </div>

      <div className="atlas-role-model">
        <p className="mini-label">Division of Responsibility</p>
        <div><span>GPOST User Experience</span><b>Person or Payer · Trusted Context · Publisher or Merchant · Transaction State · Receipt</b><small>Own the Trusted Journey</small></div>
        <div><span>Payment Partner</span><b>Credentials · Authorization · Identity Controls · Funds Movement · Settlement</b><small>Own Regulated Execution</small></div>
        <div><span>Local Payment Rail</span><b>Cards · Bank Transfers · Mobile Money · A2A</b><small>Match the Market</small></div>
        <div><span>Publisher or Merchant</span><b>Payment Request · Fulfillment · Confirmation</b><small>Receive and Fulfill</small></div>
      </div>

      <div className="atlas-payment-controls">
        <p className="mini-label">What Makes the Model Operable</p>
        <div>{[
          { Icon: ShieldCheck, title: "State Integrity", body: "Idempotent requests, durable status history, and no silent failures." },
          { Icon: ShareNetwork, title: "Reconciliation", body: "Match the GPOST request, provider event, payee record, refund, and settlement." },
          { Icon: ChatCircleText, title: "Exception Ownership", body: "Defined queues, aging, escalation, and customer communication for every failure state." },
          { Icon: Buildings, title: "Market Compliance", body: "Validate licensing, identity, safeguarding, data, settlement, and consumer obligations country by country." },
        ].map(({ Icon, title, body }, index) => <article key={title}><div className="control-card-head"><span>0{index + 1}</span><div className="control-icon"><Icon size={27} weight="duotone" /></div></div><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>

      <SourceLine />
    </section>
  </>;
}

function StrategyView({ basePath, navigate }: { basePath: string; navigate: (id: string) => void }) {
  return <>
    <section id="office" className="hero strategy-hero">
      <div className="strategy-map"><img src={`${basePath}/brand/geographic-strategy-reference.png`} alt="Abstract global network connecting operating regions" /></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">A General Manager’s Operating Sequence</p>
          <h1>Build the Center.<br />Connect the Company.<br /><em>Run the System.</em></h1>
          <p className="lede">Start with the Austin office and its people system. Turn strategy into dependable technology delivery. Then run one company across markets, teams, and time zones—with financial health visible to leadership.</p>
          <div className="hero-actions"><button className="primary" onClick={() => navigate("office-plan")}>Start With the Office <span>↓</span></button></div>
        </div>
        <div className="sequence-card">
          {["Office & People", "Technology & AI", "Global Operations", "Executive Scorecard"].map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b><i>{index < 3 ? "↓" : "✓"}</i></div>)}
        </div>
      </div>
      <div className="strategy-strip"><span>THE GM MANDATE</span><p>Create clarity at the center. Build leverage through systems. Make performance observable.</p></div>
    </section>

    <section id="office-plan" className="section office-section">
      <SectionIntro number="01" label="Office & People" title={<>Build the Austin<br />Operating Center.</>} body="The first operating product is the company itself: clear decision rights, a secure employee experience, and a working rhythm that connects the new office to teams around the world." dark />
      <div className="horizon-grid">
        {[
          ["01", "Establish", "Create the Foundation", "Clarify the office mandate, organization map, decision rights, employment setup, core vendors, role scorecards, equipment, access, and onboarding."],
          ["02", "Connect", "Make Distance Workable", "Set overlap windows, written handoffs, escalation paths, cultural orientation, documentation standards, and a visible ‘who owns what’ map."],
          ["03", "Scale", "Build the Talent System", "Create the hiring plan, manager expectations, performance rhythm, workforce reviews, succession coverage, and retention signals."],
        ].map(([num, label, title, body]) => <article key={num}><span>{num}</span><small>{label}</small><h3>{title}</h3><p>{body}</p><div className="horizon-line" /></article>)}
      </div>
      <div className="first-90">
        <div><p className="mini-label">First 90 Days · People System</p><h3>Hire Deliberately. Onboard Securely. Integrate Globally.</h3></div>
        <div className="check-grid">{["Office charter & decision map", "Austin role scorecards", "Employment and vendor setup", "Secure equipment & access", "Cross-region working agreements", "Manager and performance cadence", "Workforce risk review", "Time-to-productivity baseline"].map(item => <span key={item}>✓ {item}</span>)}</div>
      </div>
    </section>

    <section id="technology" className="section technology-section">
      <SectionIntro number="02" label="Technology & Artificial Intelligence" title={<>Turn Strategy Into a<br /><em>Dependable Delivery System.</em></>} body="The General Manager should be the business and operating partner to technology leadership: translate priorities into roadmaps, make tradeoffs explicit, and ensure releases become reliable services." dark />
      <div className="delivery-loop">
        {[
          ["01", "Business outcome", "Customer, market, revenue, or risk result"],
          ["02", "Requirements", "Owner, acceptance criteria, constraints, dependencies"],
          ["03", "Build & integrate", "Product, engineering, vendors, data, payments"],
          ["04", "Release readiness", "Quality, security, support, rollback, communications"],
          ["05", "Observe & learn", "Adoption, reliability, incidents, cost, feedback"],
        ].map(([num, title, body], index) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p><i>{index < 4 ? "→" : "↺"}</i></article>)}
      </div>
      <div className="tech-columns">
        <div className="decision-criteria">
          <p className="mini-label">Technology Decision Filter</p>
          {[["Reliability", "Will it fail visibly and recover cleanly?"], ["Security", "Does access and data use match the risk?"], ["Scale", "Can the design travel across markets and volume?"], ["Integration", "How much complexity does it add at the seams?"], ["Economics", "What is the full cost to build, operate, and change?"], ["Regulatory fit", "Can it meet the obligations of the target market?"]].map(([title, body]) => <div key={title}><b>{title}</b><span>{body}</span></div>)}
        </div>
        <div className="language-model-card">
          <p className="mini-label">Localized Language Intelligence</p>
          <h3>Model the Culture and Subgroup—Not an Imagined Universal User.</h3>
          <p>The direction described by leadership is a smaller, focused language-learning model designed around the language, culture, and context of a community or subgroup—rather than assuming one universal large model can serve every place equally.</p>
          <ul><li>Ground responses in approved local sources</li><li>Evaluate by language, culture, task, and market</li><li>Use human review for sensitive communication</li><li>Measure usefulness, errors, bias, cost, and escalation</li></ul>
        </div>
      </div>
      <div className="ai-operating-row">
        <div><small>Assist</small><b>Research · Summaries · Support · Quality Review</b></div>
        <div><small>Govern</small><b>Purpose · Access · Provenance · Evaluation · Retention</b></div>
        <div><small>Measure</small><b>Time Saved · Cost Avoided · Accuracy · Adoption · Risk</b></div>
        <div><small>Escalate</small><b>Human Judgment for Exceptions and Consequential Decisions</b></div>
      </div>
    </section>

    <section id="operations" className="section operations-section">
      <SectionIntro number="03" label="Global Operations" title={<>Run One Company Across<br />Markets, Teams, and Time Zones.</>} body="The operating model should make ownership, handoffs, risks, and results visible—so work continues across regions without creating four versions of the company." dark />
      <div className="scenario-banner"><p>The footprint below uses Austin, Kenya, Vietnam, and Australia as a planning scenario. Exact team responsibilities and future market assignments require leadership confirmation.</p></div>
      <div className="region-model">
        {[
          ["Austin", "Operating Center", "General Manager leadership · Coordination · Business operations · Artificial-intelligence enablement"],
          ["Kenya", "Delivery Node", "Planning assumption for development and payments-engineering collaboration"],
          ["Vietnam", "Service Node", "Planning assumption for customer and operational support coverage"],
          ["Australia", "Leadership Node", "Executive and board alignment · Established company context"],
        ].map(([region, role, body], index) => <article key={region}><span>0{index + 1}</span><small>{region}</small><h3>{role}</h3><p>{body}</p></article>)}
      </div>

      <div className="operating-system">
        <p className="mini-label">One Global Operating System</p>
        <div>{[
          ["Decision Rights", "Who decides, who recommends, who executes, and when a decision escalates."],
          ["Follow-the-Sun Handoffs", "Written status, next action, owner, deadline, risk, and context before a region signs off."],
          ["Market-Entry Gates", "Demand, partner, product, payments, legal, service, economics, and launch-readiness evidence."],
          ["Service Ownership", "Named owners for releases, incidents, payment exceptions, vendors, support, and recovery."],
          ["Risk & Controls", "A live register connecting business risks to controls, evidence, owners, incidents, and remediation."],
          ["Executive Narrative", "One version of performance: actuals, forecast, drivers, decisions, risks, and next commitments."],
        ].map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>

      <div className="cadence-table">
        <div className="cadence-intro"><p className="mini-label">The Operating Rhythm</p><h3>Make the System Observable.</h3><p>Meetings exist to make decisions, remove constraints, and assign accountable next actions—not to repeat status.</p></div>
        <div className="cadence-rows">
          {[
            ["Daily", "Service Pulse & Handoff", "Critical incidents · Payment exceptions · Service health · Next-region handoff", "15–20 min + written handoff"],
            ["Weekly", "Executive Operating Review", "Outcomes · Delivery · Customers · Cash · Vendors · People · Risk decisions", "60–90 min"],
            ["Monthly", "Business Performance Review", "Profit and loss · Forecast · Market scorecards · Workforce · Controls · Priorities", "2 hours"],
            ["Quarterly", "Strategy & Resource Reset", "Objectives · Capital allocation · Market gates · Portfolio · Talent · Scenarios", "Half day"],
          ].map(([frequency, meeting, agenda, format]) => <div key={frequency}><span>{frequency}</span><b>{meeting}</b><p>{agenda}</p><small>{format}</small></div>)}
        </div>
      </div>
    </section>

    <section id="scorecard" className="section scorecard-section">
      <SectionIntro number="04" label="Executive Scorecard" title={<>Financial Health Is the<br /><em>Result of the Operating System.</em></>} body="Leadership needs one concise view of growth, trust, delivery, customers, people, and cash—with drill-down measures that identify the driver and the owner." dark />
      <div className="scorecard-principle"><span>Executive Readout</span><b>Actual</b><i>vs</i><b>Plan</b><i>vs</i><b>Prior Period</b><i>→</i><b>Driver</b><i>→</i><b>Decision / Owner / Date</b></div>
      <div className="kpi-grid">
        <article className="finance-kpis">
          <div className="kpi-head"><span>01</span><p>Financial Health</p></div>
          <h3>Can the company fund its priorities and improve the economics of growth?</h3>
          <div className="metric-grid">{[
            ["Revenue", "By Product · Market · Customer Type"], ["Contribution Margin", "Revenue Less Directly Variable Cost"], ["Operating Expense", "Actual and Committed vs Plan"], ["Cash & Runway", "Burn · Liquidity · Scenarios"], ["Forecast Accuracy", "Revenue · Expense · Cash"], ["Unit Economics", "Acquisition · Activation · Cost to Serve"], ["Vendor Economics", "Spend · Service · Concentration · Savings"], ["Working Capital", "Collections · Payables · Settlement Exposure"],
          ].map(([title, detail]) => <div key={title}><b>{title}</b><span>{detail}</span></div>)}</div>
        </article>

        {[
          ["02", "Growth & Adoption", "Is the Product Becoming Useful in Each Target Market?", ["Active Verified Places", "Active Publishers", "Recipient Engagement", "Completed Actions", "Repeat Use"]],
          ["03", "Service & Trust", "Can People Depend on the Channel When It Matters?", ["Service Availability", "Critical Incidents", "Recovery Time", "Safety Escalations", "Block/Report Signals"]],
          ["04", "Payments", "Does Every Initiated Payment Reach a Known, Supportable State?", ["Initiation → Completion", "Failure & Reversal", "Time to Confirmation", "Reconciliation Aging", "Disputes & Refunds"]],
          ["05", "Delivery", "Does the Roadmap Become Reliable Customer Value?", ["Commitment Reliability", "Release Success", "Escaped Defects", "Cycle Time", "Risk Closure"]],
          ["06", "Customer & Support", "Can the Company Resolve Friction Without Losing Trust?", ["Response Time", "Resolution Time", "Backlog Aging", "First-Contact Resolution", "Cost to Serve"]],
          ["07", "People", "Do We Have the Capability and Coverage to Execute?", ["Time to Hire", "Time to Productivity", "Regrettable Attrition", "Critical-Role Coverage", "Manager Effectiveness"]],
        ].map(([num, label, question, metrics]) => <article className="kpi-card" key={num as string}><div className="kpi-head"><span>{num as string}</span><p>{label as string}</p></div><h3>{question as string}</h3><div className="metric-list">{(metrics as string[]).map(metric => <span key={metric}>{metric}</span>)}</div></article>)}
      </div>
      <div className="readiness-note"><p className="kicker">Capital-Market Readiness</p><h3>Build the Discipline Before the Event.</h3><p>Clean reporting, controlled processes, reliable forecasts, documented decisions, and visible risks prepare the company for major financing or public-market scrutiny—without assuming a specific venue, deadline, or reason for the Austin office.</p></div>
    </section>

    <section className="closing strategy-closing">
      <p className="kicker">The General Manager Mandate</p>
      <h2>Clarity at the Center.<br /><em>Confidence at Scale.</em></h2>
      <p>Build the office. Connect the teams. Instrument the business. Let disciplined execution compound trust.</p>
      <button onClick={() => navigate("office")}>Return to the beginning ↑</button>
    </section>
  </>;
}

function SectionIntro({ number, label, title, body, dark = false }: { number: string; label: string; title: React.ReactNode; body: string; dark?: boolean }) {
  return <div className={`section-intro ${dark ? "on-dark" : ""}`}><div><p className="kicker">{number} · {label}</p><h2>{title}</h2></div><p>{body}</p></div>;
}

function GpostFooter({ basePath, navigate, switchView }: { basePath: string; navigate: (id: string) => void; switchView: (view: View) => void }) {
  return <footer className="gpost-footer">
    <button className="footer-brand" onClick={() => navigate("mission")} aria-label="Return to Mission"><img src={`${basePath}/brand/gpost-wordmark-transparent.png`} alt="GPOST" /></button>
    <nav aria-label="GPOST footer navigation">
      {gpostNav.map(([id, label]) => <button key={id} onClick={() => navigate(id)}>{label}</button>)}
    </nav>
    <div className="footer-view-switch"><button className="selected" onClick={() => switchView("gpost")}>GPOST</button><button onClick={() => switchView("strategy")}>Strategy</button></div>
  </footer>;
}

function SourceLine() {
  return <p className="source-line">Public product references: <a href="https://www.gpost.com/about.php" target="_blank" rel="noreferrer">Purpose <Arrow /></a><a href="https://www.gpost.com/technology.php" target="_blank" rel="noreferrer">Technology <Arrow /></a><a href="https://www.gpost.com/faqs.php" target="_blank" rel="noreferrer">Product FAQ <Arrow /></a></p>;
}
