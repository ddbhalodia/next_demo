import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'static blog page title', // here i want to set dynamic title,
  description: 'static blog page description', // here i want to set dynamic description,
}

export const dynamic = 'auto',
  dynamicParams = true;

async function getDetails() {
  const blogObj = { "pageNo": 1, "pageSize": 10, "search": '' }
  const res = await fetch(`https://www.rightgun.uk/portal/api/v1/getBlogs`, {
    method: "POST",
    body: JSON.stringify(blogObj),
  });
  return await res?.json();
}

export default async function Home() {

  const blogs = await getDetails();

  return (
    <div className="text-center mt-10 flex flex-col justify-between items-center h-56 " >
      <span className="underline font-bold text-2xl" >Blogs</span>
      {
        blogs?.blogs?.map((item: any, index: number) => {
          return (
            <Link href={`/blog/${item?.blogID}`} className="text-white p-4 border-white rounded-lg border mt-5 " key={index}>
              {item?.title}
            </Link>
          )
        })
      }
    </div >
  )
}