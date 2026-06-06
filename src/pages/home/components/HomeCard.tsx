import { HiExternalLink } from "react-icons/hi";

type Props = {
  title: string;
  description: string;
  url?: string;
};

function HomeCard({ title, description, url }: Props) {
  return (
    <div className="min-h-18">
      <a href={url} target="_blank">
        <div className="flex hover:text-hover underline">
          {title}
          {url && <HiExternalLink size={18} />}
        </div>
      </a>
      <p className="text-textSecondary">{description}</p>
    </div>
  );
}

export default HomeCard;
