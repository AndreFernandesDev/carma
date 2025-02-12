import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-base font-normal leading-relaxed",
      h1: "text-3xl md:text-5xl font-bold leading-tight",
      h2: "text-xl md:text-2xl font-semibold leading-relaxed",
      h6: "text-md md:text-lg font-semibold leading-relaxed",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof textVariants> {}

function Text(props: TextProps) {
  const { children, variant, className } = props;

  return (
    <span className={cn(textVariants({ variant, className }))}>{children}</span>
  );
}

export default Text;
