import { useEffect, useRef, useState } from 'react'
import { content } from '../data/content'

export function CertificateSection() {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  return (
    <section className="certificate-section section-wrap" id="chung-nhan" aria-labelledby="certificate-title">
      <div className="certificate-card" data-motion="left">
        <div className="section-heading">
          <div className="section-title-row">
            <div className="section-kicker">
              <p className="eyebrow">Nguồn gốc & bàn tay nghệ nhân</p>
              <span className="heading-rule" aria-hidden="true" />
            </div>
            <h2 id="certificate-title">Giấy chứng nhận</h2>
          </div>
          <p className="section-intro">
            Mỗi tác phẩm mang trong mình câu chuyện của người làm nghề và giá trị
            được gìn giữ qua nhiều thế hệ.
          </p>
        </div>

        <div className="certificate-frame">
          {content.certificatePath ? (
            <button
              className="certificate-image-button"
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Mở ảnh giấy chứng nhận kích thước lớn"
            >
              <img src={content.certificatePath} alt={content.certificateAlt} />
              <span className="image-hint">Chạm để xem rõ hơn</span>
            </button>
          ) : (
            <div className="certificate-placeholder" role="img" aria-label="Vị trí ảnh giấy chứng nhận đang chờ tài nguyên thật">
              <span className="certificate-placeholder-icon" aria-hidden="true">✳</span>
              <p className="placeholder-label">KHU VỰC HÌNH ẢNH CHỨNG NHẬN</p>
              <p className="placeholder-instruction">
                Thay <code>certificatePath</code> trong <code>src/data/content.ts</code>{' '}
                bằng đường dẫn ảnh chứng nhận thật do chủ dự án cung cấp.
              </p>
              <p className="placeholder-warning">
                Chưa có ảnh chứng nhận — không sử dụng nội dung minh họa thay thế.
              </p>
            </div>
          )}
        </div>
        <p className="certificate-caption">
          Tài liệu chứng nhận được hiển thị nguyên bản từ hình ảnh do chủ dự án cung cấp.
        </p>
      </div>

      <dialog
        className="lightbox"
        ref={dialogRef}
        aria-label="Ảnh giấy chứng nhận phóng lớn"
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false)
        }}
      >
        <button
          className="lightbox-close"
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Đóng ảnh giấy chứng nhận"
        >
          <span aria-hidden="true">×</span>
        </button>
        {content.certificatePath && (
          <img src={content.certificatePath} alt={content.certificateAlt} />
        )}
      </dialog>
    </section>
  )
}
