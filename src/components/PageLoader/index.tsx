import { Loader } from "../Loader";

type Props = {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
};

const PageLoader = ({ loading, children, className }: Props) => {
  return (
    <>{loading ? <Loader /> : <div className={className}>{children}</div>}</>
  );
};

export { PageLoader };
