import ProjectTitle from "../../Shared/ProjectTitle";
import SpanBold from "../../Shared/SpanBold";
import car from '../../../assets/image/screencapture-automotive-brand-5e839-web-app-addproduct-2023-12-17-15_18_29.png'
import car4 from '../../../assets/image/screencapture-automotive-brand-5e839-web-app-productdetails-6530af828fd8960d36f21459-2023-12-18-14_16_42.png'
import car1 from '../../../assets/image/screencapture-automotive-brand-5e839-web-app-2023-12-17-15_17_32.png'
import car2 from '../../../assets/image/screencapture-automotive-brand-5e839-web-app-mycart-2023-12-17-15_21_43.png'

const AutomotiveBrand = () => {
    return (
        <section  className="mt-5 mb-40 dark:text-white">
      <ProjectTitle title="Automotive Brand" />

     
      <div className="flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
        <div className=" -order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="p-2 bg-gray-200 h-max rounded-md">
            <img
              className="rounded-md"
              src={car}
              alt=""
            />
          </div>
          <div className="p-2 bg-gray-200 h-max rounded-md">
            <img className="rounded-md" src={car4} alt="" />
          </div>
          <div className="p-2 bg-gray-200 h-max md:h-[240px] lg:h-[190px] rounded-md">
            <img
              className="rounded-md max-h-"
              src={car2}
              alt=""
            />
          </div>
          <div className="p-2 bg-gray-200 h-max md:h-[240px] lg:h-[190px] rounded-md">
           
          </div>
        </div>

        {/* Home page */}
        <div className="order-5 lg:order-1 flex flex-col justify-between h-full">
          <h1 className=" font-generalBold text-2xl mb-4">
            Moto<span className="text-red-600">Jax</span>
          </h1>
          <div className=" p-2 bg-gray-200 rounded-md lg:w-[90%] mb-8 lg:mb-0 h-max">
            <img
              className="w-full object-cover"
              src={car1}
              alt=""
            />
          </div>
        </div>
      </div>
     
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 ">
       
        <div className="flex flex-col justify-between">
          <p className="w-[90%] font-poppins">
            This is a <SpanBold>Full stack Automotive Brand car</SpanBold> website built
            using the{" "}
            <SpanBold>MERN (MongoDB, Express.js, React.js, Node.js)</SpanBold>{" "}
            stack. The platform provides a secure{" "}
            <SpanBold>Firebase authentication</SpanBold> system, 
            Where a user add their car to the my cart.There is a dark and and light mode integration system
            
          </p>

          <div className="mt-14 flex gap-4">
            <a className="text-sm md:text-base border border-black dark:border-white text-black dark:text-white py-2 px-7" href='https://github.com/sazin222/brand-shop-client-side.git' target="_blank" rel="noopener noreferrer">
              
                Client
              
            </a>

            <a className="text-sm md:text-base border border-black dark:border-white text-black dark:text-white py-2 px-7" href='https://github.com/sazin222/brand-shop-server-side.git' target="_blank" rel="noopener noreferrer">
            
                Server
              
            </a>

            <a className="text-sm md:text-base border border-black dark:border-white text-black dark:text-white py-2 px-7"  href="https://automotive-brand-5e839.web.app/" target="_blank" rel="noopener noreferrer">
            
              Live
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="font-poppins flex flex-col justify-between">
          <h1 className="font-semibold text-lg mb-5">It Provides,</h1>

          <div className="flex flex-col gap-4  font-generalSemibold text-[10px] md:text-[12px] lg:text-base">
            <div className="grid grid-cols-2 list-outside">
              <li className="list-inside">Login System</li>
              <li className="">Register System</li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>User Add Car</li>
              <li>User Manage Added car</li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>Fully Responsive</li>
              <li>Dark and light mode</li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>Update the Added car</li>
              <li>Delete the Added car</li>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default AutomotiveBrand;