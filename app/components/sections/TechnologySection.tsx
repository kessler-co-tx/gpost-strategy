import { Badge, Check } from "./StrategyPrimitives";

const stackLayers = [
  ["EXPERIENCE", "Mobile · web · partner console · assisted support"],
  ["INTELLIGENCE", "Relevance · translation · summarization · intent · agent assist"],
  ["DOMAIN SERVICES", "Place graph · messaging · publisher · payment · identity · consent"],
  ["DATA & CONTROL", "Event stream · operational ledger · feature store · policy · audit"],
  ["PLATFORM", "API gateway · workflow engine · observability · CI/CD · secrets"]
];

export function TechnologySection() {
  return (
    <section id="technology" className="section tech">
      <div className="section-head light">
        <div><p className="eyebrow">04 · AI &amp; TECHNOLOGY</p><h2>Intelligence at the edge.<br/><em>Governance at the core.</em></h2></div>
        <div><Badge type="Hypothesis"/><p>A composable platform can personalize locally while preserving one global control plane for consent, safety, observability and audit.</p></div>
      </div>
      <div className="stack">
        <div className="stack-diagram">
          {stackLayers.map((x, i) => <div key={x[0]}><span>0{i + 1}</span><b>{x[0]}</b><p>{x[1]}</p></div>)}
        </div>
        <div className="ai-cards">
          <article><span>NOW</span><h3>Assist people; don&apos;t automate judgment.</h3><ul><Check>Classify and route partner/customer cases</Check><Check>Summarize interaction history</Check><Check>Translate content with human review</Check><Check>Detect anomalies and payment exceptions</Check></ul></article>
          <article><span>NEXT</span><h3>Localize intelligence.</h3><ul><Check>Retrieval grounded in approved local sources</Check><Check>Small, task-specific models where useful</Check><Check>Policy-aware relevance and send-time optimization</Check><Check>Privacy-preserving evaluation by market</Check></ul></article>
          <article className="guardrails"><span>NON-NEGOTIABLE</span><h3>Responsible by design.</h3><p>Consent and purpose limitation · least-privilege access · provenance · evaluation · human escalation · red-team testing · retention controls · explainable decisions.</p></article>
        </div>
      </div>
    </section>
  );
}
