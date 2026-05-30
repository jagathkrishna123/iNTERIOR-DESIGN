import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import bgimage from "../assets/bgimage.png";
import bgimage2 from "../assets/bgimage2.png";
import tableimg from "../assets/table2.png";
import luxury from "../assets/lux.png";
import bluetable from "../assets/bluetable.png";
import explore from "../assets/explore.png";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import { motion, AnimatePresence } from "framer-motion";

import { cards, stats } from "../assets/assets";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiSolidRightArrow } from "react-icons/bi";

const Landingpage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative w-full h-[100dvh] overflow-hidden bg-black font-inter"
      >
        {/* Background Image */}
        <img
          src={bgimage2}
          alt="Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 w-full h-[50%] bg-[#242628] z-[2]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/35 z-[1]" />

        {/* Top Navigation */}
        <nav className="absolute top-0 left-0 w-full z-40 px-6 md:px-10 lg:px-16 py-6 md:py-8 flex justify-between items-center text-white">
          {/* Left Links (Desktop) */}
          <div className="hidden md:flex gap-8 lg:gap-12 text-sm font-light">
            <a
              href="#home"
              className="hover:text-gray-300 transition tracking-wide"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:text-gray-300 transition tracking-wide"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="hover:text-gray-300 transition tracking-wide"
            >
              Portfolio
            </a>
          </div>

          {/* Mobile Brand Logo */}
          <div className="md:hidden text-2xl font-serif font-bold italic tracking-widest mt-1">
            V
          </div>

          {/* Right Info (Desktop) */}
          <div className="hidden md:flex gap-8 lg:gap-12 text-sm font-light items-center">
            <a
              href="#testimonials"
              className="hover:text-gray-300 transition tracking-wide"
            >
              Testimonials
            </a>
            <p className="text-gray-400">©2026</p>
          </div>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center border border-white/20 rounded-sm relative z-50 transition-colors hover:bg-white/10"
            onClick={() => setIsSidebarOpen(true)}
          >
            <HiOutlineMenuAlt3 className="text-white text-[22px]" />
          </button>
        </nav>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 bg-[#1a1a1a] z-50 transition-transform duration-500 ease-in-out flex flex-col items-center justify-center ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-8 right-6 text-3xl text-white"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes />
          </button>

          <div className="flex flex-col items-center gap-10 text-white text-2xl font-light tracking-wide">
            <a
              href="#home"
              onClick={() => setIsSidebarOpen(false)}
              className="hover:text-gray-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setIsSidebarOpen(false)}
              className="hover:text-gray-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={() => setIsSidebarOpen(false)}
              className="hover:text-gray-400 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsSidebarOpen(false)}
              className="hover:text-gray-400 transition-colors"
            >
              Testimonials
            </a>
          </div>

          <div className="absolute bottom-10 text-gray-500 text-sm tracking-widest">
            © 2026 VELORA
          </div>
        </div>

        {/* Small Labels */}
        <div className="absolute top-[22%] md:top-[33%] left-0 w-full z-20 flex justify-between md:justify-center px-8 md:px-0 md:gap-[15vw] lg:gap-[300px] text-white/80 md:text-white text-[10px] md:text-sm tracking-widest uppercase">
          <p>Interior</p>
          <p className="hidden md:block">Design</p>
          <p>Studio</p>
        </div>

        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
        >
          {/* Desktop Text */}
          <h1 className="hidden md:block mt-1 text-white font-pop uppercase font-semibold -tracking-tighter leading-none text-[160px] lg:text-[220px] xl:text-[260px]">
            VÉLORA
          </h1>

          {/* Mobile Text (Stacked) */}
          <h1 className="md:hidden mt-[-15%] flex flex-col items-center text-white font-pop uppercase font-semibold -tracking-tighter leading-[0.85] text-[40vw] text-center w-full">
            <span className="mr-4">VÉL</span>
            <span className="ml-4">ORA</span>
          </h1>
        </motion.div>

        {/* Table Image */}
        {/* <img
          src={tableimg}
          alt="Table"
          className="absolute z-20 left-1/2 bottom-[2%] md:bottom-[-30px] -translate-x-1/2 min-w-[500px] md:min-w-0 w-[140vw] md:w-[420px] lg:w-[520px] xl:w-[600px] object-cover md:object-contain pointer-events-none scale-110 md:scale-100"
        /> */}
        {/* Table Image */}
        {/* <img
          src={tableimg}
          alt="Table"
          className="
    absolute z-20
    right-[-45%] sm:right-[-30%] md:left-1/2
    bottom-[2%] md:bottom-[-30px]
    md:-translate-x-1/2
    w-[150vw] sm:w-[120vw] md:w-[420px] lg:w-[520px] xl:w-[600px]
    max-w-none
    object-cover md:object-contain
    pointer-events-none
    scale-110 md:scale-100
  "
        /> */}

        <img
          src={tableimg}
          alt="Table"
          className="
    absolute z-20
    right-[-45%] sm:right-[-30%] md:left-1/2
    bottom-[-6%] md:bottom-[-60px]
    md:-translate-x-1/2
    w-[150vw] sm:w-[120vw] md:w-[420px] lg:w-[520px] xl:w-[700px]
    max-w-none
    object-cover md:object-contain
    pointer-events-none
    scale-110 md:scale-100
  "
        />
      </section>

      {/* ABOUT SECTION -------------------------------------------------------*/}

      <section className="relative w-full overflow-hidden bg-[#bababa] font-['Inter'] py-10 md:py-16">
        {/* Background Blur Shape */}
        <div className="absolute top-[-120px] right-[-100px] w-[350px] h-[350px] bg-[#d9d9d9] rounded-full blur-[120px] opacity-60" />

        <div className="max-w-[1450px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-14">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-[24%] flex flex-col justify-between"
            >
              {/* Small Label */}
              <div className="flex items-center gap-3 text-[#222]">
                <div className="w-2 h-2 bg-black rotate-45" />
                <p className="uppercase tracking-[0.25em] text-[12px] font-medium">
                  About Project
                </p>
              </div>

              {/* Big Heading */}
              <div className="mt-10">
                <h2 className="max-w-[320px] md:max-w-[420px] text-[37px] md:text-[56px] leading-[1] font-light text-[#111]">
                  Designed for modern living.
                </h2>

                <p className="mt-8 text-[15px] leading-[1.9] text-[#444] max-w-[280px]">
                  <span className="font-semibold">Velora</span> is a conceptual
                  landing page for an{" "}
                  <span className="italic font-medium">
                    interior design studio
                  </span>{" "}
                  inspired by Milan aesthetics and the philosophy of{" "}
                  <span className="italic font-medium">quiet luxury.</span>
                </p>
              </div>

              {/* Decorative Line */}
              <div className="hidden lg:block mt-10">
                <div className="w-[120px] h-[1px] bg-[#bdbdbd]" />
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="flex-1">
              {/* MOBILE SCROLL */}
              <div className="flex gap-5 overflow-x-auto lg:hidden pb-4 snap-x snap-mandatory no-scrollbar py-2">
                {cards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="
                    min-w-[88%]
                    bg-white/70
                    backdrop-blur-xl
                    border border-[#d6d6d6]
                    rounded-[20px]
                    px-5 py-3
                    snap-center
                    shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                  "
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className=" text-[18px] font-light text-[#111]">
                        {card.title}
                      </h3>

                      <div className="flex items-center gap-2 text-[#999]">
                        <div className="w-2 h-2 bg-[#999] rotate-45" />
                        <span className="md:text-[22px] text-[16px]">
                          {card.id}
                        </span>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative overflow-hidden rounded-[22px] h-[280px]">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Text */}
                    <p className="mt-5 text-[10px] md:text-[14px] leading-[1.9] text-[#444]">
                      {card.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* DESKTOP GRID */}
              <div className="hidden lg:grid grid-cols-2 gap-7">
                {cards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -12,
                      transition: { duration: 0.3 },
                    }}
                    className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border border-[#d8d8d8]
                    bg-white/60
                    backdrop-blur-xl
                    p-7
                    shadow-[0_15px_60px_rgba(0,0,0,0.05)]
                  "
                  >
                    {/* Glow */}
                    <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-white blur-[100px] opacity-60" />

                    {/* Header */}
                    <div className="relative flex items-center justify-between border-b border-[#dcdcdc] pb-4 mb-6">
                      <h2 className="text-[28px] text-[#111] font-light">
                        {card.title}
                      </h2>

                      <div className="flex items-center gap-2 text-[#a8a8a8]">
                        <div className="w-2 h-2 bg-[#999] rotate-45" />
                        <span className="text-[28px]">{card.id}</span>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="relative overflow-hidden rounded-[24px] h-[420px] mb-6">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="
                        w-full
                        h-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>

                    {/* Text */}
                    <p className="relative text-[15px] leading-[1.9] text-[#444] max-w-[90%]">
                      {card.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury banner ----------------------------------------------------------------------------------- */}

      <section className="w-full h-screen bg-[#efefef]">
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={luxury}
            alt="Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="absolute bottom-6 right-6 md:bottom-8 md:right-8"
          >
            <p className="text-white uppercase font-outfit tracking-[0.35em] text-[16px] md:text-[20px] lg:text-[24px] font-medium drop-shadow-lg">
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
        <div className="absolute inset-0 bg-black/45 z-[1]" />

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
          items-center
          justify-between
        "
        >
          {/* Menu */}
          <div className="hidden md:flex flex-col text-white text-[15px] leading-[2]">
            <p>About</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>

          {/* Button (Desktop only) */}
          <button
            onClick={() => setOpenModal(true)}
            className="
            hidden
            md:flex
            bg-white
            text-black
            px-6
            py-3
            text-[13px]
            rounded-sm
            items-center
            gap-8
            hover:bg-[#f2f2f2]
            transition-all
            duration-300
          "
          >
            Book a Consultation
<BiSolidRightArrow className="text-gray-600"/>
          </button>

          {/* Hamburger Menu (Mobile only) */}
          {/* <button
            className="md:hidden w-11 h-11 flex items-center justify-center border border-white/20 rounded-sm relative z-50 transition-colors hover:bg-white/10"
            onClick={() => setIsSidebarOpen(true)}
          >
            <HiOutlineMenuAlt3 className="text-white text-[22px]" />
          </button> */}
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
          left-6
          top-[14%]
          md:top-auto
          md:left-16
          md:bottom-52
          z-20
          text-white
          text-[14px]
          leading-[1.6]
        "
        >
          <p className="font-light tracking-wide">
            Every <span className="italic font-bold">line</span>, every
            <br />
            <span className="italic font-bold">volume</span>, every{" "}
            <span className="italic font-bold">detail</span>
            <br />
            exists for a reason.
          </p>
        </motion.div>

        {/* Top Right Tag (Desktop only) */}
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
          hidden
          md:block
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

        {/* Center Description (Desktop only) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.6,
          }}
          viewport={{ once: true }}
          className="
            hidden
            md:block
            absolute
            top-[24%]
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
            Refined spaces shaped by Italian aesthetics, natural materials, and
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
        "
        >
          {/* Desktop Text */}
          <span className="hidden md:block text-[180px] md:text-[240px] lg:text-[320px] font-inter uppercase font-normal">
            Velora
          </span>

          {/* Mobile Text (Stacked) */}
          <span className="md:hidden mt-[-15%] flex flex-col items-center font-pop uppercase font-semibold leading-[0.85] text-[35vw] text-center w-full">
            <span>VEL</span>
            <span>ORA</span>
          </span>
        </motion.h1>

        {/* Blue Table PNG */}
        <img
          src={bluetable}
          alt="Blue Table"
          className="
          absolute
          left-1/2
          bottom-[8%]
          md:bottom-[-20px]
          -translate-x-1/2
          z-20
          w-[140vw]
          sm:w-[90vw]
          md:w-[420px]
          lg:w-[600px]
          object-contain
          pointer-events-none
        "
        />

        {/* Bottom Left (Desktop only) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          viewport={{ once: true }}
          className="
          hidden
          md:block
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

        {/* Bottom Right (Desktop only) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          viewport={{ once: true }}
          className="
          hidden
          md:block
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

        {/* Floating Tags (Desktop only) */}
        <div
          className="
          hidden
          md:block
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
          hidden
          md:block
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

        {/* Mobile Bottom Info & Button */}
        <div className="absolute bottom-6 left-6 right-6 z-30 md:hidden flex flex-col gap-4">
          <p className="text-white text-[13px] leading-[1.5] font-light max-w-[255px] font-pop">
            Refined spaces shaped by Italian aesthetics, natural materials, and
            modern living.
          </p>
          <button
            onClick={() => setOpenModal(true)}
            className="w-full bg-white text-black py-4 px-6 text-[13px] rounded-sm font-medium flex items-center justify-between hover:bg-[#f2f2f2] transition-all duration-300"
          >
            Book a Consultation
<BiSolidRightArrow className="text-gray-600"/>
          </button>
        </div>
      </section>

      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ y: 80, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full max-w-[520px] font-outfit bg-[#1F2123] border border-white/10 p-7 sm:p-10 relative rounded-sm"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-5 right-5 text-white/60 hover:text-white transition"
              >
                <IoIosCloseCircleOutline className="text-[23px] md:text-[28px]" />
              </button>

              <h2 className="text-[30px] sm:text-[40px] font-light text-gray-400 tracking-[-0.03em] mb-2">
                Book a Consultation
              </h2>

              <p className="text-white/50 text-sm mb-8">
                Tell us about your dream space.
              </p>

              {/* Form */}
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full h-[54px] text-gray-500 rounded-sm bg-transparent border border-white/10 px-4 text-sm outline-none focus:border-white/40 transition"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-[54px] text-gray-500 bg-transparent border border-white/10 px-4 text-sm outline-none focus:border-white/40 transition rounded-sm"
                />

                <input
                  type="text"
                  placeholder="Project Type"
                  className="w-full h-[54px] text-gray-500 bg-transparent border border-white/10 px-4 text-sm outline-none focus:border-white/40 transition rounded-sm"
                />

                <textarea
                  rows="5"
                  placeholder="Tell us more about your project..."
                  className="w-full text-gray-500 bg-transparent border border-white/10 p-4 text-sm outline-none resize-none focus:border-white/40 transition rounded-sm"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-[56px] bg-slate-300 text-black text-sm tracking-wide hover:bg-[#EAEAEA] transition rounded-xs"
                >
                  Submit Request
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* grey section ....................................................*/}

      <section className="w-full bg-[#242628] text-white font-['Inter'] px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-20 overflow-hidden">
        {/* Top Area */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-16 mb-14 md:mb-24">
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
              className="
          flex
          items-center
          gap-2
          mb-6
          md:mb-10
          text-[12px]
          md:text-[15px]
        "
            >
              <span className="text-[6px] md:text-[8px]">◆</span>
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
          text-[24px]
          sm:text-[32px]
          md:text-[56px]
          lg:text-[64px]
          leading-[1.05]
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
        hidden
        lg:block
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
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/10 lg:border-none">
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
          border-white/10
          border-b
          border-r
          lg:border-l
          lg:border-b-0
          lg:border-r-0
          p-4
          md:p-8
          min-h-[180px]
          md:min-h-[220px]
          flex
          flex-col
          justify-between
        "
            >
              {/* Top Label */}
              <p className="text-[13px] md:text-[18px] text-[#d7d7d7]">
                {item.title}
              </p>

              {/* Main Value */}
              <h3
                className="
            text-[52px]
            sm:text-[64px]
            md:text-[88px]
            leading-none
            tracking-[-0.04em]
            font-light
          "
              >
                {item.value}
              </h3>

              {/* Bottom Description */}
              <p className="text-[13px] md:text-[18px] text-[#8f8f8f] leading-[1.4]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Explore section-------------------------------------------------------------------------- */}

      <section className="w-full h-screen overflow-hidden font-['Inter'] relative bg-black">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="
    absolute inset-0
    bg-cover
    bg-[position:29%_center]
    md:bg-center
  "
          style={{
            backgroundImage: `url(${explore})`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex flex-col justify-between px-8 md:px-14 lg:px-16 py-10">
          {/* Top Content */}
          <div className="flex justify-between items-start w-full">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[720px] mt-8"
            >
              <h1 className="text-white text-[26px] md:text-[42px] leading-[1.15] font-light tracking-[-0.02em]">
                <span className="mr-2">♦ </span>
                A space should feel as good as it looks.
                <br />
                Let’s create something{" "}
                <span className="italic font-extralight text-white/80">
                  timeless together.
                </span>
              </h1>
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.7,
                ease: "easeOut",
              }}
              className="mt-10 hidden md:block"
            >
              <button className="group border border-white/60 w-[310px] h-[60px] text-white flex items-center justify-center gap-8 hover:bg-white hover:text-black transition-all duration-500">
                <span className="text-[15px] tracking-wide">
                  Explore Velora
                </span>

                <span className="text-xl transition-transform duration-500 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </motion.div>
          </div>

          {/* Bottom Content */}
          <div className="w-full">
            {/* Bottom Left Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeOut",
              }}
              className="mb-10"
            >
              <p className="text-white/80 text-[15px] leading-[1.2] font-light max-w-[180px]">
                Quiet luxury,
                <br />
                shaped by detail.
                <br />
                Inspired by Milan.
                <br />
                Designed for you.
              </p>
            </motion.div>

            {/* Bottom Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 1.2,
                delay: 1.2,
                ease: "easeInOut",
              }}
              className="w-full h-[1px] bg-white/20 origin-left"
            />
          </div>
        </div>
      </section>

      {/* SECTION....................................................................... */}
      <section className="w-full bg-[#242628] text-white font-['Inter'] px-5 sm:px-8 md:px-10 lg:px-14 pt-10 md:pt-14 pb-5 overflow-hidden">
        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-14 md:gap-20 mb-16 md:mb-24">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[620px]"
          >
            <h2 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-[1.08] font-light tracking-[-0.03em] text-white">
              Creating refined interiors
              <br />
              inspired by Italian aesthetics,
              <br />
              where every detail feels
              <br />
              intentional and timeless.
            </h2>

            {/* Button */}
            <motion.button
              onClick={() => setOpenForm(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-8 bg-[#F2F2F2] text-black w-[240px] sm:w-[270px] h-[54px] flex items-center cursor-pointer justify-center gap-5 hover:bg-white transition-all duration-500"
            >
              <span className="text-[13px] sm:text-[14px] tracking-wide">
                Book a Consultation
              </span>

              <BiSolidRightArrow className="text-gray-600 text-xs md:text-md"/>

            </motion.button>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col w-full max-w-[520px]"
          >
            {/* Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
              {/* Menu */}
              <div>
                <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-5">
                  Menu
                </p>

                <ul className="space-y-2 text-[15px] sm:text-[16px] font-light">
                  {[
                    "Home",
                    "About",
                    "Services",
                    "Portfolio",
                    "Testimonials",
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="hover:text-white/70 cursor-pointer transition"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Studio */}
              <div>
                <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-5">
                  Studio
                </p>

                <div className="space-y-2 text-[15px] sm:text-[16px] font-light leading-[1.5]">
                  <p>Milan, Italy</p>
                  <p>(Available worldwide)</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-5">
                  Contact
                </p>

                <div className="space-y-2 text-[15px] sm:text-[16px] font-light leading-[1.5] break-words">
                  <p>hello@velora.studio</p>
                  <p>+39 02 1234 5678</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="w-full h-[1px] bg-white/10 my-10 origin-left"
            />

            {/* Studio Name + Socials */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-[28px] sm:text-[36px] md:text-[42px] font-light tracking-[-0.03em]"
              >
                Interior Design Studio
              </motion.h3>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                {[
                  <FaXTwitter size={15} />,
                  <AiFillInstagram size={15} />,
                  <FaFacebookSquare size={15} />,
                  <FaYoutube size={15} />,
                ].map((icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="w-10 h-10 bg-white/10 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center cursor-pointer"
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Huge Brand Text */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full overflow-hidden leading-none"
        >
          <h1 className="text-[70px] sm:text-[110px] md:text-[160px] lg:text-[240px] xl:text-[300px] font-normal tracking-[-0.05em] text-[#ECECEC]">
            VELORA
          </h1>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="border-t border-white/10 pt-4 mt-3 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/60 text-xs sm:text-sm"
        >
          <p>© 2026 Velora. All rights reserved</p>

          <div className="flex items-center gap-5">
            <p className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-white transition cursor-pointer">
              Terms of Use
            </p>
          </div>
        </motion.div>
      </section>
      <AnimatePresence>
        {openForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ y: 80, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full max-w-[520px] font-outfit bg-[#1F2123] border border-white/10 p-7 sm:p-10 relative rounded-sm"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenForm(false)}
                className="absolute top-5 right-5 text-white/60 hover:text-white transition"
              >
                <IoIosCloseCircleOutline className="text-[23px] md:text-[28px]" />
              </button>

              <h2 className="text-[30px] sm:text-[40px] font-light text-gray-400 tracking-[-0.03em] mb-2">
                Book a Consultation
              </h2>

              <p className="text-white/50 text-sm mb-8">
                Tell us about your dream space.
              </p>

              {/* Form */}
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full h-[54px] text-gray-500 bg-transparent border border-white/10 px-4 text-sm outline-none focus:border-white/40 transition rounded-sm"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-[54px] text-gray-500 bg-transparent border border-white/10 px-4 text-sm outline-none focus:border-white/40 transition rounded-sm"
                />

                <input
                  type="text"
                  placeholder="Project Type"
                  className="w-full h-[54px] text-gray-500 bg-transparent border border-white/10 px-4 text-sm outline-none focus:border-white/40 transition rounded-sm"
                />

                <textarea
                  rows="5"
                  placeholder="Tell us more about your project..."
                  className="w-full text-gray-500 bg-transparent border border-white/10 p-4 text-sm outline-none resize-none focus:border-white/40 transition rounded-sm"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-[56px] bg-slate-300 text-black text-sm tracking-wide hover:bg-[#EAEAEA] transition rounded-xs"
                >
                  Submit Request
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Landingpage;
