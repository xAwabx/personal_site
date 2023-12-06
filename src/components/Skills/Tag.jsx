import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Tag = ({ text, index }) => {
  const [isHover, setIsHover] = useState(false);
  const tagFadeInAnimationVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.3 + index * 0.15,
      },
    }),
  };
  return (
    <motion.li
      variants={tagFadeInAnimationVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      onHoverStart={() => {
        setIsHover(true);
      }}
      onHoverEnd={() => {
        setIsHover(false);
      }}
      className={`${
        isHover ? "text-white bg-[#b31616]" : "text-black bg-white"
      } px-4 py-2 rounded-xl text-md font-mono border-black border-[0.1px] cursor-default`}
    >
      {text}
    </motion.li>
  );
};
