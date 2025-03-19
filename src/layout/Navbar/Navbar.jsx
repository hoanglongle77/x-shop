"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-bg flex justify-between items-center p-4 relative">
      <div className="text-white text-2xl lg:ms-[50px]">
        <h1>X Shop</h1>
      </div>

      {/* Desktop Menu */}
      <div className="text-string hidden lg:me-[50px] lg:flex lg:items-center lg:gap-10">
        <Link href="/">Marketplace</Link>
        <Link href="/">Ranking</Link>
        <Link href="/">Connect Wallet</Link>
        <Link className="bg-blue-400 p-3 rounded-[20px]" href="/">
          Sign In
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="text-white lg:hidden cursor-pointer" onClick={toggleMenu}>
        <h1>{isOpen ? "Close Menu" : "Mobile Menu"}</h1>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-bg-secondary text-white flex flex-col items-end p-4 gap-4 lg:hidden">
          <Link href="/" onClick={toggleMenu}>
            Marketplace
          </Link>
          <Link href="/" onClick={toggleMenu}>
            Ranking
          </Link>
          <Link href="/" onClick={toggleMenu}>
            Connect Wallet
          </Link>
          <Link
            className="bg-blue-400 p-3 rounded-[20px]"
            href="/"
            onClick={toggleMenu}
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
