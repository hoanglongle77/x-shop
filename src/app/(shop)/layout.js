import Footer from "@/layout/Footer/Footer";
import Navbar from "@/layout/Navbar/Navbar";
import React from "react";

const ShopLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default ShopLayout;
