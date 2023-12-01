"use client"
import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';

// export const metadata: Metadata = {
//   title: '',
//   description: '',
// }

export default function Home() {

  const [data, setData] = useState<any>();

  useEffect(() => {

    getBlogDetails();

  }, [])

  const getBlogDetails = async () => {
    fetch(`https://www.rightgun.uk/portal/api/v1/blogDetails`, {
      method: "GET",
      headers: {
        P_BLOG_ID: 'purchase-second-hand-guns-online'
      }
    })
      .then((result) => {
        result.json().then((response) => {
          console.log("response", response)
          setData(response?.items[0]?.title)
        });
      })
      .catch((error) => {
        console.log("error", error)
      });
  }
  console.log("data", data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={'/blog'} className='text-purple-600 bg-yellow-100 p-5 rounded-lg hover:text-blue-600 hover:bg-pink-200 font-bold'>Blog</Link>
    </main>
  )
}
