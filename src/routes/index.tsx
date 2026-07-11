import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import avatarImg from "@/assets/avatar.jpg.asset.json";
import mc3641 from "@/assets/minhchung1/IMG_3641.jpg.asset.json";
import mc3642 from "@/assets/minhchung1/IMG_3642.jpg.asset.json";
import mc3643 from "@/assets/minhchung1/IMG_3643.jpg.asset.json";
import mc3644 from "@/assets/minhchung1/IMG_3644.jpg.asset.json";
import mc3645 from "@/assets/minhchung1/IMG_3645.jpg.asset.json";
import mc3646 from "@/assets/minhchung1/IMG_3646.jpg.asset.json";
import mc3647 from "@/assets/minhchung1/IMG_3647.jpg.asset.json";
import mc3648 from "@/assets/minhchung1/IMG_3648.jpg.asset.json";
import mc3649 from "@/assets/minhchung1/IMG_3649.jpg.asset.json";
import mc3650 from "@/assets/minhchung1/IMG_3650.jpg.asset.json";
import mc3651 from "@/assets/minhchung1/IMG_3651.jpg.asset.json";
import mc3652 from "@/assets/minhchung1/IMG_3652.jpg.asset.json";
import mc3653 from "@/assets/minhchung1/IMG_3653.jpg.asset.json";
import mc3654 from "@/assets/minhchung1/IMG_3654.jpg.asset.json";
import mc3655 from "@/assets/minhchung1/IMG_3655.jpg.asset.json";
import mc3656 from "@/assets/minhchung1/IMG_3656.jpg.asset.json";
import mc3657 from "@/assets/minhchung1/IMG_3657.jpg.asset.json";
import mc2p1 from "@/assets/minhchung2/page1.jpg.asset.json";
import mc2p2 from "@/assets/minhchung2/page2.jpg.asset.json";
import mc2p3 from "@/assets/minhchung2/page3.jpg.asset.json";
import mc2p4 from "@/assets/minhchung2/page4.jpg.asset.json";
import baocao2Pdf from "@/assets/minhchung2/baocao2.pdf.asset.json";
import mc2i1 from "@/assets/minhchung2/img_01.png.asset.json";
import mc2i2 from "@/assets/minhchung2/img_02.png.asset.json";
import mc2i3 from "@/assets/minhchung2/img_03.png.asset.json";
import mc3_1 from "@/assets/minhchung3/b3_01.png.asset.json";
import mc3_2 from "@/assets/minhchung3/b3_02.png.asset.json";
import mc3_3 from "@/assets/minhchung3/b3_03.png.asset.json";
import mc3_4 from "@/assets/minhchung3/b3_04.png.asset.json";
import mc3_5 from "@/assets/minhchung3/b3_05.png.asset.json";
import mc3_6 from "@/assets/minhchung3/b3_06.png.asset.json";
import mc3_7 from "@/assets/minhchung3/b3_07.png.asset.json";
import mc3_8 from "@/assets/minhchung3/b3_08.png.asset.json";
import mc3_9 from "@/assets/minhchung3/b3_09.png.asset.json";
import mc4_1 from "@/assets/minhchung4/b4_01.png.asset.json";
import mc4_2 from "@/assets/minhchung4/b4_02.png.asset.json";
import mc4_3 from "@/assets/minhchung4/b4_03.png.asset.json";
import mc4_4 from "@/assets/minhchung4/b4_04.png.asset.json";
import mc4_5 from "@/assets/minhchung4/b4_05.png.asset.json";
import mc6_1 from "@/assets/minhchung6/b6_01.jpg.asset.json";
import mc6_2 from "@/assets/minhchung6/b6_02.jpg.asset.json";
import mc3n_1 from "@/assets/minhchung3new/b3n_01.png.asset.json";
import mc3n_2 from "@/assets/minhchung3new/b3n_02.png.asset.json";
import mc3n_3 from "@/assets/minhchung3new/b3n_03.png.asset.json";
import mc3n_4 from "@/assets/minhchung3new/b3n_04.png.asset.json";
import mc3n_5 from "@/assets/minhchung3new/b3n_05.png.asset.json";
import mc3n_6 from "@/assets/minhchung3new/b3n_06.png.asset.json";
import mc3n_7 from "@/assets/minhchung3new/b3n_07.png.asset.json";
import mc3n_8 from "@/assets/minhchung3new/b3n_08.png.asset.json";
import mc3n_9 from "@/assets/minhchung3new/b3n_09.png.asset.json";
import baocao3Pdf from "@/assets/minhchung3new/baocao3.pdf.asset.json";
import baocao4Pdf from "@/assets/minhchung4new/baocao4.pdf.asset.json";
import baocao6Pdf from "@/assets/minhchung6new/baocao6.pdf.asset.json";
import mc5_poster from "@/assets/minhchung5new/b5_poster.png.asset.json";
import mc5_chatgpt from "@/assets/minhchung5new/b5_chatgpt.png.asset.json";
import mc5_openart from "@/assets/minhchung5new/b5_openart.png.asset.json";
import mc5_canva from "@/assets/minhchung5new/b5_canva.png.asset.json";
import mc5_rejected from "@/assets/minhchung5new/b5_rejected.png.asset.json";
import baocao5Docx from "@/assets/minhchung5new/baocao5.docx.asset.json";

