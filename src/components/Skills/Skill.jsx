import React, { Fragment } from "react";

import { SectionTag } from "./SectionTag";
import { motion } from "framer-motion";

export const Skill = () => {
  const frontEnd = [
    "HTML",
    "CSS",

    "JavaScript",
    "React",
    "Express",
    "Tailwind",
    "Framer-motion",
  ];
  const backEnd = [
    "Python",
    "Flask",
    "Express",
    "MongoDB",
    "Mongoose",
    "SQL",
    "REST APIs",
  ];

  const variants = {
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

  const languages = ["Python", "JavaScript", "Dart"];

  return (
    <div className=" ">
      <motion.h1
        variants={variants.heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[#b31616] text-[9vw] md:text-[6vw] text-center lg:text-start mb-[2vh] lg:text-[6vh] lg:pl-[5vh] lg:mb-[2vh]"
      >
        &lt;
        <span className="text-white font-semibold ">My Skills</span>
        &gt;
      </motion.h1>
      <motion.div
        variants={variants.textbox}
        initial="hidden"
        whileInView="visible"
        whileHover={{ scale: 1.01, transition: { type: "spring" } }}
        viewport={{ once: true }}
        className=" flex flex-row rounded-2xl bg-black bg-opacity-50 p-3 gap-1 md:gap-3 md:p-10 lg:p-10 lg:gap-3 lg:w-[60vw]"
      >
        <SectionTag heading="Front-end" data={frontEnd} />
        <SectionTag heading="Languages" data={languages} />
        <SectionTag heading="Back-end" data={backEnd} />
      </motion.div>
    </div>
  );
};
