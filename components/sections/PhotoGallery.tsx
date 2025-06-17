"use client";

import Image from "next/image";
import { useState } from "react";

const propertyImages = [
  "/images/wisteria-1.jpg",
  "/images/wisteria-2.jpg",
  "/images/wisteria-3.jpg",
  "/images/wisteria-4.jpg",
  "/images/wisteria-5.jpg",
  "/images/wisteria-6.jpg",
  "/images/wisteria-7.jpg",
  "/images/wisteria-8.jpg",
  "/images/wisteria-9.jpg",
  "/images/wisteria-10.jpg",
  "/images/wisteria-11.jpg",
  "/images/wisteria-12.jpg",
  "/images/wisteria-13.jpg",
  "/images/wisteria-14.jpg",
  "/images/wisteria-15.jpg",
  "/images/wisteria-16.jpg",
  "/images/wisteria-17.jpg",
  "/images/wisteria-18.jpg",
  "/images/wisteria-19.jpg",
  "/images/wisteria-20.jpg",
];

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section id="gallery" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Foto Properti
          </h2>
          <p className="text-xl text-gray-600">
            Beriku gambar dari properti kami.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Image Besar */}
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src={propertyImages[selectedImage]}
              alt={`Property view ${selectedImage + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              width={1200}
              height={800}
            />
          </div>

          {/* Thumbnail */}
          <div className="grid grid-cols-2 lg:grid-cols-10 gap-4 overflow-x-auto">
            {propertyImages.map((image, index) => (
              <div
                key={index}
                className={`aspect-[16/10] rounded-lg overflow-hidden cursor-pointer shadow-md transition-all duration-300 hover:shadow-lg ${
                  selectedImage === index ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image}
                  alt={`Property thumbnail ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
