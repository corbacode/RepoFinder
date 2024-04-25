import style from "./style.module.scss";
import { createElement } from "@/utils/createElement";

export const Input = (props: any) =>
  createElement(props, style.inputbox, "input");
