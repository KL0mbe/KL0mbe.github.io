import ProjectCard from "./ProjectCard.tsx";

function ProjectsList() {
  return (
    <>
      <ProjectCard
        title="Dit Samfund"
        description="Built website, app and dashboard from ground up to handle events, members and payment logs."
        role="Lead Developer"
        date="3/26"
        url="https://ditsamfund.dk/"
        stack="React | Typescript | Firebase"
      />
      <ProjectCard
        title="Staywired"
        description="Built website and admin dashboard from ground up. E-Commerce with checkout and logistics."
        role="Lead Developer"
        date="12/25"
        url="https://www.staywired.dk"
        stack="React | Typescript | Firebase"
      />
      <ProjectCard
        title="FullPowerKegels"
        description="Maintained and implemented new features for workout app while testing, pushing to prod and migrating user data."
        role="Primary Maintainer"
        date="10/24-11/25"
        url="https://apps.apple.com/app/id6449595806"
        stack="Flutter | Firebase"
      />
      <ProjectCard
        title="Ikast Fatih Camii"
        description="Built website and admin dashboard for the mosque, handling member management and payment tracking."
        role="Lead Developer"
        date="11/25"
        url="https://www.ikastmoske.dk/"
        stack="React | Typescript | Supabase"
      />
      <ProjectCard
        title="VibeAlign"
        description="Built app from ground up utilizing AI to take in user input and curate content for them."
        role="Developer & Maintainer"
        date="5/25-9/25"
        url="https://apps.apple.com/app/id6746861813"
        stack="Flutter | Firebase"
      />
    </>
  );
}
export default ProjectsList;
