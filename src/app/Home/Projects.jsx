import HomeCard from "@/Components/Common/HomeCard";
import ProjectCard from "@/Components/Common/ProjectCard";
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
 
      <div className="px-8">
        <p>(27)</p>
        <div className="flex flex-col md:flex-row md:items-center gap-5 md:justify-between">
          <div>
            <h1 className="font-bold text-6xl">Projects.</h1>
            <p className="font-bold text-2xl">©2025</p>
          </div>

          <p className="text-gray-500 text-[13px] md:max-w-md">
            <span className="block md:hidden">
              We’ve helped businesses across industries achieve their goals.
              Here are some of our recent projects.
            </span>

            <span className="hidden md:block max-w-3xs">
              We’ve helped businesses across industries achieve their goals.
              Here are some of our recent projects. Let’s build yours too.
            </span>
          </p>
        </div>

        {/*Project Cards*/}

       <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
  <ProjectCard
    Heading="Boltshift."
    year="2025"
    image={"/ProjectImage.avif"}
  />
  <ProjectCard
    Heading="Ephemeral."
    year="2025"
    image={"/ProjectImage.avif"}
  />
  <ProjectCard
    Heading="Powersurge."
    year="2025"
    image={"/ProjectImage.avif"}
  />
  <ProjectCard
    Heading="Mastermail."
    year="2025"
    image={"/ProjectImage.avif"}
  />
  <ProjectCard
    Heading="Warpspeed."
    year="2025"
    image={"/ProjectImage.avif"}
  />
  <ProjectCard
    Heading="CloudWatch."
    year="2025"
    image={"/ProjectImage.avif"}
  />
</div>

      </div>
    </div>
  );
}

export default Projects;
