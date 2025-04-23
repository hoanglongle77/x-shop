"use client";
import { lastestBlogs } from "@/services/exampleData";
import BlogCard from "@/shared/UI/store/BlogCard/BlogCard";
import { Row, Col } from "antd";
import React from "react";

const Lastest = () => {
  return (
    <div className="relative z-10 pt-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
        Bài Viết Mới Nhất 📰
      </h2>

      <div>
        <Row gutter={[16, 16]}>
          {lastestBlogs.map((blog, index) => (
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
