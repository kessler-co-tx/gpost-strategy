"use client";

import Link from "next/link";

export function StrategyClosing({ navigate }: { navigate: (id: string) => void }) {
  return (
    <>
      <section className="closing">
        <p className="eyebrow">JOE KESSLER · GPOST GENERAL MANAGER CANDIDACY</p>
        <h2>The opportunity is to make<br/>place a platform for <em>progress.</em></h2>
        <p>Build the transaction layer carefully. Build the operating model deliberately. Let trust compound.</p>
        <button onClick={() => navigate("strategy")}>Return to the thesis ↑</button>
      </section>
      <footer><span>GPOST GROWTH STRATEGY · AUGUST 2026 · <Link href="/brand">BRAND SYSTEM</Link></span><span>Public sources: <a href="https://www.gpost.com/about.php" target="_blank" rel="noreferrer">Purpose</a> · <a href="https://www.gpost.com/technology.php" target="_blank" rel="noreferrer">Technology</a> · <a href="https://www.gpost.com/faqs.php" target="_blank" rel="noreferrer">Product FAQ</a>. Recruiter context and strategic hypotheses are labeled separately.</span></footer>
    </>
  );
}
