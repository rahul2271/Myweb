import Link from "next/link"
import Image from "next/image"
export default function Header(){
    return(
        <>
        {/* <audio  autoplay loop className="invisible" src="audio.mp3"></audio> */}
        {/* <iframe hidden src="audio.mp3" allow="autoplay">
        </iframe>  */}
      <header className='mt-[20px] md:mx-auto md:w-full md:mt-[-70px] mx-auto w-full'>
      <img className=' mx-auto  relative  h-[100px] w-[130px] md:h-[100px] md:w-[130px] md:mt-[90px] md:mx-[10px]' src="./loogo.png" alt="rchauhan" />
          <ul className='mt-[20px] flex md:space-x-6  md:text-xl md:my-[-20px] md:place-content-center lg:flex md:space-x-6 lg:place-content-center text-[15px] space-x-6  place-content-center'>
            <li>
              <Link className="hover:text-mypurple" href="/">
              Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-mypurple"  href="/services">
              Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-mypurple" href="/about">
              About
              </Link>
            </li>
            {/* <li>
              <Link className="hover:text-mypurple" href="/blogs">
              Blogs
              </Link>
            </li> */}
            {/* <li>
              <Link className="hover:text-mypurple" href="/price">
              Plans
              </Link>
            </li>  */}
            <li>
              <Link className="animate-pulse hover:text-mypurple" href="/contact">
              Contact Us
              </Link>
            </li>
            <Image className='hidden lg:block md:block absolute inset-y-0 right-0 mt-[10px]' width={150} height={150} alt='makeinindia' src="/MAKEININDIA.png"/>  
            <Image className='visible md:hidden lg:hidden absolute inset-y-0 right-0 mt-[10px]' width={80} height={80} alt='makeinindia' src="/MAKEININDIA.png"/>         
          </ul>
          {/* <Image width={200} height={200} alt='makeinindia' src="/MAKEININDIA.png"/> */}
          {/* <Link href="/contact" className="hidden lg:block ml-[1300px] mt-[-50px] ">
      <button
        type="button"
        className="rounded-md bg-[#953ee2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Contact Us
      </button>
    </Link> */}
          
        </header>        
        </>
    )
}