import React, { useEffect } from "react";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

export const Project = ({ projectData }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [300, -300]);

  return (
    <motion.section
      ref={ref}
      className=" h-[100%] snap-center bg_image1 text-white"
    >
      <div className="h-[100vh] flex items-center ">
        <div className="flex flex-row mx-auto gap-5 items-center">
          <motion.div className="bg-red-500 h-[40vh] w-[60vh] rounded-lg" />
          <motion.div
            style={{ y: yText }}
            className="flex flex-col gap-5 max-w-[50vh]"
          >
            <h1 className="text-5xl font-bold">{projectData.heading}</h1>
            <p className="text-2xl font-thin">{projectData.desc}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
