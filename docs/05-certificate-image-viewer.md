# 05 — Certificate Image Viewer

## Mục tiêu
Hiển thị giấy chứng nhận thật từ hình ảnh do chủ dự án cung cấp.

## Tài nguyên
Ưu tiên đặt ảnh tại `public/images/certificate.jpg` hoặc cập nhật đường dẫn trong file dữ liệu nếu tên file thực tế khác.

Không vẽ lại chứng nhận, không chỉnh sửa nội dung trên chứng nhận, không tự thêm chữ ký, con dấu, cơ quan cấp hoặc thông tin pháp lý.

Nếu chưa có ảnh thật, tạo placeholder rõ ràng và ghi chú nơi thay ảnh.

## Thiết kế
- Đặt chứng nhận trong khung sang trọng, phù hợp bảng màu đen, trắng ngà và vàng champagne.
- Giữ nguyên tỷ lệ ảnh bằng `width: 100%` và `height: auto`; không ép ảnh vào khung gây méo.
- Giới hạn chiều rộng trên desktop để ảnh không quá lớn.
- Trên điện thoại, ảnh chiếm chiều rộng phù hợp và có lề hai bên.
- Có thể dùng nền tối, đường viền vàng mảnh và khoảng đệm vừa đủ.

## Mở ảnh lớn
Khi người dùng nhấn ảnh:
- Mở lightbox/modal có nền tối.
- Hiển thị ảnh ở kích thước lớn nhất có thể trong viewport, giữ nguyên tỷ lệ.
- Có nút đóng rõ ràng.
- Cho phép đóng bằng phím Escape.
- Có thể đóng khi nhấn vùng nền bên ngoài ảnh.
- Ngăn nội dung modal tràn khỏi màn hình.
- Thêm `alt` mô tả ảnh và trạng thái focus phù hợp.
- Nếu không muốn dùng modal, có thể mở ảnh gốc trong tab mới, nhưng ưu tiên lightbox.

## Hiệu năng
- Không nén ảnh đến mức làm chữ trên giấy chứng nhận khó đọc.
- Dùng định dạng và kích thước phù hợp với ảnh gốc.
- Không dùng lazy loading nếu ảnh nằm ngay đầu trang và cần hiển thị tức thì; có thể dùng lazy loading nếu section ở sâu phía dưới.

## Kết quả mong đợi
Khách xem được toàn bộ giấy chứng nhận rõ ràng trên điện thoại, không bị méo hình và có thể phóng to để đọc.
