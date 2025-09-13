"use client";
import { useState } from "react";

function Navbar() {
  const NavNAme = ["Studio", "Projects", "Blog", "Contact"];
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="bg-gray-200">
      <div className="flex flex-row font-bold py-4 items-center justify-between px-10 list-none">
        <li className="text-[18px] flex items-center ">
          fabrica
          <span className="text-[6px] mb-2 border border-black rounded-4xl px-[3px]">
            R
          </span>
        </li>

        {NavNAme.map((Values, index) => {
          return (
            <li className="cursor-pointer" key={index}>
              {Values}
            </li>
          );
        })}
          <li className="flex justify-center items-center flex-col gap-2 cursor-pointer">
          <div className="border-b-3  px-7 "></div>
          <div className="border-b-3 px-7"></div>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
