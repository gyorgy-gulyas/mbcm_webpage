import { NavBar } from "@/components/NavBar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PersistentCarCanvas } from "@/components/PersistentCarCanvas";
import { HeroOverlay } from "@/components/sections/HeroOverlay";
import { AboutOverlay } from "@/components/sections/AboutOverlay";
import { TimelineOverlay } from "@/components/sections/TimelineOverlay";
import { BPCGPOverlay } from "@/components/sections/BPCGPOverlay";
import { EventsOverlay } from "@/components/sections/EventsOverlay";
import { GalleryOverlay } from "@/components/sections/GalleryOverlay";
import { MagazineOverlay } from "@/components/sections/MagazineOverlay";
import { MembershipOverlay } from "@/components/sections/MembershipOverlay";
import { ContactOverlay } from "@/components/sections/ContactOverlay";
import { HeritageOverlay } from "@/components/sections/HeritageOverlay";
import { Footer } from "@/components/Footer";

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
        <BPCGPOverlay />
        <EventsOverlay />
        <GalleryOverlay />
        <MagazineOverlay />
        <MembershipOverlay />
        <ContactOverlay />
        <HeritageOverlay />
      </main>
      <Footer />
    </>
  );
}
