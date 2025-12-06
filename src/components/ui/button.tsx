import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "font-head transition-all outline-hidden rounded-md cursor-pointer flex justify-center items-center",
  {
    variants: {
      variant: {
        default:
          "shadow hover:shadow-xs bg-primary text-black border-2 border-black hover:bg-primary-hover transition-all hover:translate-y-1",
        outline:
          "shadow hover:shadow-xs bg-background text-black border-2 border-black transition-all hover:translate-y-1",
        link: "bg-transparent text-black hover:underline",
        secondary:
          "shadow hover:shadow-none bg-secondary shadow-primary text-secondary-foreground border-2 border-black transition hover:translate-y-1",
      },
      size: {
        sm: "px-4 py-1 text-sm",
        md: "px-6 py-2 text-base",
        lg: "px-8 py-3 text-lg",
        icon: "p-2",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      size = "md",
      className = "",
      variant = "default",
      ...props
    }: IButtonProps,
    forwardedRef
  ) => (
    <button
      ref={forwardedRef}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
