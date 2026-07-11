# Xuất bản lên GitHub Pages

Trang web này đã được cấu hình để chạy dưới dạng **web tĩnh** trên GitHub Pages
(không cần server), toàn bộ ảnh/PDF đã được đưa vào repo tại `public/__l5e/...`
nên không còn phụ thuộc CDN.

## Cách 1 — Tự động bằng GitHub Actions (khuyến nghị, hỗ trợ mọi loại repo)

1. Đẩy code lên GitHub (nhánh `main`).
2. Vào **Settings → Pages → Build and deployment → Source**, chọn **GitHub Actions**.
3. Mỗi lần push, workflow `.github/workflows/deploy-ghpages.yml` sẽ tự build và deploy.
   Base path được tự tính theo tên repo, nên ảnh và JS luôn tải đúng.

## Cách 2 — Deploy thủ công từ thư mục `/docs`

Phù hợp khi repo tên là `username.github.io` hoặc dùng tên miền riêng (chạy ở gốc `/`).

```bash
# Repo chạy ở gốc tên miền:
bun run build:ghpages

# Repo dạng project (chạy ở /ten-repo/):
GH_BASE=/ten-repo/ bun run build:ghpages
```

Sau đó commit thư mục `docs/`, rồi vào **Settings → Pages → Source → Deploy from a branch**,
chọn nhánh `main` và thư mục `/docs`.

## Lưu ý

- File `404.html` và `.nojekyll` được tạo tự động để tránh lỗi 404 khi refresh/deep-link.
- Đây là bản build tĩnh riêng cho GitHub Pages; bản chạy trên Lovable (SSR) vẫn hoạt động bình thường.
