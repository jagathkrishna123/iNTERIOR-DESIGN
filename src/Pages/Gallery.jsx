
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import gallerimg1 from "../assets/gallerimg1.png";
import gallerimg2 from "../assets/gallerimg2.png";
import gallerimg3 from "../assets/gallerimg3.png";
import gallerimg4 from "../assets/gallerimg4.png";
import gallerimg5 from "../assets/gallerimg5.png";

const services = [
  {
    id: 1,
    title: "Interior Design",
    description:
      "Full-cycle design from concept to final styling.",
    image: gallerimg1,
    imageHeight: "h-[430px]",
  },

  {
    id: 2,
    title: "Space Planning",
    description:
      "Smart layouts that maximize both form and function.",
    image: gallerimg2,
    imageHeight: "h-[530px]",
  },

  {
    id: 3,
    title: "Styling & Materials",
    description:
      "Furniture, textiles, and details curated with precision.",
    image: gallerimg3,
    imageHeight: "h-[430px]",
  },

  {
    id: 4,
    title: "Consultation",
    description:
      "Expert advice tailored to your space and vision.",
    image: gallerimg4,
    imageHeight: "h-[660px]",
  },

  {
    id: 5,
    title: "Furniture & Custom Design",
    description:
      "Custom-designed pieces that bring identity and uniqueness to your interior.",
    image: gallerimg5,
    imageHeight: "h-[270px]",
  },
];

const Gallery = () => {
  const mobileScrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: mobileScrollRef });

  return (
    <section id="services" className="w-full bg-[#f8f8f8] font-inter px-4 md:px-10 lg:px-16 py-10 md:py-16 overflow-hidden">

      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16 md:mb-24">

        {/* Left */}
        <div className="flex items-center gap-2 text-[12px] text-[#222] mt-2">
          <span className="text-[7px]">◆</span>
          <p>Services</p>
        </div>

        {/* Right */}
        <div className="max-w-[620px]">

          <p
            className="
              text-[18px]
              sm:text-[22px]
              md:text-[30px]
              leading-[1.15]
              tracking-[-0.03em]
              text-[#222]
              font-light
            "
          >
            We offer a complete approach to interior
            design — from initial concept to final detail.
            Each project is carefully shaped to reflect your{" "}
            <span className="italic font-semibold">
              space
            </span>
            , your{" "}
            <span className="italic font-semibold">
              lifestyle
            </span>
            , and your{" "}
            <span className="italic font-semibold">
              vision.
            </span>
          </p>

        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div 
        ref={mobileScrollRef}
        className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 scroll-smooth" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >

        <div className="flex gap-5 pb-4 items-stretch">

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-[85vw] flex-shrink-0 snap-center flex flex-col"
            >

              {/* Image */}
              <div className="w-full h-[400px] overflow-hidden mb-5 flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow justify-between">

                <div>
                  <h3 className="text-[20px] text-[#222] mb-2 leading-none font-medium">
                    {service.title}
                  </h3>

                  <p className="text-[12px] text-[#6d6d6d] leading-[1.5] mb-6 max-w-[280px]">
                    {service.description}
                  </p>
                </div>

                <div>
                  {/* Button */}
                  <button className="border border-[#bfbfbf] px-5 py-3 text-[11px] text-[#222] flex items-center justify-between w-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                    Learn Service
                    <span>→</span>
                  </button>

                  {/* Counter */}
                  <div className="flex justify-end mt-5">
                    <p className="text-[12px] text-[#6d6d6d]">
                      {index + 1}/5
                    </p>
                  </div>
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>

      {/* Progress Bar (Mobile only) */}
      <div className="md:hidden flex justify-center mt-6">
        <div className="w-24 h-[2px] bg-[#e0e0e0] relative overflow-hidden rounded-full">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#222]" 
            style={{ scaleX: scrollXProgress, transformOrigin: "left" }} 
          />
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:block">

        <div className="relative w-full min-h-[1700px]">

          {services.map((service, index) => {

            const layouts = [
              "absolute left-[4%] top-[2%] w-[22%]",
              "absolute right-[4%] top-[2%] w-[34%]",
              "absolute left-[38%] top-[30%] w-[22%]",
              "absolute left-[0%] bottom-[2%] w-[30%]",
              "absolute right-[4%] bottom-[4%] w-[38%]",
            ];

            return (
              <motion.div
                key={service.id}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className={layouts[index]}
              >

                {/* Image */}
                <div
                  className={`
                    w-full
                    overflow-hidden
                    mb-4
                    ${service.imageHeight}
                  `}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />
                </div>

                {/* Content */}
                <div className="max-w-[260px]">

                  <h3
                    className="
                      text-[24px]
                      leading-none
                      text-[#222]
                      mb-2
                      font-normal
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      text-[11px]
                      leading-[1.5]
                      text-[#6d6d6d]
                      mb-5
                    "
                  >
                    {service.description}
                  </p>

                  {/* Button */}
                  <button
  className="
    border
    border-[#8f8f8f]
    px-6
    py-3
    text-[12px]
    text-[#222]
    flex
    items-center
    justify-between
    min-w-[170px]
    hover:bg-black
    hover:text-white
    transition-all
    duration-300
  "
>
  Learn Service
  <span className="text-[14px]">→</span>
</button>

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="flex justify-end mt-16 md:mt-20">

       

      </div>

    </section>
  );
};

export default Gallery;