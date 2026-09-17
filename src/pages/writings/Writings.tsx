import PageLayout from "../../components/PageLayout";
import PostsList from "./components/PostsList";

function Writings() {
  return (
    <PageLayout title="Writings" quote="fate has a habit of following us all">
      <PostsList></PostsList>
    </PageLayout>
  );
}

export default Writings;
