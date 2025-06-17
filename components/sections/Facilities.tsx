"use client";

import Image from "next/image";
import { Slider } from "../ui/slider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const fasilitas = [
  "images/fasilitas-1.jpg",
  "images/fasilitas-2.jpg",
  "images/fasilitas-3.jpg",
  "images/fasilitas-4.jpg",
  "images/fasilitas-5.jpg",
  "images/fasilitas-6.jpg",
];

export function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fasilitas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beberapa fasilitas yang tersedia di Wisteria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Clubhouse mewah lengkap dengan gimnasium dan kolam renang, taman
              bermain anak-anak, halaman piknik, dan tempat barbekyu - pasti ada
              sesuatu untuk semua orang di Wisteria. Taman linear sepanjang 260
              meter dengan lanskap yang rimbun, cocok untuk lari pagi yang
              menyegarkan atau jalan-jalan sore yang menyenangkan. Wisteria
              Linear Park terhubung ke clubhouse dan dapat diakses langsung dari
              semua unit Tipe-C.
            </p>
          </div>

          <Carousel className="w-full relative">
            <CarouselContent>
              {fasilitas.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[350px] md:h-[400px] lg:h-[450px]">
                    <Image
                      src={src}
                      alt={`Facility ${index + 1}`}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
