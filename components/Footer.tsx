import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const linkClass = "text-[11px] font-light uppercase tracking-[0.25em] text-white/60 hover:text-white transition-colors";
const labelClass = "text-[11px] font-light uppercase tracking-[0.25em] text-white/60";

export function Footer() {
  return (
    <footer className="bg-black text-white/80 pt-20 md:pt-28 pb-12 border-t flex flex-col border-white/10 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand/5 blur-[120px] pointer-events-none rounded-full" />
      {/* Decorative lotus watermark */}
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] pointer-events-none opacity-[0.04]">
        <Image src="/lotus-icon.png" alt="" fill className="object-contain" unoptimized />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 md:mb-20">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/lotus-icon.png"
              alt="Into The Wild"
              width={100}
              height={90}
              className="object-contain h-20 w-auto mb-3"
              unoptimized
            />
            <p className="text-white font-serif text-xl font-light tracking-[0.12em] mb-1">Into The Wild</p>
            <p className="text-brand text-[9px] uppercase tracking-[0.45em] font-medium mb-7">Hotel · Sigiriya · Sri Lanka</p>
            <p className={`${labelClass} leading-relaxed mb-7 max-w-[260px]`}>
              Experience wilderness in elegance. The ultimate luxury eco-retreat in Sigiriya, Sri Lanka.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:text-white transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:text-white transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:text-white transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-light uppercase tracking-[0.35em] text-white mb-7">Explore</h4>
            <ul className="space-y-5">
              <li><Link href="#about" className={linkClass}>Our Story</Link></li>
              <li><Link href="#villas" className={linkClass}>Villas & Suites</Link></li>
              <li><Link href="#experiences" className={linkClass}>Experiences</Link></li>
              <li><Link href="#gallery" className={linkClass}>Gallery</Link></li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-light uppercase tracking-[0.35em] text-white mb-7">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                <span className={`${labelClass} leading-relaxed`}>
                  123 Hidden Valley Trail<br />Sigiriya, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/40 shrink-0" />
                <a href="tel:+94112345678" className={linkClass}>+94 11 234 5678</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/40 shrink-0" />
                <a href="mailto:reserve@intothewild.com" className={linkClass}>reserve@intothewild.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-6 md:px-12 border-t border-white/10 pt-8 mt-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <span className={labelClass}>&copy; {new Date().getFullYear()} Into The Wild. All Rights Reserved.</span>
        
      </div>
    </footer>
  );
}
