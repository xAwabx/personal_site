import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { Project } from "./Project";

export const Work = () => {
  const projects = [
    {
      id: 1,
      heading: "TODO APP",
      img_url: "../Assets/Project Thumbnails/pic1.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      heading: "Fitness Tracker APP",
      img_url: "../Assets/Project Thumbnails/pic2.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      heading: "Ali Abbas App",
      img_url: "../Assets/Project Thumbnails/pic3.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 0.95]);
  const scaleX = useSpring(x, { bounce: 0.1 });

  return (
    <div ref={ref} className="">
      <div className=" sticky top-0 left-0 text-center pt-[5vh] gap-5">
        <motion.div style={{ scaleX }} className="h-3 bg-white  rounded-lg " />
        <h1 className=" text-[#b31616] text-[6vh]">
          &lt;
          <span className="text-white font-semibold">Work</span>&gt;
        </h1>
      </div>
      {projects.map((project, i) => {
        return <Project projectData={project} key={i} />;
      })}
    </div>
  );
};
