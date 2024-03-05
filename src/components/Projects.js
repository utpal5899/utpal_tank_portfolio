import Head from "next/head";
import React from "react";
import Layout from "./Layout";
import Animatedtext from "./Animatedtext";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "./Icons";
import project_1 from "../../public/images/projects/blogVista.png";
import project_2 from "../../public/images/projects/event_image.png";
import project_3 from "../../public/images/projects/memeory_game.png";
import project_4 from "../../public/images/projects/blogg.png";
import project_5 from "../../public/images/projects/memeory_game.png";
import {motion} from "framer-motion"
export default function Projects() { 
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
           
           
            <div className="col-span-4 "> <Project
              title="EventHub Web Application"
              github="https://github.com/utpal5899/EventHub-Web-Application"
              link="https://github.com/utpal5899/EventHub-Web-Application"
              type="Personal Project"
              img={project_2}
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
              img={project_4}
            /></div>
          </motion.div>
          <motion.div className="grid grid-cols-12 gap-12 mt-7 sm:flex sm:flex-wrap"
            Viewport={{once: true}}
            initial={{y:50}}
            whileInView={{y:0 , transition : {duration:0.5 , ease: "easeInOut"} }
           }>
            
           
            <div className="col-span-4"> <Project
              title="Memory Card Game"
              github="https://github.com/utpal5899/Memory_Game"
              link="https://github.com/utpal5899/Memory_Game"
              type="Conestoga College"
              img={project_3}
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
