# 02 — Khởi tạo React + Vite + Tailwind CSS

## Mục tiêu
Thiết lập nền tảng frontend để xây dựng website tĩnh.

## Bước 1: Kiểm tra dự án
- Kiểm tra `package.json`, cấu trúc `src/`, cấu hình Vite và Tailwind.
- Nếu dự án đã có React + Vite, giữ nguyên và chỉ bổ sung phần còn thiếu.
- Không khởi tạo dự án mới bên trong một dự án đã tồn tại.

## Bước 2: Khởi tạo nếu chưa có dự án
Sử dụng Vite với React. Ưu tiên TypeScript nếu dự án mới; nếu chủ dự án yêu cầu JavaScript thuần, dùng React JavaScript nhất quán.

Ví dụ lệnh khởi tạo:
```bash
npm create vite@latest . -- --template react
npm install
```

## Bước 3: Cài Tailwind CSS
Kiểm tra phiên bản Tailwind phù hợp với cấu trúc Vite hiện tại trước khi cấu hình. Không trộn hướng dẫn Tailwind v3 và v4.
- Cài gói cần thiết theo tài liệu phiên bản đang dùng.
- Cấu hình CSS entry point.
- Đảm bảo các class Tailwind được biên dịch.
- Xóa style mẫu của Vite chỉ khi đã xác nhận không còn sử dụng.

## Bước 4: Cấu trúc thư mục đề xuất
```text
src/
├── assets/
├── components/
│   ├── BrandHeader.jsx
│   ├── CertificateSection.jsx
│   ├── ThankYouSection.jsx
│   └── SiteFooter.jsx
├── data/
│   └── content.js
├── App.jsx
├── index.css
└── main.jsx
public/
└── images/
    ├── logo.png
    ├── certificate.jpg
    └── lacquer-background.jpg
```
Có thể đổi phần mở rộng thành `.tsx` nếu dùng TypeScript.

## Bước 5: Lệnh chạy
Đảm bảo các script `dev`, `build` và `preview` có trong `package.json`.
- Chạy `npm run dev`.
- Chạy `npm run build`.
- Sửa tất cả lỗi build trước khi tiếp tục.

## Kết quả mong đợi
Ứng dụng React khởi chạy thành công, Tailwind hoạt động và có cấu trúc sẵn sàng cho các component ở giai đoạn tiếp theo.
