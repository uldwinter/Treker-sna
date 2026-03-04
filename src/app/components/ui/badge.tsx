import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from './utils';

const badgeVariants = cva('inline-flex items-center rounded-md px-2 py-1 text-xs font-medium', {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      destructive: 'bg-destructive text-white',
      outline: 'border border-input text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface BadgeProps extends React.ComponentProps<'span'>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
