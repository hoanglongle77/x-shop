"use client";

import { RobotOutlined, BulbOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AISuggestBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full px-4 sm:px-6 py-8"
    >
      <div className="bg-muted border border-border rounded-2xl shadow-lg px-6 py-8 sm:flex sm:items-center sm:justify-between relative overflow-hidden">
        {/* Glow background effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-accent opacity-20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Robot Icon */}
        <div className="relative z-10 flex justify-center sm:justify-start mb-4 sm:mb-0 sm:mr-6 text-accent text-4xl">
          <RobotOutlined className="text-[40px] sm:text-[48px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center sm:text-left mb-4 sm:mb-0 flex-1">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
            Không biết chọn gì?
            <span className="text-accent"> Để AI gợi ý cho bạn</span>
          </h2>
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            Nhập nhu cầu của bạn, AI sẽ phân tích và đề xuất combo gear phù hợp.
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative z-10 flex justify-center sm:justify-end">
          <Link href="/ai-suggest">
            <Button
              size="large"
              icon={<BulbOutlined />}
              style={{
                borderColor: "#ff4ecd",
                color: "#ff4ecd",
                backgroundColor: "transparent",
              }}
            >
              Tư vấn ngay
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
