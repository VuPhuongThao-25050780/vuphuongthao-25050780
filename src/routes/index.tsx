import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  Send,
  TrendingUp,
} from "lucide-react";
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
  { id: "minh-chung", label: "Minh chứng" },
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
    desc: "Sản xuất sản phẩm số hoàn chỉnh với quy trình con người – AI kết hợp.",
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
  analysis: string[];
  lessons: string[];
  extra?: React.ReactNode;
};

const PROJECTS: Project[] = [
  {
    id: "du-an-1",
    index: 1,
    icon: FolderTree,
    title: "Bài tập 1 – Thao tác cơ bản với tệp tin và thư mục",
    goal: "Biết tạo thư mục, lưu trữ tài liệu khoa học, đặt tên tệp nhất quán và quản lý dữ liệu học tập một cách bền vững.",
    process: [
      "Tạo thư mục chính cho môn học làm gốc lưu trữ toàn bộ dữ liệu.",
      "Chia thư mục thành các nhóm: Bài tập, Tài liệu tham khảo, Hình ảnh minh chứng, Sản phẩm cuối kỳ.",
      "Đặt tên tệp theo quy tắc thống nhất, có STT, tên bài, ngày và phiên bản.",
    ],
    tools: ["File Explorer", "Google Drive", "OneDrive"],
    tags: ["Tổ chức dữ liệu", "Đặt tên nhất quán", "Sao lưu đám mây"],
    evidence: "Ảnh chụp màn hình cấu trúc thư mục và sơ đồ cây thư mục môn học.",
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
          Quy tắc đặt tên tệp sáng tạo
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <code className="rounded-lg bg-card px-3 py-1.5 text-xs font-medium shadow-sm">
            MonHoc_Chuong_BaiTap_NgayThucHien_PhienBan
          </code>
          <code className="rounded-lg bg-card px-3 py-1.5 text-xs font-medium shadow-sm">
            NMCNS_Bai01_QuanLyTep_2026_v1
          </code>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Quy tắc này hỗ trợ tìm kiếm nhanh, sắp xếp theo thứ tự thời gian, tránh
          nhầm lẫn phiên bản và giúp chia sẻ tệp rõ ràng cho nhóm.
        </p>
      </div>
    ),
  },
  {
    id: "du-an-2",
    index: 2,
    icon: Search,
    title: "Bài tập 2 – Tìm kiếm và đánh giá thông tin học thuật",
    goal: "Biết sử dụng toán tử tìm kiếm nâng cao và đánh giá độ tin cậy của nguồn thông tin trước khi sử dụng.",
    process: [
      "Chọn một chủ đề học thuật liên quan đến AI, công nghệ số hoặc giáo dục.",
      "Kết hợp nhiều toán tử tìm kiếm để thu hẹp phạm vi và tăng chất lượng kết quả.",
      "So sánh, đối chiếu kết quả từ nhiều nguồn khác nhau và ghi lại lý do lựa chọn.",
    ],
    tools: ["Google Search", "Google Scholar", "Website trường đại học", "Báo cáo PDF"],
    tags: ["Toán tử nâng cao", "Đánh giá nguồn", "Tư duy phản biện"],
    evidence: "Ảnh kết quả tìm kiếm với toán tử nâng cao và bảng đánh giá nguồn.",
    analysis: [
      "Tìm kiếm hiệu quả cần chiến lược, không chỉ là nhập từ khóa.",
      "Toán tử nâng cao giúp lọc nhiễu, khoanh vùng tài liệu đúng định dạng và nguồn.",
      "Nguồn học thuật, báo cáo chính thức, tài liệu từ trường đại học thường đáng tin hơn nguồn ẩn danh.",
    ],
    lessons: [
      "Cần kiểm chứng thông tin trước khi sử dụng.",
      "Không nên phụ thuộc vào một nguồn duy nhất.",
    ],
    extra: (
      <div className="mt-5 space-y-4">
        <div className="flex flex-wrap gap-2">
          {[
            'site:',
            "filetype:",
            "intitle:",
            '"từ khóa chính xác"',
            "OR",
            "-",
            "after:",
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
                {["Nguồn", "Tác giả / Tổ chức", "Năm", "Độ tin cậy", "Lý do chọn", "Hạn chế"].map(
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
                ["Bài báo trên Google Scholar", "Nhóm nghiên cứu đại học", "2023", "Cao", "Bình duyệt, trích dẫn rõ ràng", "Ngôn ngữ học thuật khó đọc"],
                ["Báo cáo PDF của tổ chức giáo dục", "UNESCO / Bộ GD", "2024", "Cao", "Nguồn chính thống, số liệu cập nhật", "Phạm vi tổng quát"],
                ["Bài viết blog công nghệ", "Tác giả ẩn danh", "2022", "Trung bình", "Cập nhật xu hướng nhanh", "Thiếu trích dẫn, cần kiểm chứng"],
              ].map((row) => (
                <tr key={row[0]} className="bg-card">
                  {row.map((c, i) => (
                    <td key={i} className="px-4 py-3 text-muted-foreground">
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
    goal: "Biết cách viết prompt rõ ràng để AI trả lời đúng yêu cầu, đúng định dạng và phù hợp mục tiêu học tập.",
    process: [
      "Viết một prompt ban đầu còn chung chung, thiếu bối cảnh.",
      "Viết prompt cải tiến có đầy đủ vai trò, bối cảnh, yêu cầu, định dạng đầu ra và tiêu chí đánh giá.",
      "So sánh kết quả giữa hai prompt và rút ra nhận xét.",
    ],
    tools: ["ChatGPT", "Gemini", "Claude"],
    tags: ["Prompt Engineering", "So sánh kết quả", "Tư duy cấu trúc"],
    evidence: "Ảnh chụp prompt ban đầu, prompt cải tiến và kết quả AI trả lời.",
    analysis: [
      "Prompt cải tiến giúp AI hiểu rõ vai trò, phạm vi, mục tiêu và cách trình bày.",
      "Yêu cầu càng cụ thể, kết quả càng có cấu trúc, ít sai lệch và bám sát mục đích.",
      "AI phản hồi dựa trên ngữ cảnh và độ cụ thể của yêu cầu, nên chi tiết đầu vào quyết định chất lượng đầu ra.",
    ],
    lessons: [
      "Muốn AI trả lời tốt cần đặt câu hỏi tốt.",
      "Prompt hiệu quả phải rõ vai trò, bối cảnh, nhiệm vụ, tiêu chí và định dạng.",
    ],
    extra: (
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-secondary/50 text-secondary-foreground">
            <tr>
              {["Tiêu chí", "Prompt ban đầu", "Prompt cải tiến", "Nhận xét"].map((h) => (
                <th key={h} className="px-4 py-3 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              ["Độ rõ ràng", "Mơ hồ, một câu ngắn", "Nêu rõ mục tiêu và phạm vi", "Cải tiến rõ ràng hơn hẳn"],
              ["Vai trò", "Không xác định", "Gán vai trò chuyên gia", "AI trả lời chuyên sâu hơn"],
              ["Bối cảnh", "Thiếu", "Đầy đủ bối cảnh học tập", "Kết quả sát nhu cầu"],
              ["Định dạng đầu ra", "Tự do", "Yêu cầu bảng / gạch đầu dòng", "Dễ đọc, dễ dùng lại"],
              ["Mức độ chính xác", "Chung chung", "Có tiêu chí đánh giá", "Ít sai lệch hơn"],
              ["Khả năng kiểm soát", "Thấp", "Cao", "Chủ động điều chỉnh kết quả"],
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
    goal: "Biết lập kế hoạch, phân công công việc và theo dõi tiến độ nhóm bằng công cụ trực tuyến.",
    process: [
      "Tạo bảng quản lý công việc nhóm trên nền tảng trực tuyến.",
      "Chia nhiệm vụ theo từng thành viên và đặt hạn hoàn thành.",
      "Theo dõi trạng thái: Chưa làm, Đang làm, Hoàn thành, Cần chỉnh sửa; nhắc hạn và phản hồi.",
    ],
    tools: ["Trello", "Notion", "Google Sheets", "Microsoft Planner"],
    tags: ["Quản lý dự án", "Phân công minh bạch", "Theo dõi tiến độ"],
    evidence: "Ảnh chụp bảng công việc nhóm và biểu đồ tiến độ.",
    analysis: [
      "Công cụ trực tuyến giúp nhóm làm việc minh bạch, dễ kiểm soát tiến độ.",
      "Mỗi thành viên biết rõ nhiệm vụ, tránh trùng lặp hoặc bỏ sót công việc.",
      "Theo dõi trạng thái giúp phát hiện vấn đề sớm và điều chỉnh kịp thời.",
    ],
    lessons: [
      "Làm việc nhóm hiệu quả cần có kế hoạch rõ ràng.",
      "Công cụ số giúp nâng cao tính trách nhiệm và khả năng phối hợp.",
    ],
    extra: (
      <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[620px] text-left text-sm">
          <thead className="bg-secondary/50 text-secondary-foreground">
            <tr>
              {["Thành viên", "Nhiệm vụ", "Hạn hoàn thành", "Trạng thái", "Ghi chú"].map((h) => (
                <th key={h} className="px-4 py-3 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {[
              ["Thành viên A", "Thu thập tài liệu", "10/03", "Hoàn thành", "Đã kiểm chứng nguồn"],
              ["Thành viên B", "Thiết kế nội dung", "14/03", "Đang làm", "Bản nháp v1"],
              ["Thành viên C", "Tổng hợp báo cáo", "16/03", "Chưa làm", "Chờ nội dung"],
              ["Thành viên D", "Rà soát & trình bày", "18/03", "Cần chỉnh sửa", "Bổ sung trích dẫn"],
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
                <td className="px-4 py-3 text-muted-foreground">{row[4]}</td>
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
    goal: "Biết sử dụng AI để tạo sản phẩm nội dung số hoàn chỉnh phục vụ học tập, có chỉnh sửa và chịu trách nhiệm cá nhân.",
    process: [
      "Lên ý tưởng: chọn một khái niệm trong môn học cần truyền đạt.",
      "Viết kịch bản và tạo nội dung bằng AI (văn bản, hình ảnh, giọng đọc).",
      "Chỉnh sửa thủ công, kiểm tra chất lượng và hoàn thiện sản phẩm.",
    ],
    tools: ["ChatGPT", "Canva", "CapCut", "Gemini", "DALL·E"],
    tags: ["AI tạo sinh", "Quy trình sản xuất", "Biên tập cá nhân"],
    evidence: "Video ngắn (< 5 phút), infographic hoặc ảnh minh họa sản phẩm AI.",
    analysis: [
      "AI giúp tăng tốc quá trình lên ý tưởng và sản xuất nội dung.",
      "Người học vẫn cần kiểm duyệt, chỉnh sửa và đảm bảo tính chính xác.",
      "Sản phẩm tốt là sự kết hợp giữa năng lực con người và công cụ AI.",
    ],
    lessons: [
      "AI là công cụ hỗ trợ sáng tạo, không thay thế hoàn toàn tư duy cá nhân.",
      "Cần biết chọn lọc, biên tập và chịu trách nhiệm với nội dung mình tạo ra.",
    ],
    extra: (
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["1. Lên ý tưởng", "Con người chủ đạo", "Xác định mục tiêu, thông điệp"],
          ["2. Viết kịch bản", "Con người + AI", "AI gợi ý, con người quyết định"],
          ["3. Tạo nội dung", "AI hỗ trợ", "Sinh ảnh, văn bản, giọng đọc"],
          ["4. Chỉnh sửa", "Con người chủ đạo", "Biên tập, cá nhân hóa"],
          ["5. Kiểm tra chất lượng", "Con người", "Đối chiếu độ chính xác"],
          ["6. Hoàn thiện", "Con người", "Xuất bản, chịu trách nhiệm"],
        ].map(([step, who, note]) => (
          <div key={step} className="rounded-2xl border border-border bg-card p-4">
            <p className="text-sm font-semibold text-foreground">{step}</p>
            <p className="mt-1 text-xs font-medium text-primary">{who}</p>
            <p className="mt-1 text-xs text-muted-foreground">{note}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "du-an-6",
    index: 6,
    icon: ShieldCheck,
    title: "Bài tập 6 – Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    goal: "Hiểu các vấn đề đạo đức khi sử dụng AI và xây dựng bộ nguyên tắc cá nhân sử dụng AI có trách nhiệm.",
    process: [
      "Tìm hiểu chính sách sử dụng AI trong môi trường học thuật.",
      "Phân tích các vấn đề: đạo văn, phụ thuộc AI, sai lệch thông tin, quyền riêng tư, thiên kiến thuật toán.",
      "Xây dựng bộ nguyên tắc sử dụng AI cá nhân và cam kết áp dụng.",
    ],
    tools: ["Tài liệu học thuật", "Quy định nhà trường", "Nguồn tham khảo chính thống"],
    tags: ["Đạo đức AI", "Liêm chính học thuật", "Tư duy phản biện"],
    evidence: "Ảnh bộ nguyên tắc sử dụng AI cá nhân và ghi chú phân tích đạo đức.",
    analysis: [
      "AI mang lại nhiều cơ hội nhưng cũng tạo ra rủi ro về đạo đức học thuật.",
      "Người học cần phát triển năng lực tự đánh giá, phản biện và kiểm chứng.",
      "Sử dụng AI có trách nhiệm giúp bảo vệ tính trung thực, sáng tạo và chất lượng học tập.",
    ],
    lessons: [
      "Trách nhiệm số là kỹ năng quan trọng trong thời đại AI.",
      "Sử dụng AI đúng cách giúp người học phát triển bền vững hơn.",
    ],
    extra: (
      <div className="mt-5 rounded-2xl border border-border bg-secondary/40 p-5">
        <p className="text-sm font-semibold text-secondary-foreground">
          Bộ nguyên tắc sử dụng AI cá nhân
        </p>
        <ol className="mt-3 space-y-2">
          {[
            "Không dùng AI để gian lận hoặc làm thay toàn bộ bài tập.",
            "Luôn kiểm chứng thông tin do AI cung cấp.",
            "Ghi rõ khi có sử dụng AI trong quá trình học tập.",
            "Không nhập dữ liệu cá nhân hoặc thông tin nhạy cảm vào AI.",
            "Không sao chép nguyên văn nội dung AI nếu chưa kiểm tra và chỉnh sửa.",
            "Sử dụng AI để hỗ trợ tư duy, không thay thế tư duy.",
            "Chịu trách nhiệm cuối cùng với sản phẩm học tập của bản thân.",
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

const EVIDENCE = [
  { title: "Cấu trúc thư mục", desc: "Ảnh chụp cây thư mục môn học được tổ chức khoa học.", tint: "from-brand-pink/40 to-brand-blue-soft/40" },
  { title: "Kết quả tìm kiếm học thuật", desc: "Ảnh kết quả với toán tử nâng cao và bảng đánh giá nguồn.", tint: "from-brand-blue-soft/40 to-brand-pink/40" },
  { title: "So sánh prompt", desc: "Ảnh prompt ban đầu, prompt cải tiến và kết quả AI.", tint: "from-brand-pink/40 to-brand-blue-soft/40" },
  { title: "Bảng quản lý công việc nhóm", desc: "Ảnh chụp bảng phân công và theo dõi tiến độ.", tint: "from-brand-blue-soft/40 to-brand-pink/40" },
  { title: "Sản phẩm AI", desc: "Ảnh/video sản phẩm số được tạo và biên tập bằng AI.", tint: "from-brand-pink/40 to-brand-blue-soft/40" },
  { title: "Bộ nguyên tắc sử dụng AI", desc: "Ảnh bộ nguyên tắc cá nhân sử dụng AI có trách nhiệm.", tint: "from-brand-blue-soft/40 to-brand-pink/40" },
];

const SKILLS = [
  ["Quản lý tệp và dữ liệu số", "Tổ chức, đặt tên, sao lưu dữ liệu học tập.", 90, "Lưu trữ và chia sẻ tài liệu môn học"],
  ["Tìm kiếm thông tin học thuật", "Vận dụng toán tử nâng cao để lọc kết quả.", 88, "Nghiên cứu, làm báo cáo"],
  ["Đánh giá độ tin cậy của nguồn", "Phân tích tác giả, năm, tính chính thống.", 85, "Kiểm chứng thông tin trước khi dùng"],
  ["Viết prompt hiệu quả", "Thiết kế prompt có cấu trúc rõ ràng.", 87, "Khai thác AI hỗ trợ học tập"],
  ["Làm việc nhóm trực tuyến", "Phân công và theo dõi tiến độ số hóa.", 84, "Dự án nhóm, phối hợp từ xa"],
  ["Sáng tạo nội dung số bằng AI", "Sản xuất video, infographic, hình ảnh.", 82, "Trình bày và truyền đạt kiến thức"],
  ["Sử dụng AI có trách nhiệm", "Tuân thủ đạo đức và liêm chính học thuật.", 90, "Học tập và nghiên cứu bền vững"],
  ["Tự đánh giá và cải thiện", "Phản tư, nhận diện điểm mạnh – yếu.", 86, "Phát triển bản thân liên tục"],
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

function TimelineTask({
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
    <div
      className={`reveal flex items-start gap-4 sm:gap-6 ${
        isLeft ? "sm:flex-row-reverse sm:text-right" : "sm:flex-row"
      }`}
    >
      {/* icon lục giác + mũi tên hướng vào trục */}
      <div className="relative hidden sm:block">
        <HexIcon Icon={task.icon} color={task.color} />
      </div>

      {/* khối nội dung */}
      <div className={`flex-1 ${isLeft ? "sm:items-end" : ""}`}>
        <div
          className={`flex items-center gap-3 ${
            isLeft ? "sm:flex-row-reverse" : ""
          }`}
        >
          <span
            className="font-display text-4xl font-extrabold leading-none tracking-tight"
            style={{ color: task.color }}
          >
            {label}
          </span>
          <span
            className="h-9 w-px"
            style={{ backgroundColor: task.color }}
            aria-hidden
          />
          <span className="sm:hidden">
            <HexIcon Icon={task.icon} color={task.color} />
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl font-bold leading-snug text-foreground">
          {task.titleLines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </h3>
        <p
          className={`mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground ${
            isLeft ? "sm:ml-auto" : ""
          }`}
        >
          {task.desc}
        </p>

        <div className={`mt-4 max-w-xs ${isLeft ? "sm:ml-auto" : ""}`}>
          <div
            className={`mb-1.5 flex items-center justify-between text-xs font-medium text-muted-foreground ${
              isLeft ? "sm:flex-row-reverse" : ""
            }`}
          >
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
            <span className="truncate font-display text-lg font-bold">Portfolio số</span>
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
                ["#minh-chung", "Minh chứng"],
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
                    Hình minh họa (placeholder)
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
            <div
              className="mx-auto grid size-28 place-items-center rounded-full text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <span className="font-display text-3xl font-bold">Ảnh</span>
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Ảnh đại diện (placeholder)
            </p>
            <dl className="mt-6 space-y-3 text-sm">
              {[
                ["Họ và tên", "[Điền tên của bạn]"],
                ["Ngành học", "[Điền ngành học]"],
                ["Trường / Lớp", "[Điền trường/lớp]"],
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
                {["Học công nghệ số", "Khám phá AI", "Sáng tạo nội dung", "Quản lý dữ liệu", "Làm việc nhóm"].map(
                  (s) => (
                    <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {s}
                    </span>
                  ),
                )}
              </div>
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
        {/* ---- Họa tiết nền trang trí ---- */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* vòng tròn gradient góc trên trái */}
          <div
            className="absolute -left-24 -top-24 size-64 rounded-full opacity-30"
            style={{
              background:
                "conic-gradient(from 90deg, #EB168C, #8B46E8, #2463EB, #EB168C)",
              WebkitMask: "radial-gradient(farthest-side, transparent 62%, #000 64%)",
              mask: "radial-gradient(farthest-side, transparent 62%, #000 64%)",
            }}
          />
          {/* mảng gradient góc trên phải */}
          <div
            className="absolute -right-20 -top-16 size-72 rounded-full blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(circle, rgba(235,22,140,0.18), rgba(139,70,232,0.10), transparent 70%)",
            }}
          />
          {/* máy bay giấy + đường bay */}
          <svg
            className="absolute right-10 top-28 hidden opacity-60 lg:block"
            width="150"
            height="90"
            viewBox="0 0 150 90"
            fill="none"
          >
            <path
              d="M2 80 C 40 70, 60 40, 120 20"
              stroke="#8B46E8"
              strokeWidth="1.5"
              strokeDasharray="4 5"
              fill="none"
            />
          </svg>
          <Send
            className="absolute right-6 top-16 hidden size-8 -rotate-12 text-[#2463EB] opacity-70 lg:block"
            strokeWidth={1.5}
          />
          {/* ngôi sao nhỏ */}
          <Sparkles className="absolute left-[18%] top-40 size-4 text-[#EB168C] opacity-50" />
          <Sparkles className="absolute right-[22%] bottom-40 size-5 text-[#8B46E8] opacity-40" />
          {/* cụm chấm góc trên trái */}
          <div className="absolute left-8 top-40 grid grid-cols-4 gap-2 opacity-40">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="size-1.5 rounded-full"
                style={{ backgroundColor: i % 2 ? "#8B46E8" : "#2463EB" }}
              />
            ))}
          </div>
          {/* sóng góc dưới trái */}
          <svg
            className="absolute -left-4 bottom-10 opacity-30"
            width="160"
            height="60"
            viewBox="0 0 160 60"
            fill="none"
          >
            <path d="M0 20 Q 20 5, 40 20 T 80 20 T 120 20 T 160 20" stroke="#10A9AE" strokeWidth="1.5" fill="none" />
            <path d="M0 40 Q 20 25, 40 40 T 80 40 T 120 40 T 160 40" stroke="#EB168C" strokeWidth="1.5" fill="none" />
          </svg>
          {/* cụm chấm góc dưới phải */}
          <div className="absolute bottom-24 right-10 grid grid-cols-4 gap-2 opacity-40">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="size-1.5 rounded-full"
                style={{ backgroundColor: i % 2 ? "#EB168C" : "#8B46E8" }}
              />
            ))}
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl px-5">
          {/* ---- Đầu mục ---- */}
          <div className="reveal mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2.5">
              <span className="size-1.5 rounded-full bg-[#8B46E8]" />
              <span className="size-2 rounded-full bg-[#EB168C]" />
              <BookOpen className="size-4 text-[#EB168C]" strokeWidth={2} />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EB168C]">
                Hành trình học tập
              </span>
              <span className="size-2 rounded-full bg-[#EB168C]" />
              <span className="size-1.5 rounded-full bg-[#8B46E8]" />
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
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="size-1.5 rounded-full bg-[#EB168C]" />
              <span
                className="h-0.5 w-28 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #EB168C, #8B46E8, #2463EB)",
                }}
              />
              <span className="size-1.5 rounded-full bg-[#2463EB]" />
            </div>
          </div>

          {/* ---- Trục hành trình + nội dung ---- */}
          <div className="relative mt-16">
            {/* đường trục dọc */}
            <div
              className="absolute inset-y-2 left-1/2 hidden w-px -translate-x-1/2 sm:block"
              style={{
                background:
                  "linear-gradient(180deg, #EB168C, #2463EB, #8B46E8, #10A9AE, #FF7A00, #2463EB)",
                opacity: 0.35,
              }}
            />

            <div className="space-y-14 sm:space-y-16">
              {TASKS.map((task, i) => {
                const side = i % 2 === 0 ? "left" : "right";
                return (
                  <div
                    key={task.title}
                    className="relative grid gap-6 sm:grid-cols-2 sm:gap-16"
                  >
                    {/* điểm tròn trên trục */}
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-6 hidden size-4 -translate-x-1/2 place-items-center rounded-full border-2 bg-card sm:grid"
                      style={{
                        borderColor: task.color,
                        boxShadow: `0 0 0 4px ${task.color}22`,
                      }}
                    >
                      <span
                        className="size-1.5 rounded-full"
                        style={{ backgroundColor: task.color }}
                      />
                    </span>

                    {side === "left" ? (
                      <>
                        <TimelineTask task={task} num={i + 1} side="left" />
                        <div className="hidden sm:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden sm:block" />
                        <TimelineTask task={task} num={i + 1} side="right" />
                      </>
                    )}
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
                  <div className="grid place-items-center rounded-2xl border-2 border-dashed border-border bg-secondary/20 p-6 text-center">
                    <ImageIcon className="size-8 text-muted-foreground" />
                    <p className="mt-2 text-sm font-medium text-foreground">{p.evidence}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Thay bằng minh chứng thật (ảnh / file / video)
                    </p>
                  </div>
                </div>
              </div>
              {p.extra && <div className="px-6 pb-8 sm:px-8">{p.extra}</div>}
            </article>
          ))}
        </div>
      </section>

      {/* ===================== MINH CHỨNG / GALLERY ===================== */}
      <section id="minh-chung" className="bg-secondary/25 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Thư viện minh chứng"
            title="Evidence Gallery"
            desc="Bộ minh chứng trực quan cho từng nhiệm vụ. Có thể thay ảnh placeholder bằng ảnh thật một cách dễ dàng."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EVIDENCE.map((e) => (
              <div
                key={e.title}
                className="reveal group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow)]"
              >
                <div className={`grid aspect-video place-items-center bg-gradient-to-br ${e.tint}`}>
                  <ImageIcon className="size-10 text-foreground/50 transition-transform group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-foreground">{e.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{e.desc}</p>
                  <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Xem chi tiết <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== KỸ NĂNG ===================== */}
      <section id="ky-nang" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <SectionHeading
          eyebrow="Năng lực đạt được"
          title="Bảng tổng hợp kỹ năng"
          desc="Tám nhóm kỹ năng số cốt lõi được rèn luyện qua toàn bộ hành trình học tập."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {SKILLS.map(([name, desc, level, use]) => (
            <div
              key={name as string}
              className="reveal rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
                <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                  {level}%
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${level}%`, background: "var(--gradient-primary)" }}
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Ứng dụng thực tế: </span>
                {use}
              </p>
            </div>
          ))}
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
                <span className="font-display text-lg font-bold">Portfolio số</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Portfolio Kỹ thuật số cá nhân
              </p>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-foreground">Thông tin</p>
              <ul className="mt-3 space-y-1.5 text-muted-foreground">
                <li>Sinh viên: [Điền tên của bạn]</li>
                <li>Môn: Nhập môn Công nghệ số & AI</li>
                <li>Năm học: 2025 – 2026</li>
              </ul>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-foreground">Liên hệ</p>
              <ul className="mt-3 space-y-1.5 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="size-4" /> email@example.com
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
