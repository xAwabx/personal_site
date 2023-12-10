import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function SocialButton({ link, icon, timer }) {
  const variants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        delay: timer,
      },
    },
  };

  return (
    <motion.a
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      href={link}
      className="group transform ease-out duration-200 "
      target="_blank"
      rel="noreferrer"
    >
      <FontAwesomeIcon
        className="group-hover:scale-110  transform ease-out duration-200  group-hover:opacity-50 "
        icon={icon}
      />
    </motion.a>
  );
}
