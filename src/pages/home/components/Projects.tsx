import ProjectsList from "../../projects/components/ProjectsList";
import { Link } from "react-router-dom";
import { type RefObject } from "react";
import { motion } from "motion/react";

function Projects({
  columnRef,
}: {
  columnRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        ref={columnRef}
        className="relative invisible min-[1000px]:visible min-[1000px]:absolute top-30 right-15  flex flex-col  h-125 w-100 overflow-y-scroll [scrollbar-width:none] 
        text-left px-4 py-2"
      >
        <Link className="text-right text-sm hover:text-hover" to={"/projects"}>
          All Projects
        </Link>
        <ProjectsList />
      </motion.div>
    </>
  );
}

export default Projects;
