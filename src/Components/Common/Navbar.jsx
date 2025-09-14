"use client";
import { useState } from "react";

function Navbar() {
  const NavNAme = ["Studio", "Projects", "Blog", "Contact"];
  const NavNAmeTwo = ["Home", "Studio", "Projects", "Blog", "Contact"];
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="">
      <div className="py-4">
        <ul className="flex justify-between px-5">
          <li className="text-[18px] z-20 flex items-center">
            fabrica
            <span className="text-[6px] border border-black rounded-4xl px-[3px]">
              R
            </span>
          </li>

          {!isClicked && (
            <>
              {NavNAme.map((value, index) => (
                <div className="flex gap-5">
                  <li key={index}>{value}</li>
                </div>
              ))}
            </>
          )}

          {isClicked && (
            <div className="absolute z-10 top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-6 text-2xl font-semibold ">
              {NavNAmeTwo.map((value, index) => (
                <li key={index} className="list-none cursor-pointer hover:text-gray-500">
                  {value}
                </li>
              ))}
          </div>
          )}

          <li
            onClick={() => setIsClicked(!isClicked)}
            className="flex z-20 justify-center items-center flex-col gap-2 cursor-pointer"
          >
            <div className="border-b-3 px-7"></div>
            <div className="border-b-3 px-7"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
