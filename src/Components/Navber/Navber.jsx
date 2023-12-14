

import DropDown from "./DropDown";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import {  Link, } from "react-scroll";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Container from "../Shared/Container";

const Navbar = () => {
  const navLinks = ["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"];

  const [activeLink, setActiveLink] = useState("ABOUT");
  const [menu, setMenu] = useState(false);

  const [theme, setTheme] = useState("light");
  const html = document.documentElement;

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";

    if (theme) {
      setTheme(theme);
      html.classList.add(theme);
    }
  }, []);

  const handleTheme = () => {
    // console.log("clicked");

    if (theme === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const handleActiveLink = (link) => {
    if (link === "HOME") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setActiveLink(link);
  };

  return (
    <nav className="sticky top-0 left-0 bg-nav z-20">
      <Container className="flex justify-between items-center text-[14px] font-generalBold  ">
        <img
          src="/src/assets/ernst-young-ey-logo-svgrepo-com.svg"
          alt=""
          className="w-[33%] sm:w-[25%] md:w-[18%] lg:w-[13%] lg:py-0 py-3"
        />
        <ul className="flex w-[60%] justify-end items-center text-white ">
          {/* {navLinks.map((link) => (
            <Link
              key={link}
              spy={true}
              smooth={true}
              offset={link === "SKILLS" || link === "HOME" ? 300 : -100}
              duration={500}
              onClick={() => handleActiveLink(link)}
              to={link.toLowerCase()}
              className={`${
                activeLink === link ? "bg-secondary text-white" : ""
              } py-6 px-6 cursor-pointer hidden lg:block`}
            >
              {link}
            </Link>
          ))} */}
          <button
            onClick={() => handleActiveLink("HOME")}
            // to="home"
            className={`${
              activeLink === "HOME" ? "bg-secondary text-white" : ""
            } py-6 px-6 cursor-pointer hidden lg:block`}
          >
            HOME
          </button>
          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => handleActiveLink("ABOUT")}
            to="about"
            className={`${
              activeLink === "ABOUT" ? "bg-secondary text-white" : ""
            } py-6 px-6 cursor-pointer hidden lg:block`}
          >
            ABOUT
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => handleActiveLink("SKILLS")}
            to="skills"
            className={`${
              activeLink === "SKILLS" ? "bg-secondary text-white" : ""
            } py-6 px-6 cursor-pointer hidden lg:block`}
          >
            SKILLS
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => handleActiveLink("PROJECTS")}
            to="projects"
            className={`${
              activeLink === "PROJECTS" ? "bg-secondary text-white" : ""
            } py-6 px-6 cursor-pointer hidden lg:block`}
          >
            PROJECTS
          </Link>
          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => handleActiveLink("CONTACT")}
            to="contact"
            className={`${
              activeLink === "CONTACT" ? "bg-secondary text-white" : ""
            } py-6 px-6 cursor-pointer hidden lg:block`}
          >
            CONTACT
          </Link>
          <li className="px-6 hidden lg:block ">
            {theme === "dark" ? (
              <BsFillSunFill
                className="text-xl sm:text-3xl md:text-3xl text-white"
                onClick={handleTheme}
              />
            ) : (
              <BsFillMoonStarsFill
                className="text-lg sm:text-xl md:text-2xl"
                onClick={handleTheme}
              />
            )}
          </li>
          <li className="lg:hidden w-max" onClick={() => setMenu(!menu)}>
            {menu ? (
              <MdOutlineClose className="text-xl text-white" />
            ) : (
              <CiMenuFries className="text-xl text-white" />
            )}
          </li>
        </ul>

        <DropDown navLinks={navLinks} menu={menu} setMenu={setMenu} />
      </Container>
    </nav>
  );
};

export default Navbar;
