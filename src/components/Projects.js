import Head from "next/head";
import React from "react";
import Layout from "./Layout";
import Animatedtext from "./Animatedtext";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "./Icons";
import project_1 from "../../public/images/projects/blogVista.png";
import {motion} from "framer-motion"
export default function Projects() {
//   let Featured_project = ({ type, title, summary, img, link, github }) => {
//     return (
//       <article className="w-full flex  items-center justify-between rounded-3xl  border border-solid  border-dark bg-light shadow-2xl ">
//         <Link
//           href={link}
//           className="w-1/2 cursor-pointer overflow-hidden  rounded-lg"
//           target="_blank"
//         >
//           <Image src={img} alt={title} className="w-full h-auto" />
//         </Link>

//         <div className="w-1/2 flex flex-col  items-start justify-between pl-6">
//           <span className="text-primary font-medium text-xl ">{type}</span>
//           <Link
//             className="hover:underline underline-offset-2"
//             href={link}
//             target="_blank"
//           >
//             <h2 className="my-2 w-full text-left  text-4xl  font-bold ">
//               {title}
//             </h2>
//           </Link>
//           <p className="text-dark  font-medium  mt-2">{summary}</p>
//           <div className="mt-4 items-center flex">
//             <Link href={github} className="w-10" target="_blank">
//               <GithubIcon />
//             </Link>
//             <Link
//               href={link}
//               target="_blank"
//               className=" ml-4 rounded-lg  bg-dark text-light  p-2 px-6  text-lg font-semibold"
//             >
//               VISIT project
//             </Link>
//           </div>
//         </div>
//       </article>
//     );
//   };
  let Project = ({ title, type, img, link,  github }) => {
    return (
      
        <article id="Projects" className="w-full flex  flex-col items-center justify-center rounded-2xl border border-solid xs:p-4 
         border-dark bg-light p-6 dark:border-light  relative      ">
        <Link
          href={link}
          className="w-full cursor-pointer overflow-hidden  rounded-lg "
          target="_blank"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-full flex flex-col  items-start justify-between pl-1 mt-2">
          <span className="text-primary font-medium text-xl sm:text-xl xs:text-lg  ">{type}</span>
          <Link
            className="hover:underline underline-offset-2"
            href={link}
            target="_blank"
          >
            <h2 className="my-2 w-full text-left  text-2xl  sm:text-xl xs:text-lg  font-bold ">
              {title}
            </h2>
          </Link> 
          <div className=" w-full flex  justify-between  items-center mt-2  ">
          <Link
              href={link}
              target="_blank"
              className=" ml-2 text-lg font-semibold   sm:text-[16px] underline"
            >
              VISIT
            </Link>
            <Link href={github} className="w-10 md:w-8" target="_blank">
              <GithubIcon />
            </Link>
         
          </div>
        </div>
      </article>
    );
  };
  return (
    <Layout>
    <>
      <main className="w-full mb-12  lg:mt-10 flex flex-col  items-center justify-center  ">
         
          <Animatedtext className="mb-12  lg:!text-7xl md:!text-4xl  sm:!text-3xl  xs:!text-1xl   md: mt-9" text={"Personal projects "} />
          <motion.div className="grid grid-cols-12 gap-12 sm:flex  sm:flex-wrap"
         Viewport={{once: true}}
          initial={{y:100}}
          whileInView={{y:0 , transition : {duration:0.5 , ease: "easeInOut"} }
         }

          >
            {/* <div className="col-span-12">
              <Featured_project
                title="Crypto Screener Application"
                summary="
A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                github="/"
                link="/"
                type="feature project"
                img={project_1}
              />
            </div> */}
           
            <div className="col-span-4 "> <Project
              title="EventHub Web Application"
              github="https://github.com/utpal5899/EventHub-Web-Application"
              link="https://github.com/utpal5899/EventHub-Web-Application"
              type="Conestoga College "
              img={project_1}
            /></div> 
            <div className="col-span-4"> <Project
              title="Drive Test Application"
              github="https://github.com/utpal5899/Drive-Test-application"
              link="https://github.com/utpal5899/Drive-Test-application"
              type="Conestoga College "
              img={project_1}
            /></div>
            <div className="col-span-4"> <Project
              title="Blog Vista Applicatio"
              github="https://github.com/utpal5899/Drive-Test-application"
              link="https://github.com/utpal5899/Drive-Test-application"
              type="Personal Project"
              img={project_1}
            /></div>
          </motion.div>
          <motion.div className="grid grid-cols-12 gap-12 mt-7 sm:flex sm:flex-wrap"
            Viewport={{once: true}}
            initial={{y:50}}
            whileInView={{y:0 , transition : {duration:0.5 , ease: "easeInOut"} }
           }>
            {/* <div className="col-span-12">
              <Featured_project
                title="Crypto Screener Application"
                summary="
A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                github="/"
                link="/"
                type="feature project"
                img={project_1}
              />
            </div> */}
           
            <div className="col-span-4"> <Project
              title="Memory Card Game"
              github="https://github.com/utpal5899/Memory_Game"
              link="https://github.com/utpal5899/Memory_Game"
              type="Conestoga College"
              img={project_1}
            /></div> 
            <div className="col-span-4"> <Project
              title="E-Commerce-AndroidApp"
              github="https://github.com/utpal5899/ecommerce_android_app"
              link="https://github.com/utpal5899/ecommerce_android_app"
              type="Conestoga College"
              img={project_1}
            /></div>
            </motion.div>
         
      </main>
    </>
    </Layout>
  );
}
