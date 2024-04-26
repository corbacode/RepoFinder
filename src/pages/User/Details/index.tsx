import { Card, CardContent } from "@/components/Card";
import PageLoader from "@/components/PageLoader";
import { FetchTypes } from "@/hooks/useFetch";
import { getUserDetails, getUserRepoList } from "@/services/GitHub";
import formatDate from "@/utils/formatDate";
import BaseView from "@/views/Base";
import { useParams } from "react-router-dom";
import style from "./style.module.scss";
import { RepoList } from "@/components/RepoList";
import { Picture } from "@/components/Picture";
import Badge from "@/components/Badge";
import {
  IcoBookmark,
  IcoLink,
  IcoMap,
  IcoPen,
  IcoUpdate,
  IcoUsers,
} from "@/enums/Icons";

type VcardProps = {
  Icon: React.ElementType;
  item: string;
  Tag?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  tagProps?: Record<string, any>;
};

// VcardItemRender
const VcardItemRender = ({
  Icon,
  item,
  Tag = "span",
  tagProps = {},
}: VcardProps) => {
  return (
    item && (
      <div className={style.vcardItem}>
        <Icon />
        <Tag {...tagProps}>{item}</Tag>
      </div>
    )
  );
};

// UserContainer
const UserContainer = (props: any) => (
  <div className="container">
    <Card>
      <CardContent>{props.children}</CardContent>
    </Card>
  </div>
);

// UserVcard
const UserVcard = (props: any) => {
  const {
    avatar_url,
    login,
    type,
    name,
    blog,
    location,
    bio,
    followers,
    following,
    updated_at,
  } = props;
  return (
    <div className={style.userVcard}>
      <Picture
        className={style.userVcard__avatar}
        src={avatar_url}
        alt={login}
      />
      <div className={style.userVcard__name}>
        <div>
          <h3>{name}</h3>
          <Badge variant="outline">
            <IcoBookmark />
            Type: {type}
          </Badge>
        </div>
        <span>{login}</span>
      </div>
      <hr />
      <div className={style.userVcard__follow}>
        <Badge variant="outline">
          <IcoUsers /> {followers} Followers
        </Badge>
        <Badge variant="outline">
          <IcoBookmark /> {following} Following
        </Badge>
      </div>
      <div className={style.userVcard__meta}>
        <VcardItemRender Icon={IcoPen} item={bio} />
        <VcardItemRender
          Icon={IcoLink}
          item={blog}
          Tag="a"
          tagProps={{ href: blog, target: "_blank" }}
        />
        <VcardItemRender Icon={IcoMap} item={location} />
        <VcardItemRender Icon={IcoUpdate} item={formatDate(updated_at)} />
      </div>
    </div>
  );
};

// UesrRepos
const UesrRepos = () => {
  const { user } = useParams();
  const { data, loading, error }: FetchTypes<any> = getUserRepoList(user || "");

  return (
    <PageLoader loading={loading}>
      <div className={style.userRepos}>
        {data?.length ? (
          <RepoList data={data} error={error} />
        ) : (
          <h4>No Repository Founded!</h4>
        )}
      </div>
    </PageLoader>
  );
};

// PageContent
function PageContent() {
  const user = useParams()?.user || "";
  const { data, loading }: FetchTypes<any> = getUserDetails(user);

  return (
    <PageLoader loading={loading}>
      <UserContainer>
        <div className={style.userLayout}>
          <div className={style.userLayout__sidebar}>
            <UserVcard {...data} />
          </div>

          <div className={style.userLayout__main}>
            <UesrRepos />
          </div>
        </div>
      </UserContainer>
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
