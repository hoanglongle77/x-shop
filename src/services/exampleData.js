import product1 from "@/assets/images/products/p1.jpg";
import product2 from "@/assets/images/products/p2.webp";
import product3 from "@/assets/images/products/p3.webp";
import product4 from "@/assets/images/products/p4.png";
import product5 from "@/assets/images/products/p5.jpg";
import product6 from "@/assets/images/products/p6.webp";
import product7 from "@/assets/images/products/p7.jpg";
import product8 from "@/assets/images/products/p8.png";
import product9 from "@/assets/images/products/p9.jpg";
import product10 from "@/assets/images/products/p10.jpg";
import blogImage from "@/assets/images/blogs/blog.webp";

export const homePage = [];

export const productsPage = [
  {
    id: 1,
    name: "Bàn phím cơ Keychron K8",
    slug: "ban-phim-co-keychron-k8",
    desc: "Bluetooth / Wireless - LED RGB - Layout TKL",
    price: "2.590.000₫",
    image: product1,
    slug: "ban-phim-co-keychron-k8",
  },
  {
    id: 2,
    name: "Tai nghe Sony WH-1000XM5",
    slug: "tai-nghe-sony-wh-1000xm5",
    desc: "Chống ồn chủ động, âm thanh chất lượng cao",
    price: "8.990.000₫",
    image: product2,
    slug: "tai-nghe-sony-wh-1000xm5",
  },
  {
    id: 3,
    name: "Chuột Logitech MX Master 3S",
    slug: "chuot-logitech-mx-master-3s",
    desc: "Kết nối không dây - DPI cao - Siêu mượt",
    price: "2.490.000₫",
    image: product3,
    slug: "chuot-logitech-mx-master-3s",
  },
  {
    id: 4,
    name: "Màn hình LG UltraGear 27'' QHD 165Hz",
    slug: "man-hinh-lg-ultragear-27-qhd-165hz",
    desc: "Gaming - IPS - G-Sync compatible",
    price: "7.990.000₫",
    image: product4,
    slug: "man-hinh-lg-ultragear-27-qhd-165hz",
  },
  {
    id: 5,
    name: "Laptop ASUS ROG Zephyrus G14",
    slug: "laptop-asus-rog-zephyrus-g14",
    desc: "Ryzen 9 - RTX 4060 - 16GB RAM - 1TB SSD",
    price: "34.990.000₫",
    image: product5,
    slug: "laptop-asus-rog-zephyrus-g14",
  },
  {
    id: 6,
    name: "Ổ cứng SSD Samsung 980 Pro 1TB",
    slug: "o-cung-ssd-samsung-980-pro-1tb",
    desc: "PCIe Gen4 - Tốc độ đọc ghi siêu nhanh",
    price: "3.190.000₫",
    image: product6,
    slug: "o-cung-ssd-samsung-980-pro-1tb",
  },
  {
    id: 7,
    name: "Loa Bluetooth JBL Charge 5",
    slug: "loa-bluetooth-jbl-charge-5",
    desc: "Âm thanh mạnh mẽ - Kháng nước IP67",
    price: "3.290.000₫",
    image: product7,
    slug: "loa-bluetooth-jbl-charge-5",
  },
  {
    id: 8,
    name: "Bàn nâng công thái học E-DRA",
    slug: "ban-nang-cong-thai-hoc-e-dra",
    desc: "Điều chỉnh chiều cao, phù hợp dân văn phòng",
    price: "5.590.000₫",
    image: product8,
    slug: "ban-nang-cong-thai-hoc-e-dra",
  },
  {
    id: 9,
    name: "Đèn LED RGB Ambient Govee",
    slug: "den-led-rgb-ambient-govee",
    desc: "Đồng bộ ánh sáng với nhạc/game",
    price: "1.290.000₫",
    image: product9,
    slug: "den-led-rgb-ambient-govee",
  },
  {
    id: 10,
    name: "Ghế gaming Secretlab TITAN Evo",
    slug: "ghe-gaming-secretlab-titan-evo",
    desc: "Cao cấp - Điều chỉnh linh hoạt - Hỗ trợ lưng tốt",
    price: "12.990.000₫",
    image: product10,
    slug: "ghe-gaming-secretlab-titan-evo",
  },
];

export const featuredProducts = [
  {
    id: 1,
    name: "Bàn phím cơ RGB",
    category: "Gaming Gear",
    price: "1.200.000",
    image: product1,
    slug: "ban-phim-co-rgb",
  },
  {
    id: 2,
    name: "Chuột không dây AI",
    category: "Accessories",
    price: "850.000",
    image: product2,
    slug: "chuot-khong-day-ai",
  },
  {
    id: 3,
    name: "Tai nghe Noise Cancel",
    category: "Audio",
    price: "2.100.000",
    image: product3,
    slug: "tai-nghe-noise-cancel",
  },
  {
    id: 4,
    name: "Tai nghe Noise Cancel",
    category: "Audio",
    price: "2.100.000",
    image: product4,
    slug: "tai-nghe-noise-cancel",
  },
];

