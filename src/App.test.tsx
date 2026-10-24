import { render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import App from './App'
import { content } from './data/content'

describe('the NFC landing page', () => {
  it('marks primary page components for replayable scroll motion', () => {
    render(<App />)

    expect(document.querySelectorAll('[data-motion]')).toHaveLength(5)
    expect(document.querySelector('[data-motion="left"]')).toBeInTheDocument()
    expect(document.querySelector('[data-motion="right"]')).toBeInTheDocument()
  })

  it('groups the certificate and thank-you sections into one side-by-side layout', () => {
    render(<App />)

    const contentGrid = document.querySelector('.content-grid')
    expect(contentGrid).toContainElement(screen.getByRole('region', { name: 'Giấy chứng nhận' }))
    expect(contentGrid).toContainElement(screen.getByRole('region', { name: content.thankYouTitle }))
  })

  it('scrolls to the certificate without adding a hash to the URL', () => {
    const scrollIntoView = vi.fn()
    HTMLElement.prototype.scrollIntoView = scrollIntoView
    window.history.replaceState({}, '', '/')
    render(<App />)

    screen.getByRole('button', { name: 'Giấy chứng nhận' }).click()

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' })
    expect(window.location.pathname + window.location.hash).toBe('/')
  })

  it('shows the certificate placeholder without presenting it as a real certificate', () => {
    render(<App />)

    expect(screen.getByRole('img', { name: /đang chờ tài nguyên thật/i })).toBeInTheDocument()
    expect(screen.getByText(/chưa có ảnh chứng nhận/i)).toBeInTheDocument()
  })

  it('shows the complete Vietnamese thank-you letter and the editable company placeholder', () => {
    render(<App />)
    const letter = screen.getByRole('region', { name: content.thankYouTitle })

    expect(within(letter).getByText(content.greeting)).toBeInTheDocument()
    expect(within(letter).getByText(content.companyName)).toBeInTheDocument()
    expect(screen.getByText(/mối quan hệ hợp tác bền vững giữa hai bên/i)).toBeInTheDocument()
  })
})
