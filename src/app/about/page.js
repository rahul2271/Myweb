
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
            Hi, I am Rahul Chauhan.I've enjoyed playing around with computers since I was a young child. I studied computer science as a result of this interest, and I eventually got a good position at a RC Tech Solutions Company. Even with the accomplishment, I thought something was lacking. Creating my own business was my dream.<br/><br/>
I came to understand that a lot of small businesses were finding it difficult to stay competitive in the digital era and to compete with large internet enterprises. I therefore resigned from my position to assist these companies in becoming successful online.<br/><br/>
Thus, <a className='text-mypurple' href='/'>RC Tech Solutions</a> was established. My goal was to establish a location where small companies could receive all the support they required to succeed online. It was difficult at first, but eventually people started to notice the change we were making. I got the momentum I needed when I acquired over 20 assignments in a matter of months.<br/><br/>
My team grew as talented individuals joined, and we created marketing campaigns, websites, and graphics together. We worked with customers like Meera, a bakery owner who began getting orders from all across the city when we created her <a className='text-mypurple' href='/'>online presence.</a> <br/><br/>
Through more than 50 accomplished projects, RC Tech Solutions established a reputation for growth and innovation. In retrospect, I see that my leap was about enabling people and realizing dreams.<br/><br/>


            </p>
        </div>
    </div>
</div>
</section>
        </>
    )
}
