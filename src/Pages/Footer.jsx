import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import thankyouimg from "../assets/thankyouimg.png";

const Footer = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    // Initial width set
    updateWidth();
    
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] } },
  };

  const bigTextVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
  };

  const bigTextClass = "text-[23vw] md:text-[22vw] leading-[0.88] font-normal tracking-[-0.04em] whitespace-nowrap select-none pointer-events-none w-full text-center";

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] bg-[#efefef] flex flex-col items-center justify-center overflow-hidden font-['Inter']"
    >
      {/* Top labels */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute top-[8%] left-0 w-full flex justify-between px-[6%] text-[11px] md:text-[13px] text-[#555] tracking-wide z-20"
      >
        <span>for watching</span>
        <span className="hidden md:inline-block absolute left-1/2 -translate-x-1/2">for attention</span>
        <span>
          for your <span className="font-bold italic text-[#222]">time</span>
        </span>
      </motion.div>

      {/* Background Dark Text */}
      <motion.div
        variants={bigTextVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-full z-0 flex items-center justify-center"
      >
        <span className={`${bigTextClass} text-[#222]`}>Thank you</span>
      </motion.div>

      {/* Center Image with Ghost Text Overlay */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 w-[70vw] md:w-[32vw] max-w-[450px] aspect-[4/5] md:aspect-square overflow-hidden bg-gray-200 shadow-xl"
      >
        <img
          src={thankyouimg}
          alt="Thank you interior"
          className="w-full h-full object-cover"
        />

        {/* Ghost Text - perfectly aligned using the container's width */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] z-20 flex items-center justify-center pointer-events-none"
          style={{ width: containerWidth ? `${containerWidth}px` : "100vw" }}
        >
          <span className={`${bigTextClass} text-white/85 drop-shadow-sm`}>
            Thank you
          </span>
        </div>
      </motion.div>

      {/* Bottom labels */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute bottom-[8%] left-0 w-full flex flex-col md:flex-row justify-between px-[6%] text-[11px] md:text-[13px] text-[#555] z-20 gap-4"
      >
        <span className="leading-relaxed">
          Feel free to share your thoughts<br className="hidden md:block" />
          — <span className="font-bold italic text-[#222]">it means a lot.</span>
        </span>
        <span className="text-left md:text-right">
          If you have a project in mind,{" "}
          <span className="font-bold italic text-[#222]">let's talk.</span>
        </span>
      </motion.div>
    </section>
  );
};

export default Footer;