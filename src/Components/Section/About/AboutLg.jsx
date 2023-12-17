import mypicture from '../../../assets/icon/photo.jpg.jpg'
import javaScript from '../../../assets/icon/icons8-javascript-48.png'
import Reactjs from '../../../assets/icon/icons8-react-js-16.png'
import firebase from '../../../assets/icon/icons8-firebase-48.png'
import node from '../../../assets/icon/icons8-node-js-48.png'
import mongodb from '../../../assets/icon/icons8-mongodb-48.png'
import GITHUB_LINK, {
    FB_LINK,
  } from "../../links/links";
import {
  FaArrowRightFromBracket,
  FaLocationDot,
  FaGithub,
} from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import Container from "../../Shared/Container";
import SectionHeader from "../../Shared/SectionHeader";
import SpanBold from "../../Shared/SpanBold";
import Button from "../../Shared/Button";

const AboutLg = () => {
  return (
    <Container className="lg:hidden">
      <SectionHeader name="ABOUT" />
      <div className="min-h-[400px] grid grid-cols-1 md:grid-cols-8 md:grid-rows-10 mb-12 gap-2">
        {/* image cell */}
        <div className="h-[300px]  md:h-auto -order-1 md:order-0 image-md hidden md:block">
          <img
            src={mypicture}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        <div className="h-[300px]  md:h-auto -order-1 md:order-0  md:hidden">
          <img
            src={mypicture}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        <div className="hidden px-3 pt-3 text-white border border-black rounded-lg md:block -order-2 md:order-1 about-md bg-black-dark">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-generalBold">I'M MAHADI ISLAM SAZIN</h2>
            <FaArrowRightFromBracket className="text-2xl " />
          </div>
          <p className="p-1 text-sm font-generalLight lg:text-base">
            “Emerging <SpanBold> web developer</SpanBold> with{" "}
            <SpanBold> good fundamentals</SpanBold>, turning design into
            <SpanBold> user-friendly websites</SpanBold>. Committed to
            delivering
            <SpanBold> visually appealing</SpanBold> solutions. Eager to apply
            skills, <SpanBold> collaborate</SpanBold>, and create exceptional
            online experiences.”
          </p>
        </div>

        {/* about cell */}
        <div className="px-3 pt-3 text-white border border-black rounded-lg md:hidden -order-2 md:order-1 bg-black-dark">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-generalBold">I'M MAHADI ISLAM SAZIN</h2>
            <FaArrowRightFromBracket className="text-2xl " />
          </div>
          <p className="p-1 text-sm font-generalLight lg:text-base">
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
        <div className="order-6 hidden p-3 text-white border border-black rounded-lg project-md bg-black-gray md:block">
          <div className="flex flex-col gap-2 h-max">
            <h2 className="text-2xl font-generalBold">PROJECTS</h2>
            <p className="text-light-gray text-[12px] font-generalBold">
              Unveil My Creative Projects Below
            </p>
          </div>
          <div className="flex flex-col items-end mt-12 justify-between h-[60%]">
            <div className="border border-[rgba(217, 217, 217, 0.47)] w-full p-2 font-generalSemiBold rounded-md bg-[#2D2D2D] shadow-lg">
              <p>Cuisine Share</p>
              <div className="flex items-center gap-4 mt-4">
                <img src="" alt="" />

                <img src="" alt="" />

                <img src="" alt="" />

                <img src="" alt="" />
              </div>
              <div className="flex justify-end mt-2">
                <p className="bg-white w-[20px] h-[20px] rounded-full"></p>
              </div>
            </div>
            <div className="pt-2 bg-dark lg:pt-0">
              <Button className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-black-dark">
                More <FaArrowRightFromBracket />
              </Button>
            </div>
          </div>
        </div>

        {/* skill cell */}
        <div className="flex-col justify-between hidden p-3 text-white border border-black rounded-lg  -order-1 md:order-3 skills-md bg-black-gray md:flex">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-generalBold">SKILLS</h2>
            <FaArrowRightFromBracket className="text-2xl " />
          </div>
          <div className="flex justify-between w-[95%] items-end">
          <img  src={javaScript} alt="" className="w-[8%] bg-white" />
            <img
              src={firebase}
              alt=""
              className="w-[9%]"
            />
            <img src={Reactjs} alt="" className="w-[8%]" />
            <img src={node} alt="" className="w-[8%]" />
            <img src={mongodb} alt="" className="w-[8%]" />

            <p className="text-3xl font-generalBold">. . .</p>
          </div>
        </div>

        {/* social cell */}
        <div className="flex-col justify-between hidden p-3 text-white border border-black rounded-lg  -order-1 md:order-4 social-md bg-black-dark md:flex">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-generalBold">SOCIAL</h2>
            <p className="text-light-gray text-[12px] font-generalBold">
              Explore My Online Presence and Connect with Me on Social Platforms
            </p>
          </div>
          <div className="flex items-center gap-2 pt-2 lg:pt-0">
            {/* <div className="p-1 text-3xl text-black bg-white rounded-md  lg:text-5xl">
              <FaGithub />
            </div> */}
             <div className=" bg-white text-5xl text-black rounded-md p-1">
              <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
            
            {/* <div className="p-1 text-3xl text-black bg-white rounded-md  lg:text-5xl">
              <BiLogoFacebookCircle />
            </div> */}
            <div className=" bg-white text-5xl text-black rounded-md p-1">
              <a href={FB_LINK} target="_blank" rel="noopener noreferrer">
                <BiLogoFacebookCircle />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between p-3 text-white border border-black rounded-lg  -order-1 md:order-4 bg-black-dark md:hidden">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-generalBold">SOCIAL</h2>
            <p className="text-light-gray text-[12px] font-generalBold">
              Explore My Online Presence and Connect with Me on Social Platforms
            </p>
          </div>
          <div className="flex items-center gap-2 pt-2 lg:pt-0">
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

        
        <div className="flex-col justify-between order-5 hidden p-2 text-white border border-black rounded-lg resume-md font-generalBold bg-black-dark md:flex">
          <BsFillPersonLinesFill className="text-2xl" />
          <p className="text-light-gray text-[12px]"> LEARN MORE ABOUT ME</p>
          <div className="flex items-center justify-between">
            <h2 className="text-xl">
              SEE MY <span className="text-secondary">RESUME</span>
            </h2>

            <FaArrowRightFromBracket className="text-2xl " />
          </div>
        </div>

        <div className="flex-col justify-between order-6 hidden p-3 text-white border border-black rounded-lg contact-md bg-black-gray lg:block md:flex">
          <h2 className="pb-4 text-2xl font-generalBold">GET IN TOUCH</h2>
          <div className="flex items-center justify-between text-xl">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-black rounded-full">
                <FaLocationDot className="" />
              </div>
              <div className="p-1 bg-black rounded-full">
                <AiFillPhone className="" />
              </div>
            </div>
            <FaArrowRightFromBracket className="text-2xl " />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutLg;
