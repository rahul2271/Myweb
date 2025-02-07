
import { Metadata } from "next"
export default function Aboutpage(){
    return(
        <>
        <title>RC Tech Solutions - Refund Policy</title>
        <meta charset="UTF-8"/>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
        <meta name="description" content="Discover the story behind RC Tech Solutions, a digital services hub founded by Rahul Chauhan. Dive into our journey of digital excellence."/>
        <meta name="keywords" content="web development, graphic design, content creation, digital services, social media optimization, social media management, digital marketing, business growth, Rahul Chauhan, RC Tech Solutions, innovation, creativity, branding "/>
        <meta name="author" content="Rahul Chauhan"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="www.rctechsolutions.com"/>
        <meta property="og:title" content="RC Tech Solutions - Crafting Digital Excellence"/>
        <meta property="og:description" content="Join Rahul Chauhan's journey at RC Tech Solutions, a hub of innovation in web development, graphic design, and content creation. Your digital success begins here."/>
        <meta property="og:image" content="/logo.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:url" content="www.rctechsolutions.com"/>
        <meta name="twitter:title" content="RC Tech Solutions - Crafting Digital Excellence"/>
        <meta name="twitter:description" content="Join Rahul Chauhan's journey at RC Tech Solutions, a hub of innovation in web development, graphic design, and content creation. Your digital success begins here."/>
        <meta name="twitter:image" content="/logo.png"/>

        {/* <section className="z-20 blur-xl fixed ">
            <img src="/logo.png" alt="" />
        </section> */}
        <div className=" fixed inset-x-0 -top-[0rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[0rem]">
            <svg
              className="fixed mt-[50px] left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
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
        <div className=" fixed inset-x-0 -top-[0rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[0rem]">
            <svg
              className="fixed mt-[50px] left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
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
          <div className="fixed  inset-x-0 -top-[0rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[0rem]">
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
          <div className=" min-h-screen">

      <main className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow px-6 py-8 sm:px-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>

          <section className="mb-6">
            <p className="text-gray-700">
              We currently do not offer refunds for any services provided on our website, www.rchauhan.in.
              As our website provides live score updates and information, we do not sell products or services that require refundable transactions.
              Please contact us if you have any questions or concerns regarding the use of our website or the information provided on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions or concerns about this Refund Policy, please contact us at:
              <br />
              Email: rraahhuullch@gmail.com
              <br />
              Phone: +91 770-786-1771
            </p>
          </section>
        </div>
      </main>
    </div>
        </>
    )
}
