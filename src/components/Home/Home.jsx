import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import NavButton from "./NavButton";
import SocialButton from "./SocialButton";
import SubText from "./SubText";
import { motion } from "framer-motion";

export default function Home({ onclickabout, onclickwork }) {
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
      <div className="lg:pl-[7vw] flex flex-col ">
        <div className="flex flex-row text-white gap-[7vw] text-2xl ml-auto mr-auto mt-5 lg:m-0 lg:gap-[6vw] lg:text-[1.5vw] lg:pt-10 lg:pl-[3.5vw]">
          <NavButton text={"About"} timer={0} onclick={onclickabout} />
          <NavButton text={"Skills"} timer={0.4} onclick={onclickabout} />
          <NavButton text={"Work"} timer={0.8} onclick={onclickwork} />
          <NavButton text={"Contact"} timer={1.2} />
        </div>

        <motion.div
          style={{ y: 0 }}
          className="flex flex-col pt-[20vh] md:pt-[10vh] mx-auto lg:m-0 lg:pt-[15vh] lg:gap-2"
        >
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            className="flex flex-row text-center text-[12vw] md:text-[10vw] lg:text-[5vw]  text-white font-bold"
          >
            <h1 className=" drop-shadow-glow ">
              <span className="text-[#b31616]">&lt;</span>
              <span className="hidden lg:inline">Muhammad </span>
              <span className="">Awab</span> Saghir
              <span className="text-[#b31616]">&gt;</span>
            </h1>
          </motion.div>

          <SubText />

          <div className="relative flex flex-row text-white !z-[10000] pointer-events-auto justify-center gap-11 pt-[35vh] text-2xl md:pt-[29vh] md:text-3xl lg:pl-[3.5vw] lg:gap-0 lg:w-[15vw] lg:justify-between lg:text-3xl lg:pt-5">
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
