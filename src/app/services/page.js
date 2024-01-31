import Link from "next/link"

export default function Service(){
    return(
        <>
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
      From design to deployment, we have got your web presence covered—your all-in-one solution for digital excellence.
      </p>
    </div>
    <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
      <div className='hover:border-white  hover:bg-mypurple/20  border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className=" mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <img src="/webdevelopers.gif" alt="web development" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">Web Development</h3>
        <p className="mt-8 text-sm text-gray-200">
        Elevate your online presence with our expert web development services—where innovation meets impeccable design.
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
        Ignite your brand with our graphic design magic—where creativity meets visual brilliance.
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
        Unleash the power of words with our content writing services—where every sentence tells your story and captivates your audience.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <img src="/dm.gif" alt="Digital Marketing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">Digital Marketing</h3>
        <p className="mt-8 text-sm text-gray-200">
        Elevate your brand with our expert digital marketing services – where visibility meets success in the online landscape.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <img src="/ve.gif" alt="Digital Marketing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">Professional Video Editing</h3>
        <p className="mt-8 text-sm text-gray-200">
        Transforming moments into cinematic magic—our video editing services make your story unforgettable.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <img src="/seo.gif" alt="Digital Marketing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">SEO </h3>
        <p className="mt-8 text-sm text-gray-200">
        Boost your online presence with our expert SEO services—because being found is the first step to being remembered.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <img src="/insta.png" alt="Digital Marketing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">SMM </h3>
        <p className="mt-8 text-sm text-gray-200">
        Elevate your brand online charisma with our Social Media Magic – where engagement meets strategy, and your story takes center stage.
        </p>
      </div>
      <div className='hover:border-white  hover:bg-mypurple/20 border-2 p-[20px] border-mypurple rounded-2xl'>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ">
          <img src="/smo.png" alt="Digital Marketing" />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-white">SMO </h3>
        <p className=" mt-8 text-sm text-gray-200">
        Elevate your online presence with our Social Media Optimization magic— where visibility meets engagement, and your brand becomes the talk of the digital town!
        </p>
      </div>
    </div>
  </div>        
        </>
    )
}