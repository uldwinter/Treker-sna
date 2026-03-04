import * as React from 'react';

export function Switch(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input type="checkbox" className="h-5 w-10 rounded-full accent-primary" {...props} />;
}
