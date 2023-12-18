/* eslint-disable no-unused-vars */
import javaScript from '../../../assets/icon/icons8-javascript-48.png'
import Reactjs from '../../../assets/icon/icons8-react-js-16.png'
import firebase from '../../../assets/icon/icons8-firebase-48.png'
import node from '../../../assets/icon/icons8-node-js-48.png'
import mongodb from '../../../assets/icon/icons8-mongodb-48.png'
import tailwind from '../../../assets/icon/tailwind-css.svg'
import myPic from '../../../assets/icon/photo.jpg.jpg'

import {
  FaArrowRightFromBracket,
  FaLocationDot,
  FaGithub,
} from "react-icons/fa6";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";


import { Link } from "react-scroll";
import GITHUB_LINK, {
  FB_LINK,
  RESUME_LINK,
} from "../../../Components/links/links";
import Container from "../../Shared/Container";
import SectionHeader from "../../Shared/SectionHeader";
import Button from "../../Shared/Button";
import SpanBold from "../../Shared/SpanBold";

const About = () => {
  const downloadPdf = () => {
    const pdfUrl = "MAHADI ISLAM SAZIN";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className="hidden lg:block z-10 dark:bg-[#141616]" id="about">
      <SectionHeader name="ABOUT" />
      <div className="min-h-[400px] grid grid-cols-8 grid-rows-10 grid-flow-row-dense mb-12 gap-2">
        {/* image cell */}
        <div className=" col-span-2 row-span-8 image">
          <img
            src={myPic}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* about cell */}
        <div className="border border-black col-span-4 row-span-4 about bg-black-dark text-white px-3 pt-3 rounded-lg">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-generalBold">I AM MAHADI ISLAM SAZIN</h2>
            <FaArrowRightFromBracket className="text-2xl " />
          </div>
          <p className="font-poppins">
            “Emerging <SpanBold> web developer</SpanBold> with{" "}
            <SpanBold> good fundamentals</SpanBold>, turning design into
            <SpanBold> user-friendly websites</SpanBold>. Committed to
            delivering
            <SpanBold> visually appealing</SpanBold> solutions. Eager to apply
            skills, <SpanBold> collaborate</SpanBold>, and create exceptional
            online experiences.”
          </p>
        </div>

        {/* project cell */}
        <div className="border border-black col-span-2 row-span-6 project bg-black-gray text-white rounded-lg p-3 ">
          <div className="h-max flex flex-col gap-2">
            <h2 className="text-2xl font-generalBold">PROJECTS</h2>
            <p className="text-light-gray text-[12px] font-generalBold">
              Unveil My Creative Projects Below
            </p>
          </div>
          <div className="flex flex-col items-end mt-12 justify-between h-[60%]">
            <div className="border border-[rgba(217, 217, 217, 0.47)] w-full p-2 font-generalSemiBold rounded-md bg-[#2D2D2D] shadow-lg">
              <p>Technology For projects</p>
              <div className="flex gap-4 mt-4 items-center">
                <img src="./assets/icons/html-sm-sm.png" alt="" />

                <img src="./assets/icons/tailwind-sm-sm.png" alt="" />

                <img src="./assets/icons/react-sm-sm.png" alt="" />

                <img src="./assets/icons/firebase-sm-sm.png" alt="" />
              </div>
              <div className="flex justify-end mt-2">
                <p className="bg-white w-[20px] h-[20px] rounded-full"></p>
              </div>
            </div>
            <Link
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              to="projects"
            >
              <div className="bg-dark">
                <Button className="flex items-center gap-2 bg-black-dark rounded-lg py-2 px-4 text-sm">
                  More <FaArrowRightFromBracket />
                </Button>
              </div>
            </Link>
          </div>
        </div>

        {/* skill cell */}
        <div className="border border-black col-span-4 row-span-4 skills p-3 bg-black-gray text-white rounded-lg flex flex-col justify-between ">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-generalBold">SKILLS</h2>
            <Link
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              to="skills"
            >
              <FaArrowRightFromBracket className="text-2xl " />
            </Link>
          </div>
          <div className="flex justify-between w-[95%] items-end">
            <img  src={javaScript} alt="" className="w-[8%] bg-white" />
            <img
              src={firebase}
              alt=""
              className="w-[9%]"
            />
            <img src={Reactjs} alt="" className="w-[8%]" />
            <img src={tailwind} alt="" className="w-[10%]" />
            <img src={node} alt="" className="w-[8%]" />
            <img src={mongodb} alt="" className="w-[8%]" />

            <p className="font-generalBold   text-3xl">. . .</p>
          </div>
        </div>

        {/* social cell */}
        <div className="border border-black col-span-2 row-span-4 social bg-black-dark text-white p-3  flex justify-between flex-col rounded-lg">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-generalBold">SOCIAL</h2>
            <p className="text-light-gray text-[12px] font-generalBold">
              Explore My Online Presence and Connect with Me on Social Platforms
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className=" bg-white text-5xl text-black rounded-md p-1">
              <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
            
            <div className=" bg-white text-5xl text-black rounded-md p-1">
              <a href={FB_LINK} target="_blank" rel="noopener noreferrer">
                <BiLogoFacebookCircle />
              </a>
            </div>
          </div>
        </div>

        {/* resume cell */}
        <div className="border border-black col-span-2 row-span-2 resume font-generalBold flex justify-between flex-col p-2 bg-black-dark rounded-lg text-white">
          <a
            href={RESUME_LINK}
            download="MAHADI ISLAM SAZIN "
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFillPersonLinesFill className="text-2xl" />
            <p className="text-light-gray text-[12px]"> LEARN MORE ABOUT ME</p>
            <div className="flex justify-between items-center">
              <h2 className="text-xl">
                SEE MY <span className="text-secondary">RESUME</span>
              </h2>

              <FaArrowRightFromBracket className="text-2xl " />
            </div>
          </a>
        </div>

        {/* contact cell */}
        <div className="border border-black col-span-4 row-span-2 contact bg-black-gray text-white p-3 rounded-lg">
          <h2 className="text-2xl font-generalBold pb-4">GET IN TOUCH</h2>
          <div className="flex justify-between items-center text-xl">
            <div className="flex gap-2 items-center">
              <div className="bg-black p-1 rounded-full">
                <FaLocationDot className="" />
              </div>
              <div className="bg-black p-1 rounded-full">
                <AiFillPhone className="" />
              </div>
            </div>
            <Link
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              to="contact"
            >
              <FaArrowRightFromBracket className="text-2xl " />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
