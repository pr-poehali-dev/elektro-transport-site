import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowIntensity?: "low" | "medium" | "high"
  hoverEffect?: boolean
  disableGlow?: string
}

const glowStyles = {
  low: "shadow-[0_0_15px_rgba(96,165,250,0.12),inset_0_0_15px_rgba(96,165,250,0.05)] border-blue-400/20",
  medium: "shadow-[0_0_20px_rgba(96,165,250,0.2),inset_0_0_20px_rgba(96,165,250,0.08)] border-blue-400/30",
  high: "shadow-[0_0_25px_rgba(96,165,250,0.25),inset_0_0_25px_rgba(96,165,250,0.1)] border-blue-400/40"
}

const hoverGlowStyles = {
  low: "hover:shadow-[0_0_25px_rgba(96,165,250,0.25),inset_0_0_25px_rgba(96,165,250,0.1)] hover:border-blue-400/40",
  medium: "hover:shadow-[0_0_35px_rgba(96,165,250,0.35),inset_0_0_30px_rgba(96,165,250,0.15)] hover:border-blue-400/50",
  high: "hover:shadow-[0_0_40px_rgba(96,165,250,0.4),inset_0_0_35px_rgba(96,165,250,0.2)] hover:border-blue-400/60"
}

const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, glowIntensity = "medium", hoverEffect = true, disableGlow, children, ...props }, ref) => {
    const glowClasses = disableGlow 
      ? `${disableGlow}:shadow-none ${disableGlow}:border-white/10`
      : glowStyles[glowIntensity];
    
    const hoverClasses = disableGlow
      ? `${disableGlow}:hover:shadow-none ${disableGlow}:hover:border-white/10`
      : hoverEffect && hoverGlowStyles[glowIntensity];

    return (
      <div
        ref={ref}
        className={cn(
          "border bg-card text-card-foreground",
          glowClasses,
          hoverClasses,
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