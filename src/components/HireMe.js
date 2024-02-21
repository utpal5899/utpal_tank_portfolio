import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'
export default function HireMe() {
  return (
    <div className='fixed  left-4 bottom-4 flex  items-center justify-center overflow-hidden z-50 md:right-8 md:left-auto md:top-0 md:bottom-auto  lg:hidden xl:absolute  '>
<div className='w-48 h-auto  flex items-center justify-center relative md:w-24 sm:hidden '
>

<CircularText className={'fill-dark animate-spin-slow dark:fill-light'} />
<Link href={"utpaltak1999ca@gmail.com"} className='flex
 items-center justify-center  absolute left-1/2  
 top-1/2 -translate-x-1/2  -translate-y-1/2 bg-dark 
  text-light shadow-md border border-solid 
   border-dark w-20 h-20  rounded-full font-semibold 
   md:w-12 md:h-12 md:text-[10px] 
    hover:bg-light hover:text-dark    hover:dark:border-light dark:text-dark dark:bg-light   hover:dark:text-light  hover:dark:bg-dark '>Hire ME</Link>
</div>
    </div>
  )
}
