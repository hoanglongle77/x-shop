"use client";

import { featuredProducts } from "@/services/exampleData";
import ProductCard from "@/shared/UI/store/ProductCard/ProductCard";
import { Row, Col } from "antd";
import { motion } from "framer-motion";

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

export default function FeaturedProducts() {
  return (
    <div className="relative z-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8 tracking-tight">
        Sản phẩm nổi bật 🔥
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Row gutter={[24, 24]}>
          {featuredProducts.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={8} lg={8} xl={6}>
              <motion.div variants={item}>
                <ProductCard product={product} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </div>
  );
}
