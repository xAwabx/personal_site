import { React, useState } from "react";
import { motion } from "framer-motion";
import SocialButton from "../Home/SocialButton";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const variants = {
    buttonVariant: {
      notHovered: {
        scale: 1,
      },
      hovered: {
        scale: 1.01,
      },
    },
    textbox: {
      hidden: { opacity: 0, y: -30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.4, duration: 0.4 },
      },
    },
    heading: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1,
          duration: 0.4,
        },
      },
    },
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = async () => {
    const obj = {
      name: name,
      email: email,
      message: message,
    };
    if ((obj.message != "") & (obj.email != "") & (obj.name != "")) {
      try {
        const result = await emailjs.send(
          "service_xwnfowf",
          "template_hr794pe",
          obj,
          "wRIHlyyW6Zam7f1qf"
        );
        setName("");
        setEmail("");
        setMessage("");
        console.log(result.text);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("ARE YOU DUMB????");
    }
  };

  return (
    <div className="flex flex-col items-center lg:items-start lg:flex-row gap-1 lg:gap-10">
      <motion.div
        variants={variants.textbox}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" p-6 h-[60vh] w-[80vw] lg:ml-[10vw] lg:min-h-[60vh] lg:min-w-[50vw] lg:p-10 lg:w-[30vw] rounded-2xl bg-black bg-opacity-50 lg:backdrop-blur-md  flex flex-col justify-between"
      >
        <div>
          <motion.h1
            variants={variants.heading}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className=" text-[#b31616] text-[4vh] mb-4 text-left"
          >
            &lt;
            <span className="text-white font-semibold ">Contact Me</span>
            &gt;
          </motion.h1>
        </div>
        <form action="" className="flex flex-col gap-5">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="Name"
            placeholder="Name"
            className=" pl-3 py-2 bg-transparent rounded-lg outline-none text-white border-[#b31616] border-[0.1px]"
          />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            name="Email"
            placeholder="Email"
            className=" pl-3 py-2 bg-transparent rounded-lg outline-none text-white border-[#b31616] border-[0.1px]"
          />
          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className=" pl-3 py-2 bg-transparent rounded-lg outline-none text-white min-h-[20vh] border-[#b31616] border-[0.1px]"
            placeholder="Message"
          ></textarea>
        </form>
        <motion.button
          onClick={onSubmit}
          variants={variants.buttonVariant}
          initial="notHovered"
          whileHover="hovered"
          className="bg-[#b31616] text-white font-thin text-2xl rounded-3xl p-1"
        >
          Submit
        </motion.button>
      </motion.div>
      <div className="flex lg:flex-col gap-10 text-white text-3xl pt-10">
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
    </div>
  );
};
