

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

//   // Prevent background scroll when modal is open
//   useEffect(() => {
//     if (selectedService) {
//       // Stop Lenis smooth scroll on background
//       window.lenis?.stop();

//       // Also stop wheel events from bubbling up to Lenis
//       const stopPropagation = (e) => e.stopPropagation();
//       const container = document.querySelector(".modal-scroll-container");
//       container?.addEventListener("wheel", stopPropagation);

//       return () => {
//         container?.removeEventListener("wheel", stopPropagation);
//         window.lenis?.start();
//       };
//     } else {
//       window.lenis?.start();
//     }
//   }, [selectedService]);

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
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true, amount: 0.3 }}
//               className="
//                 w-[85vw]
//                 flex-shrink-0
//                 snap-center
//                 flex
//                 flex-col
//               "
//             >
//               {/* Image */}
//               <div className="w-full h-[400px] overflow-hidden mb-5 flex-shrink-0">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Content */}
//               <div className="flex flex-col flex-grow justify-between">
//                 <div>
//                   <h3 className="text-[20px] text-[#222] mb-2 leading-none font-medium">
//                     {service.title}
//                   </h3>
//                   <p className="text-[12px] text-[#6d6d6d] leading-[1.5] mb-6 max-w-[280px]">
//                     {service.description}
//                   </p>
//                 </div>

//                 <div>
//                   {/* Button */}
//                   <button
//                     onClick={() => setSelectedService(service)}
//                     className="
//                       border border-[#bfbfbf]
//                       px-5 py-3
//                       text-[11px] text-[#222]
//                       flex items-center justify-between
//                       w-full
//                       hover:bg-black hover:text-white
//                       transition-all duration-300
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
//         <div className="w-24 h-[2px] bg-[#e0e0e0] relative overflow-hidden rounded-full">
//           <motion.div
//             className="absolute top-0 left-0 h-full bg-[#222]"
//             style={{ scaleX: scrollXProgress, transformOrigin: "left" }}
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
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 1,
//                   delay: index * 0.15,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 viewport={{ once: true }}
//                 className={layouts[index]}
//               >
//                 {/* Image */}
//                 <div className={`w-full overflow-hidden mb-4 ${service.imageHeight}`}>
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="max-w-[260px]">
//                   <h3 className="text-[24px] leading-none text-[#222] mb-2 font-normal">
//                     {service.title}
//                   </h3>
//                   <p className="text-[11px] leading-[1.5] text-[#6d6d6d] mb-5">
//                     {service.description}
//                   </p>

//                   {/* Button */}
//                   <button
//                     onClick={() => setSelectedService(service)}
//                     className="
//                       border border-[#8f8f8f]
//                       px-6 py-3
//                       text-[12px] text-[#222]
//                       flex items-center justify-between
//                       min-w-[170px]
//                       hover:bg-black hover:text-white
//                       transition-all duration-300
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
//       <AnimatePresence>
//         {selectedService && (
//           <motion.div
//             data-lenis-prevent
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="
//               fixed inset-0 z-[999]
//               bg-black/60 backdrop-blur-sm
//               overflow-y-auto
//             "
//             onClick={() => setSelectedService(null)}
//           >
//             {/* Wrapper */}
//             <div
//               className="
//                 min-h-screen
//                 flex items-start md:items-center justify-center
//                 p-3 md:p-6
//               "
//             >
//               {/* Modal */}
//               <motion.div
//                 initial={{ opacity: 0, y: 60, scale: 0.95 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: 40, scale: 0.96 }}
//                 transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//                 onClick={(e) => e.stopPropagation()}
//                 className="
//                   relative w-full max-w-5xl
//                   bg-[#f8f8f8] rounded-[28px] shadow-2xl
//                   overflow-hidden flex flex-col
//                   max-h-[95vh]
//                 "
//               >
//                 {/* Close */}
//                 <button
//                   onClick={() => setSelectedService(null)}
//                   className="
//                     absolute top-5 right-5 z-20
//                     w-11 h-11 rounded-full
//                     bg-black text-white
//                     flex items-center justify-center
//                   "
//                 >
//                   <X size={18} />
//                 </button>

