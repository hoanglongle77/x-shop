"use client";
import React from "react";
import { Modal } from "antd";
import { motion } from "framer-motion";
import "@ant-design/v5-patch-for-react-19";

const BlogModal = ({ blog, open, onClose }) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={800}
      className="blog-modal dark:bg-black rounded-2xl overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="text-white"
      >
        <div className="bg-[#0d0d0d] p-4 sm:p-6">
          {/* Author Info */}
          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold text-white">
                {blog?.authorInitial}
              </div>
              <span className="text-white font-medium">{blog?.author}</span>
              <span className="text-xs text-gray-500">{blog?.date}</span>
              <span className="ml-2 px-2 py-0.5 bg-purple-800 text-purple-300 text-xs rounded">
                Admin
              </span>
            </div>
            <span className="text-purple-400 font-semibold">
              💠 {blog?.likes}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-bold mb-2">{blog?.title}</h2>

          {/* Image */}
          <img
            src={blog?.image}
            alt="Blog Visual"
            className="w-full rounded-lg mb-4 border border-gray-800"
          />

          {/* Description */}
          <p className="text-base text-gray-300 leading-relaxed mb-6">
            {blog?.description}
          </p>

          {/* Profile card */}
          <div className="bg-[#111111] border border-gray-800 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-white text-lg">
                Web & App Development
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                Here, we share articles related to web and mobile development,
                AI/ML, and blockchain.
              </p>
            </div>
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition">
              Join Squad
            </button>
          </div>
        </div>
      </motion.div>
    </Modal>
  );
};

export default BlogModal;
