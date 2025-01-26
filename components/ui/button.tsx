import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md !text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      color: {
        default: "!text-primary-foreground",
        primary: "!text-primary-foreground",
        secondary: "!text-secondary-foreground",
        destructive: "!text-destructive-foreground",
        warning: "!text-warning-foreground",
        success: "!text-success-foreground",
        mode: "!text-foreground",
        muted: "!text-muted-foreground",
      },
      variant: {
        default: "!bg-primary text-primary-foreground hover:!bg-primary/85",
        solid: "!bg-primary text-primary-foreground hover:!bg-primary/85",
        outline: "border border-primary text-primary hover:!bg-primary/10",
        ghost: "text-primary hover:!bg-primary/10",
        soft: "!bg-primary/10 text-primary",
        link: "text-primary underline !h-auto !p-0 !text-foreground !hover:!text-primary",
      },
      size: {
        default: "h-10 px-2 py-2",
        xs: "h-7 rounded-md px-2 text-xs",
        sm: "h-9 rounded-md px-3 text-sm",
        lg: "h-11 rounded-md px-4",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      color: "default",
    },
    compoundVariants: [
      {
        color: "default",
        variant: "default",
        className: cn(
          "!bg-primary !text-primary-foreground hover:!bg-primary/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "primary",
        variant: "default",
        className: cn(
          "!bg-primary !text-primary-foreground hover:!bg-primary/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "secondary",
        variant: "default",
        className: cn(
          "!bg-secondary !text-secondary-foreground hover:!bg-secondary/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "destructive",
        variant: "default",
        className: cn(
          "!bg-destructive !text-destructive-foreground hover:!bg-destructive/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "warning",
        variant: "default",
        className: cn(
          "!bg-warning !text-warning-foreground hover:!bg-warning/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "success",
        variant: "default",
        className: cn(
          "!bg-success !text-success-foreground hover:!bg-success/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "mode",
        variant: "default",
        className: cn(
          "!bg-foreground !text-background hover:!bg-foreground/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "muted",
        variant: "default",
        className: cn(
          "!bg-muted !text-muted-foreground hover:!bg-muted/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "default",
        variant: "solid",
        className: cn(
          "!bg-primary !text-primary-foreground hover:!bg-primary/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "primary",
        variant: "solid",
        className: cn(
          "!bg-primary !text-primary-foreground hover:!bg-primary/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "secondary",
        variant: "solid",
        className: cn(
          "!bg-secondary !text-secondary-foreground hover:!bg-secondary/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "destructive",
        variant: "solid",
        className: cn(
          "!bg-destructive !text-destructive-foreground hover:!bg-destructive/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "warning",
        variant: "solid",
        className: cn(
          "!bg-warning !text-warning-foreground hover:!bg-warning/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "success",
        variant: "solid",
        className: cn(
          "!bg-success !text-success-foreground hover:!bg-success/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "mode",
        variant: "solid",
        className: cn(
          "!bg-foreground !text-background hover:!bg-foreground/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "muted",
        variant: "solid",
        className: cn(
          "!bg-muted !text-muted-foreground hover:!bg-muted/85",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "default",
        variant: "outline",
        className: cn(
          "border border-primary !text-primary hover:!bg-primary/10",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "primary",
        variant: "outline",
        className: cn(
          "border border-primary !text-primary hover:!bg-primary/10",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "secondary",
        variant: "outline",
        className: cn(
          "border border-secondary !text-secondary hover:!bg-secondary/10",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "destructive",
        variant: "outline",
        className: cn(
          "border border-destructive !text-destructive hover:!bg-destructive/10",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "warning",
        variant: "outline",
        className: cn(
          "border border-warning !text-warning hover:!bg-warning/10",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "success",
        variant: "outline",
        className: cn(
          "border border-success !text-success hover:!bg-success/10",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "mode",
        variant: "outline",
        className: cn(
          "border border-foreground !text-foreground hover:!bg-foreground/5",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "muted",
        variant: "outline",
        className: cn(
          "border border-muted !text-muted hover:!bg-muted/10",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "default",
        variant: "ghost",
        className: cn(
          "!text-primary hover:!bg-primary hover:!text-primary-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "primary",
        variant: "ghost",
        className: cn(
          "!text-primary hover:!bg-primary hover:!text-primary-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "secondary",
        variant: "ghost",
        className: cn(
          "!text-secondary hover:!bg-secondary hover:!text-secondary-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "destructive",
        variant: "ghost",
        className: cn(
          "!text-destructive hover:!bg-destructive hover:!text-destructive-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "warning",
        variant: "ghost",
        className: cn(
          "!text-warning hover:!bg-warning hover:!text-warning-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "success",
        variant: "ghost",
        className: cn(
          "!text-success hover:!bg-success hover:!text-success-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "mode",
        variant: "ghost",
        className: cn(
          "!text-foreground hover:!bg-foreground hover:!text-background",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "muted",
        variant: "ghost",
        className: cn(
          "!text-muted hover:!bg-muted hover:!text-muted-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "default",
        variant: "soft",
        className: cn(
          "!bg-primary/10 !text-primary hover:!bg-primary hover:!text-primary-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "primary",
        variant: "soft",
        className: cn(
          "!bg-primary/10 !text-primary hover:!bg-primary hover:!text-primary-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "secondary",
        variant: "soft",
        className: cn(
          "!bg-secondary/10 !text-secondary hover:!bg-secondary hover:!text-secondary-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "destructive",
        variant: "soft",
        className: cn(
          "!bg-destructive/10 !text-destructive hover:!bg-destructive hover:!text-destructive-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "warning",
        variant: "soft",
        className: cn(
          "!bg-warning/10 !text-warning hover:!bg-warning hover:!text-warning-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "success",
        variant: "soft",
        className: cn(
          "!bg-success/10 !text-success hover:!bg-success hover:!text-success-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "mode",
        variant: "soft",
        className: cn(
          "!bg-foreground/5 !text-foreground hover:!bg-foreground hover:!text-background",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "muted",
        variant: "soft",
        className: cn(
          "!bg-muted/10 !text-muted hover:!bg-muted hover:!text-muted-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "default",
        variant: "link",
        className: cn(
          "hover:!text-primary",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "primary",
        variant: "link",
        className: cn(
          "hover:!text-primary",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "secondary",
        variant: "link",
        className: cn(
          "hover:!text-secondary",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "destructive",
        variant: "link",
        className: cn(
          "hover:!text-destructive",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "warning",
        variant: "link",
        className: cn(
          "hover:!text-warning",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "success",
        variant: "link",
        className: cn(
          "hover:!text-success",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "mode",
        variant: "link",
        className: cn(
          "!text-foreground/60 hover:!text-foreground",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
      {
        color: "muted",
        variant: "link",
        className: cn(
          "hover:!text-muted",
          "disabled:pointer-events-none disabled:opacity-50"
        ),
      },
    ],
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "destructive"
    | "warning"
    | "success"
    | "mode"
    | "muted";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, color, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, color, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
