import React from "react";
import { Tag } from "./Tag";
import { motion } from "framer-motion";

export const SectionTag = ({ heading, data }) => {
  return (
    <div className="flex flex-col w-[40vw] m-2 ">
      <h1 className="mr-auto ml-auto text-white text-3xl font-semibold mb-5 ">
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
