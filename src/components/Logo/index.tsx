import { Link } from "react-router-dom";
import style from "./style.module.scss";
import InternalLinks from "@/enums/InternalLinks";
import { IcoLogo } from "@/enums/Icons";

const Logo = () => {
  return (
    <div className={style.logo}>
      <Link to={InternalLinks.HOME}>
        <IcoLogo />
        <span>Repo Finer</span>
      </Link>
    </div>
  );
};

export { Logo };
