# 01 — Project Requirements

## Mục tiêu
Xây dựng một website tĩnh giới thiệu quà tặng sơn mài cao cấp bằng **ReactJS + Vite + Tailwind CSS**. Website được mở khi khách hàng chạm điện thoại vào chip NFC trên sản phẩm.

Tất cả chip NFC sử dụng **cùng một URL** và mở **cùng một trang web**. Website không phân biệt mã NFC hoặc sản phẩm.

## Phạm vi bắt buộc
- Một trang landing page duy nhất.
- Hai nội dung chính:
  1. Hình ảnh giấy chứng nhận sản phẩm/nghệ nhân do chủ dự án cung cấp.
  2. Lời cảm ơn trang trọng dành cho đối tác VIP.
- Logo và ảnh lấy từ tài nguyên do chủ dự án cung cấp.
- Thiết kế luxury lấy cảm hứng từ nghệ thuật sơn mài Việt Nam.
- Mobile-first, tối ưu cho iPhone và Android.
- Có thể thêm hình ảnh sản phẩm hoặc họa tiết trang trí nếu có tài nguyên phù hợp.

## Không xây dựng
- Không backend, database, API hoặc CMS.
- Không đăng nhập, đăng ký, giỏ hàng hoặc thanh toán.
- Không tạo trang riêng cho từng sản phẩm.
- Không tích hợp SDK NFC. Chip NFC chỉ lưu URL HTTPS.
- Không tuyên bố xác thực hàng thật bằng dấu tích xanh nếu không có hệ thống xác thực thực tế.
- Không tự tạo hoặc sửa nội dung của giấy chứng nhận thật.

## Công nghệ
- ReactJS.
- Vite.
- Tailwind CSS.
- JavaScript hoặc TypeScript theo lựa chọn thống nhất của dự án. Ưu tiên giữ nguyên công nghệ hiện có nếu đang có dự án.
- Lucide React chỉ khi cần icon.
- CSS/React cho animation nhẹ; không thêm thư viện lớn nếu không cần.

## Hướng dẫn cho AI coding assistant
1. Kiểm tra cấu trúc dự án hiện tại trước khi sửa.
2. Không ghi đè hoặc xóa các file hiện có khi chưa hiểu mục đích.
3. Nếu dự án chưa được khởi tạo, sử dụng Vite + React và cấu hình Tailwind CSS theo phiên bản đang cài đặt.
4. Thực hiện từng file tài liệu theo thứ tự.
5. Sau mỗi giai đoạn, chạy build hoặc kiểm tra tương ứng và sửa lỗi phát sinh.
6. Không dùng ảnh giả thay cho tài nguyên thật đã được cung cấp.
7. Nếu thiếu logo hoặc giấy chứng nhận, tạo placeholder có ghi rõ để dễ thay thế.

## Tiêu chí hoàn thành
- Website chạy được và build thành công.
- Một URL duy nhất dùng được cho tất cả chip NFC.
- Giao diện dọc, sang trọng, đọc dễ trên điện thoại.
- Ảnh chứng nhận giữ đúng tỷ lệ và có thể mở lớn.
- Lời cảm ơn rõ ràng, trang trọng.
- Không có backend, database hoặc API.
