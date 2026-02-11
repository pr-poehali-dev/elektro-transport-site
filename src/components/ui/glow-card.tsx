import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowIntensity?: "low" | "medium" | "high"
  hoverEffect?: boolean
}

const glowStyles = {
  low: "shadow-[0_0_15px_rgba(96,165,250,0.1),inset_0_0_15px_rgba(96,165,250,0.05)]",
  medium: "shadow-[0_0_20px_rgba(96,165,250,0.15),inset_0_0_20px_rgba(96,165,250,0.05)]",
  high: "shadow-[0_0_25px_rgba(96,165,250,0.2),inset_0_0_25px_rgba(96,165,250,0.08)]"
}

const hoverGlowStyles = {
  low: "hover:shadow-[0_0_25px_rgba(96,165,250,0.2),inset_0_0_25px_rgba(96,165,250,0.08)]",
  medium: "hover:shadow-[0_0_35px_rgba(96,165,250,0.3),inset_0_0_30px_rgba(96,165,250,0.1)]",
  high: "hover:shadow-[0_0_40px_rgba(96,165,250,0.35),inset_0_0_35px_rgba(96,165,250,0.12)]"
}

const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, glowIntensity = "medium", hoverEffect = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border bg-card text-card-foreground",
          glowStyles[glowIntensity],
          hoverEffect && hoverGlowStyles[glowIntensity],
          hoverEffect && "transition-all duration-500",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GlowCard.displayName = "GlowCard"

const GlowCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
GlowCardHeader.displayName = "GlowCardHeader"

const GlowCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
GlowCardTitle.displayName = "GlowCardTitle"

const GlowCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
GlowCardDescription.displayName = "GlowCardDescription"

const GlowCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
GlowCardContent.displayName = "GlowCardContent"

const GlowCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
GlowCardFooter.displayName = "GlowCardFooter"

export { GlowCard, GlowCardHeader, GlowCardFooter, GlowCardTitle, GlowCardDescription, GlowCardContent }
