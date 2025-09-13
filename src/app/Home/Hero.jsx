"use client";

import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative text-white rounded-2xl overflow-hidden h-[760px] md:h-[600px] bg-black">
     
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.png"
          alt="hero background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="filter grayscale contrast-75 brightness-50"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="px-6 md:px-16 py-8 h-full flex flex-col justify-between">
        
        <div className="flex items-start gap-6 md:gap-20 w-full">
          <div className="flex-1">
            <div className="flex items-start gap-4 md:gap-6">
              <h1 className="text-[270px] font-semibold leading-none">fabrica</h1>

              
              <div className="flex justify-center items-center text-6xl font-extrabold border-8 border-white rounded-full py-2 px-4.5">
                R
              </div>
            </div>

            
            <div className="mt-[-18px] ml-150 pl-6 md:pl-8">
              <span className="block text-3xl md:text-7xl font-semibold">Studio</span>
            </div>
          </div>

          
          <div className="mt-20 mr-30 text-left hidden sm:block">
            <ul className="space-y-1 justify-start text-base md:text-lg font-medium">
              <li>Branding and Identity</li>
              <li>Social Media Marketing</li>
              <li>Web Design and Development</li>
              <li>SEO Optimization</li>
            </ul>
          </div>
        </div>

       
        <p className="max-w-xl text-gray-300 text-base md:text-lg leading-relaxed">
         <span className="text-white font-semibold"> No generic websites. No empty <br /> marketing promises.</span> Just tools and strategies that <br /> help your business grow and your brand shine.
        </p>
      </div>

      
      <div className="absolute right-6 md:right-12 bottom-6 md:bottom-12">
        <div className="flex items-center  text-black rounded-2xl hover:bg-white shadow-xl min-w-[260px]">
          <div className="relative w-20 h-20 md:w-28 md:h-40 overflow-hidden rounded-2xl border-4 border-white shadow-md">
            <Image src="/HeroImage.avif" alt="profile"  fill style={{ objectFit: "cover" }} />
          </div>

          <div className="pr-2 rounded-3xl bg-white p-7 ">
            <div className="text-xs uppercase text-gray-500">Team Lead</div>
            <div className="text-xs text-gray-400">at fabrica®</div>
            <div className="text-sm md:text-2xl font-semibold mt-1">Lauren Thompson</div>

            <button className="mt-3 inline-flex items-center gap-2 bg-black text-white rounded-full px-3 py-1 text-sm">
              Let's talk
              <span className="w-2 h-2 rounded-full bg-white block" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
