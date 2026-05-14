import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white/80 pt-16 md:pt-32 pb-12 border-t flex flex-col border-white/10 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8 mb-16 md:mb-24">
          
          {/* Brand */}
          <div className="lg:pr-8 text-center md:text-left">
            <h3 className="font-serif text-3xl text-white tracking-[0.2em] uppercase mb-8 font-light">
              INTO<br /><span className="text-brand">THE WILD</span>
            </h3>
            <p className="text-[11px] text-white/50 font-light leading-relaxed mb-8 uppercase tracking-[0.1em]">
              Experience wilderness in elegance, where the canopy meets the clouds. The ultimate luxury eco-retreat redefining the connection between man and nature.
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-brand hover:text-brand transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-brand hover:text-brand transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-brand hover:text-brand transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand mb-8 font-semibold">Explore</h4>
            <ul className="space-y-6">
              <li><Link href="#about" className="hover:text-brand transition-colors text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">Our Story</Link></li>
              <li><Link href="#villas" className="hover:text-brand transition-colors text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">Villas & Suites</Link></li>
              <li><Link href="#experiences" className="hover:text-brand transition-colors text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">Experiences</Link></li>
              <li><Link href="#gallery" className="hover:text-brand transition-colors text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-brand transition-colors text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand mb-8 font-semibold">Connect</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <span className="text-[11px] font-light leading-relaxed tracking-[0.1em] text-white/70 uppercase">
                  123 Hidden Valley Trail<br />Sigiriya, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[11px] font-light tracking-[0.2em] text-white/70">
                  +94 11 234 5678
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[11px] font-light tracking-[0.2em] text-brand">
                  reserve@intothewild.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand mb-8 font-semibold">The Journal</h4>
            <p className="text-[11px] font-light mb-8 text-white/50 tracking-[0.1em] uppercase">Subscribe to our newsletter for exclusive offers and wilderness tales.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-transparent border-b border-white/20 py-4 pl-0 pr-12 text-[10px] uppercase tracking-[0.3em] focus:outline-none focus:border-brand text-white transition-colors"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-brand transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 border-t border-white/10 pt-8 mt-auto flex flex-col items-center md:flex-row md:justify-between gap-4 md:gap-8 text-[9px] uppercase tracking-[0.4em] font-medium text-white/40 text-center">
        <div className="flex items-center space-x-4">
          <span className="hover:text-white transition-colors cursor-pointer">IG: @IntoTheWild</span>
          <span className="text-brand/30">|</span>
          <span className="hover:text-white transition-colors cursor-pointer">FB: WildernessElegance</span>
        </div>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white transition-colors">Our Philosophy</a>
          <a href="#" className="hover:text-white transition-colors">Sustainability</a>
          <a href="#" className="hover:text-white transition-colors">Careers</a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Luxury Wilderness Retreats
        </div>
      </div>
    </footer>
  );
}
