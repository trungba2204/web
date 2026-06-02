export type Profile = {
  name: string;
  role: string;
  location: string;
  birthDate: string;
  phone: string;
  email: string;
  facebookUrl?: string;
  about: string;
  objectives: string;
  skills: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    highlights: string[];
  };
  experience: {
    company: string;
    period: string;
    summary: string;
    bullets: string[];
  };
  education: {
    school: string;
    period: string;
    note: string;
  };
  certificate: string;
  projects: Array<{
    title: string;
    period: string;
    description: string;
    role: string;
    bullets?: string[];
    href?: string;
    tags: string[];
  }>;
  initiatives: string[];
  interests: string[];
};

export const profile: Profile = {
  name: "Nguyễn Minh Quân",
  role: "Software Engineer",
  location: "Trần Khát Chân, Hà Nội",
  birthDate: "15/09/2004",
  phone: "0369698617",
  email: "quannguyen092004@gmail.com",
  facebookUrl: "https://www.facebook.com/phi.quan.7792/",
  about:
    "Có 3 năm kinh nghiệm làm việc tại FPT Software, tham gia phát triển các dự án phần mềm bằng Java và xây dựng giao diện người dùng bằng Angular và React/Next.js. Khả năng thích ứng nhanh với thay đổi trong yêu cầu và môi trường, chủ động học hỏi để cải thiện kỹ năng.",
  objectives:
    "Trong 3 năm tới, tiếp tục tham gia nhiều dự án thực tế để nâng cao năng lực về bảo trì/phát triển phần mềm và tích lũy kinh nghiệm chuyên sâu. Mong muốn được đồng hành cùng công ty, đóng góp tích cực vào sự phát triển bền vững của doanh nghiệp.",
  skills: {
    languages: ["Java", "JavaScript"],
    frameworks: ["Spring Boot", "Spring Data JPA", "Hibernate", "Angular", "React.js", "Next.js"],
    databases: ["MySQL"],
    highlights: [
      "Thành thạo xây dựng RESTful APIs, quản lý dữ liệu bằng JPA/Hibernate, tối ưu hiệu năng ứng dụng.",
      "Tích hợp Spring Security cho bảo mật hệ thống.",
      "Phát triển frontend hiện đại, chú trọng UI/UX và responsive.",
      "Kinh nghiệm sử dụng AI Agent trong sinh code và viết prompt.",
      "Giao tiếp API giữa frontend và backend để đảm bảo luồng dữ liệu nhất quán.",
    ],
  },
  experience: {
    company: "FPT SOFTWARE",
    period: "03/07/2023 - Present",
    summary:
      "Có 3 năm kinh nghiệm làm việc với vai trò Developer, tham gia phát triển cả frontend và backend cho nhiều dự án khác nhau.",
    bullets: [
      "Frontend: dùng Angular và Next.js để xây dựng giao diện, tối ưu trải nghiệm và đảm bảo responsive; kết nối API, quản lý dữ liệu và triển khai các chức năng phức tạp.",
      "Backend: phát triển ứng dụng bằng Java (Spring Boot), xây dựng và triển khai RESTful APIs cho hệ thống; dùng Hibernate/JPA và tích hợp Spring Security.",
      "Tối ưu code, cải thiện cấu trúc và hiệu suất xử lý; phối hợp với các team backend/frontend/testing để đảm bảo đồng bộ và ổn định sản phẩm.",
      "Kinh nghiệm sử dụng AI Agent trong việc sinh source code và viết prompt.",
    ],
  },
  education: {
    school: "APTECH FPT",
    period: "2022 - 2024",
    note:
      "Thực hiện và bảo vệ thành công dự án quản lý xe ô tô bằng C#/Java (Spring Boot) và Angular; nắm vững quy trình phát triển full-stack từ thiết kế hệ thống, xây dựng API backend đến phát triển và triển khai ứng dụng.",
  },
  certificate: "2024 FPT APTECH Certification",
  projects: [
    {
      title: "Campus Booking",
      period: "Oct 2024 - Dec 2025",
      role: "Developer",
      description:
        "Phát triển và duy trì các chức năng chính để quản lý mã giảm giá: thêm, sửa, xóa và tra cứu; triển khai xuất dữ liệu ra file Excel để hỗ trợ quản lý và phân tích.",
      tags: ["Frontend", "Backend", "Export", "CRUD"],
    },
    {
      title: "BA Issue",
      period: "Oct 2024 - Dec 2025",
      role: "Fullstack Developer",
      description:
        "Tham gia phát triển hệ thống từ giai đoạn xây dựng giao diện đến triển khai chức năng backend; kết nối API và xây dựng API cho Rating.",
      bullets: [
        "Phát triển frontend và thiết kế UI/UX theo yêu cầu nghiệp vụ.",
        "Kết nối API giữa frontend và backend để đảm bảo luồng dữ liệu ổn định.",
        "Xây dựng API cho chức năng Rating để người dùng đánh giá và phản hồi.",
        "Hỗ trợ build/deploy, kiểm thử và xử lý sự cố trong môi trường thực tế.",
      ],
      tags: ["UI/UX", "API", "Fullstack", "Rating"],
    },
    {
      title: "FJA Academy",
      period: "Oct 2024 - Dec 2025",
      role: "Developer (ver 1-2)",
      description:
        "Tham gia phát triển phiên bản đầu tiên: phụ trách UI/UX, viết service/model để kết nối dữ liệu; phiên bản 2 chịu trách nhiệm toàn diện frontend đến backend (thiết kế kiến trúc, phát triển tính năng, xử lý dữ liệu, build & triển khai).",
      bullets: [
        "Ver 1: UI/UX, service và model; build & deploy frontend.",
        "Ver 2: phát triển full-stack từ kiến trúc đến triển khai hoàn chỉnh.",
      ],
      href: "https://fjpacademy.com/",
      tags: ["Fullstack", "Architecture", "Deployment"],
    },
  ],
  initiatives: [
    "Phát triển màn hình phân quyền người dùng, quản lý quyền truy cập rõ ràng và an toàn cho quản trị viên.",
    "Thực hiện responsive cho toàn bộ giao diện, tối ưu trải nghiệm trên máy tính, máy tính bảng và điện thoại.",
    "Xây dựng và tùy chỉnh navbar và footer tạo sự chuyên nghiệp, nhất quán.",
    "Hỗ trợ build source frontend, kiểm thử và đảm bảo hệ thống hoạt động ổn định sau triển khai thực tế.",
  ],
  interests: ["Đá bóng", "Thể thao"],
};

