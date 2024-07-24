import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const handlefun = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className=" bg-slate-800 w-full p-4">
        <div className=" flex justify-between">
          <div className=" font-bold text-3xl lg:text-4xl text-white mx-8 py-1 lg:px-10 w-1/2">
            Logo
          </div>
          <ul className="hidden lg:flex pt-2 font-medium text-sm lg:text-xl space-x-12 text-white w-1/2 relative left-52 ">
            {links.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? " text-purple-700 pb-1 border-b border-purple-900"
                        : "text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setOpen(!open)}
            className="text-4xl pt-2 text-white cursor-pointer"
          >
            {open ? (
              <TfiMenuAlt className="lg:hidden" />
            ) : (
              <RxCross1 className="lg:hidden" />
            )}
          </div>{" "}
        </div>
      </nav>
      {open ? (
        " "
      ) : (
        <div className=" bg-slate-800 flex justify-center w-1/2 pt-4 lg:hidden">
          <ul className="flex flex-col  font-medium text-sm   text-white  left-52 ">
            {links.map((item, index) => (
              <li key={index} className="w-full p-2 text-3xl mb-3">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? " text-purple-700 border-b border-purple-900 "
                        : "text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          
        </div>
      )}
    </>
  );
};

export default Navbar;
