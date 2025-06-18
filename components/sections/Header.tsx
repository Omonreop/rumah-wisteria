"use client";

import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Home className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">
              Rumah Dijual
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="#gallery"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Galeri
            </Link>
            <Link
              href="#property"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Detail
            </Link>

            <Link
              href="#facilities"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Fasilitas
            </Link>
            <Link
              href="#location"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Lokasi
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>
          <a
            href="https://wa.me/6281287734417"
            target="_blank"
            className="rounded-lg p-3 flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700"
          >
            <Phone className="w-4 h-4 mr-2" />
            <p>Hubungi Sekarang</p>
          </a>
        </div>
      </div>
    </header>
  );
}
