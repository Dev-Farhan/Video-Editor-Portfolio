import { motion } from "framer-motion";

const SkillIcon = ({ icon: Icon, label, colorClass, duration }) => {
  const iconVariants = {
    initial: { y: 10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.div
      variants={iconVariants}
      initial="initial"
      animate="animate"
      className="w-28 h-28 md:w-52 md:h-52 flex flex-col items-center justify-center rounded-2xl border-4 border-neutral-400"
    >
      <motion.div className={`text-5xl md:text-9xl ${colorClass}`}>
        <Icon />
      </motion.div>
      <span className="mt-2 text-xs md:text-sm font-medium px-2">{label}</span>
    </motion.div>
  );
};

export default SkillIcon;
