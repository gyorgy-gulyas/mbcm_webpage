import { NavBar } from "@/components/NavBar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PersistentCarCanvas } from "@/components/PersistentCarCanvas";
import { HeroOverlay } from "@/components/sections/HeroOverlay";
import { AboutOverlay } from "@/components/sections/AboutOverlay";
import { TimelineOverlay } from "@/components/sections/TimelineOverlay";
import { HeritageOverlay } from "@/components/sections/HeritageOverlay";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <NavBar />
      <PersistentCarCanvas />
      <main className="relative z-10">
        <HeroOverlay />
        <AboutOverlay />
        <TimelineOverlay />
        <HeritageOverlay />
      </main>
    </>
  );
}
