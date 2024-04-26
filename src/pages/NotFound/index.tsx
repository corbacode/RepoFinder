import EmptyView from "@/views/Empty";

import style from "./style.module.scss";
import { Link } from "react-router-dom";
import InternalLinks from "@/enums/InternalLinks";
import Badge from "@/components/Badge";

export default function NotFound() {
  return (
    <EmptyView>
      <div className={style.notFound}>
        <p className={style.notFound__error}>404</p>
        <h1 className={style.notFound__title}>Page not found</h1>
        <p className={style.notFound__description}>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Badge>
          <Link to={InternalLinks.HOME} className={style.notFound__link}>
            Go back home
          </Link>
        </Badge>
      </div>
    </EmptyView>
  );
}
