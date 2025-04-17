"use client";
import CommonBG from "@/layout/CommonBG/CommonBG";
import BlogCard from "@/shared/UI/store/BlogCard/BlogCard";
export default function Lastest() {
  const blogs = [
    {
      title: "Tương Lai của AI trong Lĩnh Vực Công Nghệ",
      excerpt:
        "AI đang thay đổi cách thức mà chúng ta sống và làm việc. Tìm hiểu về sự phát triển của AI và ảnh hưởng của nó...",
      image: "/images/blog-1.jpg",
      category: "Công Nghệ",
      author: "John Doe",
      tags: ["AI", "Tương Lai", "Công Nghệ"],
    },
    {
      title: "Ứng Dụng Blockchain Trong Thương Mại Điện Tử",
      excerpt:
        "Blockchain không chỉ là nền tảng cho các loại tiền điện tử, mà còn có tiềm năng cách mạng hóa ngành thương mại...",
      image: "/images/blog-2.jpg",
      category: "Blockchain",
      author: "Jane Doe",
      tags: ["Blockchain", "Thương Mại Điện Tử", "Tiền Điện Tử"],
    },
    {
      title: "Cách Tạo Một Web App với React và Firebase",
      excerpt:
        "Hướng dẫn chi tiết cách xây dựng một ứng dụng web hiện đại bằng React và tích hợp Firebase...",
      image: "/images/blog-3.jpg",
      category: "Lập Trình",
      author: "Jake Smith",
      tags: ["React", "Firebase", "Web Development"],
    },
  ];

  return (
    <div className="relative z-10 pt-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center">
        Bài Viết Mới Nhất 📰
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}
