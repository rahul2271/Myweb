import Link from "next/link"

export default function Price(){
    return(
        <>
        <section className="mt-[20px] lg:mt-[80px] md:mt-[100px] relative w-full overflow-hidden bg-transparent pb-14">
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
                    <span className=''>Starting from</span>
                    <span className="ml-2 text-gray-100 text-2xl">15,000/-</span>
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
                    <span className=''>Starting from</span>
                    <span className="ml-2 text-gray-100 text-2xl">45,000/-</span>
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
        </>
    )
}