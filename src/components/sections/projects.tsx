import { lazy, memo, RefObject, Suspense } from "react";
import { motion } from "framer-motion";
import projects from "../../projects/data";

const ProjectItem = lazy(() => import("../projectItem").then(module => ({ default: module.default })));

type SectionProjectsProps = {
    ref: RefObject<HTMLDivElement>;
};

const SectionProjects = ({ ref }: SectionProjectsProps) => {
    return (
        <section className="projects" ref={ref} id="projects">
            <Suspense fallback={<div>Loading...</div>}>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
                >
                    {projects.map((project, index) => (
                        <ProjectItem key={index} project={project} />
                    ))}
                </motion.div>
            </Suspense>
        </section>
    );
};

export default memo(SectionProjects);