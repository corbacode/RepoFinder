import style from "./style.module.scss";
import { createElement } from "@/utils/createElement";

// Card Component
//
export const Card = (props: any) => createElement(props, style.card);

// Card Header
//
export const CardHeader = (props: any) =>
  createElement(props, style.card__header);

// Card Title
//
export const CardTitle = (props: any) =>
  createElement(props, style.card__title, "h3");

// Card Description
//
export const CardDescription = (props: any) =>
  createElement(props, style.card__description);

// Card Content
//
export const CardContent = (props: any) =>
  createElement(props, style.card__content);

// Card Footer
//
export const CardFooter = (props: any) =>
  createElement(props, style.card__footer);
