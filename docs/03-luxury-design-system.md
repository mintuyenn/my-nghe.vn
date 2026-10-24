# 03 — Luxury Design System

## Mục tiêu
Tạo ngôn ngữ thiết kế thống nhất cho website quà tặng sơn mài Việt Nam.

## Bảng màu
- Than đen: `#171614`
- Đỏ sơn mài trầm: `#781F26`
- Vàng champagne: `#C8A96B`
- Trắng ngà: `#F4EFE6`
- Nâu ấm: `#51483C`
- Màu chữ phụ trên nền sáng: `#6B6258`

Đặt màu dưới dạng CSS variables trong `src/index.css` để dễ điều chỉnh.

## Typography
- Tiêu đề: font serif thanh lịch, có hỗ trợ tiếng Việt đầy đủ.
- Nội dung: font sans-serif dễ đọc.
- Chọn font có thể tải ổn định; nếu dùng Google Fonts, có fallback hệ thống.
- Không dùng quá nhiều kiểu chữ cùng lúc.
- Đảm bảo dấu tiếng Việt hiển thị chính xác.

## Quy tắc giao diện
- Mobile-first, nội dung xếp theo chiều dọc.
- Chiều rộng dòng chữ vừa phải, line-height thoáng.
- Vàng champagne chỉ là điểm nhấn, không phủ quá nhiều diện tích.
- Dùng đường viền mảnh, khoảng trắng và hình ảnh lớn để tạo cảm giác cao cấp.
- Có thể dùng họa tiết hoa sen, vân sơn mài hoặc hình học truyền thống ở mức tiết chế.
- Không dùng gradient sặc sỡ, bóng đổ nặng hoặc hiệu ứng gây rối.
- Tránh cảm giác giống website thương mại điện tử đại trà.

## Thành phần thiết kế
Xây dựng các utility/class hoặc component dùng chung cho:
- Container căn giữa.
- Section spacing.
- Eyebrow/nhãn chữ nhỏ.
- Tiêu đề section.
- Đường kẻ trang trí.
- Khung hình ảnh cao cấp.
- Nút hoặc điều khiển mở ảnh lớn.

## Tương phản và khả năng đọc
- Kiểm tra độ tương phản chữ trên nền.
- Không dùng chữ vàng nhạt cỡ nhỏ trên nền sáng.
- Không dùng chữ quá nhỏ cho nội dung lời cảm ơn.
- Thiết kế phải đẹp cả trên màn hình nhỏ và desktop.

## Kết quả mong đợi
Có design system nhất quán, được dùng lại trong toàn bộ trang thay vì viết màu sắc và khoảng cách tùy tiện ở từng component.
