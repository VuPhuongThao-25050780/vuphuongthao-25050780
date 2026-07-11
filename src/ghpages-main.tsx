import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import { Index } from "./routes/index";

// GitHub Pages có thể phục vụ site ở đường dẫn con (vd: /ten-repo/).
// Các ảnh/PDF được tham chiếu bằng đường dẫn tuyệt đối "/__l5e/..." nên cần
// thêm tiền tố base để chúng vẫn tải đúng khi không deploy ở gốc tên miền.
function fixAssetBasePaths() {
  const base = import.meta.env.BASE_URL || "/";
  if (base === "/") return;
  const prefix = base.replace(/\/$/, "");
  const rewrite = () => {
    document.querySelectorAll<HTMLImageElement>('img[src^="/__l5e/"]').forEach((el) => {
      el.setAttribute("src", prefix + el.getAttribute("src"));
    });
    document.querySelectorAll<HTMLAnchorElement>('a[href^="/__l5e/"]').forEach((el) => {
      el.setAttribute("href", prefix + el.getAttribute("href"));
    });
  };
  rewrite();
  new MutationObserver(rewrite).observe(document.body, { childList: true, subtree: true });
}

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <Index />
    </StrictMode>,
  );
  fixAssetBasePaths();
}