import ProjectTitle from "../../Shared/ProjectTitle";
import SpanBold from "../../Shared/SpanBold";
import food from '../../../assets/image/screencapture-courageous-monstera-8f7298-netlify-app-manageFood-2023-12-17-15_27_22.png'
import food1 from '../../../assets/image/screencapture-courageous-monstera-8f7298-netlify-app-foodRequest-2023-12-17-14_57_35.png'
import food2 from '../../../assets/image/screencapture-courageous-monstera-8f7298-netlify-app-addFood-2023-12-18-13_41_41.png'

const FoodSharing = () => {
    return (
        <section  className="mt-5 mb-40 dark:text-white">
      <ProjectTitle title="Food Sharing" />

      {/* First Grid */}
      <div className="flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
        {/* Others Image */}
        <div className=" -order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="p-2 bg-gray-200 h-max rounded-md">
            <img
              className="rounded-md"
              src={food}
              alt=""
            />
          </div>
          <div className="p-2 bg-gray-200 h-max rounded-md">
            <img className="rounded-md" src={food1} alt="" />
          </div>
          <div className="p-2 bg-gray-200 h-max md:h-[240px] lg:h-[190px] rounded-md">
            <img
              className="rounded-md max-h-"
              src={food2}
              alt=""
            />
          </div>
          <div className="p-2 bg-gray-200 h-max md:h-[240px] lg:h-[190px] rounded-md">
           
          </div>
        </div>

        {/* Home page */}
        <div className="order-5 lg:order-1 flex flex-col justify-between h-full">
          <h1 className=" font-generalBold text-2xl mb-4">
            Food<span className="text-red-600">Bank</span>
          </h1>
          <div className=" p-2 bg-gray-200 rounded-md lg:w-[90%] mb-8 lg:mb-0 h-max">
            <img
              className="w-full object-cover"
              src={food}
              alt=""
            />
          </div>
        </div>
      </div>

     
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 ">
       
        <div className="flex flex-col justify-between">
          <p className="w-[90%] font-poppins">
            This is a <SpanBold>Full stack Community Food Sharing</SpanBold> website built
            using the{" "}
            <SpanBold>MERN (MongoDB, Express.js, React.js, Node.js)</SpanBold>{" "}
            stack. The platform provides a secure{" "}
            <SpanBold>Firebase authentication</SpanBold> system, 
            Where a user add the food and a user also can request for food.
            There is <SpanBold>JWT token</SpanBold> authentication.
          </p>

          <div className="mt-14 flex gap-4">
            <a className="text-sm md:text-base border border-black dark:border-white text-black dark:text-white py-2 px-7" href='https://github.com/sazin222/food-sharing-client-side.git' target="_blank" rel="noopener noreferrer">
              
                Client
              
            </a>

            <a className="text-sm md:text-base border border-black dark:border-white text-black dark:text-white py-2 px-7" href='https://github.com/sazin222/food-sharing-server-side.git' target="_blank" rel="noopener noreferrer">
            
                Server
              
            </a>

            <a className="text-sm md:text-base border border-black dark:border-white text-black dark:text-white py-2 px-7"  href="https://courageous-monstera-8f7298.netlify.app" target="_blank" rel="noopener noreferrer">
            
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
              <li className="">Create User System</li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>User Add Food</li>
              <li>User Manage Food</li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>Fully Responsive</li>
              <li>Secure by JWT token</li>
            </div>
            <div className="grid grid-cols-2 list-outside">
              <li>User Short Food By date</li>
              <li>Users Search Food By Name</li>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default FoodSharing;