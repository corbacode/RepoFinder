import cm from "@/utils/classesMerge";
import style from "./style.module.scss";

type Props = {
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
};

const variants = {
  default: style.badge__default,
  primary: style.badge__primary,
  secondary: style.badge__secondary,
  outline: style.badge__outline,
};

export default function Badge({
  className,
  variant,
  children,
  ...rest
}: Props) {
  const cls = `${style.badge} ${variants[variant || "default"]}`;
  return (
    <div className={cm(cls, `${className}`)} {...rest}>
      {children}
    </div>
  );
}
