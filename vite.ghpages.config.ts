// Cấu hình build TĨNH riêng cho GitHub Pages (không dùng SSR).
// Dùng: GH_BASE=/ten-repo/ bun run build:ghpages
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { copyFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const base = process.env.GH_BASE || "/";
const outDir = "docs";

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    {
      name: "ghpages-spa-fallback",
      closeBundle() {
        const out = resolve(process.cwd(), outDir);
        const indexHtml = resolve(out, "index.ghpages.html");
        const realIndex = resolve(out, "index.html");
        // Vite ghi ra index.ghpages.html vì đó là tên input; đổi thành index.html.
        if (existsSync(indexHtml)) copyFileSync(indexHtml, realIndex);
        // 404.html để deep-link/refresh không bị lỗi 404 trên GitHub Pages.
        if (existsSync(realIndex)) copyFileSync(realIndex, resolve(out, "404.html"));
        // .nojekyll để GitHub Pages không bỏ qua thư mục bắt đầu bằng "_".
        writeFileSync(resolve(out, ".nojekyll"), "");
      },
    },
  ],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(process.cwd(), "index.ghpages.html"),
    },
  },
});