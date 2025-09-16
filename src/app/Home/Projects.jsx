import HomeCard from "@/Components/Common/HomeCard";
import { IoIosAddCircle } from "react-icons/io";
function Projects() {
  const logos = [
    { src: "/logos/logo1.svg", alt: "Logo 1" },
    { src: "/logos/logo2.svg", alt: "Logo 2" },
    { src: "/logos/logo3.svg", alt: "Logo 3" },
    { src: "/logos/logo4.svg", alt: "Logo 4" },
    { src: "/logos/logo5.svg", alt: "Logo 5" },
    { src: "/logos/logo6.svg", alt: "Logo 6" },
  ];
  return (
    <div className="">
      <ul className="flex gap-[10%] px-10 py-7">
        <li className="flex flex-row items-center gap-2">
          <IoIosAddCircle />
          Our clients
        </li>
        <li>(2016-25©)</li>
      </ul>
      {/*Images for Card */}
      <div className="px-10 grid grid-cols-2 sm:grid-cols-3 gap-3 md:grid-cols-6 ">
        {logos.map((logo, index) => (
          <HomeCard key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
      {/*Projects */}

      <div className=""></div>
      <p>(27)</p>
      
    </div>
  );
}

export default Projects;
