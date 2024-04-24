import { BaseLayout } from "@/layouts";

type EmptyViewProps = {
  children: React.ReactNode;
};

export default function EmptyView(props: EmptyViewProps) {
  return <BaseLayout>{props.children}</BaseLayout>;
}
