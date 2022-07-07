import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ContainerBlock({ children, ...customMeta }){
  const router = useRouter();

  const meta = {
    title: "Eden Brekke - Developer, Data Fiend, Scientist and Craftswoman",
    description: "I'm a Software Developer with a background and passion for science, and it is my goal to combine my love for science and tech for the advancement of medicine.",
    image: '../assets/eden-medium-size.png',
    type: 'website',
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name = 'robots' content = 'follow, index' />
        <meta content = {meta.description} name = "description" />
        <meta
          property="og:url"
          content={`https://localhost:3000${router.asPath}`}
          />
        <link 
        rel = 'cannonical'
        href= {`https://localhost:3000${router.asPath}`}
        />
        <meta property = "og:title" content ={meta.title} />
        <meta property = "og:description" content ={meta.description} />
        <meta property = "og:site_name" content = "Eden Brekke" />
        <meta property = "og:image" content ={meta.image} />
        <meta property = "og:type" content ={meta.type} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className = "bg-[#F0E6EF] dark:bg-[#050404] w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}