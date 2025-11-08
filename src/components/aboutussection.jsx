"use client";

import Image from "next/image";
import { Briefcase, Star } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-1 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGES */}
        <div className="relative flex justify-center">
          <div className="relative w-[480px] h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assests/images/gallery-2.Webp" // Replace with your image
              alt="Team discussing strategy"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 w-48 h-50 rounded-xl overflow-hidden shadow-md border-4 border-white">
            <Image
              src="/assests/images/gallery-3.Webp" // Replace with your image
              alt="Team meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="inline-block text-sm font-semibold text-[#A31D1D] mb-3">
            • ABOUT OUR COMPANY •
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Make Sure Your Objectives <br /> Improve Profit Drivers
          </h2>
          <p className="text-gray-600 mb-8">
            We envision a future where our clients are at the forefront of their
            industries, setting new standards of excellence through the
            transformative power of our consulting services.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Briefcase className="w-6 h-6 text-[#A31D1D]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Improving Your Business Planning
                </h4>
                <p className="text-black text-sm">
                  We envision a future where our clients are at the forefront of
                  their industries, setting new standards of excellence.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Star className="w-6 h-6 text-[#A31D1D]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Make Sure You Can Evaluate Success
                </h4>
                <p className="text-gray-600 text-sm">
                  We envision a future where our clients are at the forefront of
                  their industries, setting new standards of excellence.
                </p>
              </div>
            </div>
          </div>

          <button className="mt-8 bg-[#A31D1D] text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition">
            Take Our Service →
          </button>
        </div>
      </div>
    </section>
  );
}
