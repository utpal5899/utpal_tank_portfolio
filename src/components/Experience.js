import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Liicon from "./Liicon";

let Details = ({ position, campany, companyLink, time, address, work }) => {
    const ref= useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt:0 last:mb-0 w-[60%] mx-auto flex flex-col items-center   justify-between ">
        <Liicon reference={ref}/>
      <div>
        <h3 className="capitalize font-bold  text-2xl ">
          {position} &nbsp;
          <a href={companyLink} className="text-primary capitalize">
            @{campany}
          </a>
        </h3>
        <span className="">
          {time} | {address}
        </span>
        <p className="font-sans w-full capitalize font-medium text-dark/75  ">
          {work}
        </p>
      </div>
    </li>
  );
};

export default function Experience() {
  const ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-40">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" h-full w-[4px] bg-dark absolute top-0 left-9 origin-top "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={"Software Engineer"}
            campany={"Google"}
            time="2022-Present"
            address=" Mountain View, CA "
            work=" Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
          <Details
            position={"Software Engineer"}
            campany={"Google"}
            time="2022-Present"
            address=" Mountain View, CA "
            work=" Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
          <Details
            position={"Software Engineer"}
            campany={"Google"}
            time="2022-Present"
            address=" Mountain View, CA "
            work=" Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
          <Details
            position={"Software Engineer"}
            campany={"Google"}
            time="2022-Present"
            address=" Mountain View, CA "
            work=" Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
          <Details
            position={"Software Engineer"}
            campany={"Google"}
            time="2022-Present"
            address=" Mountain View, CA "
            work=" Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
          <Details
            position={"Software Engineer"}
            campany={"Google"}
            time="2022-Present"
            address=" Mountain View, CA "
            work=" Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
}
