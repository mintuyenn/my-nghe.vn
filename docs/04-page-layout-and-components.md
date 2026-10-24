# 04 — Page Layout & Components

## Mục tiêu
Xây dựng một landing page tĩnh duy nhất bằng các component React có thể tái sử dụng.

## Thứ tự nội dung
1. Header thương hiệu.
2. Phần mở đầu ngắn giới thiệu tinh thần quà tặng.
3. Hình ảnh sản phẩm (chỉ khi có ảnh thật được cung cấp).
4. Giấy chứng nhận.
5. Lời cảm ơn.
6. Footer thương hiệu.

Có thể điều chỉnh vị trí ảnh sản phẩm để đạt bố cục đẹp hơn, nhưng hai nội dung trọng tâm phải luôn là giấy chứng nhận và lời cảm ơn.

## Component đề xuất
- `BrandHeader`: logo, tên thương hiệu và tagline.
- `IntroSection`: tiêu đề mở đầu ngắn, không lấn át nội dung chính.
- `CertificateSection`: hiển thị ảnh giấy chứng nhận.
- `ThankYouSection`: lời cảm ơn.
- `SiteFooter`: tagline và bản quyền.
- `ImageLightbox`: mở ảnh chứng nhận lớn khi người dùng nhấn vào.

## Dữ liệu nội dung
Tách các nội dung có thể chỉnh sửa vào `src/data/content.js`, ví dụ:
- Tên thương hiệu.
- Tagline.
- Đường dẫn logo.
- Đường dẫn ảnh chứng nhận.
- Nội dung lời cảm ơn.
- Tên doanh nghiệp ký cuối thư.
- Nội dung footer.

Không cần database; đây chỉ là một file dữ liệu tĩnh trong source code.

## Header
- Hiển thị logo thật nếu đã có.
- Có thể dùng nền đen than hoặc trắng ngà.
- Dùng đường viền vàng mảnh hoặc họa tiết nhỏ.
- Trên điện thoại, không để header quá cao.

## Bố cục chung
- Container căn giữa.
- Nội dung có khoảng cách thoáng.
- Các section có phân cấp thị giác rõ ràng.
- Tránh lặp lại quá nhiều họa tiết.
- Dùng semantic HTML phù hợp như `header`, `main`, `section`, `footer`.

## Kết quả mong đợi
Trang có cấu trúc component rõ ràng, dễ sửa nội dung và không lặp code không cần thiết.
