"use client";

import { useState } from "react";

const Badge = ({ type }: { type: "Verified" | "Interpretation" | "Hypothesis" }) => (
  <span className={`badge ${type.toLowerCase()}`}><i />{type}</span>
);

const Check = ({ children }: { children: React.ReactNode }) => <li><span>✓</span>{children}</li>;

export default function Home() {
  const [active, setActive] = useState("strategy");
  const [open, setOpen] = useState<number | null>(0);
  const navigate = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const nav = [
    ["strategy", "Thesis"], ["product", "Product"], ["payments", "Payments"],
    ["operating-model", "Operating model"], ["technology", "AI & technology"], ["roadmap", "Roadmap"]
  ];

  return (
    <main>
      <header className="topbar">
        <button className="brand" onClick={() => navigate("strategy")} aria-label="Return to top">
          <span className="mark">G<span>•</span></span>
          <span>GPOST<br/><small>Growth Strategy</small></span>
        </button>
        <nav aria-label="Strategy sections">
          {nav.map(([id, label]) => <button key={id} className={active === id ? "active" : ""} onClick={() => navigate(id)}>{label}</button>)}
        </nav>
        <button className="brief" onClick={() => navigate("roadmap")}>Executive roadmap <span>→</span></button>
      </header>

      <section id="strategy" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">A GENERAL MANAGER&apos;S OPERATING THESIS · PREPARED BY JOE KESSLER</p>
          <h1>Turn trusted location<br/>into trusted <em>action.</em></h1>
          <p className="lede">GPOST has built a new address for communication: the physical place. The next strategic move is to make every verified message actionable—then scale the operating system behind it.</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => navigate("operating-model")}>Explore the operating model <span>↓</span></button>
            <div className="legend"><Badge type="Verified"/><Badge type="Interpretation"/><Badge type="Hypothesis"/></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="GPOST strategy flywheel">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="node n1"><b>01</b><span>Verified<br/>place</span></div>
          <div className="node n2"><b>02</b><span>Relevant<br/>message</span></div>
          <div className="node n3"><b>03</b><span>Trusted<br/>action</span></div>
          <div className="node n4"><b>04</b><span>Learning<br/>loop</span></div>
          <div className="core"><strong>G<span>•</span></strong><small>PLACE-BASED<br/>OPERATING LAYER</small></div>
        </div>
        <div className="thesis-strip">
          <span>THE STRATEGIC THESIS</span>
          <p>Communication earns attention. <b>Action creates value.</b> Operations earns trust at scale.</p>
        </div>
      </section>

      <section id="product" className="section product">
        <div className="section-head">
          <div><p className="eyebrow">01 · THE FOUNDATION</p><h2>A digital address for<br/>the physical world.</h2></div>
          <p>GPOST&apos;s public product establishes the core asset: a secure, location-aware channel that lets information reach an address, building, venue, suburb, region, or radius—not merely a phone number.</p>
        </div>
        <div className="product-grid">
          <article className="feature lead-feature">
            <div className="icon-css pin"><i/></div><Badge type="Verified"/>
            <h3>Digitize place</h3><p>Users register addresses and watch zones, creating a persistent relationship with the places that matter to them.</p>
            <ul><Check>Multiple addresses</Check><Check>Geographic targeting</Check><Check>Publisher subscriptions</Check></ul>
          </article>
          <article className="feature"><div className="icon-css signal"><i/><i/><i/></div><Badge type="Verified"/><h3>Deliver rich information</h3><p>Cached, internet-based messages can carry text, maps, images, video, PDFs and links without SMS limits.</p></article>
          <article className="feature"><div className="icon-css shield">✓</div><Badge type="Verified"/><h3>Protect the channel</h3><p>A closed messaging system and user controls are designed to reduce spam and preserve relevance.</p></article>
          <article className="feature future"><div><Badge type="Interpretation"/><h3>The strategic asset is not messaging alone.</h3><p>It is a permissioned graph connecting <b>people × places × trusted publishers × moments of need.</b></p></div><strong>That graph can become the front door to local services.</strong></article>
        </div>
        <p className="source-note">Public product facts reflect GPOST&apos;s official website and FAQ, last publicly updated in 2019. Current product status and roadmap should be validated with leadership.</p>
      </section>

      <section id="payments" className="section dark-section">
        <div className="section-head light">
          <div><p className="eyebrow">02 · THE TRANSACTION LAYER</p><h2>One GPOST experience.<br/><em>Regulated rails underneath.</em></h2></div>
          <div><Badge type="Hypothesis"/><p>Payments should be an enabling capability—not a detour into becoming a bank, gateway, or merchant of record.</p></div>
        </div>
        <div className="flow">
          {[
            ["1","MESSAGE","Verified publisher sends a bill, fee, booking or offer"],
            ["2","ACTION","User reviews context and chooses to pay inside GPOST"],
            ["3","PROCESS","Third-party partner tokenizes, authorizes and moves funds"],
            ["4","CONFIRM","GPOST records status, sends receipt and supports exceptions"]
          ].map((x,i)=><article key={x[0]}><span>{x[0]}</span><div className={`flow-icon f${i+1}`}/><small>{x[1]}</small><p>{x[2]}</p>{i<3&&<b>→</b>}</article>)}
        </div>
        <div className="payment-model">
          <div className="architecture">
            <p className="mini-title">RECOMMENDED REFERENCE ARCHITECTURE</p>
            <div className="layers">
              <div><span>EXPERIENCE</span><b>GPOST app · checkout · receipts · support</b><small>Own the user journey</small></div>
              <div><span>ORCHESTRATION</span><b>Payment intents · routing · ledger · webhooks</b><small>Own state and visibility</small></div>
              <div><span>REGULATED RAILS</span><b>PSPs · acquirers · wallets · bank methods</b><small>Partner for funds movement</small></div>
              <div><span>SELLER</span><b>Government · utility · merchant · service provider</b><small>Likely merchant of record</small></div>
            </div>
          </div>
          <div className="principles">
            <p className="mini-title">DESIGN PRINCIPLES</p>
            <ol>
              <li><b>01</b><div><strong>Keep sellers as merchant of record</strong><p>Reduce licensing, tax, safeguarding and chargeback exposure.</p></div></li>
              <li><b>02</b><div><strong>Start with one PSP, design for many</strong><p>Prove the journey quickly; normalize providers as countries and methods expand.</p></div></li>
              <li><b>03</b><div><strong>Build the operational ledger early</strong><p>Reconcile message, payment, refund, dispute and settlement states.</p></div></li>
              <li><b>04</b><div><strong>Never hide a failed state</strong><p>Idempotency, webhooks, audit trails and clear exception ownership are product features.</p></div></li>
            </ol>
          </div>
        </div>
      </section>

      <section id="operating-model" className="section operating">
        <div className="section-head">
          <div><p className="eyebrow">03 · THE OPERATING SYSTEM</p><h2>Build trust twice:<br/>for partners and people.</h2></div>
          <p>The GM&apos;s central job is to turn product capability into a repeatable service. Three outcome teams share one operational backbone and one scorecard.</p>
        </div>
        <div className="org-map">
          <div className="gm"><small>GENERAL MANAGER</small><strong>One owner for growth, delivery & trust</strong><span>Portfolio · P&amp;L · operating cadence · risk acceptance</span></div>
          <div className="connectors"><i/><i/><i/></div>
          <div className="team-card dev">
            <div className="team-top"><span>01</span><div className="team-symbol code">⌘</div><small>PRODUCT DELIVERY</small><h3>Dev / AI</h3><p>Ship the platform safely, instrument every journey, and turn operating signals into product improvements.</p></div>
            <div className="team-body"><b>CORE PODS</b><p>Product &amp; design · Platform &amp; integrations · Data &amp; AI · SRE &amp; security</p><b>FIRST HIRES / OWNERS</b><p>Product lead · Tech lead · Integration engineers · Data/ML lead · QA automation</p><b>NORTH-STAR SIGNALS</b><div className="metrics"><span>Lead time</span><span>Reliability</span><span>Adoption</span></div></div>
          </div>
          <div className="team-card merchant">
            <div className="team-top"><span>02</span><div className="team-symbol hand">↗</div><small>PARTNER OUTCOMES</small><h3>Merchant Success</h3><p>Take government agencies, businesses and service providers from signed agreement to measurable value.</p></div>
            <div className="team-body"><b>JOURNEY OWNERSHIP</b><p>Discovery · Solution design · Onboarding · Publisher verification · Payment activation · Growth</p><b>OPERATING ROLES</b><p>Partner success · Implementation · Solutions engineering · Payment operations · Training</p><b>NORTH-STAR SIGNALS</b><div className="metrics"><span>Time to live</span><span>Active senders</span><span>Volume / partner</span></div></div>
          </div>
          <div className="team-card customer">
            <div className="team-top"><span>03</span><div className="team-symbol person">◎</div><small>USER TRUST &amp; GROWTH</small><h3>Customer Engagement</h3><p>Help people receive the right information, complete actions confidently, and recover quickly when something fails.</p></div>
            <div className="team-body"><b>JOURNEY OWNERSHIP</b><p>Activation · Address verification · Relevance controls · Payment support · Retention · Safety</p><b>OPERATING ROLES</b><p>Lifecycle engagement · Customer care · Trust &amp; safety · Knowledge operations · Insights</p><b>NORTH-STAR SIGNALS</b><div className="metrics"><span>Activation</span><span>Action completion</span><span>Trust / CSAT</span></div></div>
          </div>
        </div>

        <div className="backbone">
          <p className="mini-title">SHARED OPERATING BACKBONE</p>
          <div>{[
            ["Risk & compliance","Privacy · PCI scope · KYC/AML oversight · consent · partner due diligence"],
            ["Payment operations","Reconciliation · refunds · disputes · settlement · processor management"],
            ["Global operations","Localization · vendor governance · follow-the-sun coverage · market readiness"],
            ["Finance & people","Unit economics · forecasting · hiring system · performance · workforce planning"]
          ].map((x,i)=><article key={x[0]}><span>0{i+1}</span><strong>{x[0]}</strong><p>{x[1]}</p></article>)}</div>
        </div>

        <div className="cadence">
          <div><p className="eyebrow">THE MANAGEMENT CADENCE</p><h3>Make the system observable.</h3><p>A common operating rhythm prevents functional silos and keeps the product roadmap connected to partner and customer reality.</p></div>
          <div className="cadence-grid">
            <article><span>DAILY</span><b>Service pulse</b><p>Incidents · payment exceptions · high-risk partner issues</p></article>
            <article><span>WEEKLY</span><b>Outcome review</b><p>Funnel · delivery · partner health · customer friction</p></article>
            <article><span>MONTHLY</span><b>Business review</b><p>P&amp;L · unit economics · roadmap · risk · capacity</p></article>
            <article><span>QUARTERLY</span><b>Strategy reset</b><p>Markets · portfolio · partnerships · talent · capital allocation</p></article>
          </div>
        </div>
      </section>

      <section id="technology" className="section tech">
        <div className="section-head light">
          <div><p className="eyebrow">04 · AI &amp; TECHNOLOGY</p><h2>Intelligence at the edge.<br/><em>Governance at the core.</em></h2></div>
          <div><Badge type="Hypothesis"/><p>A composable platform can personalize locally while preserving one global control plane for consent, safety, observability and audit.</p></div>
        </div>
        <div className="stack">
          <div className="stack-diagram">
            {[
              ["EXPERIENCE","Mobile · web · partner console · assisted support"],
              ["INTELLIGENCE","Relevance · translation · summarization · intent · agent assist"],
              ["DOMAIN SERVICES","Place graph · messaging · publisher · payment · identity · consent"],
              ["DATA & CONTROL","Event stream · operational ledger · feature store · policy · audit"],
              ["PLATFORM","API gateway · workflow engine · observability · CI/CD · secrets"]
            ].map((x,i)=><div key={x[0]}><span>0{i+1}</span><b>{x[0]}</b><p>{x[1]}</p></div>)}
          </div>
          <div className="ai-cards">
            <article><span>NOW</span><h3>Assist people; don&apos;t automate judgment.</h3><ul><Check>Classify and route partner/customer cases</Check><Check>Summarize interaction history</Check><Check>Translate content with human review</Check><Check>Detect anomalies and payment exceptions</Check></ul></article>
            <article><span>NEXT</span><h3>Localize intelligence.</h3><ul><Check>Retrieval grounded in approved local sources</Check><Check>Small, task-specific models where useful</Check><Check>Policy-aware relevance and send-time optimization</Check><Check>Privacy-preserving evaluation by market</Check></ul></article>
            <article className="guardrails"><span>NON-NEGOTIABLE</span><h3>Responsible by design.</h3><p>Consent and purpose limitation · least-privilege access · provenance · evaluation · human escalation · red-team testing · retention controls · explainable decisions.</p></article>
          </div>
        </div>
      </section>

      <section id="roadmap" className="section roadmap">
        <div className="section-head">
          <div><p className="eyebrow">05 · EXECUTION ROADMAP</p><h2>Sequence for evidence,<br/>not ambition.</h2></div>
          <p>Start with one high-trust use case, prove the operating loop, then expand by repeatability—not by geography or features alone.</p>
        </div>
        <div className="timeline">
          {[
            ["0–30 DAYS","ALIGN","Make reality visible","Validate product state, partner pipeline, economics, architecture, compliance boundaries and team capability.",["Product truth map","Risk & control register","Baseline scorecard"]],
            ["31–60 DAYS","DESIGN","Choose the proving ground","Select one partner archetype and one transactional journey; define service blueprint, ownership and launch gates.",["Reference journey","Target operating model","Pilot business case"]],
            ["61–90 DAYS","PROVE","Launch a controlled pilot","Ship with one processor, instrument end to end, rehearse exceptions, and measure trust as rigorously as conversion.",["Pilot live","Incident playbooks","Evidence review"]],
            ["3–12 MONTHS","SCALE","Productize what repeats","Standardize integrations, onboarding and support; expand payment methods and markets only when controls travel with them.",["Partner playbook","Normalized ledger","Market readiness gates"]]
          ].map((x,i)=><article key={x[0] as string}><div className="time-num">0{i+1}</div><span>{x[0] as string}</span><small>{x[1] as string}</small><h3>{x[2] as string}</h3><p>{x[3] as string}</p><ul>{(x[4] as string[]).map(y=><Check key={y}>{y}</Check>)}</ul></article>)}
        </div>
        <div className="decisions">
          <div><p className="eyebrow">LEADERSHIP DISCUSSION</p><h3>Five decisions that unlock the plan.</h3></div>
          <div>{[
            ["What is the first action we want a trusted message to trigger?","Use case focus"],
            ["Who is legally and operationally the merchant of record?","Payments scope"],
            ["Which partner segment has urgency, repeat volume and a short path to proof?","Go-to-market"],
            ["What information may the intelligence layer use—and for what purpose?","Data governance"],
            ["Which failures must the company be able to resolve before launch?","Operational readiness"]
          ].map((x,i)=><button key={x[0]} onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}><span>0{i+1}</span><b>{x[0]}</b><small>{x[1]}</small><i>{open===i?"−":"+"}</i>{open===i&&<p>Assign one accountable executive, document the decision and assumptions, define the measure of success, and set a review date.</p>}</button>)}</div>
        </div>
      </section>

      <section className="closing">
        <p className="eyebrow">JOE KESSLER · GPOST GENERAL MANAGER CANDIDACY</p>
        <h2>The opportunity is to make<br/>place a platform for <em>progress.</em></h2>
        <p>Build the transaction layer carefully. Build the operating model deliberately. Let trust compound.</p>
        <button onClick={() => navigate("strategy")}>Return to the thesis ↑</button>
      </section>

      <footer><span>GPOST GROWTH STRATEGY · AUGUST 2026</span><span>Public sources: <a href="https://www.gpost.com/about.php" target="_blank" rel="noreferrer">Purpose</a> · <a href="https://www.gpost.com/technology.php" target="_blank" rel="noreferrer">Technology</a> · <a href="https://www.gpost.com/faqs.php" target="_blank" rel="noreferrer">Product FAQ</a>. Recruiter context and strategic hypotheses are labeled separately.</span></footer>
    </main>
  );
}
