"use client";

import { MapIcon } from "lucide-react";
import Image from "next/image";

export function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lokasi Strategis
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/map-1.png"
                alt="Peta Lokasi"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/3SfozMBi1FezWrcn8"
              target="_blank"
              className="flex items-center justify-center rounded-lg transition duration-200 p-4 space-x-2 mt-4 bg-white cursor-pointer 
             hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-white shadow-sm hover:shadow-md"
            >
              <MapIcon />
              <p>View In Google Maps</p>
            </a>
          </div>

          <div className="w-full">
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/map-2.png"
                alt="Legenda Lokasi"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
