"use client"
import React from 'react';


const CallNowButton = () => {
  const phoneNumber = '+917009646377'; // Replace with your actual phone number

  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="mt-10 flex items-center justify-center gap-x-2">
              <button
                type="button"
                className="rounded-md bg-mypurple px-3 py-2 md:px-6 md:py-3 text-sm md:text-[15px] font-semibold text-grey-300 shadow-sm hover:bg-mypurple/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={handleCallButtonClick}
                
              >
                Contact Us
              </button>
              <button
                type="button"
                className="rounded-md border md:border-2 border-mypurple px-3 py-2 md:px-6 md:py-3 md:text-[15px] hover:bg-white text-sm font-semibold text-mypurple shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get Started
              </button>
            </div>
              
  );
};

export default CallNowButton;
