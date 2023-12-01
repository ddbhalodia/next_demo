"use client"

import Link from 'next/link';
import React, { useState } from 'react'

const BlogDetails = ({ details }: any) => {
  
  const [toggleImg, setToggleImg] = useState(false);
  
  return (
    // <div className='text-white flex flex-col font-bold justify-center items-center'>
    //   <span className='text-white' >BlogDetails</span>
    //   <div className='flex h-56 justify-center items-center ' >
    //     {toggleImg ? <img src={`${details?.image}`} alt="" className='w-40 mt-10' /> : <span className='' > Click on button to show image... </span>}
    //   </div>
    //   <div className='flex w-96 justify-between items-center' >
    //     <button className='text-purple-600 bg-yellow-100 p-5 rounded-lg hover:text-blue-600 hover:bg-pink-200 font-bold ' onClick={() => setToggleImg(!toggleImg)} >Click me</button>
    //     <Link href={'/'} className='underline ' > Back to home </Link>
    //   </div>
    // </div>
    <section className='blog-details bg-white'>
                <div className='container'>
                    <div className='row justify-content-center g-3'>
                        <div className='col-lg-12'>
                            <nav className="mt-3 mb-2">
                                <ol className="breadcrumb">                                   
                                    <li className="breadcrumb-item active" aria-current="page">Blog details</li>
                                </ol>
                            </nav>
                        </div>                      
                                    <div className='col-lg-12'>
                                        <h2 className='blog-details-title'>{details?.title}</h2>
                                        <ul className="list-group blog-details-info">
                                            <li className="list-group-item">{details?.publishedon}</li>
                                        </ul>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='blog-details-banner'>
                                            <img src={details?.image}
                                                alt="" />
                                        </div>
                                    </div>
                                    <div className='col-lg-11'>
                                        <div className='d-flex flex-column gap-4'>
                                            <div className="d-flex align-items-center">
                                                <div className="avatar flex-shrink-0">
                                                    <img src={details?.publishedbyimage} alt="" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className='avatar-name'>{details?.publishedby}</h6>
                                                    <div className="footer-recent-date-comment d-flex align-items-center gap-3">
                                                        <div className="d-flex align-items-center gap-2">                                                            
                                                            {details?.publishedon}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className='overflow-hidden'
                                                dangerouslySetInnerHTML={{ __html: details?.content }}
                                            />
                                        </div>
                                    </div>
                                    <div className='border-top' >
                                        <div className='d-flex align-items-start justify-content-start mt-2 flex w-100' >
                                            <div className='text-nowrap'>Tags :</div>
                                            <div className='ms-2 d-flex flex-wrap gap-2' >                                                
                                            </div>
                                        </div>
                                    </div>
                      
                    </div>
                </div>
            </section >
  )
}

export default BlogDetails