const backbone = [
  ["Risk & compliance", "Privacy · PCI scope · KYC/AML oversight · consent · partner due diligence"],
  ["Payment operations", "Reconciliation · refunds · disputes · settlement · processor management"],
  ["Global operations", "Localization · vendor governance · follow-the-sun coverage · market readiness"],
  ["Finance & people", "Unit economics · forecasting · hiring system · performance · workforce planning"]
];

export function OperatingModelSection() {
  return (
    <section id="operating-model" className="section operating">
      <div className="section-head">
        <div><p className="eyebrow">03 · THE OPERATING SYSTEM</p><h2>Build trust twice:<br/>for partners and people.</h2></div>
        <p>The GM&apos;s central job is to turn product capability into a repeatable service. Three outcome teams share one operational backbone and one scorecard.</p>
      </div>
      <div className="org-map">
        <div className="gm"><small>GENERAL MANAGER</small><strong>One owner for growth, delivery &amp; trust</strong><span>Portfolio · P&amp;L · operating cadence · risk acceptance</span></div>
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
        <div>{backbone.map((x, i) => <article key={x[0]}><span>0{i + 1}</span><strong>{x[0]}</strong><p>{x[1]}</p></article>)}</div>
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
  );
}
