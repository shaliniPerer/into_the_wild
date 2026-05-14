"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Accommodation", href: "/accommodation" },
  { name: "Restaurants", href: "/restaurants" },
  { name: "Destinations", href: "/destinations" },
  { name: "Gallery", href: "/gallery" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out",
        isScrolled
          ? "glass-dark shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top info bar — hides on scroll */}
      <motion.div
        animate={{ height: isScrolled ? 0 : "auto", opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden border-b border-white/10"
      >
        <div className="container mx-auto px-6 md:px-12 py-2 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href="tel:+94112345678"
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-white/60 hover:text-brand transition-colors"
            >
              <Phone className="w-3 h-3 shrink-0" />
              +94 11 234 5678
            </a>
            <span className="hidden sm:block text-white/20 select-none">|</span>
            <a
              href="mailto:reserve@intothewild.com"
              className="hidden sm:flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-white/60 hover:text-brand transition-colors"
            >
              <Mail className="w-3 h-3 shrink-0" />
              reserve@intothewild.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-brand transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/60 hover:text-brand transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="Twitter" className="text-white/60 hover:text-brand transition-colors">
              <Twitter className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main nav row */}
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl tracking-[0.3em] uppercase font-light text-white">
            INTO <span className="text-brand">THE WILD</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-semibold uppercase tracking-[0.3em] transition-all duration-300 relative group overflow-hidden text-white hover:text-brand"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute left-0 bottom-0 w-full h-[1px] transform -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out bg-brand" />
            </Link>
          ))}
          <button
            className="px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] transition-all duration-500 border rounded-[2px] shadow-lg bg-brand text-black border-brand hover:bg-brand-light hover:border-brand-light hover:shadow-brand/20 hover:shadow-xl"
          >
            Book Now
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 transition-colors text-white hover:text-brand"
          )}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-2 text-white/50 hover:text-brand transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-serif tracking-[0.2em] font-light text-white/80 hover:text-brand transition-colors uppercase"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 px-12 py-4 bg-brand text-black font-semibold tracking-[0.3em] uppercase text-[10px] rounded-[2px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Now
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
