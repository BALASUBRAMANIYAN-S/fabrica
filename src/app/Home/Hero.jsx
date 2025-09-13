"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-black text-white rounded-2xl  flex flex-col md:flex-row justify-between items-start md:items-center relative overflow-hidden">
     <div>
        <h1 className="text-9xl font-semibold">
          fabrica
          <span className="text-3xl border border-white rounded-full px-2">®</span>
        </h1>
     </div>
      
    </section>
  );
}
