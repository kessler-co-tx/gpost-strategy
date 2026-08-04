import { Badge } from "./StrategyPrimitives";

const paymentFlow = [
  ["1", "MESSAGE", "Verified publisher sends a bill, fee, booking or offer"],
  ["2", "ACTION", "User reviews context and chooses to pay inside GPOST"],
  ["3", "PROCESS", "Third-party partner tokenizes, authorizes and moves funds"],
  ["4", "CONFIRM", "GPOST records status, sends receipt and supports exceptions"]
];

export function PaymentsSection() {
  return (
    <section id="payments" className="section dark-section">
      <div className="section-head light">
        <div><p className="eyebrow">02 · THE TRANSACTION LAYER</p><h2>One GPOST experience.<br/><em>Regulated rails underneath.</em></h2></div>
        <div><Badge type="Hypothesis"/><p>Payments should be an enabling capability—not a detour into becoming a bank, gateway, or merchant of record.</p></div>
      </div>
      <div className="flow">
        {paymentFlow.map((x, i) => <article key={x[0]}><span>{x[0]}</span><div className={`flow-icon f${i + 1}`}/><small>{x[1]}</small><p>{x[2]}</p>{i < 3 && <b>→</b>}</article>)}
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
  );
}
