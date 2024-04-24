import { forwardRef } from "react";
import cm from "@/utils/classesMerge";
import style from "./style.module.scss";

// Define the TypeScript type object
type CardProps = React.HTMLAttributes<HTMLDivElement>;

// Card Component
//
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", ...props }, ref) => {
    return <div ref={ref} className={cm(style.card, className)} {...props} />;
  }
);
Card.displayName = "Card";

// Card Header
//
const CardHeader = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={cm(style.card__header, className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

// Card Title
//
const CardTitle = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", ...props }, ref) => (
    <h3 ref={ref} className={cm(style.card__title, className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

// Card Description
//
const CardDescription = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={cm(style.card__description, className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

// Card Content
//
const CardContent = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={cm(style.card__content, className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

// Card Footer
//
const CardFooter = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={cm(style.card__footer, className)} {...props} />
  )
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
