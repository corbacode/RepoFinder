import style from "./style.module.scss";

export const Loader = () => {
  return (
    <div className={style.loader}>
      <span className={style.loader__animation}></span>
      <span className={style.loader__text}>Loading</span>
    </div>
  );
};
