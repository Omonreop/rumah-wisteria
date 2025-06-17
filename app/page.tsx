"use client";

import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PropertyDetails } from "@/components/sections/PropertyDetails";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { Facilities } from "@/components/sections/Facilities";
import { ContactSection } from "@/components/sections/ContactSection";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <HeroSection />
      <PropertyDetails />
      <PhotoGallery />
      <Facilities />
      <Location />
      <ContactSection />
    </div>
  );
}
