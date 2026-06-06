import { Link } from "react-router-dom";

const posts = import.meta.glob("../posts/*.mdx", { eager: true }) as Record<
  string,
  { frontmatter: { title: string; quote: string; date: string } }
>;

function PostsList() {
  const entries = Object.entries(posts)
    .map(([path, post]) => {
      const slug = path.replace("../posts/", "").replace(".mdx", "");
      return {
        slug,
        title: post.frontmatter.title,
        date: post.frontmatter.date,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  const byYear = entries.reduce<Record<string, typeof entries>>(
    (accumulator, entry) => {
      const currYear = entry.date.split("-")[0];
      if (!accumulator[currYear]) accumulator[currYear] = [];
      accumulator[currYear]!.push(entry);

      return accumulator;
    },
    {},
  );
  return (
    <div className="group max-w-160">
      {Object.entries(byYear)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, entries]) => {
          return (
            <div key={year} className="relative">
              <div className="border-t border-secondary -mb-px"></div>
              {entries.map(({ slug, title, date }, index) => (
                <Link
                  key={slug}
                  className="group/row"
                  to={`/writings/${slug}`}
                  state={{ fromPage: "/writings" }}
                >
                  <div className="ml-[25%]">
                    <div className="absolute top-1 left-0 text-sm text-textSecondary py-4 pl-2">
                      {year}
                    </div>
                    <div className="w-full group-hover:opacity-50 group-hover/row:opacity-100! transition-opacity">
                      <div
                        className={`flex py-4 justify-between border-y border-secondary -mb-px pr-2 
                          ${index === entries.length - 1 && "border-b-transparent"}`}
                      >
                        <p>{title}</p>
                        <p className="text-textSecondary">
                          {date.split("-")[2]}/{date.split("-")[1]}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          );
        })}
    </div>
  );
}

export default PostsList;
