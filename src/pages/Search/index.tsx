import BaseView from "@/views/Base";

// import type
import { FetchTypes } from "@/hooks/useFetch";

// import service
import { getRepoList } from "@/services/GitHub";

// import components
import { useParams } from "react-router-dom";
import PageLoader from "@/components/PageLoader";
import { RepoList } from "@/components/RepoList";

function PageContent() {
  const query = useParams()?.query || "";
  const { data, loading, error }: FetchTypes<any> = getRepoList(query);

  if (!query || query.trim() === "") {
    return <p>No search term provided. Please enter a search term.</p>;
  }

  return (
    <PageLoader loading={loading}>
      <div className="container">
        <RepoList data={data} error={error} />
      </div>
    </PageLoader>
  );
}

export default function RepositoryList() {
  return (
    <BaseView>
      <PageContent />
    </BaseView>
  );
}
