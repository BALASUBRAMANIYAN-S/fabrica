"use client";
import { useState } from "react";

function Navbar() {
  const NavNAme = ["Studio", "Projects", "Blog", "Contact"];
  const NavNAmeTwo = ["Home", "Studio", "Projects", "Blog", "Contact"];
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      <div className="py-4 ">
        <ul className="flex justify-between px-5">
          <li className="text-[18px] flex items-center ">
            fabrica
            <span className="text-[6px] border border-black rounded-4xl px-[3px]">
              R
            </span>
          </li>
          {isClicked && (
            <ul className="flex flex-col">
              {NavNAmeTwo.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          )}

          <li
            onClick={() => {
              if (isClicked) {
                setIsClicked(false);
              } else {
                setIsClicked(true);
              }
            }}
            className="flex justify-center items-center flex-col gap-2 cursor-pointer"
          >
            <div className="border-b-3 px-7 "></div>
            <div className="border-b-3 px-7"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
