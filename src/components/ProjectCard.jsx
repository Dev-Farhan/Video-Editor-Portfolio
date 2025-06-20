import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    // <a
    //   href={project.link}
    //   target="_blank"
    //   rel="noopener noreferrer"
    //   className="block mb-8 flex flex-wrap lg:justify-center"
    // >
    // <div className="bg-[#0a101d]">
    //   <div className="w-full">
    //     <motion.img
    //       whileInView={{ opacity: 1, x: 0 }}
    //       initial={{ opacity: 0, x: -100 }}
    //       transition={{ duration: 1 }}
    //       src={project.image}
    //       alt={project.title}
    //       className="mb-6 rounded"
    //       width={300}
    //       height={100}
    //     />
    //   </div>
    //   <motion.div
    //     whileInView={{ opacity: 1, x: 0 }}
    //     initial={{ opacity: 0, x: 100 }}
    //     transition={{ duration: 1 }}
    //     className="w-full max-w-xl lg:w-3/4"
    //   >
    //     <h6 className="mb-2 font-semibold">{project.title}</h6>
    //     <p className="mb-4 text-neutral-400">{project.description}</p>
    //     {project.technologies.map((tech, index) => (
    //       <span
    //         key={index}
    //         className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
    //       >
    //         {tech}
    //       </span>
    //     ))}
    //   </motion.div>
    // </div>
    <motion.div
      // whileHover={{ scale: 1.03, y: -4 }}
      whileHover={{
        scale: 1.03,
        y: -4,
        boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col justify-between bg-black/14 border border-blue-950 rounded-2xl p-4 backdrop-blur-md shadow-lg"
    >
      <img
        src={project.image}
        alt="Project"
        className="w-full h-48 object-cover rounded-xl mb-4 p-2"
      />
      <h3 className="text-white text-lg font-semibold mb-2">{project.title}</h3>
      <p className="mb-4 text-neutral-400 text-wrap">{project.description}</p>
      <p
        className={`text-neutral-400 text-sm mb-4 ${
          project.technologies.length > 4
            ? "flex flex-wrap gap-2"
            : "flex gap-2"
        }`}
      >
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
          >
            {tech}
          </span>
        ))}
      </p>

      <div className="flex justify-between gap-3">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <button className="bg-white/10 text-white px-4 py-1 rounded hover:bg-white/20 text-sm">
              Live Demo
            </button>
          </a>
        )}
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button className="bg-white/10 text-white px-4 py-1 rounded hover:bg-white/20 text-sm">
              GitHub
            </button>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
