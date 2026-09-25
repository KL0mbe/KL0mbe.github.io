import ProjectCard from "./ProjectCard.tsx";

function ProjectsList() {
  return (
    <>
      <ProjectCard
        title="Key Combo Lookup"
        description="Look up how to type any character on any keyboard. Normalized PostgreSQL schema and Python parsers for 100+ layouts and 40,000+ key combinations."
        role="Sole Developer"
        date="7/26 – now"
        url="https://klombe.com/keyboards"
        stack="React | TypeScript | Python | PostgreSQL"
      />
      <ProjectCard
        title="Reportability Website"
        description="Built and migrated the website for accounting firm Reportability, with a Go backend serving data from MongoDB."
        role="Intern"
        date="6/26 – 8/26"
        url="https://www.reportability.dk"
        stack="Javascript | Go | MongoDB"
      />
      <ProjectCard
        title="Dit Samfund"
        description="Website, app and admin dashboard for mosques in Denmark, with members, events and payments synced in real time via Firebase."
        role="Lead Developer"
        date="3/26"
        url="https://ditsamfund.dk/"
        stack="React | Typescript | Firebase"
      />
      <ProjectCard
        title="Staywired"
        description="E-commerce site and admin dashboard with Pensopay checkout and Shipmondo shipping, managing products, orders and customer data."
        role="Lead Developer"
        date="12/25"
        url="https://www.staywired.dk"
        stack="React | Typescript | Firebase"
      />
      <ProjectCard
        title="FullPowerKegels"
        description="Primary maintainer of a production workout app: migrated live user data, shipped new features and handled releases."
        role="Primary Maintainer"
        date="10/24 – 11/25"
        url="https://apps.apple.com/app/id6449595806"
        stack="Flutter | Firebase"
      />
      <ProjectCard
        title="Ikast Fatih Camii"
        description="Imported and parsed the mosque's member data into a dashboard tracking member dues, plus a dedicated display running 24/7 on screens in the mosque."
        role="Lead Developer"
        date="11/25"
        url="https://www.ikastmoske.dk/"
        stack="React | Typescript | Supabase"
      />
      <ProjectCard
        title="VibeAlign"
        description="AI-powered app generating personalized content per user through the OpenAI and Anthropic APIs, with daily response caching to cut API calls and cost."
        role="Developer & Maintainer"
        date="5/25 – 9/25"
        url="https://apps.apple.com/app/id6746861813"
        stack="Flutter | Firebase"
      />
    </>
  );
}
export default ProjectsList;
