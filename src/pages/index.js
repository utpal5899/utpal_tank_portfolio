import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profileimg from "../../public/images/profile/developer-pic-1.png";
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
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profileimg}
                alt="utpal tank"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <Animatedtext
                className="!text-6xl !text-left"
                text="Turning Vision Into Reality With Code And Design."
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  download={true}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  target="_blank"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="utpaltak1999ca@gmail.com" className=" ml-4 text-lg font-medium  capitalize text-dark underline" target="_blank">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
      <HireMe/>
      <div className="absolute bottom-8 right-8 inline-block w-24">
        <Image src={lightbulb} alt="random_image" className="w-full h-auto"/>
      </div>
    </>
  );
}
