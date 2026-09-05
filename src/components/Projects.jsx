import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 md:py-36 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <div className="text-xs font-semibold tracking-widest text-purple-400 mb-3">
            FEATURED WORK
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            <span className="text-white">Recent </span>
            <span className="text-[#3d7bff]">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
