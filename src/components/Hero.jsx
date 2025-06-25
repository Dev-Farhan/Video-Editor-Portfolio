import profileImage from "../assets/hereo.jpg";
import resume from "../assets/Md-Farhan-Resume.pdf";

import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";

const container = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full flex items-center justify-center lg:w-1/2 ">
          <div className="flex flex-col gap-3 lg:pl-14 lg:items-start md:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-6xl font-semibold tracking-tight lg:mt-10 lg:text-8xl"
            >
              Hii,I'm Faiz
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-tight text-purple-500"
            >
              🎬 A Passionate Video Editor
            </motion.span>
            {/* <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p> */}
            <div className="">
              <a href="mailto:business.faizan@outlook.com">
                <motion.button
                  className="flex items-center gap-3 p-3 mb-5 text-xs md:text-sm text-white border border-white rounded-md 
    bg-transparent hover:bg-purple-500 hover:border-transparent md:px-10"
                >
                  Let's Connect
                </motion.button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center items-center border border-white hover:border-4 hover:border-purple-500 rounded-full  md:w-[400px] md:h-[400px] overflow-hidden transition-all duration-300 ease-in-out"
          >
            <img
              className="w-full h-full object-cover"
              src={profileImage}
              alt="Farhan"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
