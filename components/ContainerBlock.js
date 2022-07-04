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
  
}