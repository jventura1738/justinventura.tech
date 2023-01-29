// React:
import React, { useEffect, useRef, useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillYoutube,
} from "react-icons/ai";
import { RiSunLine, RiSunFill } from "react-icons/ri";
import StickyNav from "react-sticky-nav";

// All icons:
const iconComponents = {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillYoutube,
  RiSunLine,
  RiSunFill,
};

const navIcons = [
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
  {
    name: "RiSunLine",
    link: "",
  },
  {
    name: "RiSunFill",
    link: "",
  },
];

function Header({ theme, toggleTheme, themeStyles }) {
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

  // Sneaky way to dynamically render icons:
  const MyIconDynamic = ({ type }) => {
    let MyIcon = iconComponents[type];
    return (
      <MyIcon
        className={`h-9 w-9 hover:${themeStyles[theme].headerHover} shadow-lg hover:-translate-y-1 duration-300`}
      />
    );
  };

  return (
    <StickyNav className="overflow-visible z-10">
      <nav className="text-white">
        <div className="flex bg-theme/50 items-center justify-between shadow-purple-600/25 shadow-xl px-10 py-6">
          <a href="/">
            <h1
              className={`text-2xl hover:${themeStyles[theme].headerHover} duration-300`}
            >
              Justin Ventura
            </h1>
          </a>
          <div ref={menuRef} className="md:flex lg:hidden xl:hidden 2xl:hidden">
            <button
              type="button"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="relative group inline-flex items-center justify-center"
            >
              <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-black/50 ring-0 ring-purple-400 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div
                    className={` ${
                      !isOpen
                        ? "bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:transition-x-10"
                        : ""
                    }`}
                  ></div>
                  <div
                    className={` ${
                      !isOpen
                        ? "bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:transition-x-10 delay-75"
                        : ""
                    }`}
                  ></div>
                  <div
                    className={` ${
                      !isOpen
                        ? "bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:transition-x-10 delay-150"
                        : ""
                    }`}
                  ></div>
                  <div
                    className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${
                      isOpen ? "group-focus:translate-x-0" : ""
                    } flex w-0 group-focus:w-12`}
                  >
                    <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                    <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="sm:hidden md:hidden lg:flex xl:flex 2xl:flex md:gap-x-12">
            {navIcons.slice(0, -2).map((icon) => (
              <li key={icon.name} className="list-none mx-5">
                <a href={icon.link} target="_blank">
                  <MyIconDynamic type={icon.name} />
                </a>
              </li>
            ))}
            <li
              key={navIcons[navIcons.length - (theme === "light" ? 1 : 2)].name}
              className="list-none mx-5"
            >
              <button
                onClick={() => {
                  toggleTheme();
                }}
              >
                <MyIconDynamic
                  type={
                    navIcons[navIcons.length - (theme === "light" ? 1 : 2)].name
                  }
                />
              </button>
            </li>
          </div>
          {
            // This is what causes the menu to pop up after clicking the burger.
            isOpen && (
              <div className="absolute right-0 mt-2 mr-6 w-20 bg-black/50 rounded-md shadow-lg top-20">
                <div className="flex flex-col items-center justify-center">
                  {navIcons.slice(0, -2).map((icon) => (
                    <li key={icon.link} className="list-none py-3">
                      <a href={icon.link} target="_blank">
                        <MyIconDynamic type={icon.name} />
                      </a>
                    </li>
                  ))}
                  <li
                    key={
                      navIcons[navIcons.length - (theme === "light" ? 1 : 2)]
                        .name
                    }
                    className="list-none mx-5"
                  >
                    <button
                      onClick={() => {
                        toggleTheme();
                      }}
                    >
                      <MyIconDynamic
                        type={
                          navIcons[
                            navIcons.length - (theme === "light" ? 1 : 2)
                          ].name
                        }
                      />
                    </button>
                  </li>
                </div>
              </div>
            )
          }
        </div>
      </nav>
    </StickyNav>
  );
}

export default Header;
