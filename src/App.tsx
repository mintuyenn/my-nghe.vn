import { useEffect } from 'react'
import { BrandHeader } from './components/BrandHeader'
import { CertificateSection } from './components/CertificateSection'
import { IntroSection } from './components/IntroSection'
import { SiteFooter } from './components/SiteFooter'
import { ThankYouSection } from './components/ThankYouSection'

function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const root = document.documentElement
    const targets = document.querySelectorAll<HTMLElement>('[data-motion]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('motion-active', entry.isIntersecting)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
    )

    targets.forEach((target) => observer.observe(target))
    root.classList.add('motion-ready')

    return () => {
      observer.disconnect()
      targets.forEach((target) => target.classList.remove('motion-active'))
      root.classList.remove('motion-ready')
    }
  }, [])

  return (
    <div className="page-shell">
      <main className="page-main">
        <div className="dark-opening">
          <BrandHeader />
          <IntroSection />
        </div>
        <div className="content-grid">
          <CertificateSection />
          <ThankYouSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