const EVIDENCE_1: string[] = [
  mc3641.url, mc3642.url, mc3643.url, mc3644.url, mc3645.url, mc3646.url,
  mc3647.url, mc3648.url, mc3649.url, mc3650.url, mc3651.url, mc3652.url,
  mc3653.url, mc3654.url, mc3655.url, mc3656.url, mc3657.url,
];
const EVIDENCE_2: string[] = [
  mc2i1.url, mc2i2.url, mc2i3.url,
  mc2p1.url, mc2p2.url, mc2p3.url, mc2p4.url,
];
const EVIDENCE_3: string[] = [
  mc3_1.url, mc3_2.url, mc3_3.url, mc3_4.url, mc3_5.url,
  mc3_6.url, mc3_7.url, mc3_8.url, mc3_9.url,
  mc3n_1.url, mc3n_2.url, mc3n_3.url, mc3n_4.url, mc3n_5.url,
  mc3n_6.url, mc3n_7.url, mc3n_8.url, mc3n_9.url,
];
const EVIDENCE_4: string[] = [mc4_1.url, mc4_2.url, mc4_3.url, mc4_4.url, mc4_5.url];
const EVIDENCE_5: string[] = [
  mc5_poster.url, mc5_chatgpt.url, mc5_openart.url, mc5_canva.url, mc5_rejected.url,
];
const EVIDENCE_6: string[] = [mc6_1.url, mc6_2.url];
import {
  FolderTree,
  Search,
  MessageSquareText,
  Users,
  Sparkles,
  ShieldCheck,
  ArrowUp,
  Target,
  Wrench,
  ListChecks,
  Lightbulb,
  ImageIcon,
  Mail,
  GraduationCap,
  Heart,
  ChevronRight,
  CheckCircle2,
  Quote,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { BarChart3, RefreshCw, Brain, Rocket } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ============================================================
 *  DỮ LIỆU NỘI DUNG
 * ============================================================ */

const NAV = [
  { id: "gioi-thieu", label: "Giới thiệu" },
  { id: "tong-quan", label: "Tổng quan" },
  { id: "du-an", label: "Dự án học tập" },
  { id: "ky-nang", label: "Kỹ năng" },
  { id: "tong-ket", label: "Tổng kết" },
];

const TASKS = [
  {
    icon: FolderTree,
    title: "Quản lý tệp và thư mục",
    desc: "Tổ chức dữ liệu học tập khoa học, đặt tên tệp nhất quán, dễ tìm và chia sẻ.",
    progress: 100,
    href: "#du-an-1",
    color: "#EB168C",
    titleLines: ["Quản lý tệp", "và thư mục"],
  },
  {
    icon: Search,
    title: "Tìm kiếm & đánh giá thông tin",
    desc: "Vận dụng toán tử tìm kiếm nâng cao và đánh giá độ tin cậy của nguồn học thuật.",
    progress: 100,
    href: "#du-an-2",
    color: "#2463EB",
    titleLines: ["Tìm kiếm &", "đánh giá thông tin"],
  },
  {
    icon: MessageSquareText,
    title: "Viết Prompt hiệu quả",
    desc: "Thiết kế prompt rõ vai trò, bối cảnh, yêu cầu để khai thác AI đúng mục tiêu.",
    progress: 100,
    href: "#du-an-3",
    color: "#8B46E8",
    titleLines: ["Viết Prompt", "hiệu quả"],
  },
  {
    icon: Users,
    title: "Hợp tác trực tuyến",
    desc: "Lập kế hoạch, phân công và theo dõi tiến độ nhóm bằng công cụ số.",
    progress: 100,
    href: "#du-an-4",
    color: "#10A9AE",
    titleLines: ["Hợp tác", "trực tuyến"],
  },
  {
    icon: Sparkles,
    title: "Sáng tạo nội dung với AI",
    desc: "Đồng sáng tạo poster môi trường “Reduce Plastic, Restore Nature” với ChatGPT, OpenArt AI và Canva AI.",
    progress: 100,
    href: "#du-an-5",
    color: "#FF7A00",
    titleLines: ["Sáng tạo", "nội dung với AI"],
  },
  {
    icon: ShieldCheck,
    title: "Sử dụng AI có trách nhiệm",
    desc: "Phân tích đạo đức AI và xây dựng bộ nguyên tắc cá nhân khi sử dụng.",
    progress: 100,
    href: "#du-an-6",
    color: "#2463EB",
    titleLines: ["Sử dụng AI", "có trách nhiệm"],
  },
];

type Project = {
  id: string;
  index: number;
  icon: typeof FolderTree;
  title: string;
  goal: string;
  process: string[];
  tools: string[];
  tags: string[];
  evidence: string;
  evidenceImages?: string[];
  evidenceCaptions?: string[];
  evidencePortrait?: boolean;
  fileUrl?: string;
  fileName?: string;
  analysis: string[];
  lessons: string[];
  extra?: React.ReactNode;
  integrity: { usage: string[]; commitment: string[] };
};

const PROJECTS: Project[] = [
  {
    id: "du-an-1",
    index: 1,
    icon: FolderTree,
    title: "Bài tập 1 – Thao tác cơ bản với tệp tin và thư mục",
    goal: "Thành thạo các thao tác quản lý tệp tin và thư mục trên hệ điều hành Windows, bao gồm tạo, đổi tên, sao chép, di chuyển và xóa tệp tin.",
    process: [
      "Mở File Explorer bằng tổ hợp phím Windows + E.",
      "Truy cập ổ đĩa D: và tạo thư mục mới “Tài liệu học tập”.",
      "Tạo các thư mục con: Bài tập, Slide bài giảng, Tài liệu tham khảo.",
      "Tạo file Word “Ghi chú.docx” trong thư mục Bài tập.",
      "Thực hành sao chép, di chuyển, đổi tên tệp tin.",
      "Tạo shortcut cho thư mục thường dùng ra Desktop.",
      "Xóa các tệp tin không cần thiết (di chuyển vào Recycle Bin).",
    ],
    tools: ["File Explorer", "Microsoft Word", "Windows 10/11"],
    tags: ["Quản lý tệp tin", "Tổ chức thư mục", "Thao tác cơ bản"],
    evidence: "Ảnh chụp màn hình cấu trúc thư mục và sơ đồ cây thư mục môn học.",
    evidenceImages: EVIDENCE_1,
    fileUrl:
      "https://drive.google.com/drive/u/0/folders/1FxQJn4tyLcM9LJfMATc2N-5fKdeoi9vA",
    fileName: "Thư mục minh chứng (Google Drive)",
    integrity: {
      usage: [
        "Không sử dụng AI trong bài tập này.",
        "Tự thực hành trực tiếp trên máy tính theo hướng dẫn của giảng viên.",
      ],
      commitment: [
        "Tôi đã tự thực hiện tất cả thao tác tạo, đổi tên, sao chép và sắp xếp thư mục.",
        "Ảnh chụp màn hình là minh chứng thực tế từ quá trình thực hành.",
        "Toàn bộ cấu trúc dữ liệu được xây dựng dựa trên trải nghiệm cá nhân.",
      ],
    },
    analysis: [
      "Cấu trúc phân nhóm giúp dữ liệu dễ tìm, tránh thất lạc và thuận tiện khi nộp bài.",
      "Quy tắc đặt tên phân biệt rõ phiên bản cũ – mới, hỗ trợ làm việc lâu dài và cộng tác.",
      "Sao lưu đám mây bảo đảm an toàn dữ liệu và truy cập được từ nhiều thiết bị.",
    ],
    lessons: [
      "Quản lý dữ liệu khoa học là kỹ năng nền tảng của công dân số.",
      "Một cấu trúc thư mục tốt giúp tiết kiệm thời gian và tăng hiệu quả học tập.",
    ],
    extra: (
      <div className="mt-5 rounded-2xl border border-border bg-secondary/40 p-5">
        <p className="text-sm font-semibold text-secondary-foreground">
          Mục tiêu bài tập
        </p>
        <ul className="mt-3 space-y-2">
          {[
            "Mở và sử dụng File Explorer để quản lý tệp tin.",
            "Tạo thư mục mới và tổ chức cấu trúc thư mục.",
            "Thực hiện các thao tác sao chép, di chuyển, đổi tên và xóa tệp tin.",
            "Tạo shortcut và quản lý tệp tin hiệu quả.",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm text-muted-foreground">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: "du-an-2",
    index: 2,
    icon: Search,
    title: "Bài tập 2 – Tìm kiếm và đánh giá thông tin học thuật",
    goal: "Tìm và đánh giá tài liệu khoa học cho chủ đề “Tác động của tăng trưởng xanh đến phát triển kinh tế bền vững tại Việt Nam” (ngành Kinh tế Phát triển).",
    process: [
      "Xác định chủ đề: tăng trưởng xanh & phát triển kinh tế bền vững tại Việt Nam.",
      "Tìm trên Google Scholar, ScienceDirect, VNU-Lic với từ khóa tiếng Anh và tiếng Việt.",
      "Lọc theo tiêu chí: xuất bản 5–10 năm gần đây, tác giả uy tín, tạp chí Scopus/điểm cao.",
      "Tổng hợp 10 tài liệu tiêu biểu và chấm độ tin cậy theo thang điểm 1–5.",
    ],
    tools: ["Google Scholar", "ScienceDirect", "VNU-Lic (ĐHQGHN)", "World Bank", "OECD"],
    tags: ["Tăng trưởng xanh", "Đánh giá nguồn Scopus", "Kinh tế bền vững"],
    evidence: "Bảng tổng hợp 10 tài liệu và đánh giá độ tin cậy theo tiêu chí.",
    evidenceImages: EVIDENCE_2,
    evidencePortrait: true,
    fileUrl: baocao2Pdf.url,
    fileName: "BaoCao_DuAn2.pdf",
    integrity: {
      usage: [
        "Dùng AI để gợi ý từ khóa và diễn đạt truy vấn tìm kiếm học thuật.",
        "Mọi tài liệu đều do tôi tự tìm, tự đọc và tự chấm độ tin cậy.",
      ],
      commitment: [
        "Tôi tự kiểm chứng tính chính xác của từng nguồn trước khi sử dụng.",
        "Ghi rõ nguồn gốc và tác giả cho toàn bộ thông tin tham khảo.",
        "AI chỉ đóng vai trò hỗ trợ tìm kiếm, không thay thế đánh giá của tôi.",
      ],
    },
    analysis: [
      "Tài liệu chọn lọc gồm 6 bài báo, 2 sách chuyên khảo và 2 báo cáo tổ chức quốc tế.",
      "Ưu tiên tạp chí ISI/Scopus và NXB uy tín giúp bảo đảm tính chuyên môn.",
      "80% tài liệu xuất bản giai đoạn 2019–2024, phản ánh đúng thực trạng hiện nay.",
      "Báo cáo của World Bank, Bộ KH&ĐT, OECD cung cấp số liệu chính thống, khách quan.",
    ],
    lessons: [
      "Đánh giá nguồn cần dựa trên tác giả, cơ quan xuất bản, phương pháp và tính cập nhật.",
      "Kết hợp nguồn tiếng Việt và quốc tế cho cái nhìn đa chiều, đáng tin cậy.",
    ],
    extra: (
      <div className="mt-5 space-y-4">
        <div className="flex flex-wrap gap-2">
          {[
            '"Green growth Vietnam"',
            '"Sustainable development"',
            '"Circular economy"',
            '"Tăng trưởng xanh Việt Nam"',
            '"Kinh tế tuần hoàn"',
          ].map((op) => (
            <code
              key={op}
              className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
            >
              {op}
            </code>
          ))}
        </div>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-secondary/50 text-secondary-foreground">
              <tr>
                {["Tên tài liệu", "Loại hình", "Tác giả / Xuất bản", "Độ tin cậy", "Đánh giá nhanh"].map(
                  (h) => (
                    <th key={h} className="px-4 py-3 font-semibold">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Green growth and sustainable development in Vietnam", "Bài báo", "Nguyễn T.P. (Sustainability)", "5/5", "Tác giả uy tín, trích dẫn cao"],
                ["Tăng trưởng xanh ở Việt Nam: Lộ trình và giải pháp", "Bài báo", "Tạp chí Kinh tế & Phát triển", "4/5", "Tạp chí chuyên ngành hàng đầu VN"],
                ["Impact of Renewable Energy on Economic Growth", "Bài báo quốc tế", "Chen et al. (Energy Economics)", "5/5", "Phương pháp hiện đại, số liệu tin cậy"],
                ["Kinh tế xanh: Lý luận và thực tiễn tại Việt Nam", "Sách chuyên khảo", "NXB Chính trị Quốc gia Sự thật", "5/5", "NXB uy tín về lý luận kinh tế"],
                ["Circular Economy in Vietnam", "Bài báo", "Journal of Cleaner Production", "5/5", "Tính cập nhật cao, sát phát triển bền vững"],
                ["Báo cáo Quốc gia về Phát triển bền vững 2023", "Báo cáo", "Bộ Kế hoạch và Đầu tư", "5/5", "Số liệu chính thống của Chính phủ"],
                ["Vietnam Low Carbon Development Strategy", "Báo cáo", "World Bank", "5/5", "Tổ chức quốc tế uy tín, dữ liệu khách quan"],
              ].map((row) => (
                <tr key={row[0]} className="bg-card">
                  {row.map((c, i) => (
                    <td key={i} className={`px-4 py-3 ${i === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "du-an-3",
    index: 3,
    icon: MessageSquareText,
    title: "Bài tập 3 – Viết Prompt hiệu quả cho các tác vụ học tập",
    goal: "Rèn kỹ năng viết prompt để khai thác tối đa mô hình ngôn ngữ lớn (LLM), qua việc so sánh 3 mức prompt: cơ bản – cải tiến – nâng cao.",
    process: [
      "Chọn 3 tác vụ học tập tiêu biểu: tóm tắt tài liệu học thuật, giải thích khái niệm phức tạp và tạo câu hỏi ôn tập.",
      "Với mỗi tác vụ, viết prompt mức cơ bản (một câu ngắn, chưa ràng buộc) và ghi lại kết quả AI trả về.",
      "Cải tiến prompt: thêm ngữ cảnh, ràng buộc độ dài, yêu cầu định dạng (bảng, gạch đầu dòng) và đối tượng người đọc.",
      "Nâng cao prompt: gán vai trò cho AI (chuyên gia, giảng viên), yêu cầu suy luận từng bước và nêu tiêu chí đánh giá đầu ra.",
      "So sánh 3 mức kết quả theo các tiêu chí độ rõ ràng, độ chi tiết, tính hữu ích và mức kiểm soát; rút ra nguyên tắc viết prompt hiệu quả.",
    ],
    tools: ["ChatGPT", "Gemini", "Claude"],
    tags: ["Prompt Engineering", "So sánh kết quả", "Tư duy cấu trúc"],
    evidence: "Ảnh chụp prompt ban đầu, prompt cải tiến và kết quả AI trả lời.",
    evidenceImages: EVIDENCE_3,
    fileUrl: baocao3Pdf.url,
    fileName: "Báo cáo bài 3 (PDF)",
    integrity: {
      usage: [
        "Dùng AI để thử nghiệm và so sánh hiệu quả giữa các phiên bản prompt.",
        "Tự thiết kế, chỉnh sửa và tối ưu prompt dựa trên mục tiêu học tập của mình.",
      ],
      commitment: [
        "Toàn bộ prompt và nhận xét cải tiến do tôi tự viết và tự phân tích.",
        "Kết quả AI được tôi đánh giá, chọn lọc chứ không sao chép nguyên văn.",
        "Minh bạch ghi lại cả prompt chưa tốt để thể hiện quá trình học thật.",
      ],
    },
    analysis: [
      "Prompt nâng cao cho kết quả tốt nhất nhờ có vai trò (role), cấu trúc rõ ràng và hướng dẫn định dạng đầu ra cụ thể.",
      "Prompt cơ bản quá chung chung, không kiểm soát được độ dài và nội dung nên dễ lan man, thiếu chính xác.",
      "Cùng một tác vụ, chất lượng đầu ra chênh lệch rõ rệt giữa 3 mức prompt — chứng tỏ cách hỏi quan trọng ngang với công cụ.",
      "Các kỹ thuật quyết định chất lượng: role prompting, chia nhỏ theo từng bước (step-by-step), đặt ràng buộc (constraint), yêu cầu định dạng và cung cấp ví dụ mẫu.",
      "AI phản hồi tốt hơn khi được nêu rõ đối tượng người đọc và mục tiêu sử dụng của kết quả.",
    ],
    lessons: [
      "Prompt càng rõ ràng, có cấu trúc và định hướng cụ thể thì kết quả càng chất lượng và đáng tin cậy.",
      "Nguyên tắc viết prompt hiệu quả: rõ ràng – đặt vai trò – thêm ràng buộc – yêu cầu cấu trúc – dùng ví dụ – chia nhỏ nhiệm vụ.",
      "Nên xem việc viết prompt là một quá trình lặp: thử – đánh giá – cải tiến thay vì kỳ vọng đúng ngay lần đầu.",
      "Người học vẫn phải kiểm chứng và chọn lọc kết quả AI, không phụ thuộc hoàn toàn vào đầu ra máy sinh.",
    ],
    extra: (
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-secondary/50 text-secondary-foreground">
            <tr>
              {["Tiêu chí", "Prompt cơ bản", "Prompt cải tiến", "Prompt nâng cao"].map((h) => (
                <th key={h} className="px-4 py-3 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              ["Độ rõ ràng", "Thấp", "Trung bình", "Cao"],
              ["Độ chi tiết", "Ít", "Khá", "Rất cao"],
              ["Tính hữu ích", "Trung bình", "Tốt", "Rất tốt"],
              ["Kiểm soát kết quả", "Thấp", "Trung bình", "Cao"],
            ].map((row) => (
              <tr key={row[0]} className="bg-card">
                <td className="px-4 py-3 font-medium text-foreground">{row[0]}</td>
                <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
                <td className="px-4 py-3 text-primary">{row[2]}</td>
                <td className="px-4 py-3 text-muted-foreground">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "du-an-4",
    index: 4,
    icon: Users,
    title: "Bài tập 4 – Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    goal: "Ứng dụng bộ công cụ hợp tác trực tuyến vào dự án nhóm “Kế hoạch tổ chức workshop online về kỹ năng thuyết trình”, với vai trò tổng hợp – phân tích nội dung, quản lý tiến độ và điều phối hỗ trợ thành viên.",
    process: [
      "Trello: lập danh sách công việc cá nhân, chia nhiệm vụ theo giai đoạn (nghiên cứu – phân tích – hoàn thiện) và cập nhật trạng thái để theo dõi tiến độ.",
      "Google Docs: trực tiếp viết và hoàn thiện nội dung nhóm, dùng comment để góp ý và lịch sử chỉnh sửa để theo dõi đóng góp.",
      "Microsoft Teams: họp, thảo luận nội dung, nhắc tiến độ và đề xuất phương án xử lý vấn đề phát sinh.",
      "Google Drive: tạo thư mục, sắp xếp tài liệu theo danh mục và đặt tên file khoa học để lưu trữ tập trung.",
    ],
    tools: ["Trello", "Google Docs", "Microsoft Teams", "Google Drive"],
    tags: ["Quản lý dự án", "Cộng tác thời gian thực", "Tối ưu năng suất"],
    evidence: "Ảnh chụp bảng Trello cá nhân, Google Docs nhóm, cuộc họp Teams và thư mục Google Drive.",
    evidenceImages: EVIDENCE_4,
    fileUrl: baocao4Pdf.url,
    fileName: "Báo cáo bài 4 (PDF)",
    integrity: {
      usage: [
        "Sử dụng công cụ trực tuyến để quản lý nhiệm vụ, cộng tác nội dung và lưu trữ tài liệu.",
        "Việc phối hợp, phân công và theo dõi tiến độ do cả nhóm cùng thực hiện.",
      ],
      commitment: [
        "Phần việc tôi đảm nhận (tổng hợp – phân tích nội dung, viết phần 2–4) do tôi tự thực hiện.",
        "Bảng công việc và lịch sử chỉnh sửa phản ánh trung thực đóng góp thực tế của từng thành viên.",
        "Ghi nhận đúng công sức của mọi người, không chiếm công hay bỏ sót đóng góp.",
      ],
    },
    analysis: [
      "Trello giúp kiểm soát tiến độ, tránh chồng chéo và nâng cao tính chủ động – tối ưu phân bổ nguồn lực cá nhân.",
      "Google Docs tăng tốc độ xử lý thông tin và giảm trao đổi thủ công, nâng cao năng suất chung.",
      "Teams giảm độ trễ giao tiếp, còn Google Drive giảm thời gian tìm kiếm tài liệu – tiết kiệm chi phí thời gian.",
    ],
    lessons: [
      "Cần có kế hoạch rõ ràng ngay từ đầu và thường xuyên cập nhật tiến độ.",
      "Tận dụng tối đa công cụ số để tối ưu hiệu quả; tính chủ động quyết định hiệu suất cá nhân.",
    ],
    extra: (
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[620px] text-left text-sm">
          <thead className="bg-secondary/50 text-secondary-foreground">
            <tr>
              {["Công cụ", "Vai trò trong dự án", "Đóng góp cá nhân", "Hiệu quả"].map((h) => (
                <th key={h} className="px-4 py-3 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              ["Trello", "Quản lý công việc", "Lập danh sách & cập nhật trạng thái nhiệm vụ", "Kiểm soát tiến độ"],
              ["Google Docs", "Soạn thảo tài liệu", "Viết phần 2–4, góp ý qua comment", "Cộng tác nhanh"],
              ["Microsoft Teams", "Giao tiếp nhóm", "Thảo luận, nhắc tiến độ, đề xuất giải pháp", "Giảm độ trễ"],
              ["Google Drive", "Lưu trữ dữ liệu", "Tạo thư mục, đặt tên file khoa học", "Dễ tìm kiếm"],
            ].map((row) => (
              <tr key={row[0]} className="bg-card">
                <td className="px-4 py-3 font-medium text-foreground">{row[0]}</td>
                <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
                <td className="px-4 py-3 text-muted-foreground">{row[2]}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    {row[3]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "du-an-5",
    index: 5,
    icon: Sparkles,
    title: "Bài tập 5 – Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    goal: "Nghiên cứu thử nghiệm quy trình đồng sáng tạo với AI trong thiết kế poster truyền thông môi trường “Reduce Plastic, Restore Nature”, nhấn mạnh vai trò kiểm soát, lựa chọn và hoàn thiện của người thiết kế.",
    process: [
      "Đặt bài toán truyền thông và viết brief thiết kế: chủ đề rác nhựa đại dương, đối tượng người trẻ, cảm xúc lo ngại nhưng không tuyệt vọng, khổ A3 dọc.",
      "Thử nghiệm thông điệp với ChatGPT: tạo nhiều slogan, so sánh theo độ ngắn – độ trực tiếp – khả năng trực quan hóa, chọn “Reduce Plastic, Restore Nature”.",
      "Sinh hình ảnh bằng OpenArt AI: tạo thư viện phương án thị giác đối lập biển sạch – biển ô nhiễm để so sánh và chọn lọc.",
      "Dàn trang thử với Canva AI: thử bố cục, tỷ lệ hình – chữ, vị trí lời kêu gọi hành động; phát hiện và loại các dữ kiện AI tự thêm.",
      "Biên tập thủ công và khóa phiên bản cuối: giữ một slogan, tăng khoảng trắng, loại dữ kiện không có nguồn, giữ bảng màu xanh biển – xanh lá.",
    ],
    tools: ["ChatGPT", "OpenArt AI", "Canva AI"],
    tags: ["Đồng sáng tạo Người – AI", "Poster môi trường", "Kiểm soát & biên tập"],
    evidence: "Poster cuối cùng cùng các ảnh chụp giao diện minh chứng quy trình 6 giai đoạn với ChatGPT, OpenArt AI và Canva AI.",
    evidenceCaptions: [
      "Poster cuối cùng “Reduce Plastic, Restore Nature” được dựng lại từ tiêu chí của brief",
      "ChatGPT tạo phương án slogan cho chiến dịch giảm rác thải nhựa",
      "OpenArt AI sinh các biến thể hình ảnh đối lập để so sánh",
      "Canva AI thử nhiều bố cục và phân cấp thông tin",
      "Ví dụ phương án bị loại: “Ocean Conservation Summit” chứa dữ kiện không thuộc brief",
    ],
    integrity: {
      usage: [
        "Dùng ChatGPT gợi ý thông điệp và slogan; OpenArt AI sinh phương án hình ảnh; Canva AI thử bố cục.",
        "Tự đặt tiêu chí lựa chọn, loại phương án lỗi, biên tập và khóa phiên bản poster cuối.",
      ],
      commitment: [
        "Minh bạch: nêu rõ AI được dùng ở khâu nào và ghi đúng tên công cụ thực tế.",
        "Kiểm chứng: loại bỏ chữ, chi tiết hoặc dữ kiện sai (ngày sự kiện, tên hội nghị, mã QR không có nguồn).",
        "Tôi chịu trách nhiệm về thông điệp, tính chính xác và bản quyền của sản phẩm cuối.",
      ],
    },
    analysis: [
      "Giá trị của AI không nằm ở việc một công cụ làm thay toàn bộ, mà ở khả năng mở rộng nhanh số phương án ý tưởng, hình ảnh và bố cục.",
      "ChatGPT tạo độ rộng cho không gian ngôn ngữ; OpenArt mở rộng không gian hình ảnh; Canva tăng tốc kiểm tra bố cục.",
      "Đầu ra AI luôn cần kiểm duyệt: OpenArt dễ sai/dư chi tiết, Canva có thể tự thêm tên hội nghị và ngày sự kiện không thuộc brief.",
      "Chiều sâu của sản phẩm đến từ việc con người liên tục thu hẹp lựa chọn và loại bỏ đầu ra không phù hợp.",
      "Quy trình dạng chuỗi phản hồi (mỗi đầu ra AI đi qua một bước đánh giá) giúp một lỗi nhỏ không bị kéo dài sang các bước sau.",
    ],
    lessons: [
      "AI mở rộng khả năng sáng tạo, còn con người quyết định hướng đi, giới hạn và trách nhiệm của sản phẩm.",
      "Tư duy phản biện là năng lực không thể tách rời khi dùng AI: “đẹp nhưng sai” vẫn phải bị loại.",
      "Bắt đầu từ bài toán truyền thông và brief rõ ràng giúp giới hạn không gian sáng tạo của AI đúng mục tiêu.",
      "Sử dụng AI có trách nhiệm cần bốn lớp kiểm soát: minh bạch công cụ, kiểm chứng độ chính xác, tôn trọng bản quyền và giữ quyền quyết định của con người.",
    ],
    extra: (
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["01. Lập brief", "Con người chủ đạo", "Mục tiêu • đối tượng • cảm xúc"],
          ["02. Tạo ý tưởng", "Con người + ChatGPT", "Thông điệp và slogan"],
          ["03. Sinh hình AI", "OpenArt AI", "Tạo các phương án thị giác"],
          ["04. Chọn & tinh chỉnh", "Con người chủ đạo", "Loại lỗi • giữ khoảng trống chữ"],
          ["05. Dàn trang", "Con người + Canva AI", "Font • màu • phân cấp thông tin"],
          ["06. Kiểm tra & xuất", "Con người", "Nội dung • tương phản • A3/PDF"],
        ].map(([step, who, note]) => (
          <div key={step} className="rounded-2xl border border-border bg-card p-4">
            <p className="text-sm font-semibold text-foreground">{step}</p>
            <p className="mt-1 text-xs font-medium text-primary">{who}</p>
            <p className="mt-1 text-xs text-muted-foreground">{note}</p>
          </div>
        ))}
      </div>
    ),
    evidenceImages: EVIDENCE_5,
    fileUrl: baocao5Docx.url,
    fileName: "Báo cáo bài 5 (DOCX)",
  },
  {
    id: "du-an-6",
    index: 6,
    icon: ShieldCheck,
    title: "Bài tập 6 – Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    goal: "Nghiên cứu chính sách sử dụng AI của trường, phân tích các vấn đề đạo đức và xây dựng bộ nguyên tắc cá nhân sử dụng AI có trách nhiệm.",
    process: [
      "Tìm hiểu chính sách AI của ĐHQGHN và một số trường đại học: cho phép AI hỗ trợ nhưng cấm thay thế tư duy, bắt buộc minh bạch (AI disclosure).",
      "So sánh quy định giữa các trường để nhận diện điểm chung về liêm chính học thuật khi dùng AI.",
      "Thực hiện bài luận “Thách thức của công nghệ số với giáo dục đại học” có dùng AI hỗ trợ dàn ý và hiệu đính, ghi rõ phần AI hỗ trợ.",
      "Phân tích các tình huống đạo đức: đâu là hỗ trợ hợp lý, đâu là gian lận học thuật.",
      "Xây dựng bộ nguyên tắc cá nhân sử dụng AI có trách nhiệm và thiết kế infographic tuyên truyền.",
    ],
    tools: ["ChatGPT", "Quy định ĐHQGHN", "Tài liệu học thuật", "Canva (infographic)"],
    tags: ["Đạo đức AI", "Liêm chính học thuật", "Tư duy phản biện"],
    evidence: "Ảnh bộ nguyên tắc sử dụng AI cá nhân và ghi chú phân tích đạo đức.",
    evidenceImages: EVIDENCE_6,
    fileUrl: baocao6Pdf.url,
    fileName: "Báo cáo bài 6 (PDF)",
    integrity: {
      usage: [
        "Dùng AI (ChatGPT) hỗ trợ xây dựng khung sườn lập luận và hiệu đính ngữ pháp cho bài luận.",
        "Tự nghiên cứu chính sách, phân tích tình huống đạo đức và xây dựng bộ nguyên tắc cá nhân.",
      ],
      commitment: [
        "Mọi số liệu, phân tích và kết luận đều do tôi tự thực hiện và đối chiếu nguồn chính thống.",
        "Luôn công khai (AI disclosure) khi có sử dụng AI trong học tập và nghiên cứu.",
        "Không sao chép nguyên văn AI; chịu trách nhiệm cuối cùng với sản phẩm học tập.",
      ],
    },
    analysis: [
      "Ranh giới giữa hỗ trợ hợp lý và gian lận nằm ở mức độ AI can thiệp vào tư duy của người học.",
      "Sao chép nguyên văn AI là “đạo văn của đạo văn” vì AI không ghi nguồn chính xác và có thể sai lệch thông tin.",
      "Lạm dụng AI làm mất dần năng lực lập luận độc lập; ngược lại, dùng đúng cách sẽ nâng cao hiệu suất học tập.",
      "Chính sách của các trường đều thống nhất: AI được phép hỗ trợ nhưng người học phải minh bạch và chịu trách nhiệm cuối cùng.",
      "Minh bạch (AI disclosure) vừa bảo vệ người học, vừa giữ được sự công bằng trong đánh giá học thuật.",
    ],
    lessons: [
      "AI không phải mối đe dọa mà là bài kiểm tra năng lực và bản lĩnh của người học.",
      "Làm chủ AI có trách nhiệm dựa trên bốn trụ cột: minh bạch – trung thực – kiểm chứng – chịu trách nhiệm.",
      "Cần tự đặt giới hạn sử dụng AI phù hợp với từng học phần và quy định của giảng viên.",
      "Ưu tiên phát triển tư duy độc lập trước, xem AI là công cụ tăng tốc chứ không phải chỗ dựa thay thế.",
    ],
    extra: (
      <div className="mt-5 rounded-2xl border border-border bg-secondary/40 p-5">
        <p className="text-sm font-semibold text-secondary-foreground">
          Bộ nguyên tắc sử dụng AI cá nhân
        </p>
        <ol className="mt-3 space-y-2">
          {[
            "Tư duy đi trước, công cụ theo sau: tự suy nghĩ trước khi dùng AI.",
            "Hoài nghi khoa học: luôn kiểm chứng số liệu, thông tin do AI đưa ra.",
            "Nói không với copy-paste: bài nộp viết bằng văn phong và tư duy của mình.",
            "Minh bạch tuyệt đối: công khai ghi nhận sự hỗ trợ của AI.",
            "Tôn trọng quy chế: tuân thủ quy định về AI của từng giảng viên, học phần.",
            "Phát triển năng lực: dùng AI để học nhanh hơn, không để lười biếng.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </div>
    ),
  },
];

const SKILLS = [
  { num: "01", icon: FolderTree, name: "Quản lý tệp và dữ liệu số", desc: "Tổ chức, đặt tên, sao lưu dữ liệu học tập.", level: 100, use: "Lưu trữ và chia sẻ tài liệu môn học", color: "#EB168C" },
  { num: "02", icon: Search, name: "Tìm kiếm thông tin học thuật", desc: "Vận dụng toán tử nâng cao để lọc kết quả.", level: 98, use: "Nghiên cứu, làm báo cáo", color: "#2463EB" },
  { num: "03", icon: ShieldCheck, name: "Đánh giá độ tin cậy của nguồn", desc: "Phân tích tác giả, năm, tính chính thống.", level: 92, use: "Kiểm chứng thông tin trước khi dùng", color: "#8B46E8" },
  { num: "04", icon: MessageSquareText, name: "Viết prompt hiệu quả", desc: "Thiết kế prompt có cấu trúc rõ ràng.", level: 100, use: "Khai thác AI hỗ trợ học tập", color: "#9333EA" },
  { num: "05", icon: Users, name: "Làm việc nhóm trực tuyến", desc: "Phân công và theo dõi tiến độ số hóa.", level: 94, use: "Dự án nhóm, phối hợp từ xa", color: "#10A9AE" },
  { num: "06", icon: Sparkles, name: "Sáng tạo nội dung số bằng AI", desc: "Sản xuất video, infographic, hình ảnh.", level: 93, use: "Trình bày và truyền đạt kiến thức", color: "#FF7A00" },
  { num: "07", icon: BarChart3, name: "Sử dụng AI có trách nhiệm", desc: "Tuân thủ đạo đức và liêm chính học thuật.", level: 100, use: "Học tập và nghiên cứu bền vững", color: "#3B82F6" },
  { num: "08", icon: RefreshCw, name: "Tự đánh giá và cải thiện", desc: "Phản tư, nhận diện điểm mạnh – yếu.", level: 95, use: "Phát triển bản thân liên tục", color: "#A855F7" },
];

/* ============================================================
 *  COMPONENT PHỤ
 * ============================================================ */

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-base text-muted-foreground">{desc}</p>}
    </div>
  );
}

/* ============================================================
 *  TIMELINE INFOGRAPHIC – 6 NHIỆM VỤ
 * ============================================================ */

function HexIcon({
  Icon,
  color,
}: {
  Icon: typeof FolderTree;
  color: string;
}) {
  const hex = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
  return (
    <div className="relative size-[76px] shrink-0">
      {/* viền chấm bên ngoài */}
      <div
        className="absolute -inset-2 rounded-full border border-dashed opacity-40"
        style={{ borderColor: color, clipPath: hex }}
      />
      {/* khung gradient */}
      <div
        className="grid size-full place-items-center p-[2px] shadow-[var(--shadow-soft)]"
        style={{
          clipPath: hex,
          background: `linear-gradient(135deg, ${color}, ${color}55)`,
        }}
      >
        <div
          className="grid size-full place-items-center bg-card"
          style={{ clipPath: hex }}
        >
          <Icon className="size-7" style={{ color }} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}

/* Vòng tròn phần trăm nhỏ */
function PercentRing({ value, color }: { value: number; color: string }) {
  const r = 30;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative size-[74px] shrink-0">
      <svg viewBox="0 0 74 74" className="size-full -rotate-90">
        <circle cx="37" cy="37" r={r} fill="none" stroke={`${color}22`} strokeWidth="5" />
        <circle
          cx="37"
          cy="37"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - value / 100)}
        />
      </svg>
      <span
        className="absolute inset-0 grid place-items-center font-display text-sm font-extrabold"
        style={{ color }}
      >
        {value}%
      </span>
    </div>
  );
}

/* Một dòng kỹ năng trong bảng tổng hợp */
function SkillRow({
  skill,
  align,
}: {
  skill: (typeof SKILLS)[number];
  align: "left" | "right";
}) {
  const ring = <PercentRing value={skill.level} color={skill.color} />;
  const text = (
    <div className={align === "right" ? "text-left" : "text-right"}>
      <div
        className={`flex items-center gap-2.5 ${
          align === "right" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <span
          className="grid size-8 shrink-0 place-items-center rounded-lg font-display text-xs font-extrabold text-primary-foreground"
          style={{ background: skill.color }}
        >
          {skill.num}
        </span>
        <h3 className="font-display text-base font-bold leading-snug text-foreground">
          {skill.name}
        </h3>
      </div>
      <p className="mt-1.5 text-sm text-muted-foreground">{skill.desc}</p>
      <p className="mt-1.5 text-xs">
        <span className="font-bold" style={{ color: skill.color }}>
          Ứng dụng thực tế:{" "}
        </span>
        <span className="text-muted-foreground">{skill.use}</span>
      </p>
    </div>
  );
  return (
    <div
      className={`reveal flex items-start gap-4 ${
        align === "right" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {ring}
      <div className="min-w-0 flex-1">{text}</div>
    </div>
  );
}

/* Vòng tròn trung tâm 8 phân đoạn */
function SkillDonut() {
  // Thứ tự phân đoạn theo chiều kim đồng hồ (bắt đầu từ trên bên phải)
  const seq = [1, 3, 5, 7, 6, 4, 2, 0];
  const size = 340;
  const cx = size / 2;
  const iconR = 118;
  const gradient = `conic-gradient(from 0deg, ${seq
    .map((idx, i) => {
      const col = SKILLS[idx].color;
      return `${col} ${i * 45}deg ${(i + 1) * 45}deg`;
    })
    .join(", ")})`;
  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <div className="absolute inset-0 rounded-full" style={{ background: gradient }} />
      {/* lỗ trắng ở giữa */}
      <div className="absolute left-1/2 top-1/2 size-[176px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-background shadow-[var(--shadow-glow)]" />
      {/* nội dung trung tâm */}
      <div className="absolute left-1/2 top-1/2 grid size-[176px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-center">
        <div>
          <Target className="mx-auto size-8 text-brand-pink-strong" />
          <p className="mt-1.5 font-display text-lg font-extrabold leading-none text-foreground">
            NĂNG LỰC SỐ
          </p>
          <p className="text-sm font-bold tracking-wide text-muted-foreground">
            TOÀN DIỆN
          </p>
          <div className="mt-2 flex justify-center gap-1.5">
            {["#EB168C", "#8B46E8", "#2463EB", "#10A9AE", "#FF7A00"].map((c) => (
              <span key={c} className="size-1.5 rounded-full" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
      {/* icon trên mỗi phân đoạn */}
      {seq.map((idx, i) => {
        const a = ((i * 45 + 22.5) * Math.PI) / 180;
        const x = cx + iconR * Math.sin(a);
        const y = cx - iconR * Math.cos(a);
        const S = SKILLS[idx].icon;
        return (
          <span
            key={idx}
            className="absolute grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center text-white"
            style={{ left: x, top: y }}
          >
            <S className="size-6" strokeWidth={2.2} />
          </span>
        );
      })}
    </div>
  );
}

function TaskArrow({
  color,
  dir,
}: {
  color: string;
  dir: "left" | "right";
}) {
  return (
    <span
      aria-hidden
      className="hidden size-0 shrink-0 sm:block"
      style={{
        borderTop: "8px solid transparent",
        borderBottom: "8px solid transparent",
        ...(dir === "right"
          ? { borderLeft: `11px solid ${color}` }
          : { borderRight: `11px solid ${color}` }),
      }}
    />
  );
}

function TaskContent({
  task,
  num,
  side,
}: {
  task: (typeof TASKS)[number];
  num: number;
  side: "left" | "right";
}) {
  const isLeft = side === "left";
  const label = String(num).padStart(2, "0");
  return (
    <div className="min-w-0 flex-1">
      <div
        className={`flex items-center gap-3 ${
          isLeft ? "" : "sm:flex-row-reverse"
        }`}
      >
        <span
          className="font-display text-4xl font-extrabold leading-none tracking-tight sm:text-5xl"
          style={{ color: task.color }}
        >
          {label}
        </span>
        <span
          className="h-9 w-px opacity-70"
          style={{ backgroundColor: task.color }}
          aria-hidden
        />
      </div>

      <h3 className="mt-3 font-display text-xl font-bold leading-snug text-[#0B1748]">
        {task.titleLines.map((l) => (
          <span key={l} className="block">
            {l}
          </span>
        ))}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {task.desc}
      </p>

      <div className="mt-4">
        <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>Mức độ hoàn thành</span>
          <span className="font-bold" style={{ color: task.color }}>
            {task.progress}%
          </span>
        </div>
        <div className="relative h-1.5 w-full rounded-full bg-secondary">
          <div
            className="h-full rounded-full"
            style={{
              width: `${task.progress}%`,
              backgroundColor: task.color,
            }}
          />
          <span
            className="absolute top-1/2 size-3 -translate-y-1/2 rounded-full border-2 bg-card"
            style={{ right: 0, borderColor: task.color }}
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}

function TaskCell({
  task,
  num,
  side,
}: {
  task: (typeof TASKS)[number];
  num: number;
  side: "left" | "right";
}) {
  const isLeft = side === "left";
  return (
    <div
      className={`reveal flex items-center gap-4 sm:gap-5 ${
        isLeft ? "sm:pr-6" : "sm:flex-row-reverse sm:pl-6"
      }`}
    >
      <TaskContent task={task} num={num} side={side} />
      <div className="hidden sm:block">
        <HexIcon Icon={task.icon} color={task.color} />
      </div>
      <TaskArrow color={task.color} dir={isLeft ? "right" : "left"} />
    </div>
  );
}

/* ============================================================
 *  TRANG CHÍNH
 * ============================================================ */

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowTop(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===================== NAVBAR CỐ ĐỊNH ===================== */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-md shadow-[var(--shadow-soft)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
          <a href="#trang-chu" className="flex min-w-0 items-center gap-2.5">
            <span
              className="grid size-9 shrink-0 place-items-center rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Sparkles className="size-5" />
            </span>
            <span className="truncate font-display text-lg font-bold">Digital Portfolio&nbsp;</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                {n.label}
              </a>
            ))}
          </div>
          <button
            className="rounded-lg p-2 text-foreground md:hidden"
            aria-label="Mở menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </div>
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-border bg-background/95 px-5 py-3 md:hidden">
            <div className="grid gap-1">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ===================== HERO ===================== */}
      <section
        id="trang-chu"
        className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-brand-pink/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 size-80 rounded-full bg-brand-blue-soft/40 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal is-visible">
            <span className="inline-flex items-center gap-2 rounded-full bg-card/70 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur">
              <GraduationCap className="size-4" /> Nhập môn Công nghệ số & Ứng dụng AI
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Portfolio Kỹ thuật số cá nhân
            </h1>
            <p className="mt-4 max-w-xl text-lg text-foreground/80">
              Hành trình học tập môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân
              tạo.
            </p>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              Portfolio này lưu trữ, trình bày và đánh giá quá trình học tập thông
              qua các sản phẩm số đã hoàn thành — thể hiện năng lực vận dụng công
              nghệ và AI một cách sáng tạo, có trách nhiệm.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                ["#gioi-thieu", "Giới thiệu"],
                ["#du-an", "Dự án học tập"],
                ["#tong-ket", "Tổng kết"],
              ].map(([href, label], i) => (
                <a
                  key={href}
                  href={href}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 ${
                    i === 0
                      ? "text-primary-foreground hover:shadow-[var(--shadow-glow)]"
                      : "bg-card/80 text-foreground backdrop-blur hover:bg-card"
                  }`}
                  style={i === 0 ? { background: "var(--gradient-primary)" } : undefined}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="reveal is-visible relative mx-auto w-full max-w-sm">
            <div className="rounded-[2rem] border border-card/60 bg-card/60 p-6 shadow-[var(--shadow-glow)] backdrop-blur">
              <div
                className="grid aspect-square place-items-center rounded-3xl text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <div className="text-center">
                  <Sparkles className="mx-auto size-16" />
                  <p className="mt-3 font-display text-xl font-semibold">
                    Học tập số & AI
                  </p>
                  <p className="text-sm text-primary-foreground/80">
                    Hành trình 6 dự án thực hành
                  </p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[
                  ["6", "Dự án"],
                  ["8", "Kỹ năng"],
                  ["6+", "Minh chứng"],
                ].map(([n, l]) => (
                  <div key={l} className="rounded-2xl bg-secondary/60 py-3">
                    <p className="font-display text-2xl font-bold text-primary">{n}</p>
                    <p className="text-xs text-muted-foreground">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== GIỚI THIỆU ===================== */}
      <section id="gioi-thieu" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="Về tôi"
          title="Giới thiệu bản thân"
          desc="Đôi nét về người thực hiện Portfolio và mục tiêu của hành trình học tập số này."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Card cá nhân */}
          <div className="reveal rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
            <img
              src={avatarImg.url}
              alt="Ảnh đại diện Vũ Phương Thảo"
              className="mx-auto size-28 rounded-full object-cover shadow-[var(--shadow-soft)] ring-2 ring-primary/30"
            />
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Ảnh đại diện
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              {[
                ["Họ và tên", "Vũ Phương Thảo"],
                ["Trường", "Đại Học Kinh Tế- ĐHQGHN"],
                ["Khoa\u00a0", "Khoa Kinh Tế Phát Triển"],
                ["Lớp", "QH2025-E KTPT 7"],
                ["MSV", "25050780"],
                ["Email", "25050780@vnu.edu.vn"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-3 border-b border-border pb-2">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-right font-semibold text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5">
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Heart className="size-4 text-brand-pink-strong" /> Sở thích cá nhân
              </p>
              <div className="flex flex-wrap gap-2">
                {["Thời trang & làm đẹp", "Nấu ăn & làm bánh", "Chụp ảnh sống ảo", "Du lịch khám phá", "Đọc sách self-help", "Sáng tạo nội dung", "Yoga & gym", "Cắm hoa - decor"].map(
                  (s) => (
                    <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {s}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="mt-5">
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Target className="size-4 text-primary" /> Mục tiêu học tập
              </p>
              <ul className="space-y-2">
                {[
                  "Thành thạo kỹ năng số và ứng dụng AI vào học tập, công việc.",
                  "Rèn tư duy phản biện, tự học và quản lý dữ liệu khoa học.",
                  "Phát triển bản thân toàn diện, cân bằng giữa học tập và cuộc sống.",
                ].map((g) => (
                  <li key={g} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Mục tiêu */}
          <div className="reveal rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Mục tiêu của Portfolio
            </h3>
            <p className="mt-3 text-muted-foreground">
              Portfolio được xây dựng nhằm hệ thống hóa và phản ánh trung thực quá
              trình học tập, đồng thời rèn luyện tư duy trình bày và tự đánh giá.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Hệ thống hóa bài tập", "Tập hợp toàn bộ bài tập cuối kỳ một cách khoa học."],
                ["Chứng minh năng lực số", "Thể hiện khả năng sử dụng công cụ số và AI trong học tập."],
                ["Lưu trữ & chia sẻ", "Dễ dàng truy cập, chia sẻ và phát triển trong tương lai."],
                ["Rèn luyện tư duy", "Kỹ năng trình bày, phân tích, phản biện và tự đánh giá."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl bg-secondary/40 p-4">
                  <p className="flex items-center gap-2 font-semibold text-foreground">
                    <CheckCircle2 className="size-4 text-primary" /> {t}
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <p className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                <Target className="size-4 text-brand-pink-strong" /> Kỹ năng cần cải thiện
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Kỹ năng thuyết trình trước đám đông",
                  "Quản lý thời gian hiệu quả",
                  "Tiếng Anh chuyên ngành",
                  "Phân tích dữ liệu nâng cao",
                  "Làm việc nhóm & lãnh đạo",
                ].map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TỔNG QUAN / TIMELINE ===================== */}
       <section
         id="tong-quan"
         className="relative overflow-hidden py-20 sm:py-28"
         style={{
           background:
             "linear-gradient(180deg, oklch(0.99 0.008 300), oklch(0.985 0.014 290))",
         }}
       >
         <div className="relative mx-auto max-w-5xl px-5">
           {/* ---- Đầu mục ---- */}
           <div className="reveal mx-auto max-w-3xl text-center">
             <div className="inline-flex items-center gap-2">
               <BookOpen className="size-4 text-[#EB168C]" strokeWidth={2} />
               <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EB168C]">
                 Hành trình học tập
               </span>
             </div>

            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-[#0B1748] sm:text-5xl">
              Tổng quan{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #8B46E8, #EB168C)",
                  fontSize: "1.15em",
                }}
              >
                6
              </span>{" "}
              nhiệm vụ chính
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Sơ đồ hành trình rèn luyện năng lực số qua sáu nhiệm vụ, mỗi nhiệm
              vụ là một bước trưởng thành.
            </p>
          </div>

          {/* ---- Sơ đồ 2 cột + trục trung tâm ---- */}
          <div className="relative mt-16">
            {/* đường trục dọc trung tâm */}
            <div
              className="absolute inset-y-4 left-1/2 hidden w-px -translate-x-1/2 border-l border-dashed sm:block"
              style={{ borderColor: "#94A3B8", opacity: 0.55 }}
            />

            <div className="space-y-12 sm:space-y-16">
              {Array.from({ length: 3 }).map((_, r) => {
                const left = TASKS[r * 2];
                const right = TASKS[r * 2 + 1];
                return (
                  <div
                    key={r}
                    className="relative grid gap-10 sm:grid-cols-2 sm:gap-0"
                  >
                    {/* điểm tròn trên trục */}
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-1/2 hidden size-5 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 bg-card sm:grid"
                      style={{
                        borderColor: left.color,
                        boxShadow: `0 0 0 5px ${left.color}1f`,
                      }}
                    >
                      <span
                        className="size-2 rounded-full"
                        style={{ backgroundColor: left.color }}
                      />
                    </span>
                    {/* chấm nối nhỏ giữa các hàng */}
                    {r < 2 && (
                      <span
                        aria-hidden
                        className="absolute bottom-[-2.6rem] left-1/2 hidden size-3.5 -translate-x-1/2 place-items-center rounded-full border-2 bg-card sm:grid"
                        style={{ borderColor: "#2463EB" }}
                      >
                        <span className="size-1.5 rounded-full bg-[#2463EB]" />
                      </span>
                    )}

                    <TaskCell task={left} num={r * 2 + 1} side="left" />
                    <TaskCell task={right} num={r * 2 + 2} side="right" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* ---- Thanh chân mục ---- */}
          <div className="reveal mt-16 flex justify-center">
            <div className="flex max-w-3xl flex-wrap items-center justify-center gap-3 rounded-full border border-border bg-card/70 px-6 py-3.5 shadow-[var(--shadow-soft)] backdrop-blur-sm">
              <span
                className="grid size-9 shrink-0 place-items-center rounded-full text-primary-foreground"
                style={{ background: "linear-gradient(135deg, #8B46E8, #EB168C)" }}
              >
                <Target className="size-5" />
              </span>
              <p className="text-center text-sm font-medium text-[#0B1748]">
                6 bước{" "}
                <span
                  className="bg-clip-text font-bold text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #EB168C, #8B46E8)" }}
                >
                  vững chắc
                </span>{" "}
                – Năng lực số{" "}
                <span
                  className="bg-clip-text font-bold text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #8B46E8, #2463EB)" }}
                >
                  toàn diện
                </span>{" "}
                – Sẵn sàng cho{" "}
                <span
                  className="bg-clip-text font-bold text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #2463EB, #10A9AE)" }}
                >
                  tương lai
                </span>
              </p>
              <span
                className="grid size-9 shrink-0 place-items-center rounded-full text-primary-foreground"
                style={{ background: "linear-gradient(135deg, #2463EB, #10A9AE)" }}
              >
                <TrendingUp className="size-5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DỰ ÁN ===================== */}
      <section id="du-an" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="Dự án học tập"
          title="Chi tiết 6 dự án"
          desc="Mỗi dự án trình bày theo cấu trúc thống nhất: mục tiêu, quá trình, công cụ, minh chứng, phân tích và bài học."
        />
        <div className="mt-12 space-y-10">
          {PROJECTS.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className="reveal scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]"
            >
              <div className="flex flex-col gap-4 border-b border-border bg-secondary/30 p-6 sm:flex-row sm:items-center">
                <span
                  className="grid size-14 shrink-0 place-items-center rounded-2xl text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <p.icon className="size-7" />
                </span>
                <div className="min-w-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Dự án {p.index}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                    {p.title}
                  </h3>
                </div>
              </div>
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                      <Target className="size-4 text-primary" /> Mục tiêu
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{p.goal}</p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                      <ListChecks className="size-4 text-primary" /> Quá trình thực hiện
                    </p>
                    <ul className="mt-2 space-y-2">
                      {p.process.map((s, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
                          <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-[11px] font-bold text-primary">
                            {i + 1}
                          </span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                      <Wrench className="size-4 text-primary" /> Công cụ sử dụng
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.tools.map((t) => (
                        <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                      <Lightbulb className="size-4 text-primary" /> Phân tích kết quả
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {p.analysis.map((a, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-brand-pink/15 p-4">
                    <p className="text-sm font-bold text-secondary-foreground">Bài học rút ra</p>
                    <ul className="mt-2 space-y-1.5">
                      {p.lessons.map((l, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <Sparkles className="mt-0.5 size-4 shrink-0 text-brand-pink-strong" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Khu vực minh chứng */}
                  {!p.evidenceImages?.length && !p.evidenceCaptions?.length && (
                  <div className="grid place-items-center rounded-2xl border-2 border-dashed border-border bg-secondary/20 p-6 text-center">
                    <ImageIcon className="size-8 text-muted-foreground" />
                    <p className="mt-2 text-sm font-medium text-foreground">{p.evidence}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Thay bằng minh chứng thật (ảnh / file / video)
                    </p>
                  </div>
                  )}
                </div>
              </div>
              {p.extra && <div className="px-6 pb-8 sm:px-8">{p.extra}</div>}
              {/* Liêm chính học thuật & Sử dụng AI */}
              <div className="px-6 pb-8 sm:px-8">
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6">
                  <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                    <ShieldCheck className="size-5 text-primary" /> Liêm chính học thuật &amp; Sử dụng AI
                  </p>
                  <div className="mt-4 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Cách tôi sử dụng AI</p>
                      <ul className="mt-2 space-y-1.5">
                        {p.integrity.usage.map((u, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary">→</span> {u}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Cam kết liêm chính</p>
                      <ul className="mt-2 space-y-1.5">
                        {p.integrity.commitment.map((c, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" /> {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {p.evidenceCaptions && p.evidenceCaptions.length > 0 && (
                <div className="border-t border-border px-6 pb-8 pt-6 sm:px-8">
                  <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                    <ImageIcon className="size-4 text-primary" /> Ảnh minh chứng thực hành
                    <span className="text-xs font-normal text-muted-foreground">
                      ({p.evidenceCaptions.length} minh chứng)
                    </span>
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {p.evidenceCaptions.map((cap, i) => (
                      <figure
                        key={i}
                        className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md"
                      >
                        <div
                          className="grid aspect-[4/3] place-items-center text-primary-foreground"
                          style={{ background: "var(--gradient-primary)" }}
                        >
                          <div className="text-center opacity-90">
                            <ImageIcon className="mx-auto size-9" />
                            <p className="mt-2 text-xs font-semibold">
                              Minh chứng {i + 1}
                            </p>
                          </div>
                        </div>
                        <figcaption className="px-3 py-2.5 text-center text-xs font-medium text-primary">
                          {cap}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}
              {p.evidenceImages && p.evidenceImages.length > 0 && (
                <div className="border-t border-border px-6 pb-8 pt-6 sm:px-8">
                  <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                    <ImageIcon className="size-4 text-primary" /> Ảnh minh chứng thực hành
                    <span className="text-xs font-normal text-muted-foreground">
                      ({p.evidenceImages.length} ảnh)
                    </span>
                  </p>
                  {p.fileUrl && (
                    <a
                      href={p.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary transition hover:bg-primary/10"
                    >
                      <ImageIcon className="size-4" /> Tải file gốc: {p.fileName ?? "Tài liệu"}
                    </a>
                  )}
                  <div
                    className={`mt-4 grid gap-3 ${
                      p.evidencePortrait
                        ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                        : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                    }`}
                  >
                    {p.evidenceImages.map((src, i) => (
                      <a
                        key={i}
                        href={src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition hover:shadow-md"
                      >
                        <img
                          src={src}
                          alt={`Minh chứng bài tập ${p.index} - ảnh ${i + 1}`}
                          loading="lazy"
                          className={`w-full transition group-hover:scale-105 ${
                            p.evidencePortrait
                              ? "aspect-[3/4] object-contain"
                              : "aspect-video object-cover"
                          }`}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ===================== KỸ NĂNG ===================== */}
      <section id="ky-nang" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="Năng lực đạt được"
          title="Bảng tổng hợp kỹ năng"
          desc="Tám nhóm kỹ năng số cốt lõi được rèn luyện qua toàn bộ hành trình học tập."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          {/* Cột trái: 01,03,05,07 */}
          <div className="order-2 space-y-8 lg:order-1">
            {[0, 2, 4, 6].map((i) => (
              <SkillRow key={i} skill={SKILLS[i]} align="left" />
            ))}
          </div>

          {/* Vòng tròn trung tâm */}
          <div className="reveal order-1 lg:order-2">
            <SkillDonut />
          </div>

          {/* Cột phải: 02,04,06,08 */}
          <div className="order-3 space-y-8">
            {[1, 3, 5, 7].map((i) => (
              <SkillRow key={i} skill={SKILLS[i]} align="right" />
            ))}
          </div>
        </div>

        {/* Thanh tổng kết */}
        <div className="reveal mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-4 gap-y-3 rounded-full border border-border bg-card px-6 py-4 shadow-[var(--shadow-soft)]">
          <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Target className="size-5 text-brand-pink-strong" /> 8 kỹ năng cốt lõi
          </span>
          <ChevronRight className="size-4 text-muted-foreground" />
          <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Brain className="size-5 text-primary" /> Rèn luyện toàn diện
          </span>
          <ChevronRight className="size-4 text-muted-foreground" />
          <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Rocket className="size-5 text-brand-blue" /> Sẵn sàng cho tương lai
          </span>
        </div>
      </section>

      {/* ===================== TỔNG KẾT ===================== */}
      <section id="tong-ket" className="bg-secondary/25 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHeading
            eyebrow="Tổng kết"
            title="Tự đánh giá & định hướng"
            desc="Nhìn lại toàn bộ hành trình, những gì đã học được, khó khăn đã vượt qua và định hướng tương lai."
          />
          <div className="reveal mt-12 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-glow)]">
            <Quote className="size-9 text-brand-pink-strong" />
            <p className="mt-4 font-display text-lg italic leading-relaxed text-foreground sm:text-xl">
              “Thông qua quá trình xây dựng Portfolio kỹ thuật số cá nhân, em không
              chỉ lưu trữ các sản phẩm học tập mà còn nhìn lại toàn bộ quá trình rèn
              luyện kỹ năng công nghệ số, tư duy phản biện và khả năng sử dụng AI có
              trách nhiệm. Portfolio giúp em hiểu rằng trong môi trường học tập hiện
              đại, công nghệ không chỉ là công cụ hỗ trợ mà còn là phương tiện để
              người học thể hiện năng lực, sự sáng tạo và thái độ học tập nghiêm túc.
              Những kỹ năng như quản lý dữ liệu, tìm kiếm học thuật, viết prompt, làm
              việc nhóm trực tuyến và đánh giá đạo đức AI sẽ tiếp tục có giá trị trong
              học tập, nghiên cứu và công việc tương lai.”
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="reveal rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="font-display text-lg font-bold text-foreground">
                Khó khăn đã gặp & cách khắc phục
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  ["Khó sắp xếp nội dung khoa học", "Lập kế hoạch và dàn ý trước khi làm."],
                  ["Khó đánh giá độ tin cậy thông tin", "Kiểm chứng chéo từ nhiều nguồn chính thống."],
                  ["Khó viết prompt đủ rõ ràng", "So sánh nhiều phiên bản prompt để cải tiến."],
                  ["Khó cân bằng AI và tư duy cá nhân", "Chủ động chỉnh sửa, cá nhân hóa sản phẩm AI."],
                ].map(([k, v]) => (
                  <li key={k} className="rounded-2xl bg-secondary/40 p-3.5">
                    <p className="text-sm font-semibold text-foreground">{k}</p>
                    <p className="mt-1 text-sm text-muted-foreground">→ {v}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="font-display text-lg font-bold text-foreground">
                Điều tâm đắc & định hướng tương lai
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Trưởng thành trong tư duy số và học tập độc lập.",
                  "Hình thành thói quen sử dụng AI có trách nhiệm.",
                  "Tiếp tục dùng Portfolio để lưu trữ sản phẩm học tập.",
                  "Ứng dụng kỹ năng số vào học tập, nghiên cứu và công việc.",
                  "Xem AI là công cụ hỗ trợ tư duy, không thay thế con người.",
                ].map((t) => (
                  <li key={t} className="flex gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trải nghiệm làm Portfolio */}
          <div className="reveal mt-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
              <Sparkles className="size-5 text-brand-pink-strong" /> Trải nghiệm làm Portfolio
            </h3>
            <p className="mt-4 text-muted-foreground">
              Việc tự tay xây dựng một Portfolio kỹ thuật số hoàn chỉnh là một trải
              nghiệm học tập thực sự khác biệt. Thay vì chỉ nộp từng bài rời rạc, em
              được nhìn lại toàn bộ hành trình một cách có hệ thống, tự sắp xếp bố cục,
              lựa chọn cách trình bày và kể lại câu chuyện học tập của chính mình.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                ["Chủ động & sáng tạo", "Tự quyết định cấu trúc, màu sắc và cách trình bày từng phần."],
                ["Tư duy hệ thống", "Kết nối các bài tập rời rạc thành một hành trình liền mạch, có ý nghĩa."],
                ["Kiên nhẫn & tỉ mỉ", "Rèn tính cẩn thận khi sắp xếp minh chứng và chỉnh sửa nội dung."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl bg-secondary/40 p-4">
                  <p className="text-sm font-semibold text-foreground">{t}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cam kết liêm chính học thuật */}
          <div className="reveal mt-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
              <ShieldCheck className="size-5 text-primary" /> Cam kết Liêm chính Học thuật
            </h3>
            <p className="mt-4 text-muted-foreground">
              Em cam kết toàn bộ nội dung trong Portfolio này được thực hiện một cách
              trung thực, minh bạch và tôn trọng quyền tác giả:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Tất cả sản phẩm, phân tích và nhận xét đều do em tự thực hiện dựa trên quá trình học tập thực tế.",
                "AI chỉ được sử dụng như công cụ hỗ trợ, gợi ý; em luôn kiểm chứng, chỉnh sửa và chịu trách nhiệm với kết quả cuối cùng.",
                "Mọi nguồn tài liệu tham khảo đều được ghi nhận rõ ràng, không sao chép nguyên văn khi chưa trích dẫn.",
                "Các minh chứng (ảnh chụp màn hình, tệp tin) là bằng chứng thật từ quá trình thực hành của em.",
              ].map((t) => (
                <li key={t} className="flex gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-2xl bg-secondary/40 p-4 text-sm italic text-foreground">
              “Em xin cam kết chịu trách nhiệm về tính trung thực và liêm chính của
              toàn bộ nội dung được trình bày trong Portfolio này.”
            </p>
          </div>

          {/* Kiến thức và kỹ năng quan trọng nhất */}
          <div className="reveal mt-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
              <Lightbulb className="size-5 text-brand-pink-strong" /> Kiến thức và kỹ năng quan trọng nhất
            </h3>
            <p className="mt-4 text-muted-foreground">
              Sau toàn bộ hành trình, đây là những giá trị em cho là quan trọng nhất
              và sẽ tiếp tục đồng hành cùng em trong học tập và công việc:
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["Tư duy phản biện", "Biết đặt câu hỏi, kiểm chứng thông tin và không tiếp nhận kiến thức một cách thụ động."],
                ["Sử dụng AI có trách nhiệm", "Khai thác sức mạnh của AI đồng thời giữ vững đạo đức và tư duy độc lập."],
                ["Quản lý dữ liệu khoa học", "Tổ chức, lưu trữ và bảo vệ dữ liệu một cách hệ thống, bền vững."],
                ["Giao tiếp & hợp tác số", "Làm việc nhóm hiệu quả và trình bày ý tưởng rõ ràng trên nền tảng số."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-3 rounded-2xl bg-secondary/40 p-4">
                  <TrendingUp className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2.5">
                <span
                  className="grid size-9 place-items-center rounded-xl text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Sparkles className="size-5" />
                </span>
                <span className="font-display text-lg font-bold">Digital Portfolio{"\u00a0"}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Portfolio Kỹ thuật số cá nhân
              </p>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-foreground">Thông tin</p>
              <ul className="mt-3 space-y-1.5 text-muted-foreground">
                <li>Sinh viên: Vũ Phương Thảo</li>
                <li>Môn: Nhập môn Công nghệ số & AI</li>
                <li>Năm học: 2025 – 2026</li>
              </ul>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-foreground">Liên hệ</p>
              <ul className="mt-3 space-y-1.5 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="size-4" /> 25050780@vnu.edu.vn
                </li>
                <li className="flex items-center gap-2">
                  <Target className="size-4" /> MSV: 25050780
                </li>
              </ul>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-foreground">Điều hướng</p>
              <ul className="mt-3 grid grid-cols-2 gap-1.5 text-muted-foreground">
                {NAV.map((n) => (
                  <li key={n.id}>
                    <a href={`#${n.id}`} className="hover:text-primary">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
            Portfolio được xây dựng nhằm phục vụ mục đích học tập và tự đánh giá năng
            lực số.
          </div>
        </div>
      </footer>

      {/* ===================== NÚT QUAY LẠI ĐẦU TRANG ===================== */}
      <a
        href="#trang-chu"
        aria-label="Quay lại đầu trang"
        className={`fixed bottom-6 right-6 z-50 grid size-12 place-items-center rounded-full text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        style={{ background: "var(--gradient-primary)" }}
      >
        <ArrowUp className="size-5" />
      </a>
    </div>
  );
}
