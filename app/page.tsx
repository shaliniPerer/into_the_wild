import { Hero } from "@/components/Hero";
import { ImmersiveExperience } from "@/components/ImmersiveExperience";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Experiences } from "@/components/Experiences";
import { Testimonials } from "@/components/Testimonials";
import { BookingCTA } from "@/components/BookingCTA";
import { LocationMap } from "@/components/LocationMap";

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <Hero />
      <About />
      <ImmersiveExperience />
      <Services />
      <Experiences />
      <Testimonials />
      <LocationMap />
    </main>
  );
}
