"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Trees, Calendar } from "lucide-react";
const items = [
  "Type B",
  "7x15 LT",
  "115LB 3Lt",
  "4 Kamar Tidur",
  "3 Kamar Mandi",
  "1 Kamar Art",
  "1 Kamar Mandi Art",
  "1 Security Doorlock System",
  "CCTV",
  "2 Carport",
  "1 Attic Room (lantai 3)",
  "Halaman Belakang",
  "Balcony",
  "Air PAM ",
  "2 Toren (bawah tanah & diatas)",
  "Booster Air",
  "Listrik 3500",
];

const itemsTwo = [
  "Semi Furnish",
  "6 unit AC Split Panasonic",
  "Kulkas",
  "Water Heater (1 kamar mandi)",
  "Mesin Cuci & Dryer",
  "Microwave",
  "Toileters Komplit",
  "Attic Room Ada Meja Kantor dan Kabinet",
  "Kamar Utama Ada Kasur",
];
export function PropertyDetails() {
  return (
    <section id="property" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Detail Properti
          </h2>
        </div>

        <div className="">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Home className="w-6 h-6 text-blue-600" />
                <span>Spesifikasi</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col justify-center gap-3">
              <ul className="flex flex-col lg:grid lg:grid-cols-3">
                {items.map((item, index) => (
                  <li key={index} className="font-semibold text-gray-600 ">
                    - {item}
                  </li>
                ))}
              </ul>
              <hr className="border-gray-300" />
              <ul className="flex flex-col lg:grid lg:grid-cols-3">
                {itemsTwo.map((item, index) => (
                  <li key={index} className="font-semibold text-gray-600">
                    - {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
