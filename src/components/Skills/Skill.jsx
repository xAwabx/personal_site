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
      hidden: { opacity: 0, y: -100 },
      visible: {
        opacity: 1,

        y: 0,
        transition: { delay: 0.8, type: "spring", bounce: 0.4 },
      },
    },
    heading: {
      hidden: { opacity: 0, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.5,
          type: "spring",
          bounce: 0.01,
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
        className="flex  text-[#b31616] text-[6vh] pl-[5vh] mb-[2vh] pr-auto pl-auto"
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
        className=" flex flex-row p-10 gap-3 rounded-2xl bg-black bg-opacity-50  w-[60vw]"
      >
        <SectionTag heading="Front-end" data={frontEnd} />
        <SectionTag heading="Languages" data={languages} />
        <SectionTag heading="Back-end" data={backEnd} />
      </motion.div>
    </div>
  );
};
