import Home from "./Home/Home";
import About from "./About/About";
import { useRef } from "react";
import { Skill } from "./Skills/Skill";
import DOTS from "vanta/src/vanta.dots";
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { Work } from "./Work/Work";

export default function App() {
  const ref1 = useRef(null);
  const handleClick = () => {
    ref1.current?.scrollIntoView({ behavior: "smooth" });
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
    <div className=" snap-y snap-mandatory h-[100vh]  bg-opacity-0">
      <section className="relative h-[100vh] snap-center">
        <div id="vanta" className="absolute inset-0 z-0 h-[100vh]" />
        <Home onclickabout={handleClick} />
      </section>
      <section
        className="flex flex-col justify-between pl-[10vw] py-[8vh] bg_image2 h-[100vh] snap-center"
        ref={ref1}
      >
        <About />
        <Skill />
      </section>
      <section className="bg_image1 h-[100vh]">
        <Work />
      </section>
    </div>
  );
}
