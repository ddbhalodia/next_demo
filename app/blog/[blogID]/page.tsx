import BlogDetails from '@/app/component/BlogDetails';
import React from 'react'



async function getDetails(blogID: string) {  
  const res = await
    fetch(`https://www.rightgun.uk/portal/api/v1/blogDetails`, {
      method: "GET",
      headers: {
        P_BLOG_ID: `${blogID}`
      }
    });
  return await res?.json();
}

export default async function details({ params }: { params: { blogID: string } }) {

  const detail = await getDetails(params?.blogID);  
  
  return (
    <div className="text-center mt-10 flex flex-col justify-between items-center h-56 " >
      <title>{detail?.items[0]?.title}</title>
      <meta name="title" content={`${detail?.items[0]?.title}`} />
      <BlogDetails details={detail?.items[0]} />      
    </div >
  )
}
