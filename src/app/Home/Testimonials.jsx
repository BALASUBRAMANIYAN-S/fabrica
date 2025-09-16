import { IoIosAddCircle } from "react-icons/io";

function Testimonials() {
  return (
    <div>
      <ul className="flex flex-col justify-between md:flex-row lg:justify-between font-bold px-10 py-7">
        <li className="flex lg:text-[12px] flex-row items-start justify-start gap-2">
          <IoIosAddCircle />
          Why choose us
        </li>
        <li>
          <p className="font-medium text-3xl lg:w-6xl">
            Proven results for every project,
            <br className="lg:hidden" />
            <span className="text-gray-500">
              {" "}
              <br className=" lg:flex hidden" /> with a focus on design and{" "}
              <br className="lg:flex hidden" />
              functionality.
            </span>
          </p>
        </li>
      </ul>
      <div className="p-5 flex md:flex-row flex-col justify-between">
        <div className="relative group w-[370px] h-[568px] overflow-hidden rounded-lg">
          {/* Image */}
          <img
            src="/ProjectImage.avif"
            alt="Project"
            className="w-full h-full object-cover transition-all duration-[1500ms] ease-in-out group-hover:scale-110 group-hover:blur-sm "
          />

          {/* Icon */}
          <div className="absolute top-2 right-2 z-10 p-4 rounded transition-transform duration-[1500ms] ease-in-out group-hover:rotate-90">
            <IoIosAddCircle className="text-black text-2xl" />
          </div>

          {/* Bottom Text & Button (hidden initially) */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-white">
            <p className="mb-2">
              Your digital journey begins with a conversation. Let's talk today.
            </p>
            <button className="bg-amber-900 px-4 py-2 rounded hover:bg-amber-700 transition-colors">
              Let's talk ◉
            </button>
          </div>
        </div>
        {/*Side Messages */}
        <div className=" flex flex-col font-medium  md:text-[20px]">
          <p className="text-gray-400">
            <span className="text-gray-900 font-semibold">
              No fluff, just results.
            </span>{" "}
            Thoughtful design and <br /> tools that make your work easier. We
            focus on smart <br /> design and useful features, project after
            project.
          </p>

          <div className="flex gap-7 mt-6">
            <div className="bg-white w-[30%] py-4 rounded-xl shadow-md text-center">
              <p className="text-3xl font-bold">50+</p>
              <p className="text-gray-500 mt-2">
                Successful projects completed
              </p>
            </div>
            <div className="bg-white w-[30%] py-4 rounded-xl shadow-md text-center">
              <p className="text-3xl font-bold">95%</p>
              <p className="text-gray-500 mt-2">Customer satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
