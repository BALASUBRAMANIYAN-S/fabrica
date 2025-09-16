"use client";

export default function ProjectCard({ Heading, year, image }) {
  return (
    <div className="py-5 gap-2 flex flex-col group"> {/* group here */}
      {/* Top Section */}
      <div className="bg-white w-full rounded-[14px] shadow-sm transition group-hover:bg-gray-50">
        <div className="flex justify-between items-center px-5 py-3">
          <ul className="flex flex-row items-center gap-4">
            <li className="flex flex-row items-center gap-4">
              <p className="font-semibold">{Heading}</p>
              <p className="text-gray-500">/{year}</p>
            </li>
          </ul>
          <ul>
            <li className="flex flex-row font-bold md:gap-3 gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gray-400 transition group-hover:bg-red-500"></span>
              <span className="w-2 h-2 rounded-full bg-gray-400 transition group-hover:bg-yellow-500"></span>
              <span className="w-2 h-2 rounded-full bg-gray-400 transition group-hover:bg-green-500"></span>
            </li>
          </ul>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-fit overflow-hidden rounded-xl cursor-pointer">
        <img
          src={image}
          alt={Heading}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold px-3 py-1 rounded-lg transition-all duration-500 group-hover:scale-110 ">
            {Heading}
          </h2>
        </div>
      </div>
    </div>
  );
}
