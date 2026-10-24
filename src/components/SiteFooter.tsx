import { content } from '../data/content'

export function SiteFooter() {
  return (
    <footer className="site-footer" data-motion="scale">
      <span className="footer-mark" aria-hidden="true">✳</span>
      <p>{content.footer}</p>
      <span className="footer-rule" aria-hidden="true" />
      <small>© {new Date().getFullYear()} {content.brandName}</small>
    </footer>
  )
}
