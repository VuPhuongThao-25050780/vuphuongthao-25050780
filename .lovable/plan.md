## Mục tiêu
Xuất bản portfolio (1 trang) lên **GitHub Pages** mà không bị: trắng trang, lỗi 404 khi refresh, và mất hình ảnh/PDF.

## Vì sao hiện tại không chạy được trên GitHub Pages
1. **SSR (chạy server)** — TanStack Start render phía server (Cloudflare Worker). GitHub Pages không có server ⇒ trang trắng.
2. **Ảnh & PDF trên Lovable CDN** — mọi file đang trỏ tới `/__l5e/assets-v1/...`, đường dẫn này chỉ tồn tại trên hạ tầng Lovable ⇒ lên GitHub Pages 404 hết ảnh.
3. **Base path** — GitHub Pages phục vụ web ở `https://user.github.io/ten-repo/`, không phải gốc `/` ⇒ sai đường dẫn asset và JS.

## Việc cần làm

### 1. Chuyển sang xuất tĩnh (SSG / prerender)
- Cấu hình build prerender trang chủ `/` thành HTML tĩnh (không cần server runtime).
- Thêm file `404.html` (copy từ `index.html`) để GitHub Pages không lỗi 404 khi refresh/deep-link.
- Thêm `.nojekyll` để GitHub Pages không bỏ qua thư mục `_...`.

### 2. Đưa toàn bộ ảnh/PDF vào repo (bỏ CDN)
- Tải tất cả file từ các `*.asset.json` (minhchung1..6, avatar, baocao PDF/DOCX) về thư mục `public/assets/...`.
- Sửa `src/routes/index.tsx` để tham chiếu ảnh/PDF bằng đường dẫn nội bộ (kèm base path) thay vì URL CDN.
- Đây là phần chiếm nhiều thời gian nhất (khoảng vài chục file).

### 3. Cấu hình base path theo tên repo
- Đặt `base` = `/ten-repo/` trong cấu hình Vite để JS/CSS/ảnh load đúng.
- Nếu dùng domain riêng hoặc repo `user.github.io` thì base = `/`.

### 4. Quy trình deploy
- Tạo GitHub Action build ra thư mục tĩnh rồi publish lên nhánh `gh-pages`, hoặc build thủ công rồi push.

## Cần bạn cho biết
- **Tên repo GitHub** (để đặt base path đúng), và bạn dùng repo thường hay `username.github.io`?

## Lưu ý quan trọng (cân nhắc trước khi làm)
- Template Lovable được thiết kế cho hạ tầng Lovable, nên chuyển sang GitHub Pages là thay đổi lớn, dễ phát sinh lỗi và khó bảo trì về sau.
- Nút **Publish** của Lovable (`vuphuongthao25050780.lovable.app`) đã chạy sẵn đầy đủ, đúng ngay, và cũng cho gắn tên miền riêng miễn phí — nhẹ nhàng hơn nhiều so với hướng GitHub Pages.