//                 {/* BODY — this div is the scrollable container */}
//                 <div
//                   data-lenis-prevent
//                   className="
//                     modal-scroll-container
//                     flex flex-col
//                     md:grid md:grid-cols-2
//                     flex-1 min-h-0
//                     overflow-y-auto
//                     md:overflow-hidden
//                   "
//                 >
//                   {/* IMAGE */}
//                   <div
//                     className="
//                       w-full h-[220px]
//                       md:h-full md:max-h-[95vh]
//                       overflow-hidden flex-shrink-0
//                     "
//                   >
//                     <img
//                       src={selectedService.image}
//                       alt={selectedService.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   {/* CONTENT */}
//                   <div className="p-6 md:p-12 md:overflow-y-auto">
//                     <p className="text-[12px] tracking-[0.25em] text-[#777] uppercase mb-4">
//                       Interior Service
//                     </p>

//                     <h2
//                       className="
//                         text-[34px] md:text-[52px]
//                         leading-[0.95] tracking-[-0.04em]
//                         text-[#111] mb-6 font-light
//                       "
//                     >
//                       {selectedService.title}
//                     </h2>

//                     <p className="text-[15px] md:text-[16px] leading-[1.9] text-[#555] mb-10">
//                       {selectedService.detailedDescription}
//                     </p>

//                     {/* Features */}
//                     <div className="space-y-4 mb-12">
//                       {selectedService.features.map((feature, i) => (
//                         <motion.div
//                           key={i}
//                           initial={{ opacity: 0, x: 20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: i * 0.08 }}
//                           className="
//                             flex items-center gap-3
//                             border-b border-[#ddd] pb-4
//                           "
//                         >
//                           <span className="text-[10px]">◆</span>
//                           <p className="text-[14px] text-[#222]">{feature}</p>
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* Bottom */}
//                     <div className="flex items-center justify-between gap-5 flex-wrap">
//                       <p className="text-[12px] text-[#777]">
//                         Crafted with precision & luxury aesthetics
//                       </p>
//                       <button
//                         className="
//                           bg-black text-white
//                           px-6 py-3 text-[12px]
//                           hover:bg-[#222]
//                           transition-all duration-300
//                         "
//                       >
//                         Start Project
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default Gallery;






import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, CheckCircle2 } from "lucide-react";
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

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $40,000",
  "$40,000 – $100,000",
  "$100,000+",
];

const EMPTY_FORM = {
  name: "",
  email: "",
  service: "",
  budget: "",
  message: "",
};

