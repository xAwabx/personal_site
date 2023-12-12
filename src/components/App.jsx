import Home from "./Home/Home";
import About from "./About/About";
import { useRef } from "react";
import { Skill } from "./Skills/Skill";
import { Contact } from "./Contact/Contact";
import DOTS from "vanta/src/vanta.dots";
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import pic1 from "./Assets/Project_Thumbnails/pic1.jpg";
import pic2 from "./Assets/Project_Thumbnails/pic2.jpg";
import pic3 from "./Assets/Project_Thumbnails/pic3.jpg";

import { Work } from "./Work/Work";

export default function App() {
  const projects = [
    {
      id: 1,
      heading: "TODO APP",
      img_url: pic1,
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid alias cumque maiores quam debitis possimus quae quis dolore quibusdam qui aspernatur illo officiis totam quaerat velit sed iusto, ea delectus?",
      ref: useRef(null),
    },
    {
      id: 2,
      heading: "Fitness Tracker APP",
      img_url: pic2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ref: useRef(null),
    },
    {
      id: 3,
      heading: "Ali Abbas APP",
      img_url: pic3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ref: useRef(null),
    },
  ];

  const refAbout = useRef(null);
  const handleAbout = () => {
    refAbout.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWork = () => {
    projects[0].ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const vantaEffect = DOTS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xff0000,
      color2: 0xff0000,
      backgroundColor: 0x0,
    });
  }, []);

  return (
    <div className=" h-[100vh]">
      <section className="relative h-[100vh] snap-center">
        <div id="vanta" className="absolute inset-0 z-0 h-[100vh]" />
        <Home onclickabout={handleAbout} onclickwork={handleWork} />
      </section>
      <section
        className="flex flex-col justify-evenly lg:justify-between bg_image2 h-[100vh] snap-center px-[7vw]  lg:pl-[10vw] lg:py-[8vh]"
        ref={refAbout}
      >
        <About />
        <Skill />
      </section>
      {/* <section className="bg_image1 h-[100vh] snap-center">
        <Work projects={projects} />
      </section>
      <section className="bg_image2 h-[100vh] snap-center flex items-center">
        <Contact />
      </section> */}
    </div>
  );
}
