import { HiExternalLink } from "react-icons/hi";

type Props = {
  title: string;
  description: string;
  url?: string;
};

function HomeCard({ title, description, url }: Props) {
  return (
    <>
      <a href={url} target="_blank">
        <div className="group">
          <div className="flex items-center gap-2 mt-4">
            {title}
            {url && (
              <HiExternalLink size={18} className="group-hover:text-hover" />
            )}
          </div>
          <h2 className="text-sm mt-2">{description}</h2>
        </div>
      </a>
    </>
  );
}

export default HomeCard;
