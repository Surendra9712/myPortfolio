import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const avatarVariants = cva(
  'inline-flex items-center justify-center overflow-hidden align-middle',
  {
    variants: {
      variant: {
        default: 'bg-blackA1 rounded-full',
        circular: 'rounded-full',
        square: 'rounded-none'
      },
      size: {
        small: 'w-8 h-8',
        medium: 'w-12 h-12',
        large: 'w-16 h-16'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium'
    }
  }
)

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  src: string
  fallback?: string
}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, variant, size, src, fallback, ...props }, ref) => {
    return (
      <AvatarPrimitive.Root className={cn(avatarVariants({ variant, size, className }))} ref={ref} {...props}>
        <AvatarPrimitive.Image className="w-full h-full object-cover rounded-[inherit]" src={src}
                               alt="This is avarat" />
        <AvatarPrimitive.Fallback
          className="flex items-center justify-center w-full h-full bg-white text-[15px] font-medium text-violet11"
          delayMs={600}>
          {fallback}
        </AvatarPrimitive.Fallback>
      </AvatarPrimitive.Root>)
  }
)
Avatar.displayName = 'Avatar'

export { Avatar, avatarVariants }
