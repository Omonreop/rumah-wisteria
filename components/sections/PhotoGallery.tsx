"use client";

import Image from "next/image";
import { useState } from "react";

const propertyImages = [
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
  "/images/wisteria-14.jpg",
  "/images/wisteria-13.jpg",
  "/images/wisteria-19.jpg",
  "/images/wisteria-20.jpg",
  "/images/wisteria-15.jpg",
  "/images/wisteria-1.jpg",
  "/images/wisteria-16.jpg",
  "/images/wisteria-17.jpg",
  "/images/wisteria-18.jpg",
];

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) =>
      prev === propertyImages.length - 1 ? 0 : (prev ?? 0) + 1
    );
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) =>
      prev === 0 ? propertyImages.length - 1 : (prev ?? 0) - 1
    );
  };

  return (
    <section id="gallery" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Foto Properti
          </h2>
          <p className="text-xl text-gray-600">
            Berikut gambar dari properti kami.
          </p>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {propertyImages.map((image, index) => (
            <div
              key={index}
              className="aspect-[16/10] rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-all"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                width={400}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full h-full max-w-6xl mx-auto p-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              ✕
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 text-white text-5xl font-bold"
            >
              ❮
            </button>
            <Image
              src={propertyImages[selectedImage]}
              alt={`Overlay property ${selectedImage + 1}`}
              className="max-h-[80vh] w-auto object-contain rounded-lg"
              width={1200}
              height={800}
            />
            <button
              onClick={nextImage}
              className="absolute right-4 text-white text-5xl font-bold"
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
