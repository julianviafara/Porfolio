import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        deco: "clip-chamfer bg-gold-metal bg-[position:0%_50%] font-deco font-semibold uppercase tracking-[0.28em] text-primary-foreground transition-[background-position,filter,transform] duration-700 hover:bg-[position:100%_50%] hover:brightness-110 active:translate-y-px",
        decoOutline:
          "border border-gold/60 bg-background/40 font-deco font-semibold uppercase tracking-[0.28em] text-gold-bright backdrop-blur-sm transition-[background-color,box-shadow,border-color,color] duration-500 hover:border-gold-bright hover:bg-gold/10 hover:shadow-gold-strong",
        decoGhost:
          "font-deco font-semibold uppercase tracking-[0.22em] text-gold transition-colors hover:bg-gold/10 hover:text-gold-bright",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        deco: "h-12 px-8 text-[0.7rem] sm:h-14 sm:px-10",
        decoSm: "h-10 px-5 text-[0.65rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
