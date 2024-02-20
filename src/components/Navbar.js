import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import {motion} from "framer-motion"
import useThemeSwitcher from "./hooks/useThemeSwitcher";


const CustomLink = ({href, title, className = ""}) => {
    let router= useRouter();
    return(
  <Link href={href} className={`${className} relative group`}>{title}
    <span className= {`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
    group-hover:w-full transition-[width] ease duration-300  dark:bg-light
    ${router.asPath==href? "w-full" : "w-0"}
    `}></span>
  </Link>

  )
  
};

export default function Navbar() {
  
  const [mode, setmode] = useThemeSwitcher();
  const [isopen,setisopen]=useState(false);

  let handlerClick=()=>{
    setisopen(!isopen)
  }
  return (
    <header className="w-full px-32 py-3 font-medium flex items-center justify-between bg-inherit  fixed top-0 z-10 dark:text-light ">
      <button className=" flex-col justify-center items-center hidden lg:flex " onClick={handlerClick}>
        <span className={` bg-dark dark:bg-light   transition-all duration-300 ease-out block h-0.5 w-6  rounded-sm ${isopen?"rotate-45  translate-y-1":"-translate-y-0.5"}  `}></span>
        <span className={` bg-dark dark:bg-light   transition-all duration-300 ease-out block h-0.5 w-6  rounded-sm  my-0.5 ${isopen ? 'opacity-0' : 'opacity-1'} `}></span>
        <span className={` bg-dark dark:bg-light    transition-all duration-300 ease-out block h-0.5 w-6  rounded-sm ${isopen?"-rotate-45  -translate-y-1":"translate-y-0.5"} `}></span>
      </button>

    <div className="w-full  lg:hidden flex  justify-between items-center ">


      <nav>
        <CustomLink href="/" title="Home" className="mr-4"  /> 
        <CustomLink href="/about"  title="About" className="mx-4" />
        <CustomLink href="/projects"  title="Projects"  className="mx-4" />
        <CustomLink href="/articles"  title="Articles" className="ml-4"   />
    
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="/"
        whileHover={{y: -2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3"
        ><GithubIcon/></motion.a>
        <motion.a href="/about"
          whileHover={{y: -2}}
          whileTap={{scale:0.9}}
          className="w-6 ml-3"
        ><LinkedInIcon/></motion.a>
        <button className="ml-3 flex items-center justify-center rounded-full  p-1  dark:text-dark bg-dark text-light dark:bg-light " onClick={()=> setmode( mode=== "light" ? "dark" : "light" ) } >
          {mode==="dark" ? <SunIcon className="fill-dark" /> : <MoonIcon  className="fill-dark"/>}



        </button>
        
      </nav>
      </div>


    {/* mobile nav box */}


    <div className="w-full  lg:hidden flex  justify-between items-center ">


      <nav>
        <CustomLink href="/" title="Home" className="mr-4"  /> 
        <CustomLink href="/about"  title="About" className="mx-4" />
        <CustomLink href="/projects"  title="Projects"  className="mx-4" />
        <CustomLink href="/articles"  title="Articles" className="ml-4"   />
    
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="/"
        whileHover={{y: -2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-3"
        ><GithubIcon/></motion.a>
        <motion.a href="/about"
          whileHover={{y: -2}}
          whileTap={{scale:0.9}}
          className="w-6 ml-3"
        ><LinkedInIcon/></motion.a>
        <button className="ml-3 flex items-center justify-center rounded-full  p-1  dark:text-dark bg-dark text-light dark:bg-light " onClick={()=> setmode( mode=== "light" ? "dark" : "light" ) } >
          {mode==="dark" ? <SunIcon className="fill-dark" /> : <MoonIcon  className="fill-dark"/>}



        </button>
        
      </nav>
      </div>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>


    </header>
  );
}
