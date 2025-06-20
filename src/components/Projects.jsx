import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false); // state to toggle between showing 4 or all projects

  // Limit the number of projects displayed initially to 4
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
      >
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
      {/* Show "View All" button only if there are more than 4 projects */}
      {PROJECTS.length > 6 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 mx-auto block px-6 py-2 border border-white text-white text-xs hover:border-transparent hover:bg-purple-900 hover:transition-all hover:ease-in-out rounded"
        >
          View More
        </button>
      )}
      {/* Show "View Less" button if all projects are displayed */}
      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className="mt-4 mx-auto block px-6 py-2 border border-white text-white text-xs hover:border-transparent hover:bg-purple-900 hover:transition-all hover:ease-in-out rounded"
        >
          View Less
        </button>
      )}
    </div>
  );
};

export default Projects;
