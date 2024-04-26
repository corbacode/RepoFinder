import cm from "@/utils/classesMerge";
import style from "./style.module.scss";

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function TextAnimate({
  title,
  subtitle,
  className = "",
}: Props) {
  return (
    <div className={cm(style.textAnimate, className)}>
      <svg>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          {title}
        </text>
      </svg>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
