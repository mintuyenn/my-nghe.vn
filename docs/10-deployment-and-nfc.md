# 10 — Deployment & NFC

## Mục tiêu
Đưa website tĩnh lên Internet bằng HTTPS và sử dụng cùng một URL cho nhiều chip NFC.

## Triển khai
Có thể dùng dịch vụ hosting tĩnh hỗ trợ HTTPS như:
- Vercel.
- Netlify.
- GitHub Pages nếu cấu hình dự án phù hợp.

Chọn dịch vụ phù hợp với cách lưu source code và yêu cầu tên miền. Không cần máy chủ backend.

## Quy trình triển khai
1. Kiểm tra `npm run build` thành công.
2. Đưa source code lên Git repository nếu cần.
3. Import repository vào hosting hoặc triển khai theo hướng dẫn của nền tảng.
4. Cấu hình build command phù hợp, thường là `npm run build`.
5. Cấu hình output directory theo công cụ đang dùng; với Vite thường là `dist`.
6. Cấp tên miền và xác nhận HTTPS hoạt động.
7. Mở URL trên iPhone và Android để kiểm tra.
8. Kiểm tra tất cả ảnh, font và đường dẫn tài nguyên sau khi deploy.

## URL cho NFC
Ví dụ URL website:
`https://tenmien-cua-ban.vn/`

Ghi **chính URL này** vào tất cả chip NFC. Không cần tạo URL riêng cho từng sản phẩm nếu yêu cầu là mọi chip đều mở cùng một trang.

Khi cập nhật nội dung website và deploy lại, mọi chip tiếp tục mở cùng URL và tự hiển thị phiên bản nội dung mới.

## Lưu ý NFC
- Website cần truy cập được qua HTTPS công khai.
- NFC tag cần ghi đúng URL đầy đủ.
- Sau khi ghi chip, kiểm tra bằng điện thoại iPhone và Android tương thích.
- Điện thoại có thể yêu cầu người dùng chạm thông báo liên kết; NFC không đảm bảo tự mở trình duyệt trong mọi tình huống.
- Không cần tích hợp SDK NFC vào website chỉ để mở URL.
- Nếu website chỉ là trang thông tin chung, không thể xác định khách đang chạm chip của sản phẩm nào.
- Dùng cùng một URL không phải là cơ chế chống sao chép hay xác thực hàng thật.

## Kết quả mong đợi
Một website tĩnh công khai, chạy bằng HTTPS, có thể được mở từ nhiều chip NFC khác nhau bằng cùng một URL.
