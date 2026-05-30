import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioProjects } from '../assets/assets';

const ArrowRight = () => (
  <svg width="24" height="8" viewBox="0 0 24 8" fill="none" stroke="currentColor" strokeWidth="0.75">
    <path d="M0 4H23M23 4L19.5 0.5M23 4L19.5 7.5"/>
  </svg>
);

const ArrowLeft = () => (
  <svg width="24" height="8" viewBox="0 0 24 8" fill="none" stroke="currentColor" strokeWidth="0.75">
    <path d="M24 4H1M1 4L4.5 0.5M1 4L4.5 7.5"/>
  </svg>
);

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % portfolioProjects.length);
  };
  
  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? portfolioProjects.length - 1 : prev - 1));
  };

  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#222222] w-full min-h-screen py-16 md:py-24 px-4 md:px-10 lg:px-16 font-['Inter'] overflow-hidden"
    >
      {/* Top Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-28 max-w-[1600px] mx-auto">
        
        {/* Left Side (Title & Button) */}
        <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-[11px] text-[#bbb] mb-10 tracking-wide"
          >
            <span className="text-[7px]">◆</span> Portfolio
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[28px] sm:text-[34px] md:text-[36px] lg:text-[42px] font-light leading-[1.25] text-[#eee] mb-10 tracking-[-0.02em]"
          >
            A collection of spaces designed <br className="hidden lg:block" />
            with attention to <span className="font-semibold italic text-white">detail, material</span>, <br className="hidden lg:block" />
            and <span className="font-semibold italic text-white">atmosphere.</span>
          </motion.h2>
          
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#333333] w-max min-w-[260px] px-6 py-3.5 text-[11px] text-[#eee] flex items-center justify-between hover:bg-[#444] transition-colors border border-transparent hover:border-[#666]"
          >
            Explore All Projects <span className="ml-8"><ArrowRight /></span>
          </motion.button>
        </div>
        
        {/* Middle/Right Text */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="md:col-span-3 lg:col-span-3 md:col-start-8 lg:col-start-8 mt-10 md:mt-20"
        >
          <p className="text-[12px] text-[#aaa] leading-relaxed max-w-[180px]">
            Each project reflects a unique balance of form and function.
          </p>
        </motion.div>
        
        {/* V Logo */}
        {/* <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-1 lg:col-span-2 flex justify-end mt-10 md:mt-20 hidden md:flex"
        >
          <div className="text-3xl font-serif font-bold text-white italic">v</div>
        </motion.div> */}
      </div>

      {/* Gallery Controls */}
      <div className="flex justify-between items-end w-full mb-6 text-[#bbb] text-[12px] max-w-[1600px] mx-auto">
        <div>{activeIndex + 1}/{portfolioProjects.length}</div>
        <div className="flex gap-2">
          <button 
            onClick={prevProject} 
            className="border border-[#444] w-[60px] md:w-[70px] h-[35px] flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          >
             <ArrowLeft />
          </button>
          <button 
            onClick={nextProject} 
            className="border border-[#888] w-[60px] md:w-[70px] h-[35px] flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white hover:text-black"
          >
             <ArrowRight />
          </button>
        </div>
      </div>

      {/* Accordion Gallery */}
      <div className="flex gap-2 md:gap-4 h-[500px] md:h-[65vh] min-h-[500px] w-full max-w-[1600px] mx-auto">
        {portfolioProjects.map((project, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={project.id}
              onClick={() => setActiveIndex(index)}
              className={`relative overflow-hidden cursor-pointer transition-all duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex ${isActive ? 'flex-[10] md:flex-[12]' : 'flex-[1] grayscale opacity-70 hover:opacity-100 hover:grayscale-0'}`}
            >
              {/* Image */}
              <div className={`h-full transition-all duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'w-full md:w-[45%] lg:w-[50%]' : 'w-full'}`}>
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              
              {/* Info panel */}
              <div className={`absolute top-0 right-0 h-full w-full md:w-[55%] lg:w-[50%] p-6 lg:p-12 flex flex-col justify-between transition-opacity duration-[600ms] bg-[#222222]/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none ${isActive ? 'opacity-100 pointer-events-auto delay-[400ms]' : 'opacity-0 pointer-events-none delay-0'}`}>
                 
                 {/* Tags */}
                 <div className="flex flex-col gap-2 items-start mt-4">
                    <div className="border border-[#444] px-4 py-1.5 text-[10px] text-[#aaa]">{project.type}</div>
                    <div className="flex gap-2">
                      <div className="border border-[#444] px-4 py-1.5 text-[10px] text-[#aaa]">{project.location.split(',')[0]}</div>
                      <div className="border border-[#444] px-4 py-1.5 text-[10px] text-[#aaa]">{project.area}</div>
                    </div>
                 </div>

                 {/* Info */}
                 <div className="mb-8 md:mb-12">
                   <h3 className="text-[26px] md:text-[32px] lg:text-[36px] font-medium tracking-wide mb-2 text-[#eee]">{project.title}</h3>
                   <p className="text-[11px] text-[#777] mb-8">{project.location} <span className="mx-2 text-[#444]">◆</span> {project.area}</p>
                   <p className="text-[13px] md:text-[14px] text-[#bbb] leading-relaxed max-w-[320px]">{project.description}</p>
                 </div>

                 {/* Details Button */}
                 <div className="mb-4">
                   <button className="border border-[#555] px-6 py-3 text-[11px] hover:bg-white hover:text-black transition-colors flex items-center gap-6 text-[#eee]">
                      Details <ArrowRight />
                   </button>
                 </div>

              </div>
            </div>
          )
        })}
      </div>

    </motion.section>
  );
};

export default Portfolio;