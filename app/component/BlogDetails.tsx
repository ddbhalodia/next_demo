"use client"

import Link from 'next/link';
import React, { useState } from 'react'

const BlogDetails = ({ details }: any) => {
  
  const [toggleImg, setToggleImg] = useState(false);
  
  return (
    <div className='text-white flex flex-col font-bold justify-center items-center'>
      <span className='text-white' >BlogDetails</span>
      <div className='flex h-56 justify-center items-center ' >
        {toggleImg ? <img src={`${details?.image}`} alt="" className='w-40 mt-10' /> : <span className='' > Click on button to show image... </span>}
      </div>
      <div className='flex w-96 justify-between items-center' >
        <button className='text-purple-600 bg-yellow-100 p-5 rounded-lg hover:text-blue-600 hover:bg-pink-200 font-bold ' onClick={() => setToggleImg(!toggleImg)} >Click me</button>
        <Link href={'/'} className='underline ' > Back to home </Link>
      </div>
    </div>
  )
}

export default BlogDetails