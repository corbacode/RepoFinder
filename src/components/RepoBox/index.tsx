import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";

import style from "./style.module.scss";
import formatStars from "@/utils/formatStars";
import { IcoStar } from "@/enums/Icons";
import { Link } from "react-router-dom";
import InternalLinks from "@/enums/InternalLinks";
import parseUserAndRepo from "@/utils/parseUserAndRepo";
import Badge from "../Badge";

const RepoHeader = (props: any) => {
  const { full_name, description } = props;
  const { user, repo } = parseUserAndRepo(full_name);
  const link = `${InternalLinks.USER}/${user}/${repo}`;

  return (
    <CardHeader className={style.repoBox__header}>
      <CardTitle className={style.repoBox__title}>
        <Link to={link}>{full_name}</Link>
      </CardTitle>
      <CardDescription className={style.repoBox__desciption}>
        {description}
      </CardDescription>
    </CardHeader>
  );
};

const RepoTags = (props: any) => {
  const { language, visibility, stargazers_count } = props;
  return (
    <CardFooter className={style.repoBox__tags}>
      {language && <Badge variant="outline">{language}</Badge>}
      {stargazers_count > 0 && (
        <Badge variant="secondary">
          <IcoStar />
          {formatStars(stargazers_count)}
        </Badge>
      )}
      {visibility && <Badge className={style.tag}>{visibility}</Badge>}
    </CardFooter>
  );
};

export const RepoBox = ({ item }: any) => (
  <Card className={style.repoBox}>
    <RepoHeader {...item} />
    <RepoTags {...item} />
  </Card>
);
