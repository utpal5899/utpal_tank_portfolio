import React from 'react'
import {motion,useScroll} from 'framer-motion'
export default function Liicon({reference}) {

    let { scrollYProgress } = useScroll({
      target: reference,
      offset: ["center end", "center center"],
    });
  return (

   <figure className='absolute left-0 stroke-dark  dark:stroke-light '>
    <svg className='-rotate-90  dark:fill-primaryDark ' width="75" height="75" viewBox='0 0 100 100'>
        <circle cx="75" cy="50" r="20" className='stroke-primary  dark:stroke-primaryDark fill-none '   />
        <motion.circle cx="75" cy="50" r="20" className=" stroke-[5px] dark:fill-dark fill-light " 
        style={{pathLength: scrollYProgress }}
        
        />
        <circle cx="75" cy="50" r="10" className=' animate-pulse stroke-1 stroke-none  dark:fill-primaryDark  fill-primary'  />
     
    </svg>
   </figure>
  )
}
