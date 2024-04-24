import style from "./style.module.scss";

type BaseLayoutProps = {
  header?: React.FC;
  children: React.ReactNode;
};

export default function BaseLayout(props: BaseLayoutProps) {
  const { children, header: HeaderView = null } = props;

  return (
    <div className={style.appWrapper}>
      {HeaderView && (
        <header className={style.appHeader}>
          <HeaderView />
        </header>
      )}
      <main className={style.appMain}>{children}</main>
    </div>
  );
}
