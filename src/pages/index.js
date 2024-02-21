import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profileimg from "../../public/images/profile/profile.imgs.png";
import Animatedtext from "@/components/Animatedtext";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

import lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main   id="Home" className="flex items-center mt-7  text-dark w-full min-h-screen    dark:text-light ">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col lg:self-center lg:text-center">
  <div className="w-full lg:w-80 flex justify-center">
    <Image
      src={profileimg}
      alt="utpal tank"
      className="w-96 h-96 lg:h-96 lg:w-96 md:w-80 md:h-80 rounded-full"
  priority
      style={{ borderRadius: '100%' }}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
    />
  </div>
  <div className="w-full ml-9 flex flex-col items-center self-center lg:w-full sm:ml-1 lg:text-center">
    <Animatedtext
      className="!text-5xl lg:!text-!6xl md:!text-2xl self-center content-center origin-center lg:text-center"
      text="HELLO I AM UTPAL."
    />
    <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
     
Experienced Full-Stack Web Developer proficient in JavaScript frameworks like React, Node.js, Next.js, and React Native. Skilled in responsive design and dynamic web page creation, analytical thinking, and interaction design using Figma and XD. Also experienced in Android app development with Kotlin and Java, along with using Selenium for website security automation.</p>
    <div className="flex items-center self-center mt-4 lg:self-center">
      <Link
        href="/"
        download={true}
        className="flex items-center bg-dark dark:text-dark dark:bg-light text-light p-2.5 px-6 rounded-lg text-lg font-semibold md:text-sm sm:text-xs hover:dark:bg-dark hover:dark:border-light hover:dark:text-light hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
        target="_blank"
      >
        Resume <LinkArrow className={"w-6 ml-1"} />
      </Link>
      <Link
        href="mailto:utpaltak1999ca@gmail.com"
        className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-sm sm:text-xs"
        target="_blank"
      >
        Contact
      </Link>
    </div>
  </div>
</div>

        </Layout>
      </main>
      {/* <HireMe   /> */}
      {/* <div className="absolute bottom-8 right-8 inline-block w-24 ">
        <Image src={lightbulb} alt="random_image" className="w-full h-auto" />
      </div> */}
    </>
  );
}
