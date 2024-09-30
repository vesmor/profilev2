import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "tw-inline-flex tw-items-center tw-justify-center tw-whitespace-nowrap tw-rounded-md tw-text-sm tw-font-medium tw-transition-colors focus-visible:tw-outline-none focus-visible:tw-ring-1 focus-visible:tw-ring-zinc-950 disabled:tw-pointer-events-none disabled:tw-opacity-50 dark:focus-visible:tw-ring-zinc-300",
  {
    variants: {
      variant: {
        default:
          "tw-bg-zinc-900 tw-text-zinc-50 tw-shadow hover:tw-bg-zinc-900/90 dark:tw-bg-zinc-50 dark:tw-text-zinc-900 dark:hover:tw-bg-zinc-50/90",
        destructive:
          "tw-bg-red-500 tw-text-zinc-50 tw-shadow-sm hover:tw-bg-red-500/90 dark:tw-bg-red-900 dark:tw-text-zinc-50 dark:hover:tw-bg-red-900/90",
        outline:
          "tw-border tw-border-zinc-200 tw-bg-white tw-shadow-sm hover:tw-bg-zinc-100 hover:tw-text-zinc-900 dark:tw-border-zinc-800 dark:tw-bg-zinc-950 dark:hover:tw-bg-zinc-800 dark:hover:tw-text-zinc-50",
        secondary:
          "tw-bg-zinc-100 tw-text-zinc-900 tw-shadow-sm hover:tw-bg-zinc-100/80 dark:tw-bg-zinc-800 dark:tw-text-zinc-50 dark:hover:tw-bg-zinc-800/80",
        ghost: "hover:tw-bg-zinc-100 hover:tw-text-zinc-900 dark:hover:tw-bg-zinc-800 dark:hover:tw-text-zinc-50",
        link: "tw-text-zinc-900 tw-underline-offset-4 hover:tw-underline dark:tw-text-zinc-50",
      },
      size: {
        default: "tw-h-9 tw-px-4 tw-py-2",
        sm: "tw-h-8 tw-rounded-md tw-px-3 tw-text-xs",
        lg: "tw-h-10 tw-rounded-md tw-px-8",
        icon: "tw-h-9 tw-w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
