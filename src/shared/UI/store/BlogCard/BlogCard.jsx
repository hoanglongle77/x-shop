"use client";

import { Card, Tag, Typography } from "antd";
import { ReadOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function BlogCard({ blog }) {
  return (
    <Card
      hoverable
      style={{
        borderRadius: "1rem",
        background: "#2a2a2a",
        transition: "all 0.3s ease",
        overflow: "hidden",
      }}
      className="transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_#c5ff4a66]"
    >
      <div className="relative">
        <img
          alt={blog.title}
          src={blog.image}
          className="w-full h-64 object-cover transition-all duration-200 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          {blog.category && (
            <Tag color="geekblue" className="text-white">
              {blog.category}
            </Tag>
          )}
        </div>
      </div>
      <div className="p-4">
        <Title level={5} style={{ color: "#e0e0e0" }}>
          {blog.title}
        </Title>
        <Text style={{ color: "#999" }}>{blog.excerpt}</Text>
        <div className="mt-3 flex justify-between items-center">
          <Text style={{ color: "#c5ff4a" }}>By {blog.author}</Text>
          <div>
            {blog.tags.map((tag, index) => (
              <Tag key={index} color="green" style={{ marginBottom: "0.5rem" }}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
