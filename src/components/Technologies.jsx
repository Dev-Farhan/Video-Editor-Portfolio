import { FaFigma } from "react-icons/fa6";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobelightroom,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobexd,
  SiDavinciresolve,
  SiCanva,
} from "react-icons/si";
import { TbDeviceImacCheck } from "react-icons/tb";
import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileHover={{
          scale: 1.08,
          rotate: 1,
          borderColor: "#a855f7",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="my-20 pl-20 text-start text-4xl"
      >
        🛠 Tools <span className="text-purple-500">i Use</span>
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-items-center">
                    <SkillIcon
            icon={SiAdobepremierepro}
            label="Adobe Premiere Pro"
            colorClass="text-indigo-500"
            duration={4}
          />
          <SkillIcon
            icon={SiAdobeaftereffects}
            label="Adobe After Effects"
            colorClass="text-purple-500"
            duration={3}
          />
          <SkillIcon
            icon={SiAdobeillustrator}
            label="Adobe Illustrator"
            colorClass="text-orange-500"
            duration={5}
          />
          <SkillIcon
            icon={SiAdobelightroom}
            label="Adobe Lightroom"
            colorClass="text-sky-500"
            duration={4}
          />
          <SkillIcon
            icon={SiAdobephotoshop}
            label="Adobe Photoshop"
            colorClass="text-blue-500"
            duration={5}
          />
          <SkillIcon
            icon={SiAdobexd}
            label="Adobe XD"
            colorClass="text-pink-500"
            duration={3}
          />

          <SkillIcon
            icon={SiDavinciresolve}
            label="DaVinci Resolve"
            colorClass="text-teal-500"
            duration={5}
          />
          <SkillIcon
            icon={TbDeviceImacCheck}
            label="CapCut Desktop"
            colorClass="text-green-500"
            duration={3}
          />
          <SkillIcon
            icon={SiCanva}
            label="Canva"
            colorClass="text-cyan-500"
            duration={4}
          />
          <SkillIcon
            icon={FaFigma}
            label="Figma"
            colorClass="text-violet-500"
            duration={4}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
