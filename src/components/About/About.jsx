import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref1 = useRef(null);

  const isInViewHeading = useInView(ref1, { once: true, margin: "10px" });

  const variants = {
    textbox: {
      hidden: { opacity: 0, y: -30 },
      visible: isInViewHeading && {
        opacity: 1,
        y: 0,
        transition: { delay: 0.4, duration: 0.4 },
      },
    },
    heading: {
      hidden: { opacity: 0, y: 20 },
      visible: isInViewHeading && {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1,
          duration: 0.4,
        },
      },
    },
  };

  return (
    <div className="flex flex-col">
      <motion.h1
        ref={ref1}
        variants={variants.heading}
        initial="hidden"
        animate="visible"
        className=" text-[#b31616] text-[9vw] md:text-[6vw] text-center lg:text-start mb-[2vh] lg:text-[6vh] lg:pl-[5vh] lg:mb-[2vh]"
      >
        &lt;
        <span className="text-white font-semibold">About</span>&gt;
      </motion.h1>
      <motion.div
        variants={variants.textbox}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.01,
          transition: {
            ease: "linear",
            duration: 0.2,
          },
        }}
        className=" rounded-2xl text-center bg-black bg-opacity-50 lg:p-10 lg:w-[60vw] "
      >
        <p className="relative text-white font-thin opacity-100 text-[2vh] md:text-[3vh] lg:text-[1.8vw]">
          <span className="text-[#b31616] font-semibold ">Hey</span> there 👋,
          I'm
          <span className="font-bold"> Muhammad Awab Saghir</span>, a
          17-year-old budding coder hailing from the vibrant tech scene of{" "}
          <span className="text-[#b31616] font-semibold ">Pakistan</span>. My
          journey in the world of computers and technology has been nothing
          short of thrilling, fueled by a genuine passion for all things
          digital.
        </p>
      </motion.div>
    </div>
  );
}
