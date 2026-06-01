// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { portfolioProjects } from '../assets/assets';

// const ArrowRight = () => (
//   <svg width="24" height="8" viewBox="0 0 24 8" fill="none" stroke="currentColor" strokeWidth="0.75">
//     <path d="M0 4H23M23 4L19.5 0.5M23 4L19.5 7.5"/>
//   </svg>
// );

// const ArrowLeft = () => (
//   <svg width="24" height="8" viewBox="0 0 24 8" fill="none" stroke="currentColor" strokeWidth="0.75">
//     <path d="M24 4H1M1 4L4.5 0.5M1 4L4.5 7.5"/>
//   </svg>
// );

// const Portfolio = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const nextProject = () => {
//     setActiveIndex((prev) => (prev + 1) % portfolioProjects.length);
//   };
  
//   const prevProject = () => {
//     setActiveIndex((prev) => (prev === 0 ? portfolioProjects.length - 1 : prev - 1));
//   };

//   return (
//     <motion.section
//       id="portfolio"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="bg-[#222222] w-full min-h-screen py-16 md:py-24 px-4 md:px-10 lg:px-16 font-['Inter'] overflow-hidden"
//     >
//       {/* Top Header Section */}
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-28 max-w-[1600px] mx-auto">
        
//         {/* Left Side (Title & Button) */}
//         <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
//           <motion.div 
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="flex items-center gap-2 text-[11px] text-[#bbb] mb-10 tracking-wide"
//           >
//             <span className="text-[7px]">◆</span> Portfolio
//           </motion.div>
          
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-[28px] sm:text-[34px] md:text-[36px] lg:text-[42px] font-light leading-[1.25] text-[#eee] mb-10 tracking-[-0.02em]"
//           >
//             A collection of spaces designed <br className="hidden lg:block" />
//             with attention to <span className="font-semibold italic text-white">detail, material</span>, <br className="hidden lg:block" />
//             and <span className="font-semibold italic text-white">atmosphere.</span>
//           </motion.h2>
          
//           <motion.button 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="bg-[#333333] w-max min-w-[260px] px-6 py-3.5 text-[11px] text-[#eee] flex items-center justify-between hover:bg-[#444] transition-colors border border-transparent hover:border-[#666]"
//           >
//             Explore All Projects <span className="ml-8"><ArrowRight /></span>
//           </motion.button>
//         </div>
        
//         {/* Middle/Right Text */}
//         <motion.div 
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="md:col-span-3 lg:col-span-3 md:col-start-8 lg:col-start-8 mt-10 md:mt-20"
//         >
//           <p className="text-[12px] text-[#aaa] leading-relaxed max-w-[180px]">
//             Each project reflects a unique balance of form and function.
//           </p>
//         </motion.div>
        
//         {/* V Logo */}
//         {/* <motion.div 
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           viewport={{ once: true }}
//           className="md:col-span-1 lg:col-span-2 flex justify-end mt-10 md:mt-20 hidden md:flex"
//         >
//           <div className="text-3xl font-serif font-bold text-white italic">v</div>
//         </motion.div> */}
//       </div>

//       {/* Gallery Controls */}
//       <div className="flex justify-between items-end w-full mb-6 text-[#bbb] text-[12px] max-w-[1600px] mx-auto">
//         <div>{activeIndex + 1}/{portfolioProjects.length}</div>
//         <div className="flex gap-2">
//           <button 
//             onClick={prevProject} 
//             className="border border-[#444] w-[60px] md:w-[70px] h-[35px] flex items-center justify-center hover:bg-white hover:text-black transition-colors"
//           >
//              <ArrowLeft />
//           </button>
//           <button 
//             onClick={nextProject} 
//             className="border border-[#888] w-[60px] md:w-[70px] h-[35px] flex items-center justify-center hover:bg-white hover:text-black transition-colors text-white hover:text-black"
//           >
//              <ArrowRight />
//           </button>
//         </div>
//       </div>

//       {/* Accordion Gallery */}
//       <div className="flex gap-2 md:gap-4 h-[500px] md:h-[65vh] min-h-[500px] w-full max-w-[1600px] mx-auto">
//         {portfolioProjects.map((project, index) => {
//           const isActive = activeIndex === index;
//           return (
//             <div 
//               key={project.id}
//               onClick={() => setActiveIndex(index)}
//               className={`relative overflow-hidden cursor-pointer transition-all duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] flex ${isActive ? 'flex-[10] md:flex-[12]' : 'flex-[1] grayscale opacity-70 hover:opacity-100 hover:grayscale-0'}`}
//             >
//               {/* Image */}
//               <div className={`h-full transition-all duration-[900ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'w-full md:w-[45%] lg:w-[50%]' : 'w-full'}`}>
//                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
//               </div>
              
//               {/* Info panel */}
//               <div className={`absolute top-0 right-0 h-full w-full md:w-[55%] lg:w-[50%] p-6 lg:p-12 flex flex-col justify-between transition-opacity duration-[600ms] bg-[#222222]/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none ${isActive ? 'opacity-100 pointer-events-auto delay-[400ms]' : 'opacity-0 pointer-events-none delay-0'}`}>
                 
//                  {/* Tags */}
//                  <div className="flex flex-col gap-2 items-start mt-4">
//                     <div className="border border-[#444] px-4 py-1.5 text-[10px] text-[#aaa]">{project.type}</div>
//                     <div className="flex gap-2">
//                       <div className="border border-[#444] px-4 py-1.5 text-[10px] text-[#aaa]">{project.location.split(',')[0]}</div>
//                       <div className="border border-[#444] px-4 py-1.5 text-[10px] text-[#aaa]">{project.area}</div>
//                     </div>
//                  </div>

//                  {/* Info */}
//                  <div className="mb-8 md:mb-12">
//                    <h3 className="text-[26px] md:text-[32px] lg:text-[36px] font-medium tracking-wide mb-2 text-[#eee]">{project.title}</h3>
//                    <p className="text-[11px] text-[#777] mb-8">{project.location} <span className="mx-2 text-[#444]">◆</span> {project.area}</p>
//                    <p className="text-[13px] md:text-[14px] text-[#bbb] leading-relaxed max-w-[320px]">{project.description}</p>
//                  </div>

//                  {/* Details Button */}
//                  <div className="mb-4">
//                    <button className="border border-[#555] px-6 py-3 text-[11px] hover:bg-white hover:text-black transition-colors flex items-center gap-6 text-[#eee]">
//                       Details <ArrowRight />
//                    </button>
//                  </div>

//               </div>
//             </div>
//           )
//         })}
//       </div>

//     </motion.section>
//   );
// };

// export default Portfolio;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M1 1L15 15M15 1L1 15"/>
  </svg>
);

