import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import PageLoader from "@/components/PageLoader";
import { FetchTypes } from "@/hooks/useFetch";
import { getUserDetails } from "@/services/GitHub";
import formatDate from "@/utils/formatDate";
import BaseView from "@/views/Base";
import { useParams } from "react-router-dom";

function PageContent() {
  const user = useParams()?.user || "";

  const { data, loading, error }: FetchTypes<any> = getUserDetails(user);

  return (
    <PageLoader loading={loading}>
      <div className="container">
        <Card className="container">
          <CardHeader>
            <CardTitle>Owner Details View</CardTitle>
          </CardHeader>
          <CardContent>
            {data ? (
              <div>
                <div>{data?.location}</div>
                <div>
                  <img src={data?.avatar_url} alt={data?.name} />
                </div>
                <div>{data?.html_url}</div>
                <div>{data?.name}</div>
                <div>{data?.blog}</div>
                <div>{data?.bio || "Not availble"}</div>
                <div>last update: {formatDate(data?.updated_at)}</div>
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

export default function UserDetails() {
  return (
    <BaseView>
      <PageContent />
    </BaseView>
  );
}
