/* eslint-disable react/prop-types */

import { CiMenuFries } from "react-icons/ci";
import Container from "../Shared/Container";


const DropDown = ({ navLinks, menu, setMenu }) => {
  return (
    <div
      className={`lg:hidden absolute  w-[100vw] min-h-[200px] bg-white ${
        menu ? "top-12 left-0" : "top-12 -left-[150%] "
      } duration-300 `}
    >
      <Container className="pb-3">
        <p className="flex justify-between py-4">
          <input type="checkbox" className="toggle " checked />
          <CiMenuFries className="text-xl text-white" />
        </p>

        <ul>
          {navLinks.map((link) => (
            <li
              key={link}
              className="pb-4 pt-2 border-b  border-b-black"
              onClick={() => setMenu(!menu)}
            >
              {link}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default DropDown;