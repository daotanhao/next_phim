import { forwardRef } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

import { Button, ButtonProps } from "@/lib/components/ui/button"
import { cn } from "@/lib/utils"

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean
}
export const ButtonLoading = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  ({ loading = false, className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        {...props}
        disabled={props.disabled ? props.disabled : loading}
        className={cn(className, "relative")}
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="mr-2 h-4 w-4 animate-spin" />
        ) : null}
        {children}
      </Button>
    )
  }
)

ButtonLoading.displayName = "ButtonLoading"
