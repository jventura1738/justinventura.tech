// React:
import React, { useEffect, useRef, useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillYoutube,
} from "react-icons/ai";

// All icons:
const iconComponents = {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillYoutube,
};

// Social media links:
const socials = [
  {
    name: "AiFillGithub",
    link: "https://www.github.com/jventura1738",
  },
  {
    name: "AiFillLinkedin",
    link: "https://www.linkedin.com/in/justin-ventura-tech",
  },
  {
    name: "AiFillYoutube",
    link: "https://www.youtube.com",
  },
  {
    name: "AiFillMail",
    link: "https://www.gmail.com",
  },
];

// Sneaky way to dynamically render icons:
export const AiIconDynamic = ({ type }) => {
  const AiIcon = iconComponents[type];
  return (
    <AiIcon className="h-8 w-8 hover:text-purple-400 shadow-lg hover:-translate-y-1"></AiIcon>
  );
};

function Header() {
  // These will be used for the burger boi menu:
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef, setIsOpen]);

  return (
    <div className="text-white">
      <div className="flex bg-theme items-center justify-between shadow-lg px-10">
        <a href="/">
          <img
            className="h-24 .max-w-full .h-auto"
            src={require("../assets/logo.png")}
            alt="JV"
          />
        </a>
        <div ref={menuRef} className="md:flex lg:hidden xl:hidden 2xl:hidden">
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="relative group inline-flex items-center justify-center"
          >
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-black ring-0 ring-purple-400 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                  <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                  <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="sm:hidden md:hidden lg:flex xl:flex 2xl:flex md:gap-x-12">
          {socials.map((social) => (
            <li className="list-none mx-5">
              <a href={social.link} target="_blank">
                <AiIconDynamic type={social.name} />
              </a>
            </li>
          ))}
        </div>
        {
          // This is what causes the menu to pop up after clicking the burger.
          isOpen && (
            <div className="absolute right-0 mt-2 mr-6 w-20 bg-black rounded-md shadow-lg top-20">
              <div className="flex flex-col items-center justify-center">
                {socials.map((social) => (
                  <li className="list-none ">
                    <a href={social.link} target="_blank">
                      <AiIconDynamic type={social.name} />
                    </a>
                  </li>
                ))}
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Header;
