"use client";

import { Badge } from "./StrategyPrimitives";

export function StrategyHero({ basePath, navigate }: { basePath: string; navigate: (id: string) => void }) {
  return (
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
      <div className="hero-map-wrap"><img className="hero-map-art" src={`${basePath}/brand/geographic-strategy-reference.png`} alt="A geographic network connecting place, communication, people, and trusted action" /></div>
      <div className="thesis-strip">
        <span>THE STRATEGIC THESIS</span>
        <p>Communication earns attention. <b>Action creates value.</b> Operations earns trust at scale.</p>
      </div>
    </section>
  );
}
