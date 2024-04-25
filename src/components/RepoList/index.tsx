import { RepoBox } from "../RepoBox";

import style from "./style.module.scss";

export const RepoList = ({ data, error }: any) => {
  const { items } = data;

  return (
    <div className={style.repoList}>
      {data ? (
        items?.map((item: any) => <RepoBox key={item.id} item={item} />)
      ) : (
        <p>{error?.message}</p>
      )}
    </div>
  );
};
