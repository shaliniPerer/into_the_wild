import { Hero } from "@/components/Hero";
import { ImmersiveExperience } from "@/components/ImmersiveExperience";
import { About } from "@/components/About";
import { Experiences } from "@/components/Experiences";
import { ParallaxQuote } from "@/components/ParallaxQuote";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { BookingCTA } from "@/components/BookingCTA";

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <Hero />
      <ImmersiveExperience />
      <About />
      <Experiences />
      <ParallaxQuote />
      <Gallery />
      <Testimonials />
      <BookingCTA />
    </main>
  );
}
