import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";


const scrollToSection = (id) => { 
  const targetHeading = document.getElementById("Projects");

console.log(targetHeading)
  // Calculate the offset to leave some space above the heading
  const offset = 1000; // Adjust this value according to your needs

  // Scroll to the target headi ]]
  console.log(targetHeading.offsetTop - offset)
  const element = document.getElementById(id);
  if (element) {
 
    element.scrollIntoView({ 
     block: "start",
      behavior: 'smooth' });
  }
};


const CustomLink = ({ href, title, className = "" }) => {
  let router = useRouter();
  return (
    <a href={href} className={`${className} relative group`} onClick={(e) => { e.preventDefault(); scrollToSection(href.slice(1)); console.log(href.slice(1))} } >
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
    group-hover:w-full transition-[width] ease duration-300  dark:bg-light
    ${router.asPath == href ? "w-full" : "w-0"}
    `}
      ></span>
    </a>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  let router = useRouter();
  const handleclick = (href) => {
    toggle();
    scrollToSection(href.slice(1))
    
  };
  return (
    <button
      href={href}
      className={`${className}  relative group text-light dark:text-dark my-2`}
      onClick={()=>handleclick(href)}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-0 absolute left-0 -bottom-0.5
  group-hover:w-full transition-[width] ease duration-300  dark:bg-dark bg-light
  ${router.asPath == href ? "w-full" : "w-0"}
  `}
      ></span>
    </button>
  );
};

export default function Navbar() {
  const [mode, setmode] = useThemeSwitcher();
  const [isopen, setisopen] = useState(false);

  let handlerClick = () => {
    setisopen(!isopen);
  };
  return (
    <header className="w-full px-32 py-5 font-medium flex items-center justify-between bg-inherit  fixed top-0 z-10 dark:text-light lg:px-16  md:px-12 sm:px-8  ">
      <button
        className=" flex-col justify-center items-center hidden lg:flex "
        onClick={handlerClick}
      >
        <span
          className={` bg-dark dark:bg-light   transition-all duration-300 ease-out block h-0.5 w-6  rounded-sm ${
            isopen ? "rotate-45  translate-y-1" : "-translate-y-0.5"
          }  `}
        ></span>
        <span
          className={` bg-dark dark:bg-light   transition-all duration-300 ease-out block h-0.5 w-6  rounded-sm  my-0.5 ${
            isopen ? "opacity-0" : "opacity-1"
          } `}
        ></span>
        <span
          className={` bg-dark dark:bg-light    transition-all duration-300 ease-out block h-0.5 w-6  rounded-sm ${
            isopen ? "-rotate-45  -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>

      <div className="w-full  lg:hidden flex  justify-between items-center ">
        <nav>
          <CustomLink href="/Home" title="Home" className="mr-4"  />
          <CustomLink href="/Experience" title="Experience" className="mx-4"  />
          <CustomLink href="/Projects" title="Projects" className="mx-4"   />
          <CustomLink href="/About" title="About-ME" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/utpal5899"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/utpal-tank-211347194"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <button
            className="ml-3 flex items-center justify-center rounded-full  p-1  dark:text-dark bg-dark text-light dark:bg-light "
            onClick={() => setmode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {/* mobile nav box */}

      {isopen ? (
        <motion.div
          className="min-w-[70vw] flex justify-between  flex-col items-center  z-30  fixed top-1/2 left-1/2  -translate-x-1/2  -translate-y-1/2  bg-dark/90 
  dark:bg-light/75  rounded-lg  backdrop-blur-md py-32  "

  initial={{scale:0, opacity:0,  x:"-50%", y:"-50%" }} 
  animate={{opacity:1, scale:1}}

        >
          <nav className="flex flex-col justify-center items-center ">
            <CustomMobileLink
              href="/Home"
              title="Home"
              className=""
              toggle={handlerClick}
            />
            <CustomMobileLink
              href="/Experience"
              title="Experience"
              className=""
              toggle={handlerClick}
            />
            <CustomMobileLink
              href="/Projects"
              title="Projects"
              className=""
              toggle={handlerClick}
            />
            <CustomMobileLink
              href="/About"
              title="About-ME"
              className=""
              toggle={handlerClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2 ">
            <motion.a
              href="/"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
           
            <motion.a
              href="/about"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
          
            <button
              className="ml-3 flex items-center justify-center rounded-full  p-1  dark:text-dark bg-dark text-light dark:bg-light "
              onClick={() => setmode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
