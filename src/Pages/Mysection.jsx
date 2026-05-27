 

 import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import errorbg from "../assets/404error.png"

const Mysection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden font-['Inter'] bg-black">
      {/* Background Image */}
      <img
        src={errorbg}
        alt="404 Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 py-10 md:px-16 md:py-14">
        {/* Main Content */}
        <div className="flex items-cente h-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-[520px]"
          >
         {/* 404 */}
<motion.h1
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.1, duration: 0.8 }}
  className="
    text-white
    font-light
    leading-none
    text-[72px]
    sm:text-[110px]
    md:text-[150px]
    lg:text-[170px]
    tracking-tight
  "
>
  404
</motion.h1>

{/* Title */}
<motion.h2
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.25, duration: 0.7 }}
  className="
    text-white
    font-normal
    text-[22px]
    sm:text-[32px]
    md:text-[42px]
    leading-tight
    mt-2
  "
>
  This space is undefined.
</motion.h2>

{/* Description */}
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="
    text-white/75
    mt-3
    text-[13px]
    sm:text-base
    leading-relaxed
    max-w-[300px]
    sm:max-w-[420px]
  "
>
  Let&apos;s return to something carefully designed.
</motion.p>

{/* Button */}
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="
    mt-8
    group
    flex
    items-center
    justify-between
    gap-3
    border
    border-white/30
    text-white
    w-[220px]
    sm:w-[320px]
    px-4
    sm:px-5
    py-3
    sm:py-4
    backdrop-blur-sm
    bg-white/5
    hover:bg-white/10
    transition-all
    duration-300
  "
>
  <ArrowLeft
    size={18}
    className="transition-transform duration-300 group-hover:-translate-x-1"
  />

  <span className="flex-1 text-center text-sm sm:text-base">
    Back to Home
  </span>
</motion.button>
          </motion.div>
        </div>

        {/* Bottom Right Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="
            self-start
            md:self-end
            text-left
            md:text-right
            text-white/60
            text-sm
            leading-relaxed
            max-w-[180px]
          "
        >
          <p>Not every</p>
          <p>space is meant</p>
          <p className="italic text-white font-medium">to be found</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mysection;