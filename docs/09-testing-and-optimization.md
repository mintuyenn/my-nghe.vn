# 09 — Testing & Optimization

## Mục tiêu
Kiểm tra giao diện, nội dung, khả năng hoạt động và hiệu năng trước khi đưa website lên Internet.

## Kiểm tra chức năng
- Trang tải thành công.
- Logo và ảnh chứng nhận hiển thị đúng.
- Ảnh chứng nhận không bị méo.
- Nhấn ảnh mở được lightbox.
- Nút đóng lightbox hoạt động.
- Phím Escape đóng lightbox.
- Lời cảm ơn hiển thị đầy đủ dấu tiếng Việt.
- Không có liên kết hỏng hoặc nút giả không hoạt động.
- Không có lỗi JavaScript trong console.

## Kiểm tra responsive
- Kiểm tra các kích thước ở file `08-responsive-and-accessibility.md`.
- Không có horizontal overflow.
- Nội dung không bị che bởi viền hoặc họa tiết.
- Modal vẫn vừa màn hình điện thoại.

## Kiểm tra build
Chạy:
```bash
npm run build
npm run preview
```
Sửa tất cả lỗi build trước khi triển khai.

## Tối ưu
- Dùng ảnh có kích thước hợp lý.
- Không tải thư viện lớn nếu không cần.
- Không thêm API hoặc kết nối backend.
- Tránh hiệu ứng nặng.
- Kiểm tra font có hỗ trợ tiếng Việt.
- Kiểm tra metadata cơ bản và favicon.

## Kiểm tra nội dung
- Không tự sửa nội dung trên ảnh giấy chứng nhận.
- Không hiển thị thông tin mẫu như thông tin thật.
- Không tuyên bố website xác thực chính hãng nếu không có cơ chế xác thực.
- Xóa mọi nội dung placeholder trước khi phát hành hoặc ghi rõ để chủ dự án thay.

## Kết quả mong đợi
Website build thành công, hoạt động ổn định, hiển thị tốt trên điện thoại và sẵn sàng triển khai.
