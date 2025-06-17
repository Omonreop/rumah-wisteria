"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Car,
  Calendar,
  Star,
  Camera,
} from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                <Star className="w-3 h-3 mr-1" />
                Premium Property
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Dijual Rumah
                <span className="text-blue-600 block">
                  Cluster Wisteria Metland Cakung
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                <Bed className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">4 Tempat Tidur</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                <Bath className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">3 Kamar Mandi</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                <Square className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">7x15 LT</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                <Car className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">2 Garasi</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">
                  Lokasi cakung jakarta timur Sebelah smaa Jgc Deket ke aoen
                  ikea jgc Akses tol cakung timur 20mnt ke kelapa gading Akses
                  tol cakung-kelapa gading 10mnt ke bekasi
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                <Calendar className="w-5 h-5 mr-2" />
                <a href="https://wa.me/6281287734417" target="_blank">
                  Rencakan Waktu
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="images/wisteria-image.jpg"
                alt="Beautiful modern house exterior"
                className="w-full h-full object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
