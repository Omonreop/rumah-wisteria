"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Trees, Calendar } from "lucide-react";
const items = [
  "Type B",
  "7x15 LT",
  "115 LB 3lt",
  "4 kamar tidur",
  "3 kamar mandi",
  "1 kamar art",
  "1 kamar mandi art",
  "1 scurity doorlock system",
  "CCTV",
  "2 carpot",
  "1 attic room (lantai 3)",
  "Halaman belakang",
  "Balcony",
  "Air pam ",
  "2 toren (bawah tanah) (diatas)",
  "Booster air",
  "Listrik 3500",
];

const itemsTwo = [
  "Semi furnish",
  "6unit ac split panasonic",
  "Kulkas",
  "Water heater (1kamar mandi)",
  "Mesin cuci & dryer",
  "Microwave",
  "Toileters komplit",
  "Attic room ada meja kantr dan kabinet",
  "Kamar utama ada kasur",
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
