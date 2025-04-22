"use client";
import { Button, Tag } from "antd";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import ModalTest from "../BlogModal/ModalTest";
import { useState } from "react";
import BlogModal from "../BlogModal/BlogModal";

const BlogCard = ({ blog }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-[#1a1a1a] text-white rounded-2xl shadow-lg border border-[#333] p-4 flex flex-col justify-between min-h-[450px] transition-all hover:shadow-[0_0_20px_#c5ff4a55]"
      >
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="bg-[#ff0044] w-8 h-8 rounded-full flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
          </div>
          <Button
            size="small"
            className="!bg-[#ffffff15] !text-white hover:!bg-[#c5ff4a22] !border-none rounded-xl text-xs"
            icon={<ExternalLink size={14} />}
          >
            Read post
          </Button>
        </div>

        {/* Title */}
        <div className="mt-4">
          <h3 className="text-lg font-bold leading-snug">
            {blog?.title ||
              "Making the case for Rails monoliths over microservices"}
          </h3>
        </div>

        {/* Tags */}
        <div className="mt-3 flex gap-2 flex-wrap">
          {(blog?.tags || ["architecture", "rails", "+2"]).map((tag, index) => (
            <Tag
              key={index}
              className="!bg-[#2a2a2a] !border-none !text-white !text-xs px-2 py-1 rounded-lg"
            >
              #{tag}
            </Tag>
          ))}
        </div>

        {/* Info */}
        <div className="mt-2 text-sm text-gray-400">Today • 5m read time</div>

        {/* Image Preview */}
        <div className="mt-4">
          <div className="bg-[#111] rounded-xl overflow-hidden">
            <Image
              width={200}
              height={40}
              src={blog?.image || "/placeholder.png"}
              alt="blog preview"
              className="w-full h-40 object-cover"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex justify-between text-[#aaa] text-sm">
          <div className="italic">By {blog?.author || "Sara Jackson"}</div>
          <div className="flex gap-4 text-base">
            <Heart className="cursor-pointer hover:text-[#c5ff4a]" size={16} />
            <MessageCircle
              className="cursor-pointer hover:text-[#c5ff4a]"
              size={16}
            />
            <Bookmark
              className="cursor-pointer hover:text-[#c5ff4a]"
              size={16}
            />
            <Share2 className="cursor-pointer hover:text-[#c5ff4a]" size={16} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogCard;
