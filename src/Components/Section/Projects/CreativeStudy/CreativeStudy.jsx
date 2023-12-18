/* eslint-disable no-undef */
import { Button } from "react-scroll";
import SpanBold from "../../../Shared/SpanBold";
import ProjectTitle from "../../../Shared/ProjectTitle";
import creative1 from '../../../../assets/image/screencapture-venerable-dango-2cd0e0-netlify-app-2023-12-15-20_37_25.png'
import creative2 from '../../../../assets/image/screencapture-venerable-dango-2cd0e0-netlify-app-dashboard-studentProfile-2023-12-15-20_40_03.png'
import creative3 from '../../../../assets/image/screencapture-venerable-dango-2cd0e0-netlify-app-dashboard-users-2023-12-15-20_42_13.png'
import creative4 from '../../../../assets/image/screencapture-venerable-dango-2cd0e0-netlify-app-pay-amount-656745915edd821ed5a6140f-2023-12-15-20_39_27.png'
import SectionHeader from "../../../Shared/SectionHeader";
import Container from "../../../Shared/Container";


const CreativeStudy = () => {
    return (

      <Container
      className="w-[100%] bg-transparent min-h-[500px] "
      id="projects"
    >
      <SectionHeader name="PROJECTS" z={30} />
      <section  className="mt-5 mb-40 dark:text-white">
      <ProjectTitle title="Student Management" />

      {/* First Grid */}
      <div className="flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
        {/* Others Image */}
        <div className=" -order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="p-2 bg-gray-200 h-max rounded-md">
            <img
              className="rounded-md"
              src={creative1}
              alt=""
            />
          </div>
          <div className="p-2 bg-gray-200 h-max rounded-md">
            <img className="rounded-md" src={creative2} alt="" />
          </div>
          <div className="p-2 bg-gray-200 h-max md:h-[240px] lg:h-[190px] rounded-md">
            <img
              className="rounded-md max-h-"
              src={creative3}
              alt=""
            />
          </div>
          <div className="p-2 bg-gray-200 h-max md:h-[240px] lg:h-[190px] rounded-md">
            <img
              className="rounded-md h-full"
              src={creative4}
              alt=""
            />
          </div>
        </div>

        {/* Home page */}
        <div className="order-5 lg:order-1 flex flex-col justify-between h-full">
          <h1 className=" font-generalBold text-2xl mb-4">
            Creative<span className="text-red-600">Study</span>
          </h1>
          <div className=" p-2 bg-gray-200 rounded-md lg:w-[90%] mb-8 lg:mb-0 h-max">
            <img
              className="w-full object-cover"
              src={creative1}
              alt=""
            />
          </div>
        </div>
      </div>

     
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 ">
       
        <div className="flex flex-col justify-between">
          <p className="w-[90%] font-poppins">
            This is a <SpanBold>Full stack Student Management</SpanBold> website built
            using the{" "}
            <SpanBold>MERN (MongoDB, Express.js, React.js, Node.js)</SpanBold>{" "}
            stack. The platform provides a secure{" "}
            <SpanBold>authentication</SpanBold> system, efficient product
            exploration, Student class management, a seamless checkout process
            with <SpanBold>stripe payment system</SpanBold> and{" "}
            <SpanBold>ADMIN DASHBOARD</SpanBold>.
          </p>

          <div className="mt-14 flex gap-4">
            <a className="text-sm md:text-base border border-black dark:border-white text-black dark:text-white py-2 px-7" href='https://github.com/sazin222/student-class-management-client.git' target="_blank" rel="noopener noreferrer">
              
                Client
              
            </a>

            <a className="text-sm md:text-base border border-black dark:border-white text-black dark:text-white py-2 px-7" href='https://github.com/sazin222/student-class-management-server.git' target="_blank" rel="noopener noreferrer">
            
                Server
              
            </a>

            <a className="text-sm md:text-base border border-black dark:border-white text-black dark:text-white py-2 px-7"  href="https://venerable-dango-2cd0e0.netlify.app" target="_blank" rel="noopener noreferrer">
            
              Live
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="font-poppins flex flex-col justify-between">
          <h1 className="font-semibold text-lg mb-5">It Provides,</h1>

          <div className="flex flex-col gap-4  font-generalSemibold text-[10px] md:text-[12px] lg:text-base">
            <div className="grid grid-cols-2 list-outside">
              <li className="list-inside">Admin Dashboard</li>
              <li className="">Payment System</li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>User Dashboard</li>
              <li>Class enroll System</li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>Fully Responsive</li>
              <li>Teacher Request System</li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>Class Management</li>
              <li>Enrolled Class</li>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Container>
        
    );
};

export default CreativeStudy;