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
    <div className="flex flex-col text-center text-[9vw] md:text-[6vw] gap-5 pt-10 lg:pt-0 lg:gap-0 lg:text-start lg:m-0 lg:text-[3.5vw] lg:pl-[3.5vw] z-10 ">
      <motion.div
        variants={variants}
        initial="initial"
        animate={{ opacity: 1, y: 0 }}
        className=" bg-black bg-opacity-40 backdrop-blur-sm rounded-lg  lg:bg-opacity-0 lg:backdrop-blur-0 "
      >
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
          className=" text-[#b31616] font-thin"
        >
          Student
        </motion.h1>
      </motion.div>
    </div>
  );
}
