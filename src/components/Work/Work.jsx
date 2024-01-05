import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { Project } from "./Project";

export const Work = ({ projects }) => {
  const variant = {
    textbox: {
      hidden: { opacity: 0, y: -30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.4, duration: 0.4 },
      },
    },
    heading: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1,
          duration: 0.4,
        },
      },
    },
    box: {
      hidden: { y: -20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, opacity: { duration: 0.4 } },
      },
    },
  };

  const ref = useRef();
  const { scrollXProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollXProgress, [0.1, 1], [0.95, 0]);
  const scaleX = useSpring(x, { damping: 20 });

  return (
    <div className="">
      <div className=" text-center pt-[5vh] gap-5">
        <motion.div
          style={{ scaleX }}
          className="h-3 mx-10 lg:mx-0 rounded-full bg-[#b31616] "
        />
        <motion.h1
          variants={variant.heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" text-[#b31616] text-[9vw] md:text-[6vw] lg:text-[6vh]"
        >
          &lt;
          <span className="text-white font-semibold">Work</span>&gt;
        </motion.h1>
      </div>
      <motion.div
        variants={variant.box}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        ref={ref}
        className="flex flex-row snap-x snap-mandatory overflow-x-scroll scrollbar-hide"
      >
        {projects.map((project, i) => {
          return <Project projectData={project} Data={projects} key={i} />;
        })}
      </motion.div>
    </div>
  );
};
