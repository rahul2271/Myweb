'use client';

import { usePathname } from 'next/navigation';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from './header/page.js';
import Footer from './footer/page.js';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300','400', '500', '600'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define the pages where you don't want the Header and Footer
  const noHeaderFooterPaths = ['/rctechadminpanel']; // Add any other paths as needed

  const hideHeaderFooter = noHeaderFooterPaths.some((path) => pathname.startsWith(path));

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-YLHN7WV840`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YLHN7WV840');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1067605258390336');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1067605258390336&ev=PageView&noscript=1"
          />
        </noscript>

        <meta name="p:domain_verify" content="5547c5da888b33b6d7f689b96b7e94ad" />
        <title>RC Tech Solutions - Web Development, SEO & Digital Marketing.</title>
        <meta name="description" content="Transform your online presence with expert web development, creative graphic design, and engaging content writing services. Explore the world with RC Tech Solutions." />
        <meta name="keywords" content="web development, graphic design, content creation, digital services, social media optimization, social media management, digital marketing, business growth, Rahul Chauhan, RC tech solutions, creativity, branding" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.rctechsolutions.com" />

        <meta property="og:site_name" content="RC Tech Solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.rctechsolutions.com" />
        <meta property="og:title" content="RC Tech Solutions - Web Development, SEO & Digital Marketing. " />
        <meta property="og:description" content="Join Rahul Chauhan's journey at RC Tech Solutions, a hub of innovation in web development, graphic design, and content creation. Your digital success begins here." />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://twitter.com/RchauhanI66121" />
        <meta name="twitter:title" content="RC Tech Solutions - Crafting Digital Excellence" />
        <meta name="twitter:description" content="Join Rahul Chauhan's journey at RC Tech Solutions, a hub of innovation in web development, graphic design, and content creation. Your digital success begins here." />
        <meta name="twitter:image" content="/logo.png" />
      </head>
      <body className={poppins.className}>
        {hideHeaderFooter ? (
          children
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
