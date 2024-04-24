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

const RepoBox = ({ item }: any) => {
  const { full_name, description, language, visibility, stargazers_count } =
    item;

  const { user, repo } = parseUserAndRepo(full_name);

  return (
    <Card className={style.repoBox}>
      <CardHeader className={style.repoBox__header}>
        <CardTitle className={style.repoBox__title}>
          <Link to={`${InternalLinks.USER}/${user}/${repo}`}>{full_name}</Link>
        </CardTitle>
        <CardDescription className={style.repoBox__desciption}>
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className={style.repoBox__tags}>
        {language && <span className={style.tag}>{language}</span>}
        {stargazers_count && (
          <span className={style.tag}>
            <IcoStar />
            {formatStars(stargazers_count)}
          </span>
        )}
        {visibility && <span className={style.tag}>{visibility}</span>}
      </CardFooter>
    </Card>
  );
};

export { RepoBox };
