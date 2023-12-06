import { motion } from "framer-motion";
export default function NavButton({ text, timer, onclick }) {
  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: timer,
          type: "spring",
          y: {
            duration: timer,
          },
        },
      }}
      onClick={onclick}
      className={`relative font-thin cursor-pointer group transition-transform duration-500 ease-in-out `}
    >
      {text}
      <span className="absolute inset-x-0 bottom-0 h-0.5  bg-[#b31616] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
    </motion.h1>
  );
}
