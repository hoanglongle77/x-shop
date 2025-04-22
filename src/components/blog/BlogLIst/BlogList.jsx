"use client";
import React from "react";
import { motion } from "framer-motion";
import { Row, Col } from "antd";
import BlogCard from "@/shared/UI/store/BlogCard/BlogCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const BlogList = ({ blogs }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Row gutter={[24, 24]}>
        {blogs.map((blog) => (
          <Col key={blog.id} xs={24} sm={12} md={8} lg={6}>
            <motion.div variants={item}>
              <BlogCard blog={blog} />
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default BlogList;
