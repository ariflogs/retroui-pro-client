import type { ElementType, HTMLAttributes } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("font-head", {
  variants: {
    as: {
      p: "font-sans text-base",
      li: "font-sans text-base",
      a: "font-sans text-base hover:underline underline-offset-2 decoration-primary",
      h1: "text-5xl lg:text-[60px] font-semibold",
      h2: "text-4xl lg:text-5xl font-medium",
      h3: "text-3xl font-medium",
      h4: "text-2xl font-normal",
      h5: "text-xl font-normal",
      h6: "text-lg font-normal",
    },
  },
  defaultVariants: {
    as: "p",
  },
});

interface TextProps
  extends Omit<HTMLAttributes<HTMLElement>, "className">,
    VariantProps<typeof textVariants> {
  className?: string;
}

export const Text = (props: TextProps) => {
  const { className, as, ...otherProps } = props;
  const Tag: ElementType = as || "p";

  return (
    <Tag className={cn(textVariants({ as }), className)} {...otherProps} />
  );
};
