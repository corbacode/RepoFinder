import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import PageLoader from "@/components/PageLoader";
import InternalLinks from "@/enums/InternalLinks";
import { FetchTypes } from "@/hooks/useFetch";
import { getUserRepoDetails } from "@/services/GitHub";
import formatDate from "@/utils/formatDate";
import BaseView from "@/views/Base";
import { Link, useParams } from "react-router-dom";

function PageContent() {
  const { user, repo } = useParams();

  const { data, loading, error }: FetchTypes<any> = getUserRepoDetails(
    user || "",
    repo || ""
  );

  return (
    <PageLoader loading={loading}>
      <div className="container">
        <Card>
          <CardHeader>
            <CardTitle>Repo Details View</CardTitle>
          </CardHeader>
          <CardContent>
            {data ? (
              <div>
                <div>
                  <Link to={`${InternalLinks.USER}/${data?.owner.login}`}>
                    SEE USER INFO
                  </Link>
                </div>
                <div>
                  URL:{" "}
                  <a href={data?.html_url} target="_blank">
                    Link to github
                  </a>
                </div>
                <div>
                  Name: <strong>{data?.name}</strong>
                </div>
                <div>
                  Language: <strong>{data?.language || "Not Found!"}</strong>
                </div>
                <div>
                  Forks: <strong>{data?.forks || "Not Found!"}</strong>
                </div>
                <div>
                  Open Issues:
                  <strong>{data?.open_issues || "Not Found!"}</strong>
                </div>
                <div>
                  SSH URL: <code>{data?.ssh_url}</code>
                </div>
                <div>
                  Blog: <strong>{data?.blog || "Not Found!"}</strong>
                </div>
                <div>
                  Location:
                  <strong>{data?.location || "Not Found!"}</strong>
                </div>
                <div>
                  Bio: <strong>{data?.bio || "Not Found!"}</strong>
                </div>
                <div>
                  Last update: <strong>{formatDate(data?.updated_at)}</strong>
                </div>
              </div>
            ) : (
              <p>{error?.message}</p>
            )}
          </CardContent>
        </Card>
      </div>
    </PageLoader>
  );
}

export default function UserRepo() {
  return (
    <BaseView>
      <PageContent />
    </BaseView>
  );
}
