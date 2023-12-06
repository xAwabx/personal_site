import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import NavButton from "./NavButton";
import SocialButton from "./SocialButton";
import SubText from "./SubText";
import {
  motion,
  // useTransform,
  // useScroll,
  // useMotionValueEvent,
} from "framer-motion";
// import { useRef, useEffect } from "react";

export default function Home({ onclickabout }) {
  const variant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.3 },
    },
  };

  return (
    <div>
      <div className="pl-[7vw] flex flex-col ">
        <div className="flex flex-row gap-[6vw] text-[1.5vw] text-white pt-10 pl-[3.5vw]">
          <NavButton text={"About"} timer={0} onclick={onclickabout} />
          <NavButton text={"Skills"} timer={0.4} onclick={onclickabout} />
          <NavButton text={"Work"} timer={0.8} />
          <NavButton text={"Contact"} timer={1.2} />
        </div>

        <motion.div style={{ y: 0 }} className="flex flex-col pt-[15vh] gap-2">
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            className="flex flex-row text-[5vw] text-white font-bold"
          >
            <h1 className=" drop-shadow-glow ">
              <span className="text-[#b31616]">&lt;</span>
              Muhammad
              <span className=""> Awab</span> Saghir
              <span className="text-[#b31616]">&gt;</span>
            </h1>
          </motion.div>

          <SubText />

          <div className="relative flex flex-row  text-white pl-[3.5vw] justify-between w-[15vw] text-2xl pt-5 !z-[10000]  pointer-events-auto">
            <SocialButton
              link={"https://www.instagram.com/awab_ghouri/"}
              icon={faInstagram}
              timer={0.5}
            />
            <SocialButton
              link={"https://github.com/xAwabx"}
              icon={faGithub}
              timer={0.7}
            />
            <SocialButton
              link={"https://www.linkedin.com/in/awab-saghir-a8a1a7245/"}
              icon={faLinkedin}
              timer={0.9}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
