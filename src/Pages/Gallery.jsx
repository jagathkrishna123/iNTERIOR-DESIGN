

// import React, { useRef, useState, useEffect } from "react";

// import { motion, useScroll, AnimatePresence } from "framer-motion";

// import { X } from "lucide-react";

// import gallerimg1 from "../assets/gallerimg1.png";
// import gallerimg2 from "../assets/gallerimg2.png";
// import gallerimg3 from "../assets/gallerimg3.png";
// import gallerimg4 from "../assets/gallerimg4.png";
// import gallerimg5 from "../assets/gallerimg5.png";

// const services = [
//   {
//     id: 1,
//     title: "Interior Design",
//     description: "Full-cycle design from concept to final styling.",

//     detailedDescription:
//       "Our interior design service transforms spaces into refined environments that balance elegance, comfort, and functionality. From initial concepts and mood boards to lighting, furniture selection, textures, and final styling, every detail is carefully curated to reflect your personality and lifestyle.",

//     features: [
//       "Concept Development",
//       "Luxury Space Styling",
//       "Lighting & Material Selection",
//       "Furniture Planning",
//     ],

//     image: gallerimg1,
//     imageHeight: "h-[430px]",
//   },

//   {
//     id: 2,
//     title: "Space Planning",
//     description: "Smart layouts that maximize both form and function.",

//     detailedDescription:
//       "We create intelligent spatial layouts that improve movement, functionality, and visual balance. Every square foot is optimized to ensure harmony between aesthetics and usability.",

//     features: [
//       "Functional Layout Design",
//       "Traffic Flow Optimization",
//       "Modern Living Concepts",
//       "Custom Spatial Solutions",
//     ],

//     image: gallerimg2,
//     imageHeight: "h-[530px]",
//   },

//   {
//     id: 3,
//     title: "Styling & Materials",
//     description: "Furniture, textiles, and details curated with precision.",

//     detailedDescription:
//       "From luxurious fabrics to premium finishes and handcrafted decor, we carefully select materials and styling elements that create timeless and visually rich interiors.",

//     features: [
//       "Material Palette Selection",
//       "Furniture Styling",
//       "Luxury Textiles",
//       "Decor Curation",
//     ],

//     image: gallerimg3,
//     imageHeight: "h-[430px]",
//   },

//   {
//     id: 4,
//     title: "Consultation",
//     description: "Expert advice tailored to your space and vision.",

//     detailedDescription:
//       "Our consultation sessions help clients define their vision, solve design challenges, and make confident design decisions with expert professional guidance.",

//     features: [
//       "Design Direction",
//       "Project Planning",
//       "Budget Guidance",
//       "Professional Recommendations",
//     ],

//     image: gallerimg4,
//     imageHeight: "h-[660px]",
//   },

//   {
//     id: 5,
//     title: "Furniture & Custom Design",
//     description:
//       "Custom-designed pieces that bring identity and uniqueness to your interior.",

//     detailedDescription:
//       "We design bespoke furniture and custom interior elements tailored specifically for your project, ensuring exclusivity, craftsmanship, and individuality.",

//     features: [
//       "Custom Furniture",
//       "Bespoke Detailing",
//       "Premium Craftsmanship",
//       "Unique Design Identity",
//     ],

//     image: gallerimg5,
//     imageHeight: "h-[330px]",
//   },
// ];

// const Gallery = () => {
//   const mobileScrollRef = useRef(null);

//   const { scrollXProgress } = useScroll({
//     container: mobileScrollRef,
//   });

//   const [selectedService, setSelectedService] = useState(null);

//   // Prevent background scroll
// useEffect(() => {

//   if (selectedService) {

//     window.lenis?.stop();

//   } else {

//     window.lenis?.start();

//   }

//   return () => {
//     window.lenis?.start();
//   };

// }, [selectedService]);

//   return (
//     <section
//       id="services"
//       className="
//         w-full
//         bg-[#f8f8f8]
//         font-inter
//         px-4
//         md:px-10
//         lg:px-16
//         py-10
//         md:py-16
//         overflow-hidden
//       "
//     >
//       {/* TOP */}
//       <div
//         className="
//           flex
//           flex-col
//           md:flex-row
//           justify-between
//           items-start
//           gap-10
//           mb-16
//           md:mb-24
//         "
//       >
//         {/* Left */}
//         <div className="flex items-center gap-2 text-[12px] text-[#222] mt-2">
//           <span className="text-[7px]">◆</span>
//           <p>Services</p>
//         </div>

