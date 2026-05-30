import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { reviews } from '../assets/assets';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [currentIndex]); // resetting interval on manual click

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id='testimonials' className="bg-[#efefef] w-full min-h-[500px] md:h-[70vh] max-h-[850px] flex flex-col justify-between py-12 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden font-['Inter']">
      
      {/* Top Section */}
      <div className="flex justify-end md:justify-between items-start w-full max-w-[1400px] mx-auto">
        {/* Left Label Desktop */}
        <div className="hidden md:flex items-center gap-2 text-[12px] text-[#222] mt-2">
          <span className="text-[7px]">◆</span>
          <p>Client Experience</p>
        </div>
        
        {/* Right Label Mobile */}
        <div className="flex md:hidden items-center gap-2 text-[12px] text-[#222]">
          <span className="text-[7px]">◆</span>
          <p>Client Experience</p>
        </div>

        {/* Right Top Info (Counter Desktop) */}
        <div className="hidden md:block text-[#222] text-[13px] font-medium mt-2">
          {currentIndex + 1}/{reviews.length}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-center my-16 md:my-0 w-full mx-auto max-w-[1400px]">
        
        {/* Left Info Desktop */}
        <div className="hidden md:flex flex-col w-[250px] self-end mb-12 flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <h4 className="text-[20px] md:text-[22px] text-[#222] mb-1 font-normal">
                {reviews[currentIndex].name}
              </h4>
              <p className="text-[#a0a0a0] text-[15px] md:text-[16px]">
                {reviews[currentIndex].location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quote Area */}
        <div className="flex-1 flex flex-col items-start relative w-full md:px-8">
          <div className="relative w-full">
            <span className="text-[100px] md:text-[140px] leading-[0.7] font-serif text-[#222] absolute -top-4 -left-2 md:-top-6 md:-left-20 select-none pointer-events-none">“</span>
            
            <AnimatePresence mode="wait">
              <motion.p 
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[46px] leading-[1.25] text-[#222] font-light tracking-[-0.03em] relative z-10 pl-12 md:pl-0 min-h-[160px] md:min-h-[200px] flex items-center"
              >
                <span>{reviews[currentIndex].quote}</span>
              </motion.p>
            </AnimatePresence>
          </div>
          
          {/* Name and Location Mobile */}
          <div className="flex flex-col md:hidden mt-8 pl-12 h-[60px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h4 className="text-[18px] text-[#222] mb-1 font-normal">
                  {reviews[currentIndex].name}
                </h4>
                <p className="text-[#a0a0a0] text-[14px]">
                  {reviews[currentIndex].location}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Right Spacer for Desktop Balance */}
        <div className="hidden md:block w-[250px] flex-shrink-0" />

      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end w-full max-w-[1400px] mx-auto mt-auto">
        
        {/* Counter Mobile */}
        <div className="md:hidden text-[#222] text-[13px] font-medium pb-3">
          {currentIndex + 1}/{reviews.length}
        </div>

        {/* Spacer for desktop to push arrows right */}
        <div className="hidden md:block" />

        {/* Arrows */}
        <div className="flex gap-3">
           <button onClick={prevSlide} className="border border-[#dfdfdf] w-[70px] md:w-[80px] h-[45px] md:h-[50px] flex items-center justify-center hover:bg-[#222] hover:text-white hover:border-[#222] transition-colors text-[#555]">
              <svg width="24" height="8" viewBox="0 0 24 8" fill="none" stroke="currentColor" strokeWidth="0.75"><path d="M24 4H1M1 4L4.5 0.5M1 4L4.5 7.5"/></svg>
           </button>
           <button onClick={nextSlide} className="border border-[#444] w-[70px] md:w-[80px] h-[45px] md:h-[50px] flex items-center justify-center hover:bg-[#222] hover:text-white transition-colors text-[#222]">
              <svg width="24" height="8" viewBox="0 0 24 8" fill="none" stroke="currentColor" strokeWidth="0.75"><path d="M0 4H23M23 4L19.5 0.5M23 4L19.5 7.5"/></svg>
           </button>
        </div>
      </div>

    </section>
  );
};

export default Testimonials;