export const lastestBlogs = [
  {
    slug: "tuong-lai-cua-ai-trong-linh-vuc-cong-nghe",
    title: "Tương Lai của AI trong Lĩnh Vực Công Nghệ",
    excerpt:
      "AI đang thay đổi cách thức mà chúng ta sống và làm việc. Tìm hiểu về sự phát triển của AI và ảnh hưởng của nó...",
    image: blogImage,
    category: "Công Nghệ",
    author: "John Doe",
    tags: ["AI", "Tương Lai", "Công Nghệ"],
  },
  {
    slug: "ung-dung-blockchain-trong-thuong-mai-dien-tu",
    title: "Ứng Dụng Blockchain Trong Thương Mại Điện Tử",
    excerpt:
      "Blockchain không chỉ là nền tảng cho các loại tiền điện tử, mà còn có tiềm năng cách mạng hóa ngành thương mại...",
    image: blogImage,
    category: "Blockchain",
    author: "Jane Doe",
    tags: ["Blockchain", "Thương Mại Điện Tử", "Tiền Điện Tử"],
  },
  {
    slug: "cach-tao-mot-web-app-voi-react-va-firebase",
    title: "Cách Tạo Một Web App với React và Firebase",
    excerpt:
      "Hướng dẫn chi tiết cách xây dựng một ứng dụng web hiện đại bằng React và tích hợp Firebase...",
    image: blogImage,
    category: "Lập Trình",
    author: "Jake Smith",
    tags: ["React", "Firebase", "Web Development"],
  },
];

export const blogPosts = [
  {
    id: 1,
    slug: "making-the-case-for-rails-monoliths-over-microservices",
    title: "Making the case for Rails monoliths over microservices",
    tags: ["architecture", "rails", "scaling"],
    image: blogImage,
    author: "Sara Jackson",
    readTime: "5m",
    date: "Today",
  },
  {
    id: 2,
    slug: "why-react-server-components-are-a-game-changer",
    title: "Why React Server Components are a game changer",
    tags: ["react", "nextjs", "rsc"],
    image: blogImage,
    author: "Liam Carter",
    readTime: "7m",
    date: "Yesterday",
  },
  {
    id: 3,
    slug: "tailwindcss-vs-traditional-css-who-wins",
    title: "TailwindCSS vs traditional CSS – Who wins?",
    tags: ["tailwind", "css", "ui"],
    image: blogImage,
    author: "Emily Tran",
    readTime: "4m",
    date: "2 days ago",
  },
  {
    id: 4,
    slug: "what-is-the-jamstack-and-why-should-you-care",
    title: "What is the JAMstack and why should you care?",
    tags: ["jamstack", "webdev", "performance"],
    image: blogImage,
    author: "Mike Duong",
    readTime: "6m",
    date: "Today",
  },
  {
    id: 5,
    slug: "top-10-vscode-extensions-for-2025",
    title: "Top 10 VSCode Extensions for 2025",
    tags: ["vscode", "productivity", "tools"],
    image: blogImage,
    author: "Luna Park",
    readTime: "3m",
    date: "Last week",
  },
  {
    id: 6,
    slug: "how-to-design-dark-mode-interfaces-the-right-way",
    title: "How to design dark mode interfaces the right way",
    tags: ["design", "ux", "darkmode"],
    image: blogImage,
    author: "Rachel Lim",
    readTime: "5m",
    date: "Yesterday",
  },
  {
    id: 7,
    slug: "exploring-framer-motion-for-smooth-ui-animations",
    title: "Exploring Framer Motion for smooth UI animations",
    tags: ["framer", "motion", "animation"],
    image: blogImage,
    author: "Chris Nguyen",
    readTime: "8m",
    date: "Today",
  },
  {
    id: 8,
    slug: "understanding-typescript-generics-in-10-minutes",
    title: "Understanding TypeScript generics in 10 minutes",
    tags: ["typescript", "ts", "tips"],
    image: blogImage,
    author: "Jayden Le",
    readTime: "10m",
    date: "2 days ago",
  },
  {
    id: 9,
    slug: "the-power-of-design-systems-in-modern-frontend",
    title: "The power of design systems in modern frontend",
    tags: ["designsystem", "frontend", "uiux"],
    image: blogImage,
    author: "Vanessa Ha",
    readTime: "6m",
    date: "Today",
  },
  {
    id: 10,
    slug: "how-to-optimize-web-performance-with-lighthouse",
    title: "How to optimize web performance with Lighthouse",
    tags: ["performance", "lighthouse", "seo"],
    image: blogImage,
    author: "David Truong",
    readTime: "4m",
    date: "3 days ago",
  },
];
