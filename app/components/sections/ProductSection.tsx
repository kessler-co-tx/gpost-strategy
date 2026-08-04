import { Badge, Check } from "./StrategyPrimitives";

export function ProductSection() {
  return (
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
  );
}