//         {/* Right */}
//         <div className="max-w-[620px]">
//           <p
//             className="
//               text-[18px]
//               sm:text-[22px]
//               md:text-[30px]
//               leading-[1.15]
//               tracking-[-0.03em]
//               text-[#222]
//               font-light
//             "
//           >
//             We offer a complete approach to interior design — from initial
//             concept to final detail. Each project is carefully shaped to reflect
//             your <span className="italic font-semibold">space</span>, your{" "}
//             <span className="italic font-semibold">lifestyle</span>, and your{" "}
//             <span className="italic font-semibold">vision.</span>
//           </p>
//         </div>
//       </div>

//       {/* MOBILE LAYOUT */}
//       <div
//         ref={mobileScrollRef}
//         className="
//           md:hidden
//           overflow-x-auto
//           snap-x
//           snap-mandatory
//           scrollbar-hide
//           -mx-4
//           px-4
//           scroll-smooth
//         "
//         style={{
//           scrollbarWidth: "none",
//           msOverflowStyle: "none",
//           WebkitOverflowScrolling: "touch",
//         }}
//       >
//         <div className="flex gap-5 pb-4 items-stretch">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.id}
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.6,
//               }}
//               viewport={{
//                 once: true,
//                 amount: 0.3,
//               }}
//               className="
//                 w-[85vw]
//                 flex-shrink-0
//                 snap-center
//                 flex
//                 flex-col
//               "
//             >
//               {/* Image */}
//               <div
//                 className="
//                   w-full
//                   h-[400px]
//                   overflow-hidden
//                   mb-5
//                   flex-shrink-0
//                 "
//               >
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="
//                     w-full
//                     h-full
//                     object-cover
//                   "
//                 />
//               </div>

//               {/* Content */}
//               <div className="flex flex-col flex-grow justify-between">
//                 <div>
//                   <h3
//                     className="
//                       text-[20px]
//                       text-[#222]
//                       mb-2
//                       leading-none
//                       font-medium
//                     "
//                   >
//                     {service.title}
//                   </h3>

//                   <p
//                     className="
//                       text-[12px]
//                       text-[#6d6d6d]
//                       leading-[1.5]
//                       mb-6
//                       max-w-[280px]
//                     "
//                   >
//                     {service.description}
//                   </p>
//                 </div>

//                 <div>
//                   {/* Button */}
//                   <button
//                     onClick={() => setSelectedService(service)}
//                     className="
//                       border
//                       border-[#bfbfbf]
//                       px-5
//                       py-3
//                       text-[11px]
//                       text-[#222]
//                       flex
//                       items-center
//                       justify-between
//                       w-full
//                       hover:bg-black
//                       hover:text-white
//                       transition-all
//                       duration-300
//                       cursor-pointer
//                     "
//                   >
//                     Learn Service
//                     <span>→</span>
//                   </button>

//                   {/* Counter */}
//                   <div className="flex justify-end mt-5">
//                     <p className="text-[12px] text-[#6d6d6d]">{index + 1}/5</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Progress Bar */}
//       <div className="md:hidden flex justify-center mt-6">
//         <div
//           className="
//             w-24
//             h-[2px]
//             bg-[#e0e0e0]
//             relative
//             overflow-hidden
//             rounded-full
//           "
//         >
//           <motion.div
//             className="
//               absolute
//               top-0
//               left-0
//               h-full
//               bg-[#222]
//             "
//             style={{
//               scaleX: scrollXProgress,
//               transformOrigin: "left",
//             }}
//           />
//         </div>
//       </div>

//       {/* DESKTOP LAYOUT */}
//       <div className="hidden md:block">
//         <div className="relative w-full min-h-[1700px]">
//           {services.map((service, index) => {
//             const layouts = [
//               "absolute left-[4%] top-[2%] w-[22%]",
//               "absolute right-[4%] top-[2%] w-[34%]",
//               "absolute left-[38%] top-[30%] w-[22%]",
//               "absolute left-[0%] bottom-[2%] w-[30%]",
//               "absolute right-[4%] bottom-[4%] w-[38%]",
//             ];

//             return (
//               <motion.div
//                 key={service.id}
//                 initial={{
//                   opacity: 0,
//                   y: 60,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 1,
//                   delay: index * 0.15,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 className={layouts[index]}
//               >
//                 {/* Image */}
//                 <div
//                   className={`
//                     w-full
//                     overflow-hidden
//                     mb-4
//                     ${service.imageHeight}
//                   `}
//                 >
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="
//                       w-full
//                       h-full
//                       object-cover
//                     "
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="max-w-[260px]">
//                   <h3
//                     className="
//                       text-[24px]
//                       leading-none
//                       text-[#222]
//                       mb-2
//                       font-normal
//                     "
//                   >
//                     {service.title}
//                   </h3>

