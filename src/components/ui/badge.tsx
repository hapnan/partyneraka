import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden border px-2 py-0.5 text-[10px] leading-3 font-bold tracking-[0.15em] whitespace-nowrap uppercase transition-colors [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        gold: "border-transparent bg-gold text-gold-foreground",
        outline: "border-border bg-card/90 text-muted-foreground",
        "outline-gold": "border-border bg-card/90 text-gold",
        "outline-primary": "border-border bg-card/90 text-primary",
        tag: "border-border bg-muted text-blush tracking-normal",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(
      {
        "data-slot": "badge",
        className: cn(badgeVariants({ variant }), className),
      } as React.ComponentProps<"span">,
      props
    ),
  })
}

export { Badge, badgeVariants }
