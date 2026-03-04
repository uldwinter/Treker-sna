import * as React from 'react';
import { cn } from './utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return <textarea className={cn('flex min-h-[80px] w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm', className)} {...props} />;
}

export { Textarea };
