import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

export default function Footer() {
  return (
   <footer className='w-full  border-t-2  border-solid border-dark  font-medium text-lg dark:text-light dark:border-light  '>
    <Layout className=' py-8 flex  items-start justify-between'>
<span  >{new Date().getFullYear() } @all rights Reserved. </span>
<div>
Build with &hearts; <Link href="/" className=' underline underline-offset-2'>Utpal tank</Link> 
</div>
<Link href='/' className=' underline underline-offset-2'> say hello </Link>
    </Layout>

   </footer>
  )
}
