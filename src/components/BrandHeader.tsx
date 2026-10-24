import { useEffect, useState } from 'react'
import { content } from "../data/content";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function BrandHeader() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 400)
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  return (
    <header className="site-header" data-motion="fade">
      <button
        className="brand-lockup"
        type="button"
        onClick={() => scrollToSection('home')}
        aria-label="Cuộn về đầu trang"
      >
        {content.logoPath ? (
          <img
            className="brand-logo"
            src={content.logoPath}
            alt={content.brandName}
          />
        ) : (
          <span
            className="logo-placeholder"
            aria-label="Vị trí logo thương hiệu"
          >
            <span>LOGO</span>
            <span className="logo-placeholder-caption">THƯƠNG HIỆU</span>
          </span>
        )}
        <span className="brand-copy">
          <span className="brand-name">{content.brandName}</span>
          <span className="brand-tagline">{content.tagline}</span>
        </span>
      </button>
      <nav className="header-actions" aria-label="Điều hướng nội dung">
        <button className="header-note" type="button" onClick={() => scrollToSection('chung-nhan')}>
          Giấy chứng nhận
        </button>
        <button className="header-note" type="button" onClick={() => scrollToSection('tri-an')}>
          Lời tri ân
        </button>
      </nav>
      {showBackToTop && (
        <button
          className="back-to-top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Quay về đầu trang"
          title="Quay về đầu trang"
        >
          <span aria-hidden="true">↑</span>
        </button>
      )}
    </header>
  );
}
