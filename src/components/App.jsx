import Home from "./Home/Home";
import About from "./About/About";
import { useRef } from "react";
import { Skill } from "./Skills/Skill";
import { Contact } from "./Contact/Contact";
import DOTS from "vanta/src/vanta.dots";
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import pic1 from "./Assets/Project_Thumbnails/TODO_Thumbnail.PNG";
import pic2 from "./Assets/Project_Thumbnails/pic2.jpg";
import pic3 from "./Assets/Project_Thumbnails/pic3.jpg";

import { Work } from "./Work/Work";

export default function App() {
  const projects = [
    {
      id: 1,
      heading: "TODO APP",
      img_url: pic1,
      link: "https://todo-ify-app.netlify.app",
      desc: "A user-friendly web application designed to help you effortlessly manage your to-do list. Developed using the powerful MERN stack, this platform ensures seamless organization and tracking of tasks, providing a streamlined and efficient task management solution.",
      ref: useRef(null),
    },
    {
      id: 2,
      heading: "HOUR TALLY APP",
      img_url: pic2,
      link: "https://www.google.com",
      desc: "Create, edit, and manage groups seamlessly on a platform developed using the MERN Stack. Authenticated through Firebase, users can efficiently collaborate, tallying the hours spent collectively on specific tasks. Additionally, users can easily add others to their groups, enhancing the collaborative experience.",
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
      <section className="bg_image1 h-[100vh] snap-center">
        <Work projects={projects} />
      </section>
      <section className="bg_image2 h-[100vh] snap-center flex justify-center lg:justify-start items-center">
        <Contact />
      </section>
    </div>
  );
}
