// import React from "react";
// import { motion } from "framer-motion";

// import gallerimg1 from "../assets/gallerimg1.png";
// import gallerimg2 from "../assets/gallerimg2.png";
// import gallerimg3 from "../assets/gallerimg3.png";
// import gallerimg4 from "../assets/gallerimg4.png";
// import gallerimg5 from "../assets/gallerimg5.png";


// const services = [
//   {
//     id: 1,
//     title: "Interior Design",
//     description:
//       "Full-scale design from concept to final styling.",
//     image: gallerimg1,
//     className: "mt-28",
//     imageHeight: "h-[430px]",
//   },

//   {
//     id: 2,
//     title: "Space Planning",
//     description:
//       "Smart layouts that maximize both form and function.",
//     image: gallerimg2,
//     className: "mt-28",
//     imageHeight: "h-[530px]",
//   },

//   {
//     id: 3,
//     title: "Styling & Materials",
//     description:
//       "Furniture, textiles, and details curated with precision.",
//     image: gallerimg3,
//     className: "-mt-10",
//     imageHeight: "h-[530px]",
//   },

//   {
//     id: 4,
//     title: "Consultation",
//     description:
//       "Expert advice tailored to your space and vision.",
//     image: gallerimg4,
//     className: "mt-10",
//     imageHeight: "h-[330px]",
//   },

//   {
//     id: 5,
//     title: "Furniture & Custom Design",
//     description:
//       "Custom-designed pieces that bring identity and uniqueness to your interior.",
//     image: gallerimg5,
//     className: "mt-28",
//     imageHeight: "h-[370px]",
//   },
// ];

// const Gallery = () => {
//   return (
//     <section className="w-full bg-[#efefef] font-['Inter'] px-6 md:px-10 lg:px-16 py-16 overflow-hidden">

//       {/* Top Area */}
//       <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-10">

//         {/* Left Small Label */}
//         <div className="flex items-center gap-2 text-[12px] text-[#222] mt-2">
//           <span className="text-[7px]">◆</span>
//           <p>Services</p>
//         </div>

//         {/* Right Description */}
//         <div className="max-w-[620px]">
//           <p
//             className="
//               text-[26px]
//               md:text-[30px]
//               leading-[1.25]
//               tracking-[-0.03em]
//               text-[#222]
//               font-light
//             "
//           >
//             We offer a complete approach to interior design —
//             from initial concept to final detail.
//             <br />
//             Each project is carefully shaped to reflect your{" "}
//             <span className="italic font-semibold">
//               space
//             </span>
//             , your{" "}
//             <span className="italic font-semibold">
//               lifestyle
//             </span>
//             , and your{" "}
//             <span className="italic font-semibold">
//               vision.
//             </span>
//           </p>
//         </div>
//       </div>

//       {/* Gallery Grid */}
// {/* Gallery Layout */}
// <div className="relative w-full min-h-[1700px]">

//   {services.map((service, index) => {

//     const layouts = [
//       // Interior Design
//       "absolute left-[4%] top-[2%] w-[22%]",

//       // Space Planning
//       "absolute right-[4%] top-[2%] w-[34%]",

//       // Styling
//       "absolute left-[38%] top-[30%] w-[22%]",

//       // Consultation
//       "absolute left-[0%] bottom-[2%] w-[30%]",

//       // Furniture
//       "absolute right-[4%] bottom-[4%] w-[38%]",
//     ];

//     return (
//       <motion.div
//         key={service.id}
//         initial={{
//           opacity: 0,
//           y: 60,
//         }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 1,
//           delay: index * 0.15,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         viewport={{ once: true }}
//         className={layouts[index]}
//       >

//         {/* Image */}
//         <div
//           className={`
//             w-full
//             overflow-hidden
//             mb-5
//             ${service.imageHeight}
//           `}
//         >
//           <img
//             src={service.image}
//             alt={service.title}
//             className="
//               w-full
//               h-full
//               object-cover
//             "
//           />
//         </div>

//         {/* Content */}
//         <div className="max-w-[260px]">

//           <h3
//             className="
//               text-[24px]
//               leading-none
//               text-[#222]
//               mb-2
//               font-normal
//             "
//           >
//             {service.title}
//           </h3>

//           <p
//             className="
//               text-[11px]
//               leading-[1.5]
//               text-[#6d6d6d]
//               mb-5
//             "
//           >
//             {service.description}
//           </p>

//           {/* Button */}
//           <button
//             className="
//               border
//               border-[#bfbfbf]
//               px-5
//               py-2
//               text-[10px]
//               text-[#222]
//               flex
//               items-center
//               gap-8
//               hover:bg-black
//               hover:text-white
//               transition-all
//               duration-300
//             "
//           >
//             Learn Service
//             <span>→</span>
//           </button>

//         </div>

//       </motion.div>
//     );
//   })}
// </div>

//       {/* Bottom Logo */}
//       <div className="flex justify-end mt-20">
//         <p className="text-[26px] text-[#222] font-semibold">
//           V
//         </p>
//       </div>

//     </section>
//   );
// };

// export default Gallery;



import React from "react";
import { motion } from "framer-motion";

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
  return (
    <section className="w-full bg-[#efefef] font-['Inter'] px-4 md:px-10 lg:px-16 py-10 md:py-16 overflow-hidden">

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
      <div className="md:hidden overflow-x-auto scrollbar-hide">

        <div className="flex gap-4 w-max pb-4">

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                w-[330px]
                flex-shrink-0
              "
            >

              {/* Image */}
              <div
                className="
                  w-full
                  h-[430px]
                  overflow-hidden
                  mb-5
                "
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
              <div>

                <h3
                  className="
                    text-[20px]
                    text-[#222]
                    mb-2
                    leading-none
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    text-[12px]
                    text-[#6d6d6d]
                    leading-[1.5]
                    mb-6
                    max-w-[240px]
                  "
                >
                  {service.description}
                </p>

                {/* Button */}
                <button
                  className="
                    border
                    border-[#bfbfbf]
                    px-5
                    py-3
                    text-[11px]
                    text-[#222]
                    flex
                    items-center
                    justify-between
                    w-full
                  "
                >
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

            </motion.div>
          ))}

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

        <p className="text-[24px] md:text-[28px] text-[#222] font-semibold">
          V
        </p>

      </div>

    </section>
  );
};

export default Gallery;