import PageLayout from "../../components/PageLayout";
import { useParams } from "react-router-dom";

const posts = import.meta.glob("./posts/*.mdx", { eager: true }) as Record<
  string,
  {
    default: React.ComponentType;
    frontmatter: { title: string; quote: string; date: string };
  }
>;

function PostPage() {
  const { slug } = useParams();
  const post = posts[`./posts/${slug}.mdx`];
  if (!post) return <p> No Such Post </p>;
  const Content = post.default;
  return (
    <div className=" text-left">
      <PageLayout
        title={post.frontmatter.title ?? ""}
        quote={post.frontmatter.quote ?? ""}
      >
        <div className="prose prose-invert">
          <p className="text-sm -mt-5">
            {new Date(post.frontmatter.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <Content />
        </div>
      </PageLayout>
    </div>
  );
}

export default PostPage;
