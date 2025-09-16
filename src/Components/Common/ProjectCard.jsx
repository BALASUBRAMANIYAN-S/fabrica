"use client";

export default function ProjectCard({ Heading, year }) {
  return (
    <div className="py-5">
      <div className="bg-white w-full rounded-[14px] shadow-sm">
        <div className=" justify-between items-center flex px-5 py-3">
          <ul className="flex flex-row justify-between items-center right-0 left-0">
            <li className="flex flex-row items-center gap-4">
              <p className="font-semibold">{Heading}</p>
              <p className="text-gray-500">/{year}</p>
            </li>
          </ul>
          <ul>
            <li className="flex flex-row font-bold md:gap-3 gap-1.5 group">
              <span className="w-2 h-2 rounded-full bg-gray-400 transition group-hover:bg-red-500"></span>
              <span className="w-2 h-2 rounded-full bg-gray-400 transition group-hover:bg-yellow-500"></span>
              <span className="w-2 h-2 rounded-full bg-gray-400 transition group-hover:bg-green-500"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
