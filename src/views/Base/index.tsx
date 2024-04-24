import HeaderView from "./Header";
import { BaseLayout } from "@/layouts";

type BaseViewProps = {
  children: React.ReactNode;
};

export default function BaseView({ children }: BaseViewProps) {
  return <BaseLayout header={HeaderView}>{children}</BaseLayout>;
}
