"use client";

import { Button, Input, Form } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Đăng ký thành công với email: ${email}`);
  };

  return (
    <section className="bg-[#121212] py-12 px-4 sm:px-8 md:px-16 lg:px-24 rounded-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#c5ff4a] to-[#ff4ecd] opacity-20 blur-3xl -z-10" />
      <div className="flex flex-col items-center justify-center text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
          Đăng Ký Nhận Bản Tin Của Chúng Tôi!
        </h2>
        <p className="mb-6 text-lg sm:text-xl">
          Nhận thông tin về các sản phẩm mới, khuyến mãi đặc biệt và nhiều điều
          thú vị khác!
        </p>

        <Form onSubmitCapture={handleSubmit} className="w-full max-w-lg">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email của bạn!" },
            ]}
            className="mb-4"
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              prefix={<MailOutlined />}
              className="bg-[#2a2a2a] text-white border border-[#333] rounded-lg py-3 px-4"
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            className="w-full py-3 rounded-lg text-xl bg-gradient-to-r from-[#c5ff4a] to-[#ff4ecd] transition-all duration-300 hover:scale-105"
            style={{ border: "none" }}
          >
            Đăng Ký
          </Button>
        </Form>
      </div>
    </section>
  );
}
