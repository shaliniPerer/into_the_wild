import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css'; // Global styles
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'INTO THE WILD | Luxury Eco Resort',
  description: 'Experience Wilderness in Elegance. A luxury eco resort and boutique nature retreat.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-white text-charcoal antialiased selection:bg-brand selection:text-black flex flex-col min-h-screen" suppressHydrationWarning>
        <CustomCursor />
        <Navbar />
        <div className="page-appear flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