const Gallery = () => {
  const mobileScrollRef = useRef(null);

  const { scrollXProgress } = useScroll({
    container: mobileScrollRef,
  });

  const [selectedService, setSelectedService] = useState(null);

  // contact modal state
  const [showContact, setShowContact] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Lenis — stop when any overlay is open
  useEffect(() => {
    if (selectedService || showContact) {
      window.lenis?.stop();

      const stopPropagation = (e) => e.stopPropagation();
      document
        .querySelector(".modal-scroll-container")
        ?.addEventListener("wheel", stopPropagation);
      document
        .querySelector(".contact-scroll-container")
        ?.addEventListener("wheel", stopPropagation);

      return () => {
        document
          .querySelector(".modal-scroll-container")
          ?.removeEventListener("wheel", stopPropagation);
        document
          .querySelector(".contact-scroll-container")
          ?.removeEventListener("wheel", stopPropagation);
        window.lenis?.start();
      };
    } else {
      window.lenis?.start();
    }
  }, [selectedService, showContact]);

  const openContactModal = () => {
    setFormData({
      ...EMPTY_FORM,
      service: selectedService?.title || "",
    });
    setSubmitted(false);
    setShowContact(true);
  };

  const closeContactModal = () => {
    setShowContact(false);
  };

  const closeAll = () => {
    setShowContact(false);
    setSelectedService(null);
    setSubmitted(false);
    setFormData(EMPTY_FORM);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async submit — replace with your real API call
    await new Promise((res) => setTimeout(res, 1400));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="services"
      className="
        w-full bg-[#f8f8f8] font-inter
        px-4 md:px-10 lg:px-16
        py-10 md:py-16
        overflow-hidden
      "
    >
      {/* ── TOP ─────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16 md:mb-24">
        <div className="flex items-center gap-2 text-[12px] text-[#222] mt-2">
          <span className="text-[7px]">◆</span>
          <p>Services</p>
        </div>
        <div className="max-w-[620px]">
          <p className="text-[18px] sm:text-[22px] md:text-[30px] leading-[1.15] tracking-[-0.03em] text-[#222] font-light">
            We offer a complete approach to interior design — from initial
            concept to final detail. Each project is carefully shaped to reflect
            your <span className="italic font-semibold">space</span>, your{" "}
            <span className="italic font-semibold">lifestyle</span>, and your{" "}
            <span className="italic font-semibold">vision.</span>
          </p>
        </div>
      </div>

      {/* ── MOBILE LAYOUT ───────────────────────────────── */}
      <div
        ref={mobileScrollRef}
        className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 scroll-smooth"
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
              className="w-[85vw] flex-shrink-0 snap-center flex flex-col"
            >
              <div className="w-full h-[400px] overflow-hidden mb-5 flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
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
                  <button
                    onClick={() => setSelectedService(service)}
                    className="border border-[#bfbfbf] px-5 py-3 text-[11px] text-[#222] flex items-center justify-between w-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    Learn Service <span>→</span>
                  </button>
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

      {/* ── DESKTOP LAYOUT ──────────────────────────────── */}
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
                <div className={`w-full overflow-hidden mb-4 ${service.imageHeight}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="max-w-[260px]">
                  <h3 className="text-[24px] leading-none text-[#222] mb-2 font-normal">
                    {service.title}
                  </h3>
                  <p className="text-[11px] leading-[1.5] text-[#6d6d6d] mb-5">
                    {service.description}
                  </p>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="border border-[#8f8f8f] px-6 py-3 text-[12px] text-[#222] flex items-center justify-between min-w-[170px] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    Learn Service <span className="text-[14px]">→</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── SERVICE DETAIL MODAL ────────────────────────── */}
      <AnimatePresence>
        {selectedService && !showContact && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <div className="min-h-screen flex items-start md:items-center justify-center p-3 md:p-6">
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl bg-[#f8f8f8] rounded-[28px] shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center"
                >
                  <X size={18} />
                </button>

                {/* Body */}
                <div
                  data-lenis-prevent
                  className="modal-scroll-container flex flex-col md:grid md:grid-cols-2 flex-1 min-h-0 overflow-y-auto md:overflow-hidden"
                >
                  {/* Image */}
                  <div className="w-full h-[220px] md:h-full md:max-h-[95vh] overflow-hidden flex-shrink-0">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-12 md:overflow-y-auto">
                    <p className="text-[12px] tracking-[0.25em] text-[#777] uppercase mb-4">
                      Interior Service
                    </p>
                    <h2 className="text-[34px] md:text-[52px] leading-[0.95] tracking-[-0.04em] text-[#111] mb-6 font-light">
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
                          className="flex items-center gap-3 border-b border-[#ddd] pb-4"
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
                        onClick={openContactModal}
                        className="bg-black text-white px-6 py-3 text-[12px] hover:bg-[#333] transition-all duration-300"
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

      {/* ── CONTACT / INQUIRY MODAL ─────────────────────── */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm overflow-y-auto"
            onClick={closeAll}
          >
            <div className="min-h-screen flex items-start md:items-center justify-center p-3 md:p-6">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl bg-[#f8f8f8] rounded-[28px] shadow-2xl overflow-hidden"
              >
                {/* Top bar */}
                <div className="flex items-center justify-between px-7 pt-7 pb-5 border-b border-[#e8e8e8]">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={closeContactModal}
                      className="w-9 h-9 rounded-full border border-[#ddd] flex items-center justify-center hover:bg-[#eee] transition-all duration-200"
                    >
                      <ArrowLeft size={15} className="text-[#444]" />
                    </button>
                    <p className="text-[11px] tracking-[0.2em] text-[#999] uppercase">
                      Project Inquiry
                    </p>
                  </div>
                  <button
                    onClick={closeAll}
                    className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Body */}
                <div
                  data-lenis-prevent
                  className="contact-scroll-container overflow-y-auto max-h-[80vh] px-7 py-8"
                >
                  <AnimatePresence mode="wait">
                    {/* ── SUCCESS STATE ── */}
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center justify-center py-16 text-center gap-5"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                        >
                          <CheckCircle2
                            size={56}
                            className="text-black"
                            strokeWidth={1.2}
                          />
                        </motion.div>
                        <h3 className="text-[28px] font-light tracking-[-0.03em] text-[#111]">
                          Inquiry Received
                        </h3>
                        <p className="text-[14px] text-[#777] leading-[1.7] max-w-[340px]">
                          Thank you for reaching out. Our team will review your
                          project details and get back to you within{" "}
                          <span className="text-[#222] font-medium">
                            24 hours.
                          </span>
                        </p>
                        <button
                          onClick={closeAll}
                          className="mt-4 border border-[#222] px-7 py-3 text-[12px] text-[#222] hover:bg-black hover:text-white transition-all duration-300"
                        >
                          Close
                        </button>
                      </motion.div>
                    ) : (
                      /* ── FORM STATE ── */
                      <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {/* Heading */}
                        <div className="mb-8">
                          <h2 className="text-[30px] md:text-[38px] font-light tracking-[-0.04em] text-[#111] leading-[1.1] mb-2">
                            Let's start your{" "}
                            <span className="italic">project</span>
                          </h2>
                          <p className="text-[13px] text-[#888] leading-[1.6]">
                            Fill in the details below and we'll be in touch shortly.
                          </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                          {/* Name + Email */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                              <label className="text-[11px] tracking-[0.15em] text-[#888] uppercase">
                                Full Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Jane Smith"
                                className="bg-white border border-[#e0e0e0] px-4 py-3 text-[13px] text-[#222] placeholder:text-[#bbb] focus:outline-none focus:border-[#999] transition-colors duration-200 rounded-[6px]"
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <label className="text-[11px] tracking-[0.15em] text-[#888] uppercase">
                                Email Address
                              </label>
                              <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="jane@email.com"
                                className="bg-white border border-[#e0e0e0] px-4 py-3 text-[13px] text-[#222] placeholder:text-[#bbb] focus:outline-none focus:border-[#999] transition-colors duration-200 rounded-[6px]"
                              />
                            </div>
                          </div>

                          {/* Service */}
                          <div className="flex flex-col gap-2">
                            <label className="text-[11px] tracking-[0.15em] text-[#888] uppercase">
                              Service
                            </label>
                            <select
                              name="service"
                              required
                              value={formData.service}
                              onChange={handleChange}
                              className="bg-white border border-[#e0e0e0] px-4 py-3 text-[13px] text-[#222] focus:outline-none focus:border-[#999] transition-colors duration-200 rounded-[6px] appearance-none cursor-pointer"
                            >
                              <option value="" disabled>
                                Select a service
                              </option>
                              {services.map((s) => (
                                <option key={s.id} value={s.title}>
                                  {s.title}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Budget */}
                          <div className="flex flex-col gap-2">
                            <label className="text-[11px] tracking-[0.15em] text-[#888] uppercase">
                              Budget Range
                            </label>
                            <div className="flex flex-wrap gap-2">
                              {budgetOptions.map((opt) => (
                                <button
                                  type="button"
                                  key={opt}
                                  onClick={() =>
                                    setFormData((p) => ({ ...p, budget: opt }))
                                  }
                                  className={`px-4 py-2 text-[11px] border rounded-full transition-all duration-200 cursor-pointer ${
                                    formData.budget === opt
                                      ? "bg-black text-white border-black"
                                      : "bg-white text-[#555] border-[#ddd] hover:border-[#999]"
                                  }`}
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Message */}
                          <div className="flex flex-col gap-2">
                            <label className="text-[11px] tracking-[0.15em] text-[#888] uppercase">
                              Project Brief
                            </label>
                            <textarea
                              name="message"
                              rows={4}
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Tell us about your space, style preferences, timeline..."
                              className="bg-white border border-[#e0e0e0] px-4 py-3 text-[13px] text-[#222] placeholder:text-[#bbb] focus:outline-none focus:border-[#999] transition-colors duration-200 rounded-[6px] resize-none"
                            />
                          </div>

                          {/* Submit */}
                          <div className="flex items-center justify-between pt-2 flex-wrap gap-4">
                            <p className="text-[11px] text-[#aaa]">
                              We respond within 24 hours.
                            </p>
                            <button
                              type="submit"
                              disabled={submitting}
                              className="bg-black text-white px-8 py-3 text-[12px] tracking-[0.05em] hover:bg-[#333] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-3 min-w-[160px] justify-center"
                            >
                              {submitting ? (
                                <>
                                  <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{
                                      repeat: Infinity,
                                      duration: 0.8,
                                      ease: "linear",
                                    }}
                                    className="inline-block w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full"
                                  />
                                  Sending...
                                </>
                              ) : (
                                <>
                                  Send Inquiry
                                  <span className="text-[14px]">→</span>
                                </>
                              )}
                            </button>
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
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