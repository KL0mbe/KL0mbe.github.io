import ProjectCard from "../../projects/components/ProjectCard";
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
        <ProjectCard
          title="Staywired"
          description="Website for the StayWired product integrated with full crud, checkout
          and an admin dashboard for logistics."
          date="11/25"
          url="https://www.klombe.com"
        />
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit cumque
          rerum est aliquid ipsam dicta minus magni accusantium rem sapiente!
          Accusamus nostrum et odio consequuntur ducimus facere mollitia
          aspernatur itaque.
        </h2>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
          maiores architecto ea blanditiis ex eos animi. Molestiae, dolorem,
          laborum alias eum inventore culpa dolor officia repudiandae placeat
          doloribus explicabo.
        </h1>
      </motion.div>
    </>
  );
}

export default Projects;
