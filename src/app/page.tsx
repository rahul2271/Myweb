import Image from 'next/image'
// import { poppins } from 'next/font/google'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
    <div className="relative w-full">
      
      <div className="relative isolate z-0  px-6 md:mt-[20px] md:pt-[-50px] pt-[-100px] lg:px-8">
        <div className="relative mx-auto max-w-2xl py-24">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              className="md:mt-[-100px] mt-[-50px] relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
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
          <div className="md:mt-[-50px] mt-[-20px] text-center">
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-grey-300 md:text-4xl lg:text-6xl">
          People who care about your growth
        </h1>
        <p className="mt-8 text-lg text-gray-300">
        Fueling online success, one click at a time—supercharge your business growth with our winning web solutions.
        </p>
            {/* <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">
              Lorem ipsum dolor sit amet consectetur dicta.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
              commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p> */}
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <button
                type="button"
                className="rounded-md bg-mypurple px-3 py-2 md:px-2 md:py-1 text-sm md:text-[10px] font-semibold text-grey-300 shadow-sm hover:bg-mypurple/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Contact Us
              </button>
              <button
                type="button"
                className="rounded-md border border-mypurple px-3 py-2 md:px-2 md:py-1 md:text-[10px] hover:bg-white text-sm font-semibold text-mypurple shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

            
    <div id='services' className="croll-smooth focus:scroll-auto mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
    <div className="mx-auto max-w-xl text-center">
      <div className="mx-auto inline-flex rounded-full bg-mypurple px-4 py-1.5 md:px-3 md:px-1">
        <p className="text-xs md:text-[7px] font-semibold uppercase tracking-widest text-white">
          What we have for you...
        </p>
      </div>
      <h2 className="mt-6 text-3xl font-bold leading-tight text-grey-100 sm:text-4xl lg:text-5xl">
        Our Exclusive Services
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-400">
      From design to deployment, we've got your web presence covered—your all-in-one solution for digital excellence.
      </p>
    </div>
    <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              className="md:mt-[-100px] mt-[-50px] relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
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
          <div className="absolute inset-x-0 -top-[-40rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[-35rem]">
            <svg
              className="md:mt-[-100px] mt-[-50px] relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
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
    <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 md:grid-cols-4 lg:grid-cols-4">
      
      <div className='hover:border-white hover:bg-mypurple/20  md:border-[1px] lg:border-[1px]  border-mypurple rounded-2xl'>
        <div className=" mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <Image src="/webdevelopers.gif" alt="web development" />
        </div>
        <h3 className="mt-2 md:text-[12px] font-semibold text-white">Web Development</h3>
        <p className=" mt-2 md:text-[8px] text-gray-300">
        Elevate your online presence with our expert web development services—where innovation meets impeccable design.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 md:border-[1px] lg:border-[1px]   border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <Image src="/gd.gif" alt="Graphcs designing" />
        </div>
        <h3 className="mt-2 text-lg font-semibold md:text-[12px] text-white">
          Graphics Designing
        </h3>
        <p className="mt-2  md:text-[8px] text-gray-300">
        Ignite your brand with our graphic design magic—where creativity meets visual brilliance.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 md:border-[1px] lg:border-[1px]  border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <Image src="/cw.gif" alt="content writing" />
        </div>
        <h3 className="mt-2 text-lg md:text-[12px] font-semibold text-white">
          Content Writing
        </h3>
        <p className="mt-2 md:text-[8px]  text-gray-300">
        Unleash the power of words with our content writing services—where every sentence tells your story and captivates your audience.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 md:border-[1px] lg:border-[1px]  border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <Image src="/dm.gif" alt="Digital Marketing" />
        </div>
        <h3 className="mt-2 text-lg font-semibold md:text-[12px] text-white">Digital Marketing</h3>
        <p className="mt-2 md:text-[8px] text-gray-300">
        Elevate your brand with our expert digital marketing services – where visibility meets success in the online landscape.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 md:border-[1px] lg:border-[1px]  border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <Image src="/ve.gif" alt="Digital Marketing" />
        </div>
        <h3 className="mt-2 text-lg md:text-[12px] font-semibold text-white">Professional Video Editing</h3>
        <p className="mt-2  text-gray-300 md:text-[8px]">
        Transforming moments into cinematic magic—our video editing services make your story unforgettable.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 md:border-[1px] lg:border-[1px]  border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <Image src="/seo.gif" alt="Digital Marketing" />
        </div>
        <h3 className="mt-2 text-lg font-semibold md:text-[12px] text-white">SEO </h3>
        <p className="mt-2  text-gray-300 md:text-[8px]">
        Boost your online presence with our expert SEO services—because being found is the first step to being remembered.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 md:border-[1px] lg:border-[1px]  border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <Image src="/insta.png" alt="Digital Marketing" />
        </div>
        <h3 className="mt-2 text-lg font-semibold text-white md:text-[12px]">SMM </h3>
        <p className="mt-2  text-gray-300 md:text-[8px]">
        Elevate your brand's online charisma with our Social Media Magic – where engagement meets strategy, and your story takes center stage.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 md:border-[1px] lg:border-[1px]  border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <Image src="/smo.png" alt="Digital Marketing" />
        </div>
        <h3 className="mt-2 text-lg font-semibold text-white md:text-[12px]">SMO </h3>
        <p className=" mt-2  text-gray-300 md:text-[8px]">
        Elevate your online presence with our Social Media Optimization magic— where visibility meets engagement, and your brand becomes the talk of the digital town!
        </p>
      </div>
    </div>
  </div>

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
        <h1 className="order-first text-3xl font-semibold tracking-tight text-mypurple sm:text-5xl">110+</h1>
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
<div className="mt-[100px] md:mt-[50px] mx-auto max-w-xl text-center">
      <div className="mx-auto inline-flex rounded-full bg-mypurple px-4 py-1.5">
        <p className="text-xs md:text-[10px] font-semibold uppercase tracking-widest text-white">
          Reviews...
        </p>
      </div>
      </div>
      <div className="absolute inset-x-0 -top-[-180rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[-75rem]">
            <svg
              className="md:mt-[-100px] mt-[-50px] relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
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
      <figure className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-[30px] font-semibold text-center text-mypurple">What our Esteemed client are saying ?</h1>
        <blockquote className="text-justify mt-10 text-xs text-center text-white">
          <p>
            “Choosing this web service was a game-changer for my business. Their innovative designs and seamless functionality not only elevated my online presence but also significantly boosted my customer engagement. The team's expertise and commitment to excellence made the entire process a breeze. I'm thrilled with the results and can confidently say they exceeded my expectations. Highly recommended!”
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          <div className="isolate flex place-content-center -space-x-2">
            <Image
              className="relative z-30 inline-block h-5 w-5 rounded-full ring-2 ring-white"
              src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
              alt="Dan_Abromov"
            />
            <Image
              className="relative z-20 inline-block h-5 w-5 rounded-full ring-2 ring-white"
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
              alt="Guillermo_Rauch"
            />
            <Image
              className="relative z-10 inline-block h-5 w-5 rounded-full ring-2 ring-white"
              src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
              alt="Lee_Robinson"
            />
            <Image
              className="relative z-0 inline-block h-5 w-5 rounded-full ring-2 ring-white"
              src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
              alt="Delba"
            />
          </div>
          <div>
            <p className="font-semibold md:text-[10px] text-white">90+ Clients</p>
          </div>
        </figcaption>
      </figure>
    </section>
  </main>
  )
}

