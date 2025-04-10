import { Facebook, Instagram, Twitter, Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted text-foreground border-t border-border mt-16">
      {/* Glow Border Top */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">
            TechHub.AI
          </h3>
          <p className="text-sm text-foreground/70">
            Nơi AI & công nghệ giao thoa. Khám phá setup, gear, và giải pháp
            thông minh cho dev, gamer và creator.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold text-secondary mb-4">
            Liên kết nhanh
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-primary transition">
                Sản phẩm
              </Link>
            </li>
            <li>
              <Link href="/recommend" className="hover:text-primary transition">
                AI Gợi ý
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition">
                Blog & Review
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-md font-semibold text-accent mb-4 flex items-center gap-2">
            <Mail size={18} /> Nhận cập nhật mới
          </h4>
          <form className="space-y-3">
            <input
              type="email"
              required
              placeholder="Nhập email của bạn"
              className="w-full px-3 py-2 rounded-md bg-background text-sm text-foreground border border-border placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <button
              type="submit"
              className="w-full bg-primary text-background py-2 rounded-md font-semibold text-sm hover:brightness-110 transition shadow-md"
            >
              Đăng ký nhận tin
            </button>
          </form>
        </div>
      </div>

      <div className="text-xs text-center text-foreground/50 py-4 border-t border-border">
        © 2025 TECHIFY.AI — Made with 🤖 + ☕ by you.
      </div>
    </footer>
  );
}
