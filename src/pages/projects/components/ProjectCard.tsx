import { HiExternalLink } from "react-icons/hi";

type ProjectData = {
  title: string;
  description: string;
  url?: string;
  date: string;
};

function ProjectCard({ title, description, url, date }: ProjectData) {
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="d text-left bg-accent p-4 mt-2 rounded-lg max-w-160 group">
          <div className="flex justify-between">
            <h1>{title}</h1>
            <h3>{date}</h3>
          </div>
          <h2 className="mt-2">{description}</h2>
          {url && (
            <div className="flex justify-end group-hover:text-hover">
              <HiExternalLink size={18} />
            </div>
          )}
        </div>
      </a>
    </>
  );
}

export default ProjectCard;
