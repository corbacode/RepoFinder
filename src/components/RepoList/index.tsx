import { RepoBox } from "../RepoBox";

import style from "./style.module.scss";

export const RepoList = ({ data, error }: any) => {
  return (
    <div className={style.repoList}>
      {data ? (
        data?.map((item: any) => <RepoBox key={item.id} item={item} />)
      ) : (
        <p>{error?.message}</p>
      )}
    </div>
  );
};
