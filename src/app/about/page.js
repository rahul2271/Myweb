
import { Metadata } from "next"
import Link from "next/link";

export default function Aboutpage(){
    return(
        <>
        <section className="bg-black">
        <title>Greetings! I&apos;m Rahul Chauhan, the visionary founder of RC Tech Solutions.</title>
        <meta charset="UTF-8"/>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
        <meta name="description" content="Discover the story behind RC Tech Solutions, a digital services hub founded by Rahul Chauhan. Dive into our journey of digital excellence."/>
        <meta name="keywords" content="web development, graphic design, content creation, digital services, social media optimization, social media management, digital marketing, business growth, Rahul Chauhan, RC Tech Solutions, innovation, creativity, branding "/>
        <meta name="author" content="Rahul Chauhan"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="www.rchauhan.in"/>
        <meta property="og:title" content="RC Tech Solutions - Crafting Digital Excellence"/>
        <meta property="og:description" content="Join Rahul Chauhan's journey at RC Tech Solutions, a hub of innovation in web development, graphic design, and content creation. Your digital success begins here."/>
        <meta property="og:image" content="/logo.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:url" content="www.rchauhan.in"/>
        <meta name="twitter:title" content="RC Tech Solutions - Crafting Digital Excellence"/>
        <meta name="twitter:description" content="Join Rahul Chauhan's journey at RC Tech Solutions, a hub of innovation in web development, graphic design, and content creation. Your digital success begins here."/>
        <meta name="twitter:image" content="/logo.png"/>

        {/* <section className="z-20 blur-xl fixed ">
            <img src="/logo.png" alt="" />
        </section> */}
       
 <div class="mx-auto max-w-7xl place-content-center mt-[25px] md:mt-[100px] sm:flex items-center max-w-screen-xl">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src="./about.png"/>
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            {/* <span class="text-gray-100 border-b-2 border-mypurple uppercase">About us</span> */}
            <h2 class="my-4 font-bold  md:text-3xl  text-2xl ">Birth of <p class="text-3xl md:text-6xl font-bold text-mypurple">RC Tech Solutions</p>
            </h2>
            <p class="mt-[50px] text-gray-100">
            Hi, <span className="text-2xl md:text-3xl text-mypurple font-bold">I am Rahul Chauhan</span>. Ever since I was a kid, I have loved tinkering with computers. This passion led me to study computer science and eventually land a good job at a <Link className='font-bold' href='./'>Tech Solutions Company</Link>. Despite the success, I felt like something was missing. I had a dream: starting my own company.<br/><br/>

I realized many small businesses were struggling to keep up with the digital world and could not compete with big online companies. So, I quit my job to help these businesses go online and succeed.<br/><br/>

That’s how RC Tech Solutions was born. I wanted to create a place where small businesses could get all the help they needed to thrive online. Starting out was tough, but soon, people began noticing the difference we were making. In just a few months, I secured over 20 projects, giving me the momentum I needed.<br/><br/>

Talented people joined my team, and together we built websites, launched marketing campaigns, and designed graphics. We helped clients like Meera, a bakery owner whose business started receiving orders from all over the city after we created her online presence.
<br/><br/>
With over 50 successful projects, RC Tech Solutions became known for innovation and growth. Looking back, I realize my leap was about empowering others and turning dreams into reality.<br/><br/>


            </p>
        </div>
    </div>
</div>
</section>
        </>
    )
}
