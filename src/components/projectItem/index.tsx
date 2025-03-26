import { Project } from "../../projects/data";
import { motion } from "framer-motion";
import { GithubLogo, Link } from "@phosphor-icons/react";

const ProjectItem = ({ project }: { project: Project }) => {

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
            style={{
                backgroundImage: `url(${project.image})`,
            }}
            className={`w-full h-52 bg-cover bg-no-repeat grayscale hover:grayscale-0 ease-in-out relative group`}>
            <span className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col items-center justify-center gap-2">
                <h2 className="text-xl font-medium text-white drop-shadow-lg">{project.title}</h2>
                <div className="flex gap-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-project-link">
                        <GithubLogo size={25} />
                    </a>
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-project-link">
                            <Link size={25} />
                        </a>
                    )}
                </div>
            </span>
        </motion.div>
    );
}

export default ProjectItem;