"use client";

import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";

const nav = [
  ["strategy", "Thesis"], ["product", "Product"], ["payments", "Payments"],
  ["operating-model", "Operating model"], ["technology", "AI & technology"], ["roadmap", "Roadmap"]
];

export function StrategyHeader({ active, basePath, navigate }: { active: string; basePath: string; navigate: (id: string) => void }) {
  return (
    <header className="topbar">
      <button className="brand" onClick={() => navigate("strategy")} aria-label="Return to top">
        <img className="brand-wordmark" src={`${basePath}/brand/gpost-wordmark-reference.png`} alt="GPOST — need to know" />
        <img className="brand-icon" src={`${basePath}/brand/gpost-icon-reference.png`} alt="" />
        <span className="strategy-name">GPOST<br/><small>Growth Strategy</small></span>
      </button>
      <nav aria-label="Strategy sections">
        {nav.map(([id, label]) => <button key={id} className={active === id ? "active" : ""} onClick={() => navigate(id)}>{label}</button>)}
      </nav>
      <Link className="brand-guide-link" href="/brand">Brand system</Link>
      <ThemeToggle />
    </header>
  );
}
