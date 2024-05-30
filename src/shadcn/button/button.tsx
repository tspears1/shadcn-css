import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import styles from './index.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'icon'
  size?: 'sm' | 'lg' | 'icon'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const { className } = props
    return (
      <Comp
        data-size={size}
        data-variant={variant}
        className={`${styles.Button} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button };
export type { ButtonProps };

