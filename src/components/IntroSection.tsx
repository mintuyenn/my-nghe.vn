function scrollToCertificate() {
  document.getElementById('chung-nhan')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function IntroSection() {
  return (
    <section className="intro-section" id="home" aria-labelledby="intro-title" data-motion="rise">
      <p className="eyebrow">Tinh hoa sơn mài — trọn lời tri ân</p>
      <span className="ornament" aria-hidden="true">✳</span>
      <h1 id="intro-title">Nét tinh hoa<br />lưu dấu thời gian</h1>
      <p className="intro-description">
        Từ lớp sơn được mài giũa qua tháng năm đến từng đường nét thủ công,
        mỗi tác phẩm là lời gửi gắm trân trọng từ nghệ nhân Việt.
      </p>
      <button className="text-link" type="button" onClick={scrollToCertificate}>
        Khám phá câu chuyện <span aria-hidden="true">↓</span>
      </button>
    </section>
  )
}
