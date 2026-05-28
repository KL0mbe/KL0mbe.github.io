import { HiExternalLink } from "react-icons/hi";

type ProjectData = {
  title: string;
  description: string;
  role: string;
  url: string;
  stack: string;
  date: string;
};

function ProjectCard({
  title,
  description,
  role,
  url,
  stack,
  date,
}: ProjectData) {
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div
          className="text-left bg-accen p-4 mt-4 rounded-lg max-w-160 group
        border border-secondary"
        >
          <div className="flex justify-between">
            <span>{title}</span>
            <div className="flex gap-4 ">
              <p className="italic">{role}</p>
              <p>{date}</p>
            </div>
          </div>
          <p className="mt-2">{description}</p>

          <div className="flex justify-between">
            <p className="text-sm text-textSecondary">{stack}</p>
            <HiExternalLink className="group-hover:text-hover" size={18} />
          </div>
        </div>
      </a>
    </>
  );
}

export default ProjectCard;
