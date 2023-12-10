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
  };

  const ref = useRef();
  const { scrollXProgress } = useScroll({
    container: ref,
    offset: ["end end", "start start"],
  });
  const x = useTransform(scrollXProgress, [0.1, 1], [0, 0.95]);
  const scaleX = useSpring(x, { damping: 20 });

  return (
    <div className="">
      <div className=" text-center pt-[5vh] gap-5">
        <motion.div
          style={{ scaleX }}
          className="h-3 rounded-full bg-[#b31616] "
        />
        <motion.h1
          variants={variant.heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className=" text-[#b31616] text-[6vh]"
        >
          &lt;
          <span className="text-white font-semibold">Work</span>&gt;
        </motion.h1>
      </div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, opacity: { duration: 0.4 } },
        }}
        viewport={{ once: true }}
        ref={ref}
        className="flex flex-row snap-x snap-mandatory overflow-x-scroll w-full gap-20 scrollbar-hide"
      >
        {projects.map((project, i) => {
          return <Project projectData={project} Data={projects} key={i} />;
        })}
      </motion.div>
    </div>
  );
};
