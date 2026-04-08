import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 right-0 left-0 z-50 glass border-b border-border/50"
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="relative w-28 sm:w-36">
            <img 
              src="/gulf-dark-logo.svg" 
              alt="جلف ويب كو" 
              className="w-full h-auto dark:hidden"
            />
            <img 
              src="/gulf-light-logo.svg" 
              alt="جلف ويب كو" 
              className="w-full h-auto hidden dark:block"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="/#services" className="text-body text-muted-foreground hover:text-foreground transition-colors link-underline">
            خدماتنا
          </a>
          <a href="/#process" className="text-body text-muted-foreground hover:text-foreground transition-colors link-underline">
            آلية العمل
          </a>
          <a href="/#pricing" className="text-body text-muted-foreground hover:text-foreground transition-colors link-underline">
            الأسعار
          </a>
          <Link to="/articles" className="text-body text-muted-foreground hover:text-foreground transition-colors link-underline">
            المدونة
          </Link>
          <a href="/install" className="text-body text-muted-foreground hover:text-foreground transition-colors link-underline flex items-center gap-2">
            <Download className="w-4 h-4" />
            ثبّت التطبيق
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={`https://wa.me/201038150652?text=${encodeURIComponent("مرحباً، أود طلب عرض سعر لتصميم موقع لشركتي.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-primary text-white font-medium text-sm sm:text-body-sm hover:opacity-90 transition-opacity glow"
          >
            اطلب عرض سعر
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-border bg-surface-elevated hover:bg-secondary transition-colors"
            aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden border-t border-border/50"
      >
        <nav className="container py-4 flex flex-col gap-2">
          <a
            href="/#services"
            onClick={() => setIsMenuOpen(false)}
            className="px-4 py-3 rounded-xl text-body text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            خدماتنا
          </a>
          <a
            href="/#process"
            onClick={() => setIsMenuOpen(false)}
            className="px-4 py-3 rounded-xl text-body text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            آلية العمل
          </a>
          <a
            href="/#pricing"
            onClick={() => setIsMenuOpen(false)}
            className="px-4 py-3 rounded-xl text-body text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            الأسعار
          </a>
          <Link
            to="/articles"
            onClick={() => setIsMenuOpen(false)}
            className="px-4 py-3 rounded-xl text-body text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            المدونة
          </Link>
          <a
            href="/install"
            onClick={() => setIsMenuOpen(false)}
            className="px-4 py-3 rounded-xl text-body text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            ثبّت التطبيق
          </a>
          <a
            href={`https://wa.me/201038150652?text=${encodeURIComponent("مرحباً، أود طلب عرض سعر لتصميم موقع لشركتي.")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 px-4 py-3 rounded-xl bg-gradient-primary text-white font-medium text-center hover:opacity-90 transition-opacity"
          >
            اطلب عرض سعر
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
}
