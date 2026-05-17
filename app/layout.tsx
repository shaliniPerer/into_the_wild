import type { Metadata } from 'next';
import { Gilda_Display, Inter } from 'next/font/google';
import './globals.css'; // Global styles
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const gildaDisplay = Gilda_Display({
  subsets: ['latin'],
  variable: '--font-gilda',
  weight: ['400'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500'],
});

export const metadata: Metadata = {
  title: 'INTO THE WILD | Luxury Eco Resort',
  description: 'Experience Wilderness in Elegance. A luxury eco resort and boutique nature retreat.',
  icons: {
    icon: '/lotus-icon.png',
    shortcut: '/lotus-icon.png',
    apple: '/lotus-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${gildaDisplay.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-white text-charcoal antialiased selection:bg-brand selection:text-[#3b3439] flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar />
        <div className="page-appear flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
