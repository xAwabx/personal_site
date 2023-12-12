import React from "react";
import { Tag } from "./Tag";
import { motion } from "framer-motion";

export const SectionTag = ({ heading, data }) => {
  return (
    <div className="flex flex-col lg:w-[40vw] lg:m-2 ">
      <h1 className="mr-auto ml-auto text-white mb-3 text-[5vw] md:text-[3vw] lg:text-[3.5vh] font-semibold lg:mb-5 ">
        {heading}
      </h1>
      <ul className="flex flex-wrap justify-center gap-2">
        {data.map((lang, i) => {
          return <Tag text={lang} key={i} index={i} />;
        })}
      </ul>
    </div>
  );
};
