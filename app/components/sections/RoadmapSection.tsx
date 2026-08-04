"use client";

import { Check } from "./StrategyPrimitives";

const timeline = [
  ["0–30 DAYS", "ALIGN", "Make reality visible", "Validate product state, partner pipeline, economics, architecture, compliance boundaries and team capability.", ["Product truth map", "Risk & control register", "Baseline scorecard"]],
  ["31–60 DAYS", "DESIGN", "Choose the proving ground", "Select one partner archetype and one transactional journey; define service blueprint, ownership and launch gates.", ["Reference journey", "Target operating model", "Pilot business case"]],
  ["61–90 DAYS", "PROVE", "Launch a controlled pilot", "Ship with one processor, instrument end to end, rehearse exceptions, and measure trust as rigorously as conversion.", ["Pilot live", "Incident playbooks", "Evidence review"]],
  ["3–12 MONTHS", "SCALE", "Productize what repeats", "Standardize integrations, onboarding and support; expand payment methods and markets only when controls travel with them.", ["Partner playbook", "Normalized ledger", "Market readiness gates"]]
] as const;

const decisions = [
  ["What is the first action we want a trusted message to trigger?", "Use case focus"],
  ["Who is legally and operationally the merchant of record?", "Payments scope"],
  ["Which partner segment has urgency, repeat volume and a short path to proof?", "Go-to-market"],
  ["What information may the intelligence layer use—and for what purpose?", "Data governance"],
  ["Which failures must the company be able to resolve before launch?", "Operational readiness"]
];

export function RoadmapSection({ open, onToggle }: { open: number | null; onToggle: (index: number) => void }) {
  return (
    <section id="roadmap" className="section roadmap">
      <div className="section-head">
        <div><p className="eyebrow">05 · EXECUTION ROADMAP</p><h2>Sequence for evidence,<br/>not ambition.</h2></div>
        <p>Start with one high-trust use case, prove the operating loop, then expand by repeatability—not by geography or features alone.</p>
      </div>
      <div className="timeline">
        {timeline.map((x, i) => <article key={x[0]}><div className="time-num">0{i + 1}</div><span>{x[0]}</span><small>{x[1]}</small><h3>{x[2]}</h3><p>{x[3]}</p><ul>{x[4].map(y => <Check key={y}>{y}</Check>)}</ul></article>)}
      </div>
      <div className="decisions">
        <div><p className="eyebrow">LEADERSHIP DISCUSSION</p><h3>Five decisions that unlock the plan.</h3></div>
        <div>{decisions.map((x, i) => <button key={x[0]} onClick={() => onToggle(i)} aria-expanded={open === i}><span>0{i + 1}</span><b>{x[0]}</b><small>{x[1]}</small><i>{open === i ? "−" : "+"}</i>{open === i && <p>Assign one accountable executive, document the decision and assumptions, define the measure of success, and set a review date.</p>}</button>)}</div>
      </div>
    </section>
  );
}
