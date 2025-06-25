import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileHover={{
          scale: 1.08,
          rotate: 1,
          borderColor: "#a855f7", // Tailwind's purple-500
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="my-20 text-center text-5xl"
      >
        About <span className="text-purple-500"> Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 "
        >
          <div className="w-full max-w-md mx-auto flex items-center justify-center">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src='https://res.cloudinary.com/dsbqmtwnv/image/upload/v1750847014/about1_nrq1ev.jpg'
              alt="about"
              loading="lazy"

            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex items-center justify-center"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
