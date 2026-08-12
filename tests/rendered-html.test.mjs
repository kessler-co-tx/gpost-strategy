import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("ships the two-view GPOST narrative", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
  ]);

  assert.match(page, /type View = "gpost" \| "strategy"/);
  assert.match(page, /A Digital Address for the/);
  assert.match(page, /Build the Team/);
  assert.match(page, /From Trusted Information/);
  assert.match(page, /Make Performance/);
  assert.match(page, /SOPs & Ownership/);
  assert.match(page, /SLAs & Escalation/);
  assert.match(page, /Build a Technology/);
  assert.match(page, /URLSearchParams/);
  assert.match(layout, /GPOST \| Product & Operating Strategy/);
  assert.match(css, /data-view="strategy"/);
  assert.doesNotMatch(page, /Glassdoor|merchant of record|NASDAQ/i);
});

test("keeps internal evidence labels off the presentation surface", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");
  const strategy = page.slice(page.indexOf("function StrategyView"), page.indexOf("function SectionIntro"));
  assert.doesNotMatch(page, /Publicly documented/);
  assert.doesNotMatch(page, /My interpretation/);
  assert.doesNotMatch(page, /Interview-informed/);
  assert.doesNotMatch(page, /Proposal to validate/);
  assert.doesNotMatch(strategy, /General Manager|\bGM\b|Joe|recruiter|role emphasis|Operating proposal|Planning scenario|Candidate-verified/i);
  assert.doesNotMatch(strategy, /Office & People|Technology & Artificial Intelligence/);
  assert.doesNotMatch(strategy, /Executive Readout|scorecard-principle/);
  assert.doesNotMatch(strategy, /—/);
});

test("ships the requested light-side refinement", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");
  assert.match(page, /tags: \["Verified Access", "Watch Zones", "Geographic Targeting"\]/);
  assert.match(page, /enabling trusted organizations to deliver relevant information/);
  assert.doesNotMatch(page, /matter to them—so trusted organizations/);
  assert.match(page, /tags: \["Publisher Selection", "Closed Channel", "Block & Report"\]/);
  assert.match(page, /tags: \["Emergency Alerts", "Rich Media", "Requests"\]/);
  assert.match(page, /let recipients respond when the situation calls for it/);
  assert.match(page, /tags: \["Government Services", "Payments", "Localized Intelligence"\]/);
  assert.match(page, /Publisher or Merchant/);
  assert.match(page, /Mobile Money/);
  assert.match(page, /A2A/);
  assert.match(page, /M-Pesa/);
  assert.match(page, /VietQR/);
  assert.match(page, /items: \["Stripe", "M-Pesa", "VietQR"\]/);
  assert.match(page, /items: \["Cards", "Bank Transfer", "Mobile Money", "A2A"\]/);
  assert.match(page, /Cards · Bank Transfers · Mobile Money · A2A/);
  assert.match(page, /rail-connection-mobile/);
  assert.match(page, /rail-connection-a2a/);
  assert.match(page, /control-card-head/);
  assert.doesNotMatch(page, /Phone or Wallet|Mobile-Money Provider|Payer Bank|A2A Network|Partner Example|Partner \/ Network Example/);
  assert.doesNotMatch(page, /Civic Center|About Offline Access|Working Model|Working Possibilities|Open Leadership Questions|Public pages appear/);
});
