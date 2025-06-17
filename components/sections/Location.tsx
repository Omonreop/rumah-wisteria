"use client";

import Image from "next/image";

export function Location() {
  return (
    <section id="location" className="py-16 bg-white">
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
