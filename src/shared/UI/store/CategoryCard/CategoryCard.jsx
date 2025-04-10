"use client";

import { Card, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function CategoryCard({ category }) {
  return (
    <Card
      hoverable
      variant="outlined"
      style={{
        background: "#1a1a1a",
        borderRadius: "1rem",
        transition: "all 0.3s ease",
      }}
      className="hover:shadow-[0_0_16px_#bb86fc66] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
      styles={{
        body: {
          padding: "1.5rem",
          textAlign: "center",
        },
      }}
      onClick={category.onClick}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-4xl">{category.icon}</div>
        <Title level={5} style={{ color: "#e0e0e0", marginBottom: 0 }}>
          {category.title}
        </Title>
        <Text style={{ color: "#999" }}>{category.description}</Text>
        <RightOutlined style={{ color: "#c5ff4a", fontSize: "1rem" }} />
      </div>
    </Card>
  );
}