//                   <p
//                     className="
//                       text-[11px]
//                       leading-[1.5]
//                       text-[#6d6d6d]
//                       mb-5
//                     "
//                   >
//                     {service.description}
//                   </p>

//                   {/* Button */}
//                   <button
//                     onClick={() => setSelectedService(service)}
//                     className="
//                       border
//                       border-[#8f8f8f]
//                       px-6
//                       py-3
//                       text-[12px]
//                       text-[#222]
//                       flex
//                       items-center
//                       justify-between
//                       min-w-[170px]
//                       hover:bg-black
//                       hover:text-white
//                       transition-all
//                       duration-300
//                       cursor-pointer
//                     "
//                   >
//                     Learn Service
//                     <span className="text-[14px]">→</span>
//                   </button>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* MODAL */}
// {/* MODAL */}
// {/* MODAL */}
// <AnimatePresence>
//   {selectedService && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.3 }}
//       className="
//         fixed
//         inset-0
//         z-[999]
//         bg-black/60
//         backdrop-blur-sm
//         overflow-y-auto
//       "
//       onClick={() => setSelectedService(null)}
//     >
//       {/* Wrapper */}
//       <div
//         className="
//           min-h-screen
//           flex
//           items-start
//           md:items-center
//           justify-center
//           p-3
//           md:p-6
//         "
//       >
//         {/* Modal */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 60,
//             scale: 0.95,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//             scale: 1,
//           }}
//           exit={{
//             opacity: 0,
//             y: 40,
//             scale: 0.96,
//           }}
//           transition={{
//             duration: 0.45,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           onClick={(e) => e.stopPropagation()}
//           className="
//             relative
//             w-full
//             max-w-5xl
//             bg-[#f8f8f8]
//             rounded-[28px]
//             shadow-2xl
//             overflow-hidden
//             flex
//             flex-col
//             max-h-[95vh]
//           "
//         >
//           {/* Close */}
//           <button
//             onClick={() => setSelectedService(null)}
//             className="
//               absolute
//               top-5
//               right-5
//               z-20
//               w-11
//               h-11
//               rounded-full
//               bg-black
//               text-white
//               flex
//               items-center
//               justify-center
//             "
//           >
//             <X size={18} />
//           </button>

//           {/* BODY */}
//           <div
//             className="
//               flex
//               flex-col
//               md:grid
//               md:grid-cols-2
//               flex-1
//               min-h-0
//               overflow-y-auto
//               md:overflow-hidden
//             "
//           >
//             {/* IMAGE */}
//             <div
//               className="
//                 w-full
//                 h-[220px]
//                 md:h-full
//                 md:max-h-[95vh]
//                 overflow-hidden
//                 flex-shrink-0
//               "
//             >
//               <img
//                 src={selectedService.image}
//                 alt={selectedService.title}
//                 className="
//                   w-full
//                   h-full
//                   object-cover
//                 "
//               />
//             </div>

//             {/* CONTENT */}
//             <div
//               className="
//                 p-6
//                 md:p-12
//                 md:overflow-y-auto
//               "
//             >
//               <p
//                 className="
//                   text-[12px]
//                   tracking-[0.25em]
//                   text-[#777]
//                   uppercase
//                   mb-4
//                 "
//               >
//                 Interior Service
//               </p>

//               <h2
//                 className="
//                   text-[34px]
//                   md:text-[52px]
//                   leading-[0.95]
//                   tracking-[-0.04em]
//                   text-[#111]
//                   mb-6
//                   font-light
//                 "
//               >
//                 {selectedService.title}
//               </h2>

//               <p
//                 className="
//                   text-[15px]
//                   md:text-[16px]
//                   leading-[1.9]
//                   text-[#555]
//                   mb-10
//                 "
//               >
//                 {selectedService.detailedDescription}
//               </p>

//               {/* Features */}
//               <div className="space-y-4 mb-12">
//                 {selectedService.features.map((feature, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{
//                       opacity: 0,
//                       x: 20,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       x: 0,
//                     }}
//                     transition={{
//                       delay: i * 0.08,
//                     }}
//                     className="
//                       flex
//                       items-center
//                       gap-3
//                       border-b
//                       border-[#ddd]
//                       pb-4
//                     "
//                   >
//                     <span className="text-[10px]">◆</span>

