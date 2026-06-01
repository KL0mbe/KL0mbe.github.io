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
    .sort((a, b) => a.date.localeCompare(b.date));

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
    <>
      <div className="text-left group">
        {Object.entries(byYear)
          .sort(([a], [b]) => Number(b) - Number(a))
          .map(([year, entries]) => {
            return (
              <>
                <div className="flex flex-col justify-between w-160">
                  <div className="border-t border-secondary w-full"></div>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      {entries.map(({ slug, title, date }, index) => (
                        <div className="">
                          {/* <div className="border-t border-secondary w-full -mt-px"></div> */}

                          <Link
                            className="group/row"
                            key={slug}
                            to={`/writings/${slug}`}
                            state={{ fromPage: "/writings" }}
                          >
                            <div className="w-120 flex justify-between group-hover/row:opacity-100!">
                              <div className="py-4 pointer-events-none">
                                {index === 0 && year}
                              </div>

                              <div className="does this one do anything? flex flex-col group-hover:opacity-50 group-hover/row:opacity-100! transition-opacity">
                                <div className="flex w-60 py-4 justify-between">
                                  <span>{title}</span>
                                  <p className="text-textSecondary">{date}</p>
                                </div>
                              </div>
                            </div>
                            {index !== entries.length - 1 && (
                              <div className="border-t border-secondary w-full justify-end"></div>
                            )}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default PostsList;
