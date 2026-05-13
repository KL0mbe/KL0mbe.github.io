import ProjectCard from "../pages/projects/components/ProjectCard.tsx";

function ProjectsList() {
  return (
    <>
      <ProjectCard
        title="Dit Samfund"
        description="Website, App and Dashboard for organization to handle its events, members and payment logs."
        date="3/26"
        url="https://ditsamfund.dk/"
      />
      <ProjectCard
        title="Staywired"
        description="Website for the StayWired product integrated with full crud, checkout
          and an admin dashboard for logistics."
        date="12/25"
        url="https://www.staywired.dk"
      />
      <ProjectCard
        title="FullPowerKegels"
        description="An App For developing your kegels with kegel excercises, primary maintainer"
        date="10/24-11/25"
        url="https://apps.apple.com/app/id6449595806"
      />
      <ProjectCard
        title="VibeAlign"
        description="Meditation & Manifestation App. Primary developer, and maintainer for half a year"
        date="5/25-9/25"
        url="https://apps.apple.com/app/id6746861813"
      />
      <ProjectCard
        title="Staywired"
        description="Website for the StayWired product integrated with full crud, checkout
          and an admin dashboard for logistics."
        date="12/25"
        url="https://www.staywired.dk"
      />
      <ProjectCard
        title="FullPowerKegels"
        description="An App For developing your kegels with kegel excercises, primary maintainer"
        date="10/24-11/25"
        url="https://apps.apple.com/app/id6449595806"
      />
      <ProjectCard
        title="VibeAlign"
        description="Meditation & Manifestation App. Primary developer, and maintainer for half a year"
        date="5/25-9/25"
        url="https://apps.apple.com/app/id6746861813"
      />
    </>
  );
}
export default ProjectsList;
