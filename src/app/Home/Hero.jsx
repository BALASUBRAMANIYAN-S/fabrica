"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-black text-white rounded-2xl p-10 flex flex-col md:flex-row justify-between items-start md:items-center relative overflow-hidden">
      {/* Left Content */}
      <div>
        <h1 className="text-6xl md:text-7xl font-bold flex items-center gap-2">
          fabrica
          <span className="text-3xl border border-white rounded-full px-2">®</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">Studio</h2>
        <p className="mt-10 max-w-xl text-gray-300 leading-relaxed">
          No generic websites. No empty marketing promises. Just tools and
          strategies that help your business grow and your brand shine.
        </p>
        <p className="text-sm text-gray-500 mt-6">© 2025 fabrica® Studio</p>
      </div>

      {/* Right Content */}
      <div className="mt-10 md:mt-0 flex flex-col items-start gap-10">
        {/* Services */}
        <ul className="space-y-3 text-lg font-medium">
          <li>Branding and Identity</li>
          <li>Social Media Marketing</li>
          <li>Web Design and Development</li>
          <li>SEO Optimization</li>
        </ul>

        {/* Card */}
        <div className="flex items-center gap-4 h-[200px] bg-white text-black p-4 rounded-2xl shadow-lg">
         <Image src="/HeroImage.avif" alt="Profile" width={200} height={200} />

          <div>
            <p className="text-sm text-gray-500">Team Lead at fabrica®</p>
            <h3 className="text-xl font-semibold">Lauren Thompson</h3>
            <button className="mt-2 bg-black text-white px-4 py-2 rounded-full text-sm flex items-center gap-1">
              Let&apos;s talk
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
