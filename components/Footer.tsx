import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const linkClass = "text-[14px] font-light text-white/60 hover:text-white transition-colors";
const labelClass = "text-[14px] font-light text-white/60";

export function Footer() {
  return (
    <footer className="bg-black text-white/80 pt-16 md:pt-20 pb-10 border-t flex flex-col border-white/10 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 md:mb-14">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/images/Favicon.png"
              alt="Into The Wild"
              width={200}
              height={184}
              className="object-contain h-28 w-auto mb-3"
              unoptimized
            />
           
            <p className={`${labelClass} leading-relaxed mb-4 max-w-[260px]`}>
              Experience wilderness in elegance. A luxury eco resort and boutique nature retreat nestled in the heart of Sri Lanka's wilderness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[14px] font-light text-white mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="#about" className={linkClass}>Our Story</Link></li>
              <li><Link href="#villas" className={linkClass}>Villas & Suites</Link></li>
              <li><Link href="#experiences" className={linkClass}>Experiences</Link></li>
              <li><Link href="#gallery" className={linkClass}>Gallery</Link></li>
              
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[14px] font-light text-white mb-4">Contact</h4>
            <ul className="space-y-3">
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
              <li className="pt-2">
                <div className="flex items-center gap-4">
                  <a href="https://www.instagram.com/into_the_wild_sigiriya_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.facebook.com/p/Into-the-Wild-Sigiriya-100059199109707/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-6 md:px-12 border-t border-white/10 pt-6 mt-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <span className={labelClass}>&copy; {new Date().getFullYear()} Into The Wild. All Rights Reserved.</span>
        
      </div>
    </footer>
  );
}
