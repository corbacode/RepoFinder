import { Card, CardContent } from "@/components/Card";
import PageLoader from "@/components/PageLoader";
import InternalLinks from "@/enums/InternalLinks";
import { FetchTypes } from "@/hooks/useFetch";
import { getRepoReadme, getUserRepoDetails } from "@/services/GitHub";
import BaseView from "@/views/Base";
import { Link, useParams } from "react-router-dom";
import style from "./style.module.scss";
import Badge from "@/components/Badge";
import { Picture } from "@/components/Picture";
import Markdown from "react-markdown";
import {
  IcoChat,
  IcoCode,
  IcoEye,
  IcoHashtag,
  IcoLink,
  IcoStar,
  IcoUser,
  IcoUsers,
} from "@/enums/Icons";
import formatStars from "@/utils/formatStars";

// RepoContainer
const RepoContainer = (props: any) => (
  <div className="container">
    <Card>
      <CardContent>{props.children}</CardContent>
    </Card>
  </div>
);

// RepoTitle
const RepoTitle = (props: any) => {
  const { name, visibility, owner } = props;
  return (
    <div className={style.repoTitle}>
      <Picture src={owner?.avatar_url} alt={name} />
      <h3>{name}</h3>
      <Badge>{visibility}</Badge>
    </div>
  );
};

// RepoDetails
const RepoDetails = (props: any) => {
  const { stargazers_count, watchers_count, forks_count } = props;
  return (
    <div className={style.repoDetails}>
      <Badge variant="secondary">
        <IcoEye />
        Watch <strong>{formatStars(watchers_count)}</strong>
      </Badge>
      <Badge variant="secondary">
        <IcoHashtag />
        Fork <strong>{formatStars(forks_count)}</strong>
      </Badge>
      <Badge variant="secondary">
        <IcoStar />
        Star <strong>{formatStars(stargazers_count)}</strong>
      </Badge>
    </div>
  );
};

//RepoOverview
const RepoOverview = (props: any) => {
  const { default_branch, open_issues, html_url, network_count, owner } = props;
  const baseLink = `${InternalLinks.USER}/${owner?.login}`;

  return (
    <div className={style.repoOverview}>
      <div>
        <Badge variant="outline">
          <IcoCode />
          Branch: {default_branch}
        </Badge>
        <Badge variant="outline">
          <IcoChat />
          Issues: {formatStars(open_issues)}
        </Badge>
        <Badge variant="outline">
          <IcoUsers />
          Network: {formatStars(network_count)}
        </Badge>
      </div>

      <div>
        <Badge>
          <Link to={baseLink}>
            <IcoUser />
            <span>{owner?.login}</span>
          </Link>
        </Badge>
        <Badge>
          <a href={html_url} target="_blank">
            <IcoLink />
            <span>Repo On GitHub</span>
          </a>
        </Badge>
      </div>
    </div>
  );
};

//RepoReadme
const RepoReadme = (props: any) => {
  const { user, repo } = useParams();
  const { default_branch } = props;
  const { data: markdown, loading }: FetchTypes<any> = getRepoReadme(
    user || "",
    repo || "",
    default_branch
  );

  return (
    <PageLoader loading={loading}>
      <div className={style.repoReadme}>
        <article>
          <h3>README.MD</h3>
          <Markdown>{markdown}</Markdown>
        </article>
      </div>
    </PageLoader>
  );
};

//RepoAbout
const RepoAbout = (props: any) => {
  const { description, homepage, language, topics } = props;
  return (
    <div className={style.repoAbout}>
      <h3>About</h3>

      {description && <p>{description}</p>}

      {homepage && (
        <Badge>
          <a href={homepage} target="_blank">
            <IcoLink />
            Home Page
          </a>
        </Badge>
      )}

      {topics?.length && (
        <div className={style.repoAbout__topics}>
          {topics.map((topic: string, index: number) => (
            <Badge key={index} variant="outline">
              {topic}
            </Badge>
          ))}
        </div>
      )}

      {language && (
        <div className={style.repoAbout__language}>
          <h3>Language</h3>
          <Badge variant="secondary">{language}</Badge>
        </div>
      )}
    </div>
  );
};

// Page Content
function PageContent() {
  const { user, repo } = useParams();
  const { data, loading }: FetchTypes<any> = getUserRepoDetails(
    user || "",
    repo || ""
  );

  return (
    <PageLoader loading={loading}>
      <RepoContainer>
        <div className={style.repoHeader}>
          <RepoTitle {...data} />
          <RepoDetails {...data} />
        </div>

        <div className={style.repoContent}>
          <div className={style.repoLayoutMain}>
            <RepoOverview {...data} />
            <RepoReadme {...data} />
          </div>

          <div className={style.repoLayoutSidebar}>
            <RepoAbout {...data} />
          </div>
        </div>
      </RepoContainer>
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
