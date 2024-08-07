"use client"
// import { poppins } from 'next/font/google'
import { link } from 'fs'
import Head from "next/head"
import Link from 'next/link'
import CallNowButton from '../app/Call/page'


export default function Home() {

  
 
  return (
    <main>

<Head>
          {/* <link rel="shortcut icon" href={favicon} /> */}
          <link rel="shortcut icon" href="favicon.ico" />
        </Head>
    
      
    <div className="relative w-full lg:w-auto lg:place-content-center">
      
      <div className="relative isolate z-0   px-6 md:mt-[20px] md:pt-[-50px] pt-[-100px] lg:px-8">
        <div className="relative mx-auto  py-[50px]">
          <div className="absolute inset-x-0 -top-[0rem] -z-10  transform-gpu overflow-hidden blur-3xl md:-top-[0rem]">
            <svg
              className="mt-[50px] left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className=" md:mt-[-20px] mt-[-40px] text-center ">
          <p className="mt-8 text-4xl font-bold tracking-normal text-grey-300 leading-normal  lg:text-[80px]">
          We are Creative Tech Solutions Company.<br/>
          <span className='text-[17px] md:text-5xl'>Transforming Dukaans to Brands.</span>
        </p>
        <p className="mt-8 text-[15px] md:text-[25px] md:w-auto text-gray-300 leading-loose">
        Fueling online success, one click at a time supercharge your business growth with our winning <Link href='./services'>web solutions.</Link>
        </p>
        
            <CallNowButton/>
            
          </div>
        </div>
      </div>
    </div>
  
    <div id='services' className="croll-smooth focus:scroll-auto mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
    <div className="mx-auto max-w-xl text-center">
      <div className="mx-auto inline-flex rounded-full bg-mypurple px-4 py-1.5">
        <p className="text-xs font-semibold uppercase tracking-widest text-white">
          What we have for you...
        </p>
      </div>
      <h2 className="mt-6 text-3xl font-bold leading-tight text-grey-100 sm:text-4xl lg:text-5xl">
        Our Exclusive Services
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-200">
      From design to deployment, we have got your <Link className='font-bold' href='./about'>web presence</Link> covered—your all-in-one solution for digital excellence.
      </p>
    </div>
    <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
      <div className='hover:border-white  hover:bg-mypurple/20  border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className=" mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <img src="/webdevelopers.gif" alt="web development" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">Web Development</h3>
        <p className="mt-8 text-sm text-gray-200">
        Elevate your online presence with our expert <Link className='font-bold' href='./services'>web development services</Link>—where innovation meets impeccable design.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <img src="/gd.gif" alt="Graphcs designing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">
          Graphics Designing
        </h3>
        <p className="mt-8 text-sm text-gray-200">
        Ignite your brand with our <Link className='font-bold' href='./services'>graphic design services</Link> magic—where creativity meets visual brilliance.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <img src="/cw.gif" alt="content writing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">
          Content Writing
        </h3>
        <p className="mt-8 text-sm text-gray-200">
        Unleash the power of words with our <Link className='font-bold' href='./services'>content writing services</Link>—where every sentence tells your story and captivates your audience.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <img src="/dm.gif" alt="Digital Marketing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">Digital Marketing</h3>
        <p className="mt-8 text-sm text-gray-200">
        Elevate your brand with our expert <Link className='font-bold' href='./services'>digital marketing services</Link> – where visibility meets success in the online landscape.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <img src="/ve.gif" alt="Digital Marketing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">Professional Video Editing</h3>
        <p className="mt-8 text-sm text-gray-200">
        Transforming moments into cinematic magic—our <Link className='font-bold' href='./services'>video editing services</Link> make your story unforgettable.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <img src="/seo.gif" alt="Digital Marketing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">SEO </h3>
        <p className="mt-8 text-sm text-gray-200">
        Boost your online presence with our expert <Link className='font-bold' href='./services'>SEO services</Link>—because being found is the first step to being remembered.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <img src="/insta.png" alt="Digital Marketing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">SMM </h3>
        <p className="mt-8 text-sm text-gray-200">
        Elevate your brand online charisma with our <Link className='font-bold' href='./services'>Social Media Marketing Services</Link>– where engagement meets strategy, and your story takes center stage.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <img src="/smo.png" alt="Digital Marketing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">SMO </h3>
        <p className=" mt-8 text-sm text-gray-200">
        Elevate your online presence with our <Link className='font-bold' href='./services'>Social Media Optimization Services</Link>— where visibility meets engagement, and your brand becomes the talk of the digital town!
        </p>
      </div>
    </div>
  </div>    

  <section id='pricing' className="relative w-full overflow-hidden bg-transparent pb-14">
  <div className='lg:text-5xl md:text-5xl text-3xl md:mb-[80px] lg:mb-[80px] mb-[40px] mt-[40px] font-bold mx-auto max-w-auto text-center place-content-center'>Our Exclusive Plans</div>
      <div className="relative  z-10 mx-auto max-w-7xl px-4">
        <div className="mx-auto md:max-w-4xl">
          <div className="-m-5 flex flex-wrap">
            <div className="w-full p-5 md:w-1/2">
              <div className="rounded-md border border-mypurple hover:border-white bg-transparent hover:bg-mypurple/20 bg-opacity-10">
                <div className=" border-b">
                  <div className="px-9 py-7">
                    <h3 className="mb-3 text-2xl font-extrabold leading-snug text-white md:stroke-black">Basic Website</h3>
                    <p className="font-medium leading-relaxed text-white/50 ">
                      Basic plan is for Small website where we can showcase our business or anything else.Great choice for Bloggers, Personal Portfolios, Awareness, NGOs etc.
                    </p>
                  </div>
                </div>
                <div className="px-9 pb-9 pt-8">
                  <p className="mb-6 font-extrabold leading-relaxed text-white">
                    Features included:
                  </p>
                  <ul className="mb-11">
                    <li className="mb-4 flex items-center">
                      {/* <CheckCircle className="mr-2" size={16} /> */}
                      <p className="font-normal leading-normal">6 Pages</p>
                    </li>
                    <li className="mb-4 flex items-center">
                      {/* <CheckCircle className="mr-2" size={16} /> */}
                      <p className="font-normal leading-normal">2 Months Free Maintainance</p>
                    </li>
                    <li className="flex items-center">
                      {/* <CheckCircle className="mr-2" size={16} /> */}
                      <p className="font-normal leading-normal">Premium Support</p>
                    </li>
                  </ul>
                  <p className="mb-6 text-lg font-semibold leading-normal text-white/70">
                    <span className=''>Available at</span>
                    <span className="ml-2 text-gray-100 text-2xl">Affordable Prices</span>
                  </p>
                  <div className="md:inline-block">
                    <button
                      type="button"
                      className="rounded-md bg-mypurple px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-mypurple/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <Link href="/contact">Start your free consultation</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-5 md:w-1/2">
              <div className="rounded-md border border-mypurple hover:border-white bg-transparent hover:bg-mypurple/20 bg-opacity-10">
                <div className=" border-b">
                  <div className="px-9 py-7">
                    <h3 className="mb-3 text-2xl font-extrabold leading-snug text-white md:stroke-black">E-Commerce Website</h3>
                    <p className="font-medium leading-relaxed text-white/50 ">
                      E-Commerce plan is for those who wants to sell their products or services Online.Great choice for Small Business, Online sellers, Large business, Startups etc.
                    </p>
                  </div>
                </div>
                <div className="px-9 pb-9 pt-8">
                  <p className="mb-6 font-extrabold leading-relaxed text-white">
                    Features included:
                  </p>
                  <ul className="mb-11">
                    <li className="mb-4 flex items-center">
                      {/* <CheckCircle className="mr-2" size={16} /> */}
                      <p className="font-normal leading-normal">25 Pages</p>
                    </li>
                    <li className="mb-4 flex items-center">
                      {/* <CheckCircle className="mr-2" size={16} /> */}
                      <p className="font-normal leading-normal">6 Months Free Maintainance</p>
                    </li>
                    <li className="flex items-center">
                      {/* <CheckCircle className="mr-2" size={16} /> */}
                      <p className="font-normal leading-normal">Premium+ Support</p>
                    </li>
                  </ul>
                  <p className="mb-6 text-lg font-semibold leading-normal text-white/70">
                    <span className=''>Available at</span>
                    <span className="ml-2 text-gray-100 text-2xl">Affordable Prices</span>
                  </p>
                  <div className="md:inline-block">
                    <button
                      type="button"
                      className="rounded-md bg-mypurple px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-mypurple/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <Link href="/contact">Start your free consultation</Link>
                      
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>  

  <div className="mt-[100px] md:mt-[50px] mx-auto max-w-xl text-center">
      <div className="mx-auto inline-flex rounded-full bg-mypurple px-4 py-1.5">
        <p className="text-xs font-semibold uppercase tracking-widest text-white">
          Why choose us...?
        </p>
      </div>
      </div>
  <h2 className="text-center mt-6 text-3xl font-bold leading-tight text-grey-100 sm:text-4xl lg:text-5xl">
        I Love to share my achievements
      </h2>
  <div className=" py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:flex animate-pulse lg:grid-cols-3">
    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-grey-300">Existing Clients</dt>
        <p className="order-first text-3xl font-semibold tracking-tight text-mypurple sm:text-5xl">110+</p>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-grey-300">Projects Completed</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-mypurple sm:text-5xl">389+</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-grey-300">Cups of Chai</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-mypurple sm:text-5xl">1000+</dd>
      </div>
    </dl>
  </div>
</div>

<section className="px-2 md:mt-[-80px] py-10 md:px-0">
<div className="mt-[10px] md:mt-[50px] mx-auto max-w-xl text-center">
      <div className="mx-auto inline-flex rounded-full bg-mypurple px-4 py-1.5">
        <p className="text-xs md:text-[10px] font-semibold uppercase tracking-widest text-white">
          Reviews...
        </p>
      </div>
      </div>
      
      <figure className="mx-auto">
        <h1 className="mb-4 text-[30px] md:text-[50px] font-semibold text-center text-mypurple">What our Esteemed client are saying ?</h1>
        <blockquote className="md:text-[20px] tracking-wide leading-6 mt-10 text-xs text-left text-grey-300">
          <p className='max-w-4xl m-auto place-content-center'>
            “Choosing this web service was a game-changer for my business. Their innovative designs and seamless functionality not only elevated my <Link className='font-bold' href='./contact'>online presence</Link> but also significantly boosted my customer engagement. The team expertise and commitment to excellence made the entire process a breeze. I am thrilled with the results and can confidently say they exceeded my expectations. Highly recommended!”
          </p>
        </blockquote>
        <figcaption className="mt-10 flex mx-auto place-content-center items-center gap-x-6 ">
          <div className="isolate flex place-content-center -space-x-2">
            <img
              className="relative z-20 inline-block h-7 w-7 rounded-full ring-2 ring-white"
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
              alt="Guillermo_Rauch"
            />
            <img
              className="relative z-10 inline-block h-7 w-7 rounded-full ring-2 ring-white"
              src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
              alt="Lee_Robinson"
            />
            <img
              className="relative z-0 inline-block h-7 w-7 rounded-full ring-2 ring-white"
              src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
              alt="Delba"
            />
          </div>
          

          <div>
            <p className="font-semibold md:text-[20px] text-white">90+ Clients</p>
          </div>
        </figcaption>
      </figure>
    </section>
  </main>
  )
}
