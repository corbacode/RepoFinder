import { RepoBox } from "../RepoBox";

import style from "./style.module.scss";

const RepoList = ({ data, error }: any) => {
  const { total_count, incomplete_results, items } = data;

  console.log(total_count, incomplete_results);

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

export { RepoList };
