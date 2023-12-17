import React, { useState } from "react";

import { FaPlus, FaMinus,  } from "react-icons/fa6";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import SpanBold from "./SpanBold";


const Education = () => {
  const [selectedRow, setSelectedRow] = useState(0);

  const handleSelectedRow = (idx) => {
    if (selectedRow === idx) {
      setSelectedRow(-1);
    } else {
      setSelectedRow(idx);
    }
  };

  const education = [
    {
      name: "English Literature",
      status: "Ongoing",
      duration: "2020-2025",
      institution: "Govt Azizul Haque College",

    },
    {
      name: "HSC ( Higher Secondary Certificate )",
      status: "Finished",
      duration: "2017-2019",
      institution: "BIAM Model School & College",
      gpa: 5.0,
    },
    {
      name: "SSC ( Secondary School Certificate )",
      status: "Finished",
      duration: "2017",
      institution: "Summit School & College",
      gpa: 4.95,
    },
  ];

  return (
    <Container className="mb-16 sm:mb-28 font-poppins dark:text-white">
      <SectionHeader name="EDUCATION" />
      <div className="flex flex-col gap-2 justify-center items-center min-h-[200px] mt-16 md:mt-20 ">
        {/* Single Accordion Row  */}
        {education.map(({ name, status, duration, gpa, institution }, idx) => (
          <div
            key={name}
            onClick={() => handleSelectedRow(idx)}
            className={`w-full  sm:w-[80%] bg-[#E5E7EB] duration-300 cursor-pointer ${
              selectedRow === idx ? "h-[250px]" : "h-[50px]"
            } relative flex justify-between px-4 pt-[15px] dark:bg-[#343434]`}
          >
            <p className="text-sm sm:text-md md:text-lg lg:text-xl">{name}</p>
            {selectedRow === idx ? (
              <FaMinus className="text-gray-500 dark:text-gray-300" />
            ) : (
              <FaPlus className="text-gray-500 dark:text-gray-300" />
            )}
            <div
              className={`bg-[#E5E7EB] w-full duration-300 ${
                selectedRow === idx ? "h-full mb-4" : "h-0"
              }  absolute top-[50px] left-0 px-4 flex flex-col justify-center dark:bg-[#343434] mb-2`}
            >
              <p
                className={`${
                  selectedRow === idx ? "" : "opacity-0"
                } duration-300`}
              >
                <SpanBold>Status:</SpanBold> {status}
              </p>
              <p
                className={`${
                  selectedRow === idx ? "" : "opacity-0"
                } duration-300`}
              >
                <SpanBold>Duration:</SpanBold> {duration}
              </p>
              <p
                className={`${
                  selectedRow === idx ? "" : "opacity-0"
                } duration-300`}
              >
                <SpanBold>Institution:</SpanBold> {institution}
              </p>
              <p
                className={`${
                  selectedRow === idx ? "" : "opacity-0"
                } duration-300`}
              >
                <SpanBold>GPA:</SpanBold> {gpa}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Education;