//                     <p className="text-[14px] text-[#222]">
//                       {feature}
//                     </p>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Bottom */}
//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   gap-5
//                   flex-wrap
//                 "
//               >
//                 <p className="text-[12px] text-[#777]">
//                   Crafted with precision & luxury aesthetics
//                 </p>

//                 <button
//                   className="
//                     bg-black
//                     text-white
//                     px-6
//                     py-3
//                     text-[12px]
//                     hover:bg-[#222]
//                     transition-all
//                     duration-300
//                   "
//                 >
//                   Start Project
//                 </button>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>
//     </section>
//   );
// };

// export default Gallery;



import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import gallerimg1 from "../assets/gallerimg1.png";
import gallerimg2 from "../assets/gallerimg2.png";
import gallerimg3 from "../assets/gallerimg3.png";
import gallerimg4 from "../assets/gallerimg4.png";
import gallerimg5 from "../assets/gallerimg5.png";

const services = [
  {
    id: 1,
    title: "Interior Design",
    description: "Full-cycle design from concept to final styling.",
    detailedDescription:
      "Our interior design service transforms spaces into refined environments that balance elegance, comfort, and functionality. From initial concepts and mood boards to lighting, furniture selection, textures, and final styling, every detail is carefully curated to reflect your personality and lifestyle.",
    features: [
      "Concept Development",
      "Luxury Space Styling",
      "Lighting & Material Selection",
      "Furniture Planning",
    ],
    image: gallerimg1,
    imageHeight: "h-[430px]",
  },
  {
    id: 2,
    title: "Space Planning",
    description: "Smart layouts that maximize both form and function.",
    detailedDescription:
      "We create intelligent spatial layouts that improve movement, functionality, and visual balance. Every square foot is optimized to ensure harmony between aesthetics and usability.",
    features: [
      "Functional Layout Design",
      "Traffic Flow Optimization",
      "Modern Living Concepts",
      "Custom Spatial Solutions",
    ],
    image: gallerimg2,
    imageHeight: "h-[530px]",
  },
  {
    id: 3,
    title: "Styling & Materials",
    description: "Furniture, textiles, and details curated with precision.",
    detailedDescription:
      "From luxurious fabrics to premium finishes and handcrafted decor, we carefully select materials and styling elements that create timeless and visually rich interiors.",
    features: [
      "Material Palette Selection",
      "Furniture Styling",
      "Luxury Textiles",
      "Decor Curation",
    ],
    image: gallerimg3,
    imageHeight: "h-[430px]",
  },
  {
    id: 4,
    title: "Consultation",
    description: "Expert advice tailored to your space and vision.",
    detailedDescription:
      "Our consultation sessions help clients define their vision, solve design challenges, and make confident design decisions with expert professional guidance.",
    features: [
      "Design Direction",
      "Project Planning",
      "Budget Guidance",
      "Professional Recommendations",
    ],
    image: gallerimg4,
    imageHeight: "h-[660px]",
  },
  {
    id: 5,
    title: "Furniture & Custom Design",
    description:
      "Custom-designed pieces that bring identity and uniqueness to your interior.",
    detailedDescription:
      "We design bespoke furniture and custom interior elements tailored specifically for your project, ensuring exclusivity, craftsmanship, and individuality.",
    features: [
      "Custom Furniture",
      "Bespoke Detailing",
      "Premium Craftsmanship",
      "Unique Design Identity",
    ],
    image: gallerimg5,
    imageHeight: "h-[330px]",
  },
];

