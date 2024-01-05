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
    <section
      ref={projectData.ref}
      className=" text-white snap-center py-[10vw] lg:p-0"
    >
      <div className="h-[70vh] w-[100vw] flex flex-col justify-center overflow-y-hidden">
        <div className="flex flex-col lg:flex-row mx-auto gap-10 items-center">
          <div variants={Variants} initial="notHovered" whileHover="hovered">
            <MdArrowDropDown
              size={100}
              className="px-2 ml-auto hidden lg:block mr-auto rotate-90 cursor-pointer"
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
          </div>
          <img
            src={projectData.img_url}
            alt=""
            className="h-[20vh] w-[90vw] md:h-[50vh] md:w-[50vw] rounded-xl"
          />
          <div className="text-center flex flex-col gap-5 px-10 lg:text-start lg:gap-5 lg:max-w-[50vh]">
            <h1 className="font-bold text-2xl lg:text-5xl lg:font-light">
              {projectData.heading}
            </h1>
            <p className="text-lg p-2 max-h-[10vh] md:max-h-full md:overflow-y-hidden overflow-y-scroll lg:text-2xl font-thin min-h-[15vh]">
              {projectData.desc}
            </p>

            <motion.button
              variants={Variants.buttonVariant}
              initial="notHovered"
              whileHover="hovered"
              onClick={() => {
                console.log(projectData.link);
                window.open(projectData.link, "_blank");
              }}
              className="bg-[#b31616] text-white font-bold text-2xl rounded-3xl p-4"
            >
              <FaExternalLinkAlt className="mx-auto" />
            </motion.button>
          </div>
          <div variants={Variants} initial="notHovered" whileHover="hovered">
            <MdArrowDropDown
              size={100}
              className="px-2 ml-auto hidden lg:block mr-auto rotate-[-90deg] cursor-pointer"
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
          </div>
        </div>
      </div>
    </section>
  );
};
