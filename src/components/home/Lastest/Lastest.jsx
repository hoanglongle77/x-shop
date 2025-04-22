"use client";
import BlogCard from "@/shared/UI/store/BlogCard/BlogCard";
import BlogModal from "@/shared/UI/store/BlogModal/BlogModal";
import { Row, Col } from "antd";
import { useState } from "react";
import React from "react";

const Lastest = () => {
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
      <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
        Bài Viết Mới Nhất 📰
      </h2>

      <div>
        <Row gutter={[16, 16]}>
          {blogs.map((blog, index) => (
            <Col key={index} xs={24} sm={12} lg={8} xl={6}>
              <BlogCard blog={blog} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Lastest;
