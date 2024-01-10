import { Metadata } from "next"
export default function Privacy(){
    return(
        <>
        <section className="max-w-7xl mx-auto place-content-center text-center">
            <h1 className="text-[40px] animate-pulse mt-[50px]">Privacy Policy</h1>
            <div className="mt-[20px]">
                <p>Last Updated: [06-01-2024]</p>
            </div>
            <div>
            <h2 className="mt-[20px] text-[30px] font-extrabold">Introduction</h2>
            <p>Welcome to Rchauhan ("we," "us," or "our"). This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information.</p>
            </div>
            <div>
                <h2 className="mt-[20px] text-[30px] font-extrabold">Information We Collect</h2>
                <ol>
                    <li><h2 className="font-extrabold">Personal Information :</h2> When you use our website or services, we may collect personal information such as your name, email address, and other contact details.</li>
                    <li><h2> Usage Information :</h2>We collect information about how you interact with our website, including the pages you visit and the actions you take.</li>
                    <li><h2>Device Information :</h2>We may collect information about the device you use to access our website, including the device type, operating system, and browser.</li>
                </ol>
            </div>
        </section>
        </>
    )
}