import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Liicon from "./Liicon";

let Details = ({ position, campany, companyLink, time, address, work }) => {
    const ref= useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt:0 last:mb-0 w-[60%] mx-auto flex flex-col items-center  md:w-[80%] dark:text-light  justify-between ">
        <Liicon reference={ref}/>
      <div>
        <h3 className="capitalize font-bold  text-2xl sm:text-xl xs:text-lg   ">
          {position} &nbsp;
          <a href={companyLink} className="text-2xl md:!text-lg  text-primary capitalize">
            @{campany}
          </a>
        </h3>
        <span className="capitalize font-medium  text-dark/75 dark:text-light xs:text-sm ">
          {time} | {address}
        </span>
        <p className="font-sans w-full  md:text-sm  ">
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
    <div className="dark:text-light " id="Experience">
      <h2 className="font-bold text-6xl mb-32 w-full text-center sm:text-3xl md:text-4xl md:mt-16  md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] sm:w-full  ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" h-full w-[4px] bg-dark absolute top-0 left-9 origin-top  dark:bg-light  md:w-[2px] md:left-[30px]  xs:left-[20px] "
        />
        <ul className="w-full flex flex-col items-start  dark:text-light  justify-between ml-4 xs:ml-2 ">
          <Details
            position={"Front-end Developer"}
            campany={"Empowered Futures"}
            time="2024-Present"
            address=" Calgary, Alberta, Canada, CA "
            work="  volunteering as a front-end developer for Empowered Futures Non-Profit Organization. developing front end dynamic pages using react js, next js.  "
          />
          <Details
            position={"Web Developer, Internshipr"}
            campany={"Codevally LLP"}
            time="December 2021 - February 2022"
            address=" Ahmedabad, IND "
            work=" Built web application's front and back end utilizing JavaScript frameworks with React JS and Node JS.
            Ensured transparent communication with all clients as a web developer, conducting regular project progress
            demos and promptly addressing concerns through zoom and email, resulted in a notable 15% increase in client
            projects."
          />
          <Details
            position={"Php Web Development , Internship"}
            campany={"Cromson Technologies LLP"}
            time="January 2021 - April 2021"
            address=" Ahmedabad, IND "
            work="Resolved complex issues and bugs within PHP code for smooth functioning of dynamic pages.
            Collaborated on developing student portal, facilitating teachers to conduct online exams and monitor students
            throughout examination process. Students were given access to attempt exams using assigned IDs and
            passwords."
          />
          
        </ul>
      </div>
    </div>
  );
}
