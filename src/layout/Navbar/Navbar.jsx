"use client";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Lightbulb,
  ShoppingCart,
  Newspaper,
} from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Trang chủ", icon: <Home size={20} /> },
  { href: "/recommend", label: "Gợi ý của AI", icon: <Lightbulb size={20} /> },
  { href: "/products", label: "Sản phẩm", icon: <ShoppingCart size={20} /> },
  { href: "/blogs", label: "Bài viết", icon: <Newspaper size={20} /> },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background text-foreground shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-primary font-bold text-xl tracking-widest hover:opacity-80 transition"
        >
          TechHub<span className="text-accent">.AI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition duration-200"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground hover:text-primary transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-muted border-t border-border px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 text-sm font-medium hover:text-primary transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
