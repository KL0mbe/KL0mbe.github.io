import ProjectsList from "./components/ProjectsList";
import PageLayout from "../../components/PageLayout";

function ProjectsPage() {
  return (
    <PageLayout
      title="Projects"
      quote="Bad days will come and go, do not let your virtue travel with them"
    >
      <ProjectsList />
    </PageLayout>
  );
}

export default ProjectsPage;
