
// 'use client'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
// import Home from './page';
// import Link from 'next/link';
// import Head from 'next/head';
// import Image from 'next/image';
// import Router from 'next/router';
import  Header  from './header/page.js';
import Footer from './footer/page.js'

// import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  // display: 'swap',
  variable: '--font-poppins',
  weight: ['300']
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
 {

  
  
  return(
    <html lang="en">
      <head>
        <title>Rchauhan - Transforms Dukaan to Brand.</title>
        <meta name="description" content="Transform your online presence with expert web development, creative graphic design, and engaging content writing services. Explore the world with Rchauhan." />
        <meta name="keywords" content="web development, graphic design, content creation, digital services, social media optimization, social media management, digital marketing, business growth, Rahul Chauhan, rchauhan, innovation, creativity, branding" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.rchauhan.in" />
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="www.rchauhan.in"/>
        <meta property="og:title" content="Rchauhan - Crafting Digital Excellence"/>
        <meta property="og:description" content="Join Rahul Chauhan's journey at Rchauhan, a hub of innovation in web development, graphic design, and content creation. Your digital success begins here."/>
        <meta property="og:image" content="/logo.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:url" content="www.rchauhan.in"/>
        <meta name="twitter:title" content="Rchauhan - Crafting Digital Excellence"/>
        <meta name="twitter:description" content="Join Rahul Chauhan's journey at Rchauhan, a hub of innovation in web development, graphic design, and content creation. Your digital success begins here."/>
        <meta name="twitter:image" content="/logo.png"/>

        </head>
      <body className={poppins.className}>
      <Header/>{children}<Footer/>


        </body>
    </html>
  )
}