/* ─── Modal ─────────────────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', interest: 'General Inquiry' });
  const [submitted, setSubmitted] = useState(false);

  // Stop Lenis hijacking scroll while modal is open
  React.useEffect(() => {
    const lenis = window.lenis;
    if (lenis) lenis.stop();
    document.body.style.overflow = 'hidden';
    return () => {
      if (lenis) lenis.start();
      document.body.style.overflow = '';
    };
  }, []);

  // Prevent wheel/touch events bubbling out to Lenis
  const stopPropagation = (e) => e.stopPropagation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit:   { opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  const panelVariants = {
    hidden: { opacity: 0, y: 48, scale: 0.97 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: 0.05 },
    },
    exit: {
      opacity: 0, y: 32, scale: 0.97,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.4, delay: 0.2 + i * 0.07, ease: 'easeOut' },
    }),
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 w-full max-w-[860px] bg-[#1a1a1a] border border-[#333] flex flex-col md:flex-row overflow-hidden max-h-[90vh]"
        variants={panelVariants}
      >
        {/* Left — project snapshot */}
        <div className="md:w-[38%] flex-shrink-0 relative hidden md:block">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-[10px] text-[#888] tracking-widest uppercase mb-1">{project.type}</p>
            <h3 className="text-[22px] font-medium text-white leading-tight">{project.title}</h3>
            <p className="text-[11px] text-[#666] mt-1">{project.location} · {project.area}</p>
          </div>
        </div>

        {/* Right — form */}
        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto" onWheel={stopPropagation} onTouchMove={stopPropagation}>

          {/* Header bar */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-8 pt-8 pb-6 border-b border-[#2a2a2a] flex-shrink-0 bg-[#1a1a1a]">
            <div>
              {/* Mobile title */}
              <p className="text-[10px] text-[#666] tracking-widest uppercase mb-0.5 md:hidden">{project.title}</p>
              <h4 className="text-[13px] font-light text-[#eee] tracking-wide">Project Enquiry</h4>
            </div>
            <button
              onClick={onClose}
              className="text-[#555] hover:text-white transition-colors w-8 h-8 flex items-center justify-center border border-[#333] hover:border-[#666]"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Body */}
          <div className="px-8 py-8 flex-1">
            {!submitted ? (
              <>
                <motion.p
                  custom={0}
                  variants={fieldVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-[12px] text-[#777] leading-relaxed mb-8 max-w-[340px]"
                >
                  Tell us about your interest in this project and we'll be in touch within 48 hours.
                </motion.p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  {/* Name */}
                  <motion.div custom={1} variants={fieldVariants} initial="hidden" animate="visible">
                    <label className="block text-[10px] text-[#666] tracking-widest uppercase mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      placeholder="Your name"
                      className="w-full bg-transparent border border-[#2e2e2e] text-[13px] text-[#ddd] placeholder-[#444] px-4 py-3 focus:outline-none focus:border-[#666] transition-colors"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div custom={2} variants={fieldVariants} initial="hidden" animate="visible">
                    <label className="block text-[10px] text-[#666] tracking-widest uppercase mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full bg-transparent border border-[#2e2e2e] text-[13px] text-[#ddd] placeholder-[#444] px-4 py-3 focus:outline-none focus:border-[#666] transition-colors"
                    />
                  </motion.div>

                  {/* Interest type */}
                  <motion.div custom={3} variants={fieldVariants} initial="hidden" animate="visible">
                    <label className="block text-[10px] text-[#666] tracking-widest uppercase mb-2">Area of Interest</label>
                    <select
                      value={formData.interest}
                      onChange={e => setFormData(p => ({ ...p, interest: e.target.value }))}
                      className="w-full bg-[#1a1a1a] border border-[#2e2e2e] text-[13px] text-[#ddd] px-4 py-3 focus:outline-none focus:border-[#666] transition-colors appearance-none cursor-pointer"
                    >
                      <option>General Inquiry</option>
                      <option>Purchase / Acquisition</option>
                      <option>Collaboration</option>
                      <option>Press & Media</option>
                    </select>
                  </motion.div>

                  {/* Message */}
                  <motion.div custom={4} variants={fieldVariants} initial="hidden" animate="visible">
                    <label className="block text-[10px] text-[#666] tracking-widest uppercase mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      placeholder="Share your thoughts or questions about this project…"
                      className="w-full bg-transparent border border-[#2e2e2e] text-[13px] text-[#ddd] placeholder-[#444] px-4 py-3 focus:outline-none focus:border-[#666] transition-colors resize-none"
                    />
                  </motion.div>

                  {/* Submit */}
                  <motion.div custom={5} variants={fieldVariants} initial="hidden" animate="visible">
                    <button
                      type="submit"
                      className="w-full bg-white text-black text-[11px] tracking-widest uppercase py-4 flex items-center justify-center gap-4 hover:bg-[#e0e0e0] transition-colors font-medium mt-2"
                    >
                      Send Enquiry <ArrowRight />
                    </button>
                  </motion.div>

                </form>
              </>
            ) : (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col items-start justify-center h-full py-12 gap-5"
              >
                <div className="w-10 h-10 border border-[#555] flex items-center justify-center">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M1 6L6 11L15 1"/>
                  </svg>
                </div>
                <h4 className="text-[22px] font-light text-[#eee] leading-tight">Thank you,<br />{formData.name.split(' ')[0]}.</h4>
                <p className="text-[13px] text-[#777] leading-relaxed max-w-[280px]">
                  Your enquiry about <span className="text-[#aaa]">{project.title}</span> has been received. We'll respond to {formData.email} within 48 hours.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 border border-[#444] px-6 py-3 text-[11px] text-[#aaa] hover:border-[#666] hover:text-white transition-colors flex items-center gap-4"
                >
                  Close <CloseIcon />
                </button>
              </motion.div>
            )}
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Portfolio ──────────────────────────────────────────── */
const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalProject, setModalProject] = useState(null);

  const nextProject = () => setActiveIndex((prev) => (prev + 1) % portfolioProjects.length);
  const prevProject = () => setActiveIndex((prev) => (prev === 0 ? portfolioProjects.length - 1 : prev - 1));

  return (
    <>
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
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // prevent accordion click
                        setModalProject(project);
                      }}
                      className="border border-[#555] px-6 py-3 text-[11px] hover:bg-white hover:text-black transition-colors flex items-center gap-6 text-[#eee]"
                    >
                      Details <ArrowRight />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {modalProject && (
          <ProjectModal
            project={modalProject}
            onClose={() => setModalProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;