import React from "react";
import bgimage from "../assets/bgimage.png";
import bgimage2 from "../assets/bgimage2.png";
import tableimg from "../assets/table2.png";
import roomimg from "../assets/roomimg.png";
import sketch from "../assets/sketch.png";
import luxury from "../assets/lux.png";
import bluetable from "../assets/bluetable.png";

import { motion } from "framer-motion";
import { stats } from "../assets/assets";

const Landingpage = () => {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-black font-inter">
        {/* Background Image */}
        <img
          src={bgimage}
          alt="Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <motion.div
          initial={{
            y: "-100%",
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
    absolute
    top-0
    left-0
    w-full
    h-[50%]
    bg-[#242628]
    z-[2]
  "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35 z-[1]" />

        {/* Top Navigation */}
        <div className="absolute top-0 left-0 w-full z-30 px-8 py-8 flex justify-between items-start text-white text-sm">
          <div>
            <p>Landing page</p>
          </div>

          <div className="text-2xl font-semibold">V</div>

          <div className="flex gap-24">
            <div className="leading-5">
              <p>Designed</p>
              <p>by Dmitrij Mišnik</p>
            </div>

            <div>
              <p>©2026</p>
            </div>
          </div>
        </div>

        {/* Small Labels */}
        <div className="absolute top-[33%] left-0 w-full z-20 flex justify-center gap-[260px] text-white text-sm tracking-wide">
          <p>Interior</p>
          <p>Design</p>
          <p>Studio</p>
        </div>

        {/* Main Text */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.8,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <h1
            className="
          mt-1
            text-white
            font-pop
            uppercase
            font-semibold
            -tracking-tighter
            leading-none
            text-[220px]
            xl:text-[260px]
            lg:text-[220px]
            md:text-[160px]
            sm:text-[110px]
          "
          >
            VELORA
          </h1>
        </motion.div>

        {/* Table Image */}
        <img
          src={tableimg}
          alt="Table"
          className="
          absolute
          z-20
          left-1/2
          bottom-[-30px]
          -translate-x-1/2
          w-[520px]
          xl:w-[600px]
          lg:w-[520px]
          md:w-[420px]
          sm:w-[300px]
          object-contain
          pointer-events-none
        "
        />
      </section>

      {/* ABOUT SECTION -------------------------------------------------------*/}

      <section className="w-full bg-[#ebebeb] font-['Inter'] py-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left Content */}
          <div className="lg:w-[20%] flex flex-col justify-between">
            {/* Small Title */}
            <div className="flex items-center gap-2 text-[#222] text-[14px] font-medium">
              <span className="text-[8px]">◆</span>
              <p>About project</p>
            </div>

            {/* Description */}
            <div className="max-w-[200px] text-[#222] text-[14px] leading-[1.7]">
              <p>
                <span className="font-semibold">Velora</span> is a conceptual
                landing page for an{" "}
                <span className="font-semibold italic">
                  interior design studio
                </span>{" "}
                inspired by the aesthetics of Milan and the philosophy of{" "}
                <span className="font-semibold italic">quiet luxury.</span>
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="border border-[#b9b9b9] p-6 bg-transparent">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#d2d2d2] pb-3 mb-6">
                <h2 className="text-[24px] text-[#222] font-normal">Task</h2>

                <div className="flex items-center gap-2 text-[#b2b2b2]">
                  <span className="text-[8px]">◆</span>
                  <span className="text-[24px]">01</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full h-[320px] overflow-hidden mb-5">
                <img
                  src={sketch}
                  alt="Task"
                  className="w-full h-full object-cover scale-[1.5]"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Text */}
              <p className="text-[15px] leading-[1.8] text-[#222]">
                The goal of the project was to design a modern, high-end landing
                page that communicates elegance, clarity, and professionalism.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-[#b9b9b9] p-6 bg-transparent">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#d2d2d2] pb-3 mb-6">
                <h2 className="text-[24px] text-[#222] font-normal">
                  Solution
                </h2>

                <div className="flex items-center gap-2 text-[#b2b2b2]">
                  <span className="text-[8px]">◆</span>
                  <span className="text-[24px]">02</span>
                </div>
              </div>

              {/* Image */}
              <div className="w-full h-[320px] overflow-hidden mb-5">
                <img
                  src={roomimg}
                  alt="Solution"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <p className="text-[15px] leading-[1.8] text-[#222]">
                The solution was to develop a clean and structured layout where
                each section acts as a visual composition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury banner ----------------------------------------------------------------------------------- */}

      <section className="w-full bg-[#efefef] pb-16">
        <div className="relative w-full overflow-hidden">
          {/* Main Image */}
          <img
            src={luxury}
            alt="Interior"
            className="
        w-full
        h-[500px]
        md:h-[650px]
        lg:h-[780px]
        object-cover
      "
          />
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Bottom Right Text */}
          <motion.div
            initial={{opacity: 0, y: 40,}}
            whileInView={{opacity: 1,  y: 0, }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], }}
            viewport={{ once: true, }}
            className="
        absolute
        bottom-6
        right-6
        md:bottom-8
        md:right-8
      "
          >
            <p
              className="
    text-white
    uppercase
    font-outfit
    tracking-[0.35em]
    text-[16px]
    md:text-[20px]
    lg:text-[24px]
    font-medium
    drop-shadow-lg
  "
            >
              Quiet Luxury Interior
            </p>
          </motion.div>
        </div>
      </section>

      {/* HERO SECTION 2 -------------------------------------------------------------------------- */}

       <section className="relative w-full h-screen overflow-hidden bg-black font-['Inter']">

      {/* Background Image */}
      <img
        src={bgimage2}
        alt="Interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35 z-[1]" />

      {/* Top Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="
          absolute
          top-0
          left-0
          w-full
          z-30
          px-6
          md:px-10
          lg:px-16
          py-6
          flex
          items-start
          justify-between
        "
      >

        {/* Logo */}
        <div className="text-white text-4xl font-semibold">
          V
        </div>

        {/* Menu */}
        <div className="hidden md:flex flex-col text-white text-[15px] leading-[2]">
          <p>About</p>
          <p>Services</p>
          <p>Portfolio</p>
          <p>Testimonials</p>
          <p>Contact</p>
        </div>

        {/* Button */}
        <button
  className="
    bg-white
    text-black
    px-6
    py-3
    text-[13px]
    rounded-sm
    flex
    items-center
    gap-8
    hover:bg-[#f2f2f2]
    transition-all
    duration-300
  "
>
  Book a Consultation
  <span className="text-lg">→</span>
</button>
      </motion.div>

      {/* Left Small Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="
          absolute
          left-16
          bottom-52
          z-20
          text-white
          text-[14px]
          leading-[1.6]
        "
      >
        <p>
          Every line, every
          <br />
          volume, every detail
          <br />
          exists for a reason.
        </p>
      </motion.div>

      {/* Top Right Tag */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="
          absolute
          right-40
          top-36
          z-20
        "
      >
        <div
          className="
            bg-white/10
            backdrop-blur-sm
            px-5
            py-3
            text-white
            text-[14px]
          "
        >
          ◆ Milan Inspired
        </div>
      </motion.div>

      {/* Center Description */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.6,
        }}
        viewport={{ once: true }}
        className="
              absolute
    top-[33%]
    right-[32%]
    z-20
    text-white
    text-[12px]
    md:text-[13px]
    lg:text-[14px]
    max-w-[260px]
    leading-[1.5]
    text-left
    font-pop
        "
      >
        <p>
          Refined spaces shaped by Italian
          aesthetics, natural materials, and
          modern living.
        </p>
      </motion.div>

      {/* Main Text */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.4,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          z-10
          text-white
          font-normal
          tracking-tight
          leading-none
          text-[180px]
          md:text-[240px]
          lg:text-[320px]
        "
      >
        Velora
      </motion.h1>

      {/* Blue Table PNG<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-------------- */}
      <img
        
        src={bluetable}
        alt="Blue Table"
        className="
          absolute
          left-1/2
          bottom-[-20px]
          -translate-x-1/2
          z-20
          w-[340px]
          md:w-[420px]
          lg:w-[600px]
          object-contain
          pointer-events-none
        "
      />

      {/* Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        viewport={{ once: true }}
        className="
          absolute
          left-6
          bottom-6
          z-20
          text-white
          text-[16px]
        "
      >
        Full-Service Design Studio
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        viewport={{ once: true }}
        className="
          absolute
          right-6
          bottom-6
          z-20
          text-white
          text-[16px]
        "
      >
        Collection 2026
      </motion.div>

      {/* Floating Tags */}
      <div
        className="
          absolute
          left-[22%]
          bottom-36
          z-20
          bg-white/10
          backdrop-blur-sm
          px-5
          py-3
          text-white
          text-[14px]
        "
      >
        ◆ Natural textures
      </div>

      <div
        className="
          absolute
          right-[18%]
          bottom-20
          z-20
          bg-white/10
          backdrop-blur-sm
          px-5
          py-3
          text-white
          text-[14px]
        "
      >
        ◆ Geometry & light
      </div>

    </section>

    {/* grey section ....................................................*/}

     <section className="w-full bg-[#242628] text-white font-['Inter'] px-6 md:px-10 lg:px-16 py-16 md:py-20 overflow-hidden">

      {/* Top Area */}
      <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">

        {/* Left Side */}
        <div className="flex-1">

          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-10 text-[15px]"
          >
            <span className="text-[8px]">◆</span>
            <p>About Velora</p>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="
              text-[42px]
              md:text-[56px]
              lg:text-[64px]
              leading-[1.1]
              tracking-[-0.03em]
              max-w-[900px]
              font-light
            "
          >
            Velora is an{" "}
            <span className="italic font-semibold">
              interior design studio
            </span>{" "}
            focused on creating calm, sophisticated spaces for modern living.
          </motion.h2>
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            lg:w-[420px]
            text-[16px]
            leading-[1.7]
            text-[#d7d7d7]
            pt-4
          "
        >
          <p>
            Inspired by Milan’s architectural clarity and timeless elegance,
            we combine natural materials, soft tones, and thoughtful
            composition to design interiors that feel effortless and refined.
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="
              border-l
              border-white/30
              pl-8
              min-h-[220px]
              flex
              flex-col
              justify-between
            "
          >

            {/* Top Label */}
            <p className="text-[18px] text-[#d7d7d7]">
              {item.title}
            </p>

            {/* Main Value */}
            <h3
              className="
                text-[72px]
                md:text-[88px]
                leading-none
                tracking-[-0.04em]
                font-light
              "
            >
              {item.value}
            </h3>

            {/* Bottom Description */}
            <p className="text-[18px] text-[#8f8f8f]">
              {item.description}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
    </>
  );
};

export default Landingpage;