const Gallery = () => {
  const mobileScrollRef = useRef(null);

  const { scrollXProgress } = useScroll({
    container: mobileScrollRef,
  });

  const [selectedService, setSelectedService] = useState(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      // Stop Lenis smooth scroll on background
      window.lenis?.stop();

      // Also stop wheel events from bubbling up to Lenis
      const stopPropagation = (e) => e.stopPropagation();
      const container = document.querySelector(".modal-scroll-container");
      container?.addEventListener("wheel", stopPropagation);

      return () => {
        container?.removeEventListener("wheel", stopPropagation);
        window.lenis?.start();
      };
    } else {
      window.lenis?.start();
    }
  }, [selectedService]);

  return (
    <section
      id="services"
      className="
        w-full
        bg-[#f8f8f8]
        font-inter
        px-4
        md:px-10
        lg:px-16
        py-10
        md:py-16
        overflow-hidden
      "
    >
      {/* TOP */}
      <div
        className="
          flex
          flex-col
          md:flex-row
          justify-between
          items-start
          gap-10
          mb-16
          md:mb-24
        "
      >
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
            We offer a complete approach to interior design — from initial
            concept to final detail. Each project is carefully shaped to reflect
            your <span className="italic font-semibold">space</span>, your{" "}
            <span className="italic font-semibold">lifestyle</span>, and your{" "}
            <span className="italic font-semibold">vision.</span>
          </p>
        </div>
      </div>

      {/* MOBILE LAYOUT */}
      <div
        ref={mobileScrollRef}
        className="
          md:hidden
          overflow-x-auto
          snap-x
          snap-mandatory
          scrollbar-hide
          -mx-4
          px-4
          scroll-smooth
        "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex gap-5 pb-4 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="
                w-[85vw]
                flex-shrink-0
                snap-center
                flex
                flex-col
              "
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
                  <button
                    onClick={() => setSelectedService(service)}
                    className="
                      border border-[#bfbfbf]
                      px-5 py-3
                      text-[11px] text-[#222]
                      flex items-center justify-between
                      w-full
                      hover:bg-black hover:text-white
                      transition-all duration-300
                      cursor-pointer
                    "
                  >
                    Learn Service
                    <span>→</span>
                  </button>

                  {/* Counter */}
                  <div className="flex justify-end mt-5">
                    <p className="text-[12px] text-[#6d6d6d]">{index + 1}/5</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
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
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className={layouts[index]}
              >
                {/* Image */}
                <div className={`w-full overflow-hidden mb-4 ${service.imageHeight}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="max-w-[260px]">
                  <h3 className="text-[24px] leading-none text-[#222] mb-2 font-normal">
                    {service.title}
                  </h3>
                  <p className="text-[11px] leading-[1.5] text-[#6d6d6d] mb-5">
                    {service.description}
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => setSelectedService(service)}
                    className="
                      border border-[#8f8f8f]
                      px-6 py-3
                      text-[12px] text-[#222]
                      flex items-center justify-between
                      min-w-[170px]
                      hover:bg-black hover:text-white
                      transition-all duration-300
                      cursor-pointer
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

      {/* MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed inset-0 z-[999]
              bg-black/60 backdrop-blur-sm
              overflow-y-auto
            "
            onClick={() => setSelectedService(null)}
          >
            {/* Wrapper */}
            <div
              className="
                min-h-screen
                flex items-start md:items-center justify-center
                p-3 md:p-6
              "
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="
                  relative w-full max-w-5xl
                  bg-[#f8f8f8] rounded-[28px] shadow-2xl
                  overflow-hidden flex flex-col
                  max-h-[95vh]
                "
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="
                    absolute top-5 right-5 z-20
                    w-11 h-11 rounded-full
                    bg-black text-white
                    flex items-center justify-center
                  "
                >
                  <X size={18} />
                </button>

                {/* BODY — this div is the scrollable container */}
                <div
                  data-lenis-prevent
                  className="
                    modal-scroll-container
                    flex flex-col
                    md:grid md:grid-cols-2
                    flex-1 min-h-0
                    overflow-y-auto
                    md:overflow-hidden
                  "
                >
                  {/* IMAGE */}
                  <div
                    className="
                      w-full h-[220px]
                      md:h-full md:max-h-[95vh]
                      overflow-hidden flex-shrink-0
                    "
                  >
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 md:p-12 md:overflow-y-auto">
                    <p className="text-[12px] tracking-[0.25em] text-[#777] uppercase mb-4">
                      Interior Service
                    </p>

                    <h2
                      className="
                        text-[34px] md:text-[52px]
                        leading-[0.95] tracking-[-0.04em]
                        text-[#111] mb-6 font-light
                      "
                    >
                      {selectedService.title}
                    </h2>

                    <p className="text-[15px] md:text-[16px] leading-[1.9] text-[#555] mb-10">
                      {selectedService.detailedDescription}
                    </p>

                    {/* Features */}
                    <div className="space-y-4 mb-12">
                      {selectedService.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="
                            flex items-center gap-3
                            border-b border-[#ddd] pb-4
                          "
                        >
                          <span className="text-[10px]">◆</span>
                          <p className="text-[14px] text-[#222]">{feature}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom */}
                    <div className="flex items-center justify-between gap-5 flex-wrap">
                      <p className="text-[12px] text-[#777]">
                        Crafted with precision & luxury aesthetics
                      </p>
                      <button
                        className="
                          bg-black text-white
                          px-6 py-3 text-[12px]
                          hover:bg-[#222]
                          transition-all duration-300
                        "
                      >
                        Start Project
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;