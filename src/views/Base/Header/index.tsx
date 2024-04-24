import style from "./style.module.scss";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { useSearchContext } from "@/contexts/SearchContext";
import InternalLinks from "@/enums/InternalLinks";
import { useForm } from "@/hooks/useForm";
import { useNavigate } from "react-router-dom";

const FORM_ITEM = {
  SEARCH: "search",
};

const HeaderSearch = () => {
  const { setSearchQuery } = useSearchContext();
  const [data, handleForm] = useForm();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(data[FORM_ITEM.SEARCH]);
    navigate(`${InternalLinks.SEARCH}/${data[FORM_ITEM.SEARCH]}`);
  };

  return (
    <form className={style.headerSearch} onSubmit={handleSubmit}>
      <Input
        placeholder="Search Repo..."
        type="text"
        onChange={handleForm(FORM_ITEM.SEARCH)}
      />
    </form>
  );
};

export default function HeaderView() {
  return (
    <nav className={style.headerWrapper}>
      <div className="container">
        <Logo />
        <HeaderSearch />
      </div>
    </nav>
  );
}
