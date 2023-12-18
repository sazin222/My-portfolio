
import Container from "../../Shared/Container";
import SectionHeader from "../../Shared/SectionHeader";
import { motion } from "framer-motion";
import java from '../../../assets/icon/icons8-html-logo-48.png'
import java1 from '../../../assets/icon/icons8-javascript-48.png'
import java2 from '../../../assets/icon/icons8-react-js-16.png'
import java3 from '../../../assets/icon/icons8-node-js-48.png'
import java4 from '../../../assets/icon/icons8-firebase-48.png'
import java5 from '../../../assets/icon/icons8-express-js-50.png'
import java6 from '../../../assets/icon/icons8-mongodb-48.png'
import java7 from '../../../assets/icon/icons8-tailwind-css-48.png'

const Skills = () => {
  
  const skillsList = [
    { id: 1, name: "html", path:java },
    { id: 2, name: "js",path:java1 },
    { id: 3, name: "react", path:java2 },
    { id: 4, name: "node", path:java3 },
    { id: 5, name: "firebase", path:java4 },
    { id: 6, name: "express", path:java5 },
    { id: 7, name: "mongoDB", path:java6 },
    { id: 8, name: "tailwind", path:java7 },
  ];

  

  console.log(skillsList);
  return (
    <div
      className="bg-[#D9D9D9] relative  z-5 min-h-screen dark:bg-[#141616]"
      id="skills"
    >
      <Container className="py-1">
        <SectionHeader name="SKILLS" />

        <div className="w-[90%] relative  mx-auto py-12  flex z-5 flex-wrap items-center justify-center gap-7 lg:gap-x-0 lg:gap-y-5 ">
          {skillsList.map((value, idx) => (
           
            <div
              key={value?.id}
              className="w-[25%] lg:w-[20%] flex flex-col justify-center items-center gap-2"
            >
             
            
              <img
                src={value?.path}
                alt=""
                className={`w-[40%] md:w-[50%] lg:w-auto ${
                  idx === 3 || idx === 4 || idx === 7 || idx === 8 ? "z-10" : ""
                } ${idx === 2 ? " animate-spin duration-150" : ""}`}
              />
              <p
                className={`text-sm md:text-md lg:text-xl font-generalBold  ${
                  idx === 3 || idx === 4 || idx === 7 || idx === 8
                    ? "lg:text-white z-10"
                    : "dark:text-white"
                }`}
              >
                {value?.name.toUpperCase()}
              </p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "44%" }}
          transition={{ duration: 0.6 }}
          className="absolute top-0 right-0 h-full bg-secondary -z-5 hidden lg:block overflow-hidden"
        ></motion.div>
      </Container>
    </div>
  );
};

export default Skills;
