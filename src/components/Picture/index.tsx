import style from "./style.module.scss";
import { PlaceHolders } from "@/enums/PlaceHolders";
import cm from "@/utils/classesMerge";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function Picture({ src, alt, className = "", ...props }: Props) {
  return (
    <picture className={cm(style.picture, className)}>
      <img src={src || PlaceHolders.defaultImage} alt={alt} {...props} />
    </picture>
  );
}
