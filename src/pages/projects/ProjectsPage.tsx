import ProjectCard from "./components/ProjectCard";
import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <main className="w-full px-4 py-32">
      <div
        className="mx-auto max-w-5xl gap-x-2
          grid max-md:grid-cols-1
          grid-cols-[minmax(max-content,1fr)_640px_minmax(0,1fr)]"
      >
        {/* LEFT COLUMN */}
        <nav className="h-fit ">
          <button
            onClick={() => navigate("/")}
            className="flex items-center w-17 gap-2
              hover:text-hover cursor-pointer"
          >
            <TbArrowBackUp size={14} />
            <em>Home</em>
          </button>
        </nav>

        {/* CENTER COLUMN */}
        <section className="min-w-0 w-full">
          <h1 className=" font-semibold mb-6 text-left">Projects</h1>

          <ProjectCard
            title="Staywired"
            description="Website for the StayWired product integrated with full crud, checkout
          and an admin dashboard for logistics."
            date="11/25"
            url="https://www.klombe.com/"
          />
          <ProjectCard
            title="FullPowerKegels"
            description="An App For developing your kegels with kegel excercises, primary maintainer for 2,5 years"
            date="7/24"
          />
        </section>
      </div>
    </main>
  );
}

export default ProjectsPage;
