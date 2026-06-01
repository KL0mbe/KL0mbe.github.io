import PageLayout from "../../components/PageLayout";
import PostsList from "./components/PostsList";

function Writings() {
  return (
    <PageLayout
      title="Writings"
      quote="Dont leave it to hindsight to wisen you up"
    >
      <PostsList></PostsList>
    </PageLayout>
  );
}

export default Writings;
