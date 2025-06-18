"use client";

import { Phone, MapPin, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Ready to make this house your home? Contact us today to schedule a
            viewing.
          </p>
        </div>

        <div className=" ">
          <div className="space-y-8 ">
            <div className="space-y-6 grid grid-cols-1 lg:grid-cols-3 ">
              <div className="flex items-center p-3  space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-slate-200">+62 812-8773-4417</p>
                </div>
              </div>
              <div className="flex items-center p-3  space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Address</h3>
                  <p className="text-slate-200">
                    Jalan Basilia 2 No. 31, Cluster Wisteria, Metland Ujung
                    Menteng, Cakung, Jakarta Timur
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/6281287734417"
                target="_blank"
                className="flex items-center p-2 space-x-4 hover:bg-green-600 hover:rounded-lg hover:shadow-lg  transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">WhatsApp</h3>
                  <p className="text-slate-200">+62 812-8773-4417</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
