import React, { useEffect, useState } from "react";
import Logo from "../../assets/icons/logo.svg";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.addEventListener("scroll", handleScroll);
      };
    };
  });

  const navItems = [
    { link: "Home", path: "Home" },
    { link: "Service", path: "Service" },
    { link: "About", path: "About" },
    { link: "Procut", path: "Product" },
    { link: "FAQ", path: "FAQ" },
  ];

  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border bg-white duration-300"
            : " "
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            {" "}
            <img
              src={Logo}
              alt="Logo"
              className="w-10 inline-block items-center"
            />
            <span className="text-[#263228]">ElevateWork</span>
          </a>

          <ul className=" md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className=" text-neutralDGrey"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          {/* menu btn for large device */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-neutralDGrey"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neitralGrey900">
              Sign up
            </button>
          </div>

          {/* menu btn for only mobile device */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralGrey900 focus:outline-none focus:text-grey-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-neutralDGrey"></FaXmark>
              ) : (
                <FaBars className="h-6 w-6 text-neutralDGrey"></FaBars>
              )}
            </button>
          </div>
        </div>
        {/* nav items for movile device */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <li key={path}>
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className=" text-white"
              >
                {link}
              </Link>
            </li>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
