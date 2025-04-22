"use client";
import { Card, Button, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import Image from "next/image";
const { Meta } = Card;

const ProductCard = ({ product }) => {
  if (!product) return null;
  return (
    <Card
      hoverable
      variant="outlined" // ⬅ thay vì bordered
      style={{
        borderRadius: "1rem",
        background: "#2a2a2a",
        transition: "all 0.3s ease",
      }}
      className="transition-transform duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_#c5ff4a66]"
      styles={{
        body: {
          padding: "1rem",
        },
      }}
      cover={
        <div className="bg-[#1a1a1a] p-4 rounded-t-2xl">
          <Image
            width={200}
            height={200}
            alt={product.name}
            src={product.image}
            className="h-48 w-full object-contain transition-transform duration-200 hover:scale-105"
          />
        </div>
      }
    >
      <Meta
        title={
          <Typography.Title level={5} style={{ color: "#e0e0e0", margin: 0 }}>
            {product.name}
          </Typography.Title>
        }
        description={
          <div>
            <Typography.Text style={{ color: "#999" }}>
              {product.category}
            </Typography.Text>
            <br />
            <Typography.Text strong style={{ color: "#c5ff4a" }}>
              {product.price}₫
            </Typography.Text>
          </div>
        }
      />
      <div className="mt-4 flex justify-center">
        <Button
          icon={<ShoppingCartOutlined />}
          style={{
            borderColor: "#c5ff4a",
            color: "#c5ff4a",
            backgroundColor: "transparent",
          }}
          className="hover:!bg-[#c5ff4a22] transition-all duration-150"
        >
          Mua ngay
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
