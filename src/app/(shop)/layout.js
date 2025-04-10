import Footer from "@/layout/Footer/Footer";
import Navbar from "@/layout/Navbar/Navbar";
import React from "react";

const ShopLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default ShopLayout;
