import { content } from '../data/content'

export function ThankYouSection() {
  return (
    <section className="thank-you-section" id="tri-an" aria-labelledby="thank-you-title">
      <div className="thank-you-card" data-motion="right">
        <div className="thank-you-heading-row">
          <div className="section-kicker">
            <p className="eyebrow">Gửi người đồng hành quý mến</p>
            <span className="heading-rule" aria-hidden="true" />
          </div>
          <h2 id="thank-you-title">{content.thankYouTitle}</h2>
        </div>
        <div className="letter-copy">
          <p className="greeting">{content.greeting}</p>
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="signoff">{content.signoff}</p>
          <p className="company-name">{content.companyName}</p>
        </div>
        <span className="letter-seal" aria-hidden="true">✳</span>
      </div>
    </section>
  )
}
