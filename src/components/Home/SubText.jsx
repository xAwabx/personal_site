import { motion } from "framer-motion";

export default function SubText() {
  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + 0.2 * i,
        duration: 0.2,
      },
    }),
  };

  return (
    <div className="flex flex-col text-[3.5vw] pl-[3.5vw] z-10 ">
      <motion.h1
        variants={variants}
        initial="initial"
        animate="animate"
        custom={1}
        className="text-white"
      >
        <span className="text-[#b31616] font-thin">Pro</span>grammer
      </motion.h1>
      <motion.h1
        variants={variants}
        initial="initial"
        animate="animate"
        custom={2}
        className="text-white"
      >
        <span className="text-[#b31616] font-thin">Web</span>Developer
      </motion.h1>
      <motion.h1
        variants={variants}
        initial="initial"
        animate="animate"
        custom={3}
        className="text-[#b31616] font-thin"
      >
        Student
      </motion.h1>
    </div>
  );
}
