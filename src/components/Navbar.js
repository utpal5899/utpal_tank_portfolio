import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon } from "./Icons";
import {motion} from "framer-motion"


const CustomLink = ({href, title, className = ""}) => {
    let router= useRouter();
    return(
  <Link href={href} className={`${className} relative group`}>{title}
    <span className= {`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5
    group-hover:w-full transition-[width] ease duration-300 
    ${router.asPath==href? "w-full" : "w-0"}
    `}></span>
  </Link>

  )
  
};

export default function Navbar() {
  return (
    <header className="w-full px-32 py-3 font-medium flex items-center justify-between bg-inherit  fixed top-0 z-10 ">
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
        
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
