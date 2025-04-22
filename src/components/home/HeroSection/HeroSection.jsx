"use client";

import { Button } from "antd";
import { ThunderboltOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full px-4 py-24 md:py-32 lg:py-40 bg-background text-foreground overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary opacity-20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary opacity-20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
        >
          Gợi ý <span className="text-primary">Gear công nghệ</span> chuẩn AI
          <br />
          cho <span className="text-accent">Dev & Creator</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Tìm kiếm combo thiết bị hoàn hảo cho công việc, học tập hoặc sáng tạo
          – nhanh chóng, thông minh, chuẩn cá nhân hóa với AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link href="/products">
            <Button
              size="large"
              type="primary"
              style={{ backgroundColor: "#c5ff4a", color: "#121212" }}
            >
              Khám phá ngay
            </Button>
          </Link>
          <Link href="/ai-suggest">
            <Button
              size="large"
              type="default"
              icon={<ThunderboltOutlined />}
              style={{ borderColor: "#ff4ecd", color: "#ff4ecd" }}
            >
              Tư vấn bởi AI
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
