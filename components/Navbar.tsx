"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail, Instagram, Facebook, Twitter, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out bg-white",
        isScrolled
          ? "shadow-md border-b border-[#3b3439]/10"
          : "shadow-sm"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Top info bar — hides on scroll */}
      <motion.div
        animate={{ height: isScrolled ? 0 : "auto", opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden border-b border-[#3b3439]/10"
      >
        <div className="container mx-auto px-6 md:px-12 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href="tel:+94112345678"
              className="flex items-center gap-2 text-[15px] text-[#3b3439]/70 hover:text-brand transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" />
              +94 11 234 5678
            </a>
            <span className="hidden sm:block text-[#3b3439]/20 select-none">|</span>
            <a
              href="mailto:reserve@intothewild.com"
              className="hidden sm:flex items-center gap-2 text-[15px] text-[#3b3439]/70 hover:text-brand transition-colors"
            >
              <Mail className="w-4 h-4 shrink-0" />
              reserve@intothewild.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://maps.app.goo.gl/ndTW47gLeAnLNQas6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location"
              className="text-[#3b3439]/60 hover:text-brand transition-colors"
            >
              <MapPin className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/into_the_wild_sigiriya_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#3b3439]/60 hover:text-brand transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/p/Into-the-Wild-Sigiriya-100059199109707/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#3b3439]/60 hover:text-brand transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            
          </div>
        </div>
      </motion.div>

      {/* Main nav row */}
      <div className="container mx-auto px-6 md:px-12 relative flex items-center justify-center py-3 min-h-[56px] md:grid md:grid-cols-[1fr_auto_1fr] md:py-1">

        {/* Desktop: Left nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-normal transition-colors duration-300 text-[#3b3439] hover:text-brand"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logo — centered via flex parent on mobile, center grid col on desktop */}
        <Link href="/" className="flex items-center md:justify-center">
          <Image
            src="/Web Logo transparent.png"
            alt="Into The Wild Hotel — Sigiriya, Sri Lanka"
            width={200}
            height={90}
            className="object-contain h-14 md:h-24 w-auto"
            priority
          />
        </Link>

        {/* Mobile: hamburger, absolutely right-aligned */}
        <button
          className={cn("absolute right-6 p-2 transition-colors text-[#3b3439] hover:text-brand md:hidden")}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop: Book Now */}
        <div className="hidden md:flex items-center justify-end">
          <button
            className="px-8 py-2.5 text-[12px] font-medium transition-all duration-500 border rounded-full shadow-lg bg-brand text-[#3b3439] border-brand hover:bg-[#f3b81f]/80 hover:shadow-brand/20 hover:shadow-xl"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-2 text-[#3b3439]/50 hover:text-brand transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Logo in mobile menu */}
            <div className="absolute top-6 left-8">
              <Image
                src="/images/logo.png"
                alt="Into The Wild Hotel"
                width={100}
                height={44}
                className="object-contain h-11 w-auto"
              />
            </div>

            <nav className="flex flex-col items-center gap-5">
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
                    className="relative text-[22px] font-serif tracking-[0.2em] font-light text-[#3b3439]/80 hover:text-brand transition-colors duration-300 uppercase group"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 px-12 py-4 bg-brand text-[#3b3439] font-semibold tracking-[0.3em] uppercase text-[11px] rounded-full"
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
