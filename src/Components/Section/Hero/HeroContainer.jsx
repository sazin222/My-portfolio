

import { Link } from "react-scroll";
import Button from "../../Shared/Button";

const HeroContainer = () => {
  return (
    <div className="flex justify-center items-center flex-col h-[80%] ">
      <h1 className="text-4xl sm:text-5xl md:text-7xl">
        Idea to <span className="text-secondary">Reality</span>
      </h1>
      <h3 className="text-2xl sm:text-3xl md:text-5xl pb-8">
        Your <span className="text-secondary">Web Developer</span>
      </h3>

      <div className="grid grid-cols-6 gap-x-1 gap-y-2 sm:flex sm:justify-center sm:items-center  sm:gap-8 text-[10px] sm:text-base w-[80%] sm:w-full">
        <Button className="py-2 order-1 col-span-3 sm:bg-[rgba(0, 0, 0, 0.46)] border border-white w-full sm:w-max sm:px-8  ">
          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
            to="about"
          >
            ABOUT ME
          </Link>
        </Button>

        <div className="order-2 sm:order-1 col-span-6  flex justify-center items-center sm:block">
          <Button className="py-2  bg-white text-black border border-secondary w-full sm:w-auto sm:px-12 ">
            <Link
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              to="contact"
            >
              HIRE ME
            </Link>
          </Button>
        </div>

        <Button className="py-2 order-1 bg-[rgba(0, 0, 0, 0.46)] border border-white sm:px-8 col-span-3">
          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
            to="projects"
          >
            MY WORK
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default HeroContainer;