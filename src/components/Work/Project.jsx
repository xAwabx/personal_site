import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Project = ({ projectData, Data }) => {
  const Variants = {
    buttonVariant: {
      notHovered: {
        scale: 1,
      },
      hovered: {
        scale: 1.01,
      },
    },
    notHovered: {
      scale: 1,
    },
    hovered: {
      scale: 1.2,
    },
  };

  return (
    <section ref={projectData.ref} className=" text-white snap-center mx-20">
      <div className="h-[70vh] w-[100vw] flex flex-col justify-center">
        <div className="flex flex-row mx-auto gap-10 items-center">
          <motion.div
            variants={Variants}
            initial="notHovered"
            whileHover="hovered"
          >
            <MdArrowDropDown
              size={100}
              className="px-2 ml-auto mr-auto rotate-90 cursor-pointer"
              onClick={() => {
                if (projectData != Data[0]) {
                  Data[projectData.id - 2].ref.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                } else {
                  Data[Data.length - 1].ref.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
            />
          </motion.div>
          <img
            src={projectData.img_url}
            alt=""
            className="h-[50vh] w-[70vh] rounded-xl"
          />
          <div className="flex flex-col gap-5 max-w-[50vh]">
            <h1 className="text-5xl font-light">{projectData.heading}</h1>
            <p className="text-2xl font-thin min-h-[15vh]">
              {projectData.desc}
            </p>

            <motion.button
              variants={Variants.buttonVariant}
              initial="notHovered"
              whileHover="hovered"
              className="bg-[#b31616] text-white font-bold text-2xl rounded-3xl p-4"
            >
              <FaExternalLinkAlt className="mx-auto" />
            </motion.button>
          </div>
          <motion.div
            variants={Variants}
            initial="notHovered"
            whileHover="hovered"
          >
            <MdArrowDropDown
              size={100}
              className="px-2 ml-auto mr-auto rotate-[-90deg] cursor-pointer"
              onClick={() => {
                if (projectData.id != Data.length) {
                  Data[projectData.id].ref.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                } else {
                  Data[0].ref.current?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
