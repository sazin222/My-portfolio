
import Container from "../../Shared/Container";
import SectionHeader from "../../Shared/SectionHeader";
import skillsList from "../Skills/SkillsList";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div
      className="bg-[#D9D9D9] relative  z-5 min-h-screen dark:bg-[#141616]"
      id="skills"
    >
      <Container className="py-1">
        <SectionHeader name="SKILLS" />

        <div className="w-[90%] relative  mx-auto py-12  flex z-5 flex-wrap items-center justify-center gap-7 lg:gap-x-0 lg:gap-y-5 ">
          {skillsList.map(({ id, name, path }, idx) => (
            <div
              key={id}
              className="w-[25%] lg:w-[20%] flex flex-col justify-center items-center gap-2"
            >
              <img
                src={path}
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
                {name.toUpperCase()}
